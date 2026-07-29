/**
 * Funzione serverless Vercel: richiesta di adesione dalla pagina Tesseramento.
 *
 * Riceve i dati del modulo e invia DUE email tramite Resend:
 *   A) al richiedente, di conferma, con riepilogo, quote e il modulo cartaceo in allegato;
 *   B) al Circolo, di notifica, con tutti i dati compilati.
 *
 * La chiave API non sta MAI nel codice: si legge dalla variabile d'ambiente
 * RESEND_API_KEY impostata nel pannello di Vercel.
 */

const fs = require("fs");
const path = require("path");
const { tesseraHTML } = require("./_tessera.js");

/* =====================================================================
   INTERRUTTORE TESSERA
   ---------------------------------------------------------------------
   false = l'email di conferma NON contiene la tessera (impostazione
           attuale e raccomandata). La tessera viene inviata a mano dal
           Circolo DOPO l'approvazione della domanda e il versamento
           della quota associativa: non deve partire prima, altrimenti
           risulterebbe socio anche chi non e stato approvato e non ha
           ancora pagato.
   true  = allega alla email di conferma anche la tessera digitale.
   ===================================================================== */
const INVIA_TESSERA_AUTOMATICAMENTE = false;

/* Destinatario delle notifiche interne. */
const EMAIL_CIRCOLO = "russia.imperiale@yandex.com";

/* Mittente. Finche il dominio non e verificato su Resend si usa il loro
   dominio di prova; dopo la verifica basta cambiare questa riga. */
const MITTENTE = process.env.RESEND_FROM || "Circolo Terza Roma <onboarding@resend.dev>";

/* ---------------------------------------------------------------------
   Testi delle email nelle tre lingue
   --------------------------------------------------------------------- */
const T = {
  it: {
    oggetto: "Abbiamo ricevuto la tua richiesta di adesione",
    saluto: (n) => `Gentile ${n},`,
    grazie: "grazie per averci scritto. Abbiamo ricevuto la tua richiesta di adesione al Circolo Internazionale Amici della Russia Imperiale - Terza Roma.",
    riepilogoT: "Riepilogo dei dati inviati",
    quoteT: "Quote associative",
    quote: ["Socio sostenitore: 50 euro", "Socio ordinario: 20 euro", "Socio junior (fino a 21 anni): 10 euro"],
    comeT: "Come completare l'adesione",
    come: "Ti ricontatteremo per completare l'iscrizione e il versamento della quota. In allegato trovi il modulo cartaceo da stampare, compilare e firmare.",
    campi: { nome: "Nome", cognome: "Cognome", email: "Email", telefono: "Telefono", professione: "Professione", messaggio: "Messaggio" },
    firma: "Circolo Internazionale Amici della Russia Imperiale - Terza Roma"
  },
  ru: {
    oggetto: "Мы получили вашу заявку на вступление",
    saluto: (n) => `Уважаемый(ая) ${n},`,
    grazie: "благодарим вас за обращение. Мы получили вашу заявку на вступление в Международную ассоциацию «Друзья Российской Империи — Третий Рим».",
    riepilogoT: "Сводка отправленных данных",
    quoteT: "Годовые взносы",
    quote: ["Участник-благотворитель: 50 евро", "Действительный участник: 20 евро", "Юниор (до 21 года): 10 евро"],
    comeT: "Как завершить вступление",
    come: "Мы свяжемся с вами, чтобы завершить оформление и оплату взноса. Во вложении вы найдёте бланк заявления для распечатки, заполнения и подписи.",
    campi: { nome: "Имя", cognome: "Фамилия", email: "Электронная почта", telefono: "Телефон", professione: "Профессия", messaggio: "Сообщение" },
    firma: "Международная ассоциация «Друзья Российской Империи — Третий Рим»"
  },
  en: {
    oggetto: "We have received your membership request",
    saluto: (n) => `Dear ${n},`,
    grazie: "thank you for writing to us. We have received your membership request for the International Circle of Friends of Imperial Russia - Third Rome.",
    riepilogoT: "Summary of the details you sent",
    quoteT: "Annual subscriptions",
    quote: ["Supporting member: 50 euro", "Ordinary member: 20 euro", "Junior member (up to 21 years): 10 euro"],
    comeT: "How to complete your membership",
    come: "We shall contact you to complete your enrolment and the payment of the subscription. Attached you will find the printed form to print, complete and sign.",
    campi: { nome: "First name", cognome: "Surname", email: "Email", telefono: "Phone", professione: "Profession", messaggio: "Message" },
    firma: "International Circle of Friends of Imperial Russia - Third Rome"
  }
};

