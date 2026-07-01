/* =====================================================================
   Selettore lingua Italiano / Russo (senza traduzione automatica).
   I testi russi sono quelli ufficiali forniti dal Circolo.
   Ogni elemento traducibile ha data-i18n="chiave".
   ===================================================================== */
(function () {
  "use strict";

  var DICT = {
    "hero-eyebrow": { it: "Circolo Culturale Internazionale", ru: "Международная культурная ассоциация" },
    "hero-name":    { it: "Amici della Russia Imperiale", ru: "Друзья Российской Империи" },
    "hero-motto":   { it: "Terza Roma", ru: "Третий Рим" },
    "hero-sub":     { it: "Custodiamo la <strong>memoria</strong>, la <strong>cultura</strong> e la <strong>spiritualita</strong> di un Impero che ancora ci parla.", ru: "Мы сохраняем историческую память, изучаем культурное наследие и поддерживаем духовную традицию Российской империи." },

    "chi-eyebrow": { it: "Chi siamo", ru: "Кто мы" },
    "chi-title":   { it: "Custodi di un'eredita che non vogliamo dimenticare", ru: "Хранители исторического наследия, которое не должно быть забыто." },
    "chi-lead":    { it: "C'e una bellezza che il tempo non ha spento: quella della Russia imperiale. I suoi palazzi, le sue icone, la sua musica e la sua fede continuano a parlare a chi sa ascoltarli.", ru: "Существует красота, неподвластная времени, — красота Российской империи. Её дворцы, иконы, музыка и духовная традиция продолжают говорить с теми, кто способен их слышать и понимать." },
    "chi-p2":      { it: "Il Circolo Culturale Internazionale \"Amici della Russia Imperiale - Terza Roma\" nasce per custodire questa eredita e farla conoscere. Studiamo la storia della Casa Romanov e dell'Impero Russo, la sua identita e la sua tradizione spirituale ortodossa, con il rigore di chi cerca la verita storica e la dedizione di chi se ne sente custode.", ru: "" },
    "chi-p3":      { it: "Un'associazione culturale, apartitica e senza fini di lucro, fondata a Milano nel 2026.", ru: "Международная культурная ассоциация «Друзья Российской империи — Третий Рим» создана для сохранения, изучения и популяризации исторического и культурного наследия Российской империи. Наша организация является независимым, неполитическим и некоммерческим культурным объединением, основанным в Милане в 2026 году." },

    "fin-storia":  { it: "Studiare e divulgare la vicenda della Casa Romanov e dell'Impero Russo.", ru: "Изучение, сохранение и популяризация истории Дома Романовых, Российской империи и её исторического наследия." },
    "fin-spirit":  { it: "Custodire e far conoscere la tradizione cristiana ortodossa.", ru: "Сохранение и изучение православной духовной традиции как неотъемлемой части исторического и культурного наследия Российской империи." },
    "fin-cultura": { it: "Promuovere l'identita e l'arte dei popoli eurasiatici.", ru: "Исследование и популяризация культурного многообразия, художественного наследия и самобытности народов исторической России." },
    "fin-dialogo": { it: "Coltivare lo scambio culturale tra l'Italia e la Russia.", ru: "Развитие культурного, научного и гуманитарного сотрудничества между Италией и Россией посредством просветительских, образовательных и культурных инициатив." },

    "fond-eyebrow": { it: "La nostra storia", ru: "Наша история" },
    "fond-title":   { it: "Milano, 16 giugno 2026", ru: "Милан, 16 июня 2026 года" },
    "fond-p1":      { it: "In una data che la tradizione ortodossa dedica a Tutti i Santi che hanno illuminato la Terra Russa, il Circolo e nato ufficialmente a Milano, presso lo Studio Varano &amp; Partners.", ru: "После празднования Православной Церковью памяти Всех святых, в земле Русской просиявших, в Милане, в студии Varano &amp; Partners, состоялось официальное учреждение международной культурной ассоциации «Друзья Российской империи — Третий Рим»." },
    "fond-p2":      { it: "La forma di associazione culturale, apartitica e senza scopo di lucro, ci permette oggi di portare la nostra attivita anche in sedi pubbliche, per promuovere la conoscenza della Casa Imperiale Romanov e della cultura del popolo russo.", ru: "" },
    "fond-firma":   { it: "Alla fondazione hanno preso parte il Presidente Pietro Veniamin Andreevich Stramezzi, in collegamento da Mosca, la Vicepresidente Maya Bubashvili, il Segretario e Delegato per l'Italia Antonio Imperatore, il Tesoriere Giovanni Trombetta e i Consiglieri Elena Grinko, Irina Khodossevitch, Lali Panchulidze e Oxana Senchenko.", ru: "В учредительном собрании приняли участие Президент Пьетро Вениамин Андреевич Страмецци, присоединившийся по видеосвязи из Москвы, Вице-президент Майя Бубашвили, Секретарь и представитель Ассоциации в Италии Антонио Императоре, Казначей Джованни Тромбетта, а также члены Совета Елена Гринько, Ирина Ходосевич, Лали Панчулидзе и Оксана Сенченко." },

    "eventi-eyebrow": { it: "Eventi e attivita", ru: "Мероприятия и деятельность" },
    "eventi-title":   { it: "Incontri che intrecciano storia e presente", ru: "Встречи, в которых историческая память соприкасается с современностью" },
    "ev-card1-title": { it: "Una tessera nel segno della memoria", ru: "Почётное членство" },
    "ev-card1-text":  { it: "Sua Altezza Reale il Principe Emanuele Filiberto di Savoia, Capo della Casa Reale di Savoia, e stato accolto tra i soci onorari del Circolo. Un gesto dal forte valore simbolico, nel nome del dialogo tra due grandi tradizioni dinastiche europee.", ru: "Его Королевское Высочество принц Эмануэле Филиберто Савойский, глава Королевского дома Савойи, был избран почётным членом ассоциации. Этот акт носит важное символическое значение и способствует развитию диалога между двумя великими династическими традициями." },
    "ev-card2-title": { it: "Prossimi incontri", ru: "Предстоящие мероприятия" },
    "ev-card2-text":  { it: "Conferenze, presentazioni e momenti di approfondimento dedicati alla storia e alla spiritualita russa. Le date verranno annunciate qui.", ru: "Информация о предстоящих мероприятиях и даты их проведения будут публиковаться на данной странице." },

    "socio-title": { it: "Unisciti a chi custodisce questa memoria", ru: "Присоединяйтесь к тем, кто сохраняет историческую память" },
    "socio-text":  { it: "Il Circolo e aperto a quanti desiderano avvicinarsi alla storia e alla cultura della Russia imperiale. Diventare socio significa prendere parte agli incontri, sostenere le nostre attivita e contribuire a mantenere viva un'eredita preziosa.", ru: "Клуб открыт для всех, кто разделяет интерес к истории и культурному наследию Российской империи." },
    "socio-btn":   { it: "Richiedi l'iscrizione", ru: "Подать заявку" },

    "contatti-intro": { it: "Scrivici per informazioni, eventi o iscrizioni. Saremo lieti di risponderti.", ru: "По вопросам сотрудничества, участия и мероприятий вы можете связаться с нами через форму обратной связи." },

    /* --- Navigazione --- */
    "nav-home":         { it: "Home", ru: "Главная" },
    "nav-storia":       { it: "Storia dell'Impero", ru: "История" },
    "nav-eventi":       { it: "Eventi e attivita", ru: "Мероприятия" },
    "nav-attualita":    { it: "Attualita", ru: "Новости" },
    "nav-feste":        { it: "Feste e ricorrenze", ru: "Праздники" },
    "nav-galleria":     { it: "Galleria", ru: "Галерея" },
    "nav-tesseramento": { it: "Tesseramento", ru: "Членство" },
    "nav-contatti":     { it: "Contatti", ru: "Контакты" },
    "nav-area":         { it: "Area riservata", ru: "Личный кабинет" },

    /* --- Pulsanti / azioni --- */
    "btn-scopri":          { it: "Scopri di piu", ru: "Узнать больше" },
    "btn-diventa":         { it: "Diventa socio", ru: "Стать членом" },
    "btn-contattaci":      { it: "Contattaci", ru: "Связаться с нами" },
    "btn-tutti-eventi":    { it: "Tutti gli eventi e le attivita", ru: "Все мероприятия" },
    "btn-iscriviti":       { it: "Iscriviti all'evento", ru: "Записаться" },
    "btn-richiedi-info":   { it: "Richiedi informazioni", ru: "Запросить информацию" },
    "btn-leggi":           { it: "Leggi l'articolo", ru: "Читать статью" },
    "btn-leggi-tutto":     { it: "Leggi tutto", ru: "Читать далее" },
    "btn-invia-richiesta": { it: "Invia richiesta", ru: "Отправить заявку" },
    "btn-invia-messaggio": { it: "Invia messaggio", ru: "Отправить сообщение" },
    "skip":                { it: "Salta al contenuto", ru: "Перейти к содержанию" },

    /* --- Footer --- */
    "foot-naviga":     { it: "Naviga", ru: "Навигация" },
    "foot-contatti-h": { it: "Contatti", ru: "Контакты" },
    "foot-privacy":    { it: "Privacy Policy", ru: "Политика конфиденциальности" },
    "foot-cookie":     { it: "Cookie Policy", ru: "Политика cookie" },

    /* --- Moduli --- */
    "lbl-nome":     { it: "Nome", ru: "Имя" },
    "lbl-cognome":  { it: "Cognome", ru: "Фамилия" },
    "lbl-email":    { it: "Email", ru: "Электронная почта" },
    "lbl-telefono": { it: "Telefono (facoltativo)", ru: "Телефон (необязательно)" },
    "lbl-messaggio":{ it: "Messaggio", ru: "Сообщение" },
    "lbl-oggetto":  { it: "Oggetto", ru: "Тема" },

    /* --- Intestazioni di pagina --- */
    "ph-storia-h1":     { it: "Storia dell'Impero Russo", ru: "История Российской империи" },
    "ph-storia-lead":   { it: "Articoli, ritratti e approfondimenti dedicati alla storia dell'Impero Russo. Una pagina pensata per la lettura.", ru: "Статьи, портреты и очерки, посвящённые истории Российской империи. Страница, созданная для вдумчивого чтения." },
    "ph-eventi-lead":   { it: "Conferenze, incontri, escursioni e viaggi del Circolo. Le date sono indicate in chiaro e complete.", ru: "Конференции, встречи, экскурсии и поездки Клуба. Все даты указываются полностью и заблаговременно." },
    "ph-attualita-lead":{ it: "Estratti dalla stampa e dal web e articoli scritti dal Circolo su temi di attualita legati alla cultura russa.", ru: "Материалы из прессы и сети, а также статьи Клуба на актуальные темы, связанные с русской культурой." },
    "ph-feste-lead":    { it: "Le ricorrenze religiose e civili dell'Impero Russo, con date, significato e tradizioni.", ru: "Религиозные и гражданские праздники Российской империи: даты, значение и традиции." },
    "ph-galleria-lead": { it: "Immagini degli eventi del Circolo e delle associazioni collegate. Ogni foto e accompagnata da una breve didascalia.", ru: "Фотографии мероприятий Клуба и дружественных организаций. Каждый снимок сопровождается краткой подписью." },
    "ph-tess-h1":       { it: "Diventa socio del Circolo", ru: "Станьте членом Клуба" },
    "ph-tess-lead":     { it: "Avvicinarsi al Circolo e semplice. Compila la richiesta di iscrizione: ti ricontatteremo con tutte le informazioni.", ru: "Присоединиться к Клубу просто. Заполните заявку на вступление — мы свяжемся с вами и сообщим все подробности." },

    /* --- Home: finalita --- */
    "fin-eyebrow":  { it: "Le nostre finalita", ru: "Наши цели" },
    "fin-title":    { it: "Quattro vie, una sola eredita", ru: "Четыре пути, единое наследие" },
    "fin-t-storia": { it: "Storia", ru: "История" },
    "fin-t-spirit": { it: "Spiritualita", ru: "Духовность" },
    "fin-t-cultura":{ it: "Cultura", ru: "Культура" },
    "fin-t-dialogo":{ it: "Dialogo", ru: "Диалог" },
    "socio-eyebrow":{ it: "Tesseramento", ru: "Членство" }
  };

  var LANGS = ["it", "ru"];

  function apply(lang) {
    if (LANGS.indexOf(lang) < 0) { lang = "it"; }
    document.documentElement.lang = lang;
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-i18n");
      var entry = DICT[key];
      if (entry && typeof entry[lang] === "string") { el.innerHTML = entry[lang]; }
    }
    var btns = document.querySelectorAll(".lang-btn");
    for (var j = 0; j < btns.length; j++) {
      var active = btns[j].getAttribute("data-lang") === lang;
      btns[j].classList.toggle("is-active", active);
      btns[j].setAttribute("aria-pressed", active ? "true" : "false");
    }
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  function init() {
    var saved = "it";
    try { saved = localStorage.getItem("lang") || "it"; } catch (e) {}
    apply(saved);
    var btns = document.querySelectorAll(".lang-btn");
    for (var i = 0; i < btns.length; i++) {
      (function (b) {
        b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
      })(btns[i]);
    }
  }

  if (document.readyState !== "loading") { init(); }
  else { document.addEventListener("DOMContentLoaded", init); }
})();
