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
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Chiudi il menu dopo aver scelto una voce (su mobile)
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
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
  var cal = document.querySelectorAll(".cal-item[data-md]");
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
    if (best) { best.classList.add("is-next"); }
  }

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
