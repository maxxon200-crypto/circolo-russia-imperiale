/* =====================================================================
   Circolo Russia Imperiale — JS minimo
   1) Menu mobile  2) Rivelazioni delicate allo scroll (tempi variati)
   ===================================================================== */
(function () {
  "use strict";

  // Segnala che il JS e attivo: solo ora gli elementi .reveal partono nascosti.
  document.documentElement.classList.add("js");

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

  /* ---------- 2. Rivelazioni allo scroll ---------- */
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
