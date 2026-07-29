/* =====================================================================
   Modulo di adesione (pagina Tesseramento).
   Validazione lato client nelle tre lingue, invio a /api/iscrizione e
   reindirizzamento alla pagina di ringraziamento.
   I testi arrivano dal dizionario di js/i18n.js tramite window.i18nText.
   ===================================================================== */
(function () {
  "use strict";

  var form = document.getElementById("form-iscrizione");
  if (!form) { return; }

  var bottone = form.querySelector('button[type="submit"]');
  var boxErrore = form.querySelector(".form-errore");

  /* Testo tradotto nella lingua attiva, con ripiego sull'italiano. */
  function t(chiave, ripiego) {
    if (typeof window.i18nText === "function") {
      var v = window.i18nText(chiave);
      if (v) { return v; }
    }
    return ripiego;
  }

  function mostraErroreCampo(campo, messaggio) {
    campo.classList.add("is-invalid");
    campo.setAttribute("aria-invalid", "true");
    var box = campo.parentNode.querySelector(".campo-errore");
    if (!box) {
      box = document.createElement("span");
      box.className = "campo-errore";
      campo.parentNode.appendChild(box);
    }
    box.innerHTML = messaggio;
  }

  function pulisciErrore(campo) {
    campo.classList.remove("is-invalid");
    campo.removeAttribute("aria-invalid");
    var box = campo.parentNode.querySelector(".campo-errore");
    if (box) { box.remove(); }
  }

  function valida() {
    var ok = true;
    var primoErrore = null;

    form.querySelectorAll("[required]").forEach(function (campo) {
      pulisciErrore(campo);

      if (campo.type === "checkbox") {
        if (!campo.checked) {
          ok = false;
          mostraErroreCampo(campo, t("err-privacy", "Per proseguire e necessario accettare la Privacy Policy."));
          if (!primoErrore) { primoErrore = campo; }
        }
        return;
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
    });

    if (primoErrore) { primoErrore.focus(); }
    return ok;
  }

  /* Ripulisce l'errore appena l'utente corregge il campo. */
  form.addEventListener("input", function (e) {
    if (e.target.classList && e.target.classList.contains("is-invalid")) {
      pulisciErrore(e.target);
    }
  });
  form.addEventListener("change", function (e) {
    if (e.target.type === "checkbox") { pulisciErrore(e.target); }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (boxErrore) { boxErrore.hidden = true; }
    if (!valida()) { return; }

    var etichettaOriginale = bottone ? bottone.innerHTML : "";
    if (bottone) {
      bottone.disabled = true;
      bottone.innerHTML = t("te-invio", "Invio in corso...");
    }

    var dati = {
      nome: form.nome.value.trim(),
      cognome: form.cognome.value.trim(),
      email: form.email.value.trim(),
      telefono: form.telefono ? form.telefono.value.trim() : "",
      professione: form.professione ? form.professione.value.trim() : "",
      messaggio: form.messaggio ? form.messaggio.value.trim() : "",
      privacy: form.privacy ? form.privacy.checked : false,
      lingua: document.documentElement.lang || "it"
    };

    fetch("/api/iscrizione", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dati)
    })
      .then(function (r) {
        if (!r.ok) { throw new Error("HTTP " + r.status); }
        window.location.href = "grazie.html";
      })
      .catch(function () {
        if (bottone) {
          bottone.disabled = false;
          bottone.innerHTML = etichettaOriginale;
        }
        if (boxErrore) {
          boxErrore.innerHTML = t("err-invio",
            'Non siamo riusciti a inviare la richiesta. Riprova piu tardi oppure scrivici a <a href="mailto:russia.imperiale@yandex.com">russia.imperiale@yandex.com</a>.');
          boxErrore.hidden = false;
          boxErrore.focus();
        }
      });
  });
})();