/* Evita l'iniezione di HTML dai dati inseriti dall'utente. */
function esc(v) {
  return String(v == null ? "" : v)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

/* Email di conferma al richiedente: HTML sobrio, coerente col sito. */
function emailConferma(d, L) {
  const riga = (et, val) => val
    ? `<tr>
         <td style="padding:6px 16px 6px 0;color:#6E6E6E;font-size:13px;white-space:nowrap;vertical-align:top">${esc(et)}</td>
         <td style="padding:6px 0;color:#1A1A1A;font-size:14px">${esc(val)}</td>
       </tr>`
    : "";
  return `<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:#F6F6F4">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F6F6F4">
<tr><td align="center" style="padding:32px 16px">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#FFFFFF;border:1px solid #DEDEDA">
    <tr><td style="padding:32px 32px 0">
      <div style="font:600 11px/1.4 Arial,Helvetica,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#B08D2E">${esc(L.firma)}</div>
      <div style="height:1px;background:#B08D2E;opacity:.45;margin:18px 0 24px"></div>
    </td></tr>
    <tr><td style="padding:0 32px">
      <p style="margin:0 0 14px;font:400 15px/1.7 Arial,Helvetica,sans-serif;color:#1A1A1A">${esc(L.saluto(d.nome || ""))}</p>
      <p style="margin:0 0 24px;font:400 15px/1.7 Arial,Helvetica,sans-serif;color:#2B2B2B">${esc(L.grazie)}</p>

      <p style="margin:0 0 8px;font:600 11px/1.4 Arial,Helvetica,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#B08D2E">${esc(L.riepilogoT)}</p>
      <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-top:1px solid #DEDEDA;margin-bottom:24px">
        ${riga(L.campi.nome, d.nome)}
        ${riga(L.campi.cognome, d.cognome)}
        ${riga(L.campi.email, d.email)}
        ${riga(L.campi.telefono, d.telefono)}
        ${riga(L.campi.professione, d.professione)}
        ${riga(L.campi.messaggio, d.messaggio)}
      </table>

      <p style="margin:0 0 8px;font:600 11px/1.4 Arial,Helvetica,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#B08D2E">${esc(L.quoteT)}</p>
      <ul style="margin:0 0 24px;padding-left:18px;font:400 14px/1.9 Arial,Helvetica,sans-serif;color:#2B2B2B">
        ${L.quote.map((q) => `<li>${esc(q)}</li>`).join("")}
      </ul>

      <p style="margin:0 0 8px;font:600 11px/1.4 Arial,Helvetica,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#B08D2E">${esc(L.comeT)}</p>
      <p style="margin:0 0 28px;font:400 15px/1.7 Arial,Helvetica,sans-serif;color:#2B2B2B">${esc(L.come)}</p>
    </td></tr>
    <tr><td style="padding:0 32px 32px">
      <div style="height:1px;background:#DEDEDA;margin-bottom:16px"></div>
      <p style="margin:0;font:400 13px/1.7 Arial,Helvetica,sans-serif;color:#6E6E6E">${esc(L.firma)}<br>
      <a href="mailto:${EMAIL_CIRCOLO}" style="color:#0B1F3A">${EMAIL_CIRCOLO}</a></p>
    </td></tr>
  </table>
</td></tr></table>
</body></html>`;
}

/* Email di notifica al Circolo: tutti i dati, in chiaro e ordinati. */
function emailNotifica(d) {
  const riga = (et, val) => `<tr>
      <td style="padding:6px 16px 6px 0;color:#6E6E6E;font-size:13px;white-space:nowrap;vertical-align:top">${esc(et)}</td>
      <td style="padding:6px 0;color:#1A1A1A;font-size:14px">${esc(val || "-")}</td>
    </tr>`;
  return `<!DOCTYPE html>
<html><body style="margin:0;padding:24px;background:#F6F6F4;font-family:Arial,Helvetica,sans-serif">
  <h2 style="margin:0 0 4px;font-size:18px;color:#0B1F3A">Nuova richiesta di adesione</h2>
  <p style="margin:0 0 20px;font-size:13px;color:#6E6E6E">Ricevuta dal modulo della pagina Tesseramento.</p>
  <table role="presentation" cellpadding="0" cellspacing="0" style="border-top:1px solid #DEDEDA">
    ${riga("Nome", d.nome)}
    ${riga("Cognome", d.cognome)}
    ${riga("Email", d.email)}
    ${riga("Telefono", d.telefono)}
    ${riga("Professione", d.professione)}
    ${riga("Messaggio", d.messaggio)}
    ${riga("Lingua del modulo", d.lingua)}
    ${riga("Consenso privacy", d.privacy ? "si" : "no")}
    ${riga("Data e ora", new Date().toISOString())}
  </table>
</body></html>`;
}

/* Invio tramite l'API HTTP di Resend (nessuna dipendenza da installare). */
async function inviaEmail(apiKey, payload) {
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!r.ok) {
    const testo = await r.text();
    throw new Error(`Resend ${r.status}: ${testo}`);
  }
  return r.json();
}

