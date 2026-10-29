/* =====================================================================
   Circolo Internazionale Amici della Russia Imperiale - Terza Roma — JS minimo
   1) Menu mobile  2) Rivelazioni delicate allo scroll (tempi variati)
   ===================================================================== */
(function () {
  "use strict";

  // Segnala che il JS e attivo: solo ora gli elementi .reveal partono nascosti.
  document.documentElement.classList.add("js");

  /* ---------- 0. Banner cookie (informativo: solo cookie tecnici) ---------- */
  var cbOk = false;
  try { cbOk = localStorage.getItem("cookieOk") === "1"; } catch (e) {}
  if (!cbOk) {
    var cb = document.createElement("div");
    cb.className = "cookie-banner";
    cb.setAttribute("role", "region");
    cb.setAttribute("aria-label", "Informativa cookie");
    cb.innerHTML =
      '<p class="cb-text"><span data-i18n="cb-text">Questo sito utilizza solo cookie tecnici necessari al suo funzionamento.</span> ' +
      '<a href="cookie.html" data-i18n="cb-link">Leggi la Cookie Policy</a></p>' +
      '<button type="button" class="cb-btn" data-i18n="cb-btn">Ho capito</button>';
    document.body.appendChild(cb);
    cb.querySelector(".cb-btn").addEventListener("click", function () {
      try { localStorage.setItem("cookieOk", "1"); } catch (e) {}
      if (cb.parentNode) { cb.parentNode.removeChild(cb); }
    });
  }

  /* ---------- 1. Menu mobile ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");

  if (toggle && nav) {
    var mobileNav = window.matchMedia("(max-width: 1080px)");

    var setNavState = function (open) {
      nav.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Chiudi il menu" : "Apri il menu");

      if (mobileNav.matches) {
        nav.inert = !open;
        nav.setAttribute("aria-hidden", open ? "false" : "true");
      } else {
        nav.inert = false;
        nav.removeAttribute("aria-hidden");
      }
    };

    setNavState(false);

    toggle.addEventListener("click", function () {
      setNavState(!nav.classList.contains("open"));
    });
    // Chiudi il menu dopo aver scelto una voce (su mobile)
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && nav.classList.contains("open")) {
        setNavState(false);
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        setNavState(false);
        toggle.focus();
      }
    });

    var syncNavBreakpoint = function () { setNavState(false); };
    if (mobileNav.addEventListener) { mobileNav.addEventListener("change", syncNavBreakpoint); }
    else { mobileNav.addListener(syncNavBreakpoint); }
  }

  /* ---------- 2. Ombra dell'header allo scroll ---------- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 8) { header.classList.add("scrolled"); }
      else { header.classList.remove("scrolled"); }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- 3. Prossima ricorrenza (pagina Feste) ---------- */
  var cal = document.querySelectorAll(".cal-item[data-md], .fs-voce[data-md]");
  if (cal.length) {
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var best = null, bestDiff = Infinity;
    for (var c = 0; c < cal.length; c++) {
      var md = cal[c].getAttribute("data-md").split("-"); // MM-DD
      var next = new Date(today.getFullYear(), +md[0] - 1, +md[1]);
      if (next < today) { next.setFullYear(today.getFullYear() + 1); }
      var diff = next - today;
      if (diff < bestDiff) { bestDiff = diff; best = cal[c]; }
    }
    if (best) {
      best.classList.add("is-next");
      // evidenzia anche la riga corrispondente nel calendario indice
      if (best.id) {
        var row = document.querySelector('.fs-cal-row[href="#' + best.id + '"]');
        if (row) { row.classList.add("is-next"); }
      }
    }
  }

  /* ---------- Promemoria PayPal: discreto, una volta per sessione ---------- */
  (function () {
    if (document.querySelector(".payment-prompt")) { return; }
    var startedKey = "circolo.paypal.startedAt";
    var shownKey = "circolo.paypal.shown";
    var startedAt = Date.now();
    try {
      if (sessionStorage.getItem(shownKey) === "1") { return; }
      var savedStart = Number(sessionStorage.getItem(startedKey));
      if (savedStart > 0 && savedStart <= startedAt) { startedAt = savedStart; }
      else { sessionStorage.setItem(startedKey, String(startedAt)); }
    } catch (e) { /* Il collegamento resta disponibile anche senza storage. */ }

    // Un solo popup condiviso. i18n.js inserisce i testi dal dizionario,
    // senza duplicare qui le frasi gia presenti nelle traduzioni.
    var prompt = document.createElement("aside");
    prompt.className = "payment-prompt";
    prompt.hidden = true;
    prompt.setAttribute("aria-labelledby", "payment-prompt-title");
    prompt.setAttribute("aria-live", "polite");
    prompt.innerHTML =
      '<button class="payment-prompt__close" type="button" data-i18n-attr="aria-label:payment-close"><span aria-hidden="true">×</span></button>' +
      '<h2 class="payment-title" id="payment-prompt-title" data-i18n="payment-title"></h2>' +
      '<p data-i18n="payment-text"></p>' +
      '<a class="btn btn--primary" href="https://www.paypal.com/ncp/payment/2KEMKNKA334T6" target="_blank" rel="noopener noreferrer" data-i18n="payment-action"></a>';
    document.body.appendChild(prompt);

    var shown = false;
    var previousFocus = document.activeElement;
    var cookieBanner = document.querySelector(".cookie-banner");
    function positionPrompt() {
      var cookieHeight = cookieBanner && cookieBanner.isConnected ? cookieBanner.getBoundingClientRect().height : 0;
      var headerHeight = header ? header.getBoundingClientRect().height : 0;
      prompt.style.setProperty("--payment-cookie-offset", Math.ceil(cookieHeight) + "px");
      prompt.style.setProperty("--payment-header-offset", Math.ceil(headerHeight + 16) + "px");
    }
    // Il banner non blocca piu il promemoria: gli riserva spazio anche
    // quando cambia altezza per lingua, orientamento o dimensione del testo.
    var layoutObserver = null;
    if ("ResizeObserver" in window) {
      layoutObserver = new ResizeObserver(positionPrompt);
      if (cookieBanner) { layoutObserver.observe(cookieBanner); }
      if (header) { layoutObserver.observe(header); }
    }
    window.addEventListener("resize", positionPrompt);
    positionPrompt();
    function dismissPrompt() {
      var restoreFocus = prompt.contains(document.activeElement);
      prompt.hidden = true;
      if (restoreFocus && previousFocus && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
      document.removeEventListener("click", checkPrompt);
      document.removeEventListener("focusin", onFocus);
      document.removeEventListener("focusout", onBlur);
      document.removeEventListener("visibilitychange", checkPrompt);
      document.removeEventListener("circolo:languagechange", checkPrompt);
      window.removeEventListener("pageshow", checkPrompt);
      window.removeEventListener("resize", positionPrompt);
      document.removeEventListener("keydown", onEscape);
      if (layoutObserver) { layoutObserver.disconnect(); }
    }
    function checkPrompt() {
      positionPrompt();
      var inForm = document.activeElement && document.activeElement.closest("form");
      var menuOpen = document.querySelector("#main-nav.open");
      if (shown) {
        if (inForm || menuOpen) { dismissPrompt(); }
        return;
      }
      if (Date.now() - startedAt < 20000 || document.hidden || inForm || menuOpen || !prompt.querySelector("a").textContent.trim()) { return; }
      // Ricontrolla anche dopo il ripristino di una pagina dalla cache Indietro.
      try {
        if (sessionStorage.getItem(shownKey) === "1") { dismissPrompt(); return; }
      } catch (e) {}
      shown = true;
      try { sessionStorage.setItem(shownKey, "1"); } catch (e) {}
      prompt.hidden = false;
      // Nessun backdrop, blocco dello scroll o spostamento automatico del focus.
    }
    function onFocus(e) {
      if (!prompt.contains(e.target)) { previousFocus = e.target; }
      checkPrompt();
    }
    function onBlur() { window.setTimeout(checkPrompt, 0); }
    function onEscape(e) {
      if (e.key === "Escape" && !prompt.hidden) { dismissPrompt(); }
    }
    prompt.querySelector("button").addEventListener("click", dismissPrompt);
    prompt.querySelector("a").addEventListener("click", dismissPrompt);
    document.addEventListener("click", checkPrompt);
    document.addEventListener("focusin", onFocus);
    document.addEventListener("focusout", onBlur);
    document.addEventListener("visibilitychange", checkPrompt);
    document.addEventListener("circolo:languagechange", checkPrompt);
    window.addEventListener("pageshow", checkPrompt);
    document.addEventListener("keydown", onEscape);
    window.setTimeout(checkPrompt, Math.max(0, 20000 - (Date.now() - startedAt)));
  })();

  /* ---------- 4. Rivelazioni allo scroll ---------- */
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".reveal");

  if (prefersReduced || !("IntersectionObserver" in window)) {
    // Nessun movimento: mostra subito tutto
    items.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }

  var io = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        // Tempi variati: niente fade identico ovunque
        var delay = el.getAttribute("data-delay");
        if (delay) { el.style.transitionDelay = delay; }
        el.classList.add("is-visible");
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  items.forEach(function (el) { io.observe(el); });
})();
