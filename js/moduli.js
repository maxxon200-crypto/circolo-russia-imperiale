/* =====================================================================
   MODULI DEL SITO (pagina Contatti e pagina Tesseramento)

   L'invio avviene via JavaScript verso Web3Forms: nessun backend e
   nessuna funzione serverless, quindi funziona identico su Vercel e su
   GitHub Pages. L'utente resta sempre sulla pagina e non vede mai la
   risposta tecnica del server.

   I testi dei messaggi arrivano dal dizionario di js/i18n.js tramite
   window.i18nText, percio sono automaticamente nelle tre lingue.
   ===================================================================== */
(function () {
  "use strict";

  /* ===================================================================
     ▼▼▼  CHIAVE DI ACCESSO WEB3FORMS: UNICO VALORE DA INSERIRE  ▼▼▼

     Come ottenerla:
       1. vai su https://web3forms.com
       2. inserisci l'indirizzo russia.imperiale@yandex.com
       3. riceverai per email una "Access Key" (un codice tipo
          1a2b3c4d-5e6f-7890-abcd-ef1234567890)
       4. incollala qui sotto al posto di [INSERIRE LA CHIAVE QUI],
          lasciando le virgolette.

     Esempio a chiave inserita:
       const WEB3FORMS_KEY = "1a2b3c4d-5e6f-7890-abcd-ef1234567890";

     Non serve nient'altro: la chiave Web3Forms e pubblica per
     progettazione (sta nel codice della pagina) e serve solo a indicare
     a quale casella consegnare il messaggio.
     =================================================================== */
  const WEB3FORMS_KEY = "[INSERIRE LA CHIAVE QUI]";

  /* =================================================================== */

  var ENDPOINT = "https://api.web3forms.com/submit";
  var EMAIL_CIRCOLO = "russia.imperiale@yandex.com";

  /* Nome della lingua attiva, per indicarla nel corpo della email. */
  var NOMI_LINGUA = { it: "Italiano", ru: "Russo", en: "Inglese" };

  /* Le etichette del corpo della email restano in italiano: la casella
     che riceve e quella del Circolo, cosi l'archivio resta uniforme.
     La lingua usata dal visitatore e comunque riportata in fondo. */
  var NON_INDICATO = "non indicato";

  /* -------------------------------------------------------------------
     Configurazione dei due moduli.
     - grazie:  pagina di ringraziamento a invio riuscito
     - errore:  chiave i18n del messaggio di errore
     - nome:    nome del compilatore (per oggetto, mittente e reply-to)
     - oggetto: oggetto della email
     - corpo:   coppie etichetta/valore, nell'ordine di lettura
     ------------------------------------------------------------------- */
  var MODULI = {
    "form-contatti": {
      grazie: "grazie-messaggio.html",
      errore: "err-invio-msg",
      nome: function (v) { return v("nome"); },
      oggetto: function (v) { return "Nuovo messaggio dal sito - " + v("nome"); },
      corpo: function (v) {
        return [
          ["Nome", v("nome")],
          ["Email", v("email")],
          ["Telefono", v("telefono")],
          ["Messaggio", v("messaggio")]
        ];
      }
    },
    "form-iscrizione": {
      grazie: "grazie.html",
      errore: "err-invio",
      nome: function (v) { return (v("nome") + " " + v("cognome")).trim(); },
      oggetto: function (v) { return "Nuova richiesta di adesione - " + (v("nome") + " " + v("cognome")).trim(); },
      corpo: function (v) {
        return [
          ["Nome", v("nome")],
          ["Cognome", v("cognome")],
          ["Email", v("email")],
          ["Telefono", v("telefono")],
          ["Professione", v("professione")],
          ["Messaggio", v("messaggio")]
        ];
      }
    }
  };

  /* ===================================================================
     Utilita
     =================================================================== */

  /* Testo tradotto nella lingua attiva, con ripiego sull'italiano. */
  function t(chiave, ripiego) {
    if (typeof window.i18nText === "function") {
      var v = window.i18nText(chiave);
      if (v && v.indexOf("[English version") !== 0) { return v; }
    }
    return ripiego;
  }

  function lingua() {
    var l = document.documentElement.lang || "it";
    return NOMI_LINGUA[l] ? l : "it";
  }

  /* Lettore dei campi del modulo: valore ripulito, "" se assente. */
  function lettore(form) {
    return function (nome) {
      var campo = form.elements[nome];
      if (!campo) { return ""; }
      if (campo.type === "checkbox") { return campo.checked ? "si" : ""; }
      return (campo.value || "").trim();
    };
  }

  /* ===================================================================
     Validazione
     =================================================================== */

  function mostraErroreCampo(campo, messaggio) {
    campo.classList.add("is-invalid");
    campo.setAttribute("aria-invalid", "true");
    var contenitore = campo.closest(".campo") || campo.parentNode;
    var box = contenitore.querySelector(".campo-errore");
    if (!box) {
      box = document.createElement("span");
      box.className = "campo-errore";
      contenitore.appendChild(box);
    }
    box.innerHTML = messaggio;
  }

  function pulisciErrore(campo) {
    campo.classList.remove("is-invalid");
    campo.removeAttribute("aria-invalid");
    var contenitore = campo.closest(".campo") || campo.parentNode;
    var box = contenitore.querySelector(".campo-errore");
    if (box) { box.remove(); }
  }

  function valida(form) {
    var ok = true;
    var primoErrore = null;
    var obbligatori = form.querySelectorAll("[required]");

    for (var i = 0; i < obbligatori.length; i++) {
      var campo = obbligatori[i];
      pulisciErrore(campo);

      if (campo.type === "checkbox") {
        if (!campo.checked) {
          ok = false;
          mostraErroreCampo(campo, t("err-privacy", "Per proseguire e necessario accettare la Privacy Policy."));
          if (!primoErrore) { primoErrore = campo; }
        }
        continue;
      }

      var valore = (campo.value || "").trim();
      if (!valore) {
        ok = false;
        mostraErroreCampo(campo, t("err-obbligo", "Questo campo e obbligatorio."));
        if (!primoErrore) { primoErrore = campo; }
      } else if (campo.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valore)) {
        ok = false;
        mostraErroreCampo(campo, t("err-email", "Inserisci un indirizzo email valido."));
        if (!primoErrore) { primoErrore = campo; }
      }
    }

    if (primoErrore) { primoErrore.focus(); }
    return ok;
  }

  /* ===================================================================
     Costruzione del messaggio per Web3Forms
     =================================================================== */

  function payload(form, cfg) {
    var v = lettore(form);
    var nome = cfg.nome(v);
    var email = v("email");

    var dati = {
      access_key: WEB3FORMS_KEY,
      subject: cfg.oggetto(v),

      /* Il mittente tecnico resta quello di Web3Forms: far partire la
         email dall'indirizzo della persona la farebbe scartare come
         falsificazione. Qui si imposta solo il nome visibile e il
         "Rispondi-a", cosi il tasto Rispondi scrive alla persona. */
      from_name: nome + " tramite il sito",
      replyto: email,

      /* Antispam gratuito di Web3Forms (campo esca nascosto). */
      botcheck: form.elements.botcheck ? form.elements.botcheck.checked : false
    };

    /* Corpo della email: campi compilati, in ordine di lettura. */
    var righe = cfg.corpo(v);
    for (var i = 0; i < righe.length; i++) {
      dati[righe[i][0]] = righe[i][1] || NON_INDICATO;
    }

    dati["Lingua del sito"] = NOMI_LINGUA[lingua()];
    if (form.elements.privacy) {
      dati["Consenso privacy"] = form.elements.privacy.checked
        ? "accettato il " + new Date().toLocaleString("it-IT")
        : "non accettato";
    }

    return dati;
  }

  /* ===================================================================
     Invio
     =================================================================== */

  function collega(form) {
    var cfg = MODULI[form.id];
    if (!cfg) { return; }

    var bottone = form.querySelector('button[type="submit"]');
    var boxErrore = form.querySelector(".form-errore");

    function mostraErroreGenerale(chiave) {
      if (!boxErrore) { return; }
      boxErrore.innerHTML = t(chiave,
        'Non siamo riusciti a inviare il messaggio. Riprova piu tardi oppure scrivici a <a href="mailto:' +
        EMAIL_CIRCOLO + '">' + EMAIL_CIRCOLO + "</a>.");
      boxErrore.hidden = false;
      boxErrore.focus();
    }

    /* L'errore sparisce appena l'utente corregge il campo. */
    form.addEventListener("input", function (e) {
      if (e.target.classList && e.target.classList.contains("is-invalid")) {
        pulisciErrore(e.target);
      }
    });
    form.addEventListener("change", function (e) {
      if (e.target.type === "checkbox" && e.target.name !== "botcheck") {
        pulisciErrore(e.target);
      }
    });

    form.addEventListener("submit", function (e) {
      /* Sempre per primo: impedisce al browser di navigare verso la
         risposta del server, che e la causa della pagina con codice. */
      e.preventDefault();

      if (boxErrore) { boxErrore.hidden = true; }

      /* Campo esca compilato: e un bot, si esce senza inviare. */
      if (form.elements.botcheck && form.elements.botcheck.checked) { return; }

      if (!valida(form)) { return; }

      if (WEB3FORMS_KEY.charAt(0) === "[") {
        mostraErroreGenerale(cfg.errore);
        return;
      }

      var etichettaOriginale = bottone ? bottone.innerHTML : "";
      if (bottone) {
        bottone.disabled = true;
        bottone.innerHTML = t("te-invio", "Invio in corso...");
      }

      function ripristina() {
        if (bottone) {
          bottone.disabled = false;
          bottone.innerHTML = etichettaOriginale;
        }
      }

      fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload(form, cfg))
      })
        .then(function (r) { return r.json().catch(function () { return {}; }); })
        .then(function (risposta) {
          if (risposta && risposta.success) {
            window.location.href = cfg.grazie;
          } else {
            ripristina();
            mostraErroreGenerale(cfg.errore);
          }
        })
        .catch(function () {
          ripristina();
          mostraErroreGenerale(cfg.errore);
        });
    });
  }

  function init() {
    for (var id in MODULI) {
      if (!Object.prototype.hasOwnProperty.call(MODULI, id)) { continue; }
      var form = document.getElementById(id);
      if (form) { collega(form); }
    }
  }

  if (document.readyState !== "loading") { init(); }
  else { document.addEventListener("DOMContentLoaded", init); }
})();