/* Legge il modulo cartaceo dal repo e lo codifica per l'allegato. */
function allegatoModulo() {
  const percorsi = [
    path.join(process.cwd(), "assets/doc/modulo-iscrizione-2026.pdf"),
    path.join(process.cwd(), "public/assets/doc/modulo-iscrizione-2026.pdf"),
    path.join(__dirname, "../assets/doc/modulo-iscrizione-2026.pdf")
  ];
  for (const p of percorsi) {
    try {
      if (fs.existsSync(p)) {
        return { filename: "modulo-iscrizione-2026.pdf", content: fs.readFileSync(p).toString("base64") };
      }
    } catch (e) { /* prova il percorso successivo */ }
  }
  return null; // il PDF resta comunque scaricabile dal sito
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, errore: "Metodo non consentito" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY non impostata nelle variabili d'ambiente di Vercel");
    return res.status(500).json({ ok: false, errore: "Servizio email non configurato" });
  }

  /* Il corpo puo arrivare gia come oggetto oppure come stringa JSON. */
  let d = req.body;
  if (typeof d === "string") { try { d = JSON.parse(d); } catch (e) { d = {}; } }
  d = d || {};

  /* Validazione minima anche lato server. */
  const email = String(d.email || "").trim();
  const nome = String(d.nome || "").trim();
  const cognome = String(d.cognome || "").trim();
  if (!nome || !cognome || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return res.status(400).json({ ok: false, errore: "Dati incompleti o email non valida" });
  }
  if (!d.privacy) {
    return res.status(400).json({ ok: false, errore: "Consenso privacy mancante" });
  }

  const lingua = T[d.lingua] ? d.lingua : "it";
  const L = T[lingua];
  const dati = {
    nome, cognome, email,
    telefono: String(d.telefono || "").trim(),
    professione: String(d.professione || "").trim(),
    messaggio: String(d.messaggio || "").trim(),
    privacy: !!d.privacy,
    lingua
  };

  try {
    /* --- Email A: conferma al richiedente --- */
    const allegati = [];
    const modulo = allegatoModulo();
    if (modulo) allegati.push(modulo);

    if (INVIA_TESSERA_AUTOMATICAMENTE) {
      /* Attivo solo se l'interruttore in cima e true: la tessera non deve
         partire prima dell'approvazione e del versamento della quota. */
      allegati.push({
        filename: `tessera-${cognome.toLowerCase().replace(/\s+/g, "-")}-${new Date().getFullYear()}.html`,
        content: Buffer.from(tesseraHTML({ nome, cognome, tipo: d.tipo, lingua })).toString("base64")
      });
    }

    await inviaEmail(apiKey, {
      from: MITTENTE,
      to: [email],
      reply_to: EMAIL_CIRCOLO,
      subject: L.oggetto,
      html: emailConferma(dati, L),
      attachments: allegati.length ? allegati : undefined
    });

    /* --- Email B: notifica al Circolo --- */
    await inviaEmail(apiKey, {
      from: MITTENTE,
      to: [EMAIL_CIRCOLO],
      reply_to: email,
      subject: `Nuova richiesta di adesione - ${nome} ${cognome}`,
      html: emailNotifica(dati)
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Invio email non riuscito:", err && err.message);
    return res.status(502).json({ ok: false, errore: "Invio non riuscito" });
  }
};
