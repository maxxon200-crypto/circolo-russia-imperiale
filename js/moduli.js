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
     ▼▼▼  CHIAVE DI ACCESSO WEB3FORMS  ▼▼▼

     Vale per entrambi i moduli del sito: e l'unico punto da toccare.

     ATTENZIONE, la casella di arrivo NON si decide qui.
     Web3Forms consegna sempre all'indirizzo associato a questa chiave nel
     suo pannello. Cambiare la chiave nel codice non cambia il destinatario:
     per farlo si va su https://web3forms.com, si entra nella dashboard e si
     imposta l'indirizzo di destinazione del modulo (oppure si genera una
     chiave nuova partendo dall'indirizzo giusto e la si incolla qui sotto).

     Questa chiave e PUBBLICA per progettazione: Web3Forms la dichiara tale
     e va usata nel codice della pagina. Non e una password e non apre
     nulla: identifica soltanto il modulo a cui consegnare.
     =================================================================== */
  const WEB3FORMS_KEY = "1424a093-6ce9-4e09-b553-b5ac72fa868e";

  /* =================================================================== */

  var ENDPOINT = "https://api.web3forms.com/submit";
  var EMAIL_CIRCOLO = "info@amicidellarussia.it";

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
          ["Titoli accademici, onorifici, nobiliari e/o gradi militari", v("titoli")],
          ["Data di nascita", v("data_nascita")],
          ["Luogo di nascita (città, Provincia o Stato estero)", v("luogo_nascita")],
          ["Residenza (città, Provincia o Stato estero)", v("residenza")],
          ["Indirizzo postale", v("indirizzo")],
          ["Cittadinanza", v("cittadinanza")],
          ["Titolo di studio", v("titolo_studio")],
          ["Professione", v("professione")],
          ["Presentazione", v("messaggio")]
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
    box.id = campo.id + "-errore";
    box.textContent = messaggio;
    var riferimenti = (campo.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean);
    if (riferimenti.indexOf(box.id) < 0) { riferimenti.push(box.id); }
    campo.setAttribute("aria-describedby", riferimenti.join(" "));
  }

  function pulisciErrore(campo) {
    campo.classList.remove("is-invalid");
    campo.removeAttribute("aria-invalid");
    var contenitore = campo.closest(".campo") || campo.parentNode;
    var box = contenitore.querySelector(".campo-errore");
    if (box) {
      var riferimenti = (campo.getAttribute("aria-describedby") || "").split(/\s+/).filter(function (id) { return id && id !== box.id; });
      if (riferimenti.length) { campo.setAttribute("aria-describedby", riferimenti.join(" ")); }
      else { campo.removeAttribute("aria-describedby"); }
      box.remove();
    }
  }

  function valida(form) {
    var ok = true;
    var primoErrore = null;
    var obbligatori = form.querySelectorAll("input, textarea, select");

    for (var i = 0; i < obbligatori.length; i++) {
      var campo = obbligatori[i];
      if (campo.name === "botcheck" || campo.type === "hidden") { continue; }
      pulisciErrore(campo);

      if (campo.type === "checkbox") {
        if (campo.required && !campo.checked) {
          ok = false;
          mostraErroreCampo(campo, t("err-privacy", "Per proseguire e necessario accettare la Privacy Policy."));
          if (!primoErrore) { primoErrore = campo; }
        }
        continue;
      }

      var valore = (campo.value || "").trim();
      if (campo.required && !valore) {
        ok = false;
        mostraErroreCampo(campo, t("err-obbligo", "Questo campo e obbligatorio."));
        if (!primoErrore) { primoErrore = campo; }
      } else if (valore && campo.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valore)) {
        ok = false;
        mostraErroreCampo(campo, t("err-email", "Inserisci un indirizzo email valido."));
        if (!primoErrore) { primoErrore = campo; }
      } else if (form.id === "form-iscrizione" && campo.type === "tel" && valore &&
          (!/^\+?[\d\s().\/-]+$/.test(valore) || valore.replace(/\D/g, "").length < 6 || valore.replace(/\D/g, "").length > 20)) {
        ok = false;
        mostraErroreCampo(campo, t("err-telefono", "Inserisci un numero di telefono valido, con prefisso se necessario."));
        if (!primoErrore) { primoErrore = campo; }
      } else if (campo.type === "date" && (campo.validity.badInput || (valore && !campo.validity.valid))) {
        ok = false;
        mostraErroreCampo(campo, t("err-nascita", "Inserisci una data di nascita valida, non futura."));
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
    var invioInCorso = false;
    var nascita = form.elements.data_nascita;
    if (nascita) {
      var oggi = new Date();
      nascita.max = oggi.getFullYear() + "-" + String(oggi.getMonth() + 1).padStart(2, "0") + "-" + String(oggi.getDate()).padStart(2, "0");
    }

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
      if (invioInCorso) { return; }

      if (boxErrore) { boxErrore.hidden = true; }

      /* Campo esca compilato: e un bot, si esce senza inviare. */
      if (form.elements.botcheck && form.elements.botcheck.checked) { return; }

      if (!valida(form)) { return; }

      if (WEB3FORMS_KEY.charAt(0) === "[") {
        mostraErroreGenerale(cfg.errore);
        return;
      }

      var etichettaOriginale = bottone ? bottone.innerHTML : "";
      invioInCorso = true;
      if (bottone) {
        bottone.disabled = true;
        bottone.innerHTML = t("te-invio", "Invio in corso...");
      }

      function ripristina() {
        invioInCorso = false;
        if (bottone) {
          bottone.disabled = false;
          bottone.innerHTML = t(bottone.getAttribute("data-i18n"), etichettaOriginale);
        }
      }

      fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload(form, cfg))
      })
        .then(function (r) {
          return r.json().catch(function () { return {}; }).then(function (json) { return r.ok ? json : {}; });
        })
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
    // Abilita l'invio solo dopo aver collegato validazione e gestore POST.
    if (bottone) { bottone.disabled = false; }
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
