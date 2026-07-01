/* =====================================================================
   Selettore lingua Italiano / Russo (senza traduzione automatica).
   I testi russi sono quelli ufficiali forniti dal Circolo.
   Ogni elemento traducibile ha data-i18n="chiave".
   ===================================================================== */
(function () {
  "use strict";

  var DICT = {
    "hero-eyebrow": { it: "Circolo Culturale Internazionale", ru: "МЕЖДУНАРОДНАЯ КУЛЬТУРНАЯ АССОЦИАЦИЯ" },
    "hero-name":    { it: "Amici della Russia Imperiale", ru: "Друзья Российской Империи" },
    "hero-motto":   { it: "Terza Roma", ru: "Третий Рим" },
    "hero-sub":     { it: "Custodiamo la <strong>memoria</strong>, la <strong>cultura</strong> e la <strong>spiritualita</strong> di un Impero che ancora ci parla.", ru: "Мы сохраняем историческую память, изучаем культурное наследие и поддерживаем духовную традицию Российской империи, руководствуясь уважением к исторической истине, преемственности национальной культуры и православному духовному наследию." },

    "chi-eyebrow": { it: "Chi siamo", ru: "КТО МЫ" },
    "chi-title":   { it: "Custodi di un'eredita che non vogliamo dimenticare", ru: "Хранители исторического наследия, которое не должно быть забыто." },
    "chi-lead":    { it: "C'e una bellezza che il tempo non ha spento: quella della Russia imperiale. I suoi palazzi, le sue icone, la sua musica e la sua fede continuano a parlare a chi sa ascoltarli.", ru: "Существует красота, неподвластная времени, красота Российской империи. Её дворцы, иконы, музыка и духовная традиция продолжают говорить с теми, кто способен их слышать и понимать." },
    "chi-p2":      { it: "Il Circolo Culturale Internazionale \"Amici della Russia Imperiale - Terza Roma\" nasce per custodire questa eredita e farla conoscere. Studiamo la storia della Casa Romanov e dell'Impero Russo, la sua identita e la sua tradizione spirituale ortodossa, con il rigore di chi cerca la verita storica e la dedizione di chi se ne sente custode.", ru: "Международная культурная ассоциация «Друзья Российской империи - Третий Рим» создана для сохранения, изучения и популяризации исторического и культурного наследия Российской империи. В центре нашего внимания - история Дома Романовых, государственное устройство империи, её культурное и духовное наследие, а также православная традиция как основа русской цивилизации." },
    "chi-p3":      { it: "Un'associazione culturale, apartitica e senza fini di lucro, fondata a Milano nel 2026.", ru: "Наша ассоциация является независимым, неполитическим и некоммерческим культурным объединением, основанным в Милане в 2026 году. В нее входят представители различных стран, объединенные общим интересом к истории, культуре и духовному наследию Российской империи." },

    "fin-storia":  { it: "Studiare e divulgare la vicenda della Casa Romanov e dell'Impero Russo.", ru: "Изучение, сохранение и популяризация истории Дома Романовых и Российской империи." },
    "fin-spirit":  { it: "Custodire e far conoscere la tradizione cristiana ortodossa.", ru: "Сохранение и осмысление православной духовной традиции как основы русской цивилизации." },
    "fin-cultura": { it: "Promuovere l'identita e l'arte dei popoli eurasiatici.", ru: "Исследование художественного наследия и самобытности народов исторической России." },
    "fin-dialogo": { it: "Coltivare lo scambio culturale tra l'Italia e la Russia.", ru: "Развитие культурного и гуманитарного сотрудничества между Италией и Россией." },

    "fond-eyebrow": { it: "La nostra storia", ru: "НАША ИСТОРИЯ" },
    "fond-title":   { it: "Milano, 16 giugno 2026", ru: "Милан, 16 июня 2026 года" },
    "fond-p1":      { it: "In una data che la tradizione ortodossa dedica a Tutti i Santi che hanno illuminato la Terra Russa, il Circolo e nato ufficialmente a Milano, presso lo Studio Varano &amp; Partners.", ru: "После празднования Православной Церковью памяти Всех святых, в земле Русской просиявших, в Милане, в студии Varano &amp; Partners, состоялось официальное учреждение международной культурной ассоциации «Друзья Российской империи - Третий Рим»." },
    "fond-p2":      { it: "La forma di associazione culturale, apartitica e senza scopo di lucro, ci permette oggi di portare la nostra attivita anche in sedi pubbliche, per promuovere la conoscenza della Casa Imperiale Romanov e della cultura del popolo russo.", ru: "Создание нашей независимой, неполитической и некоммерческой культурной ассоциации открывает новые возможности для осуществления просветительской, научно-культурной и общественной деятельности, направленной на изучение, сохранение и популяризацию исторического наследия Дома Романовых, культурного достояния Российской империи и духовных традиций русского народа." },
    "fond-firma":   { it: "Alla fondazione hanno preso parte il Presidente Pietro Veniamin Andreevich Stramezzi, in collegamento da Mosca, la Vicepresidente Maya Bubashvili, il Segretario e Delegato per l'Italia Antonio Imperatore, il Tesoriere Giovanni Trombetta e i Consiglieri Elena Grinko, Irina Khodossevitch, Lali Panchulidze e Oxana Senchenko.", ru: "В учредительном собрании приняли участие Президент Пьетро Вениамин Андреевич Страмецци, присоединившийся по видеосвязи из Москвы, Вице-президент Майя Бубашвили, Секретарь и представитель Ассоциации в Италии Антонио Императоре, Казначей Джованни Тромбетта, а также члены Совета Елена Гринько, Ирина Ходосевич, Лали Панчулидзе и Оксана Сенченко." },

    "eventi-eyebrow": { it: "Eventi e attivita", ru: "МЕРОПРИЯТИЯ И ДЕЯТЕЛЬНОСТЬ" },
    "eventi-title":   { it: "Incontri che intrecciano storia e presente", ru: "Встречи, в которых историческая память соприкасается с современностью" },
    "ev-card1-title": { it: "Una tessera nel segno della memoria", ru: "Почётное членство" },
    "ev-card1-text":  { it: "Sua Altezza Reale il Principe Emanuele Filiberto di Savoia, Capo della Casa Reale di Savoia, e stato accolto tra i soci onorari del Circolo. Un gesto dal forte valore simbolico, nel nome del dialogo tra due grandi tradizioni dinastiche europee.", ru: "Его Королевское Высочество принц Эмануэле Филиберто Савойский, глава Королевского дома Савойи, был избран почётным членом международной культурной ассоциации «Друзья Российской империи - Третий Рим». Этот акт носит важное символическое значение и способствует развитию диалога между двумя великими династическими традициями - Домом Савойи и Императорским Домом Романовых." },
    "ev-card2-title": { it: "Prossimi incontri", ru: "Предстоящие мероприятия" },
    "ev-card2-text":  { it: "Conferenze, presentazioni e momenti di approfondimento dedicati alla storia e alla spiritualita russa. Le date verranno annunciate qui.", ru: "Лекции, научные встречи, презентации и культурные мероприятия, посвящённые истории Российской империи и православной традиции. Даты будут опубликованы здесь." },

    "socio-title": { it: "Unisciti a chi custodisce questa memoria", ru: "Станьте частью ассоциации" },
    "socio-text":  { it: "Il Circolo e aperto a quanti desiderano avvicinarsi alla storia e alla cultura della Russia imperiale. Diventare socio significa prendere parte agli incontri, sostenere le nostre attivita e contribuire a mantenere viva un'eredita preziosa.", ru: "Ассоциация открыта для всех, кто разделяет интерес к истории и культурному наследию Российской империи. Участие означает доступ к мероприятиям, лекциям и исследовательским инициативам, а также возможность внести вклад в сохранение бесценного исторического наследия." },
    "socio-btn":   { it: "Richiedi l'iscrizione", ru: "Подать заявку" },

    "contatti-intro": { it: "Scrivici per informazioni, eventi o iscrizioni. Saremo lieti di risponderti.", ru: "По вопросам сотрудничества, участия и мероприятий вы можете связаться с нами через форму обратной связи." },

    /* --- Navigazione --- */
    "nav-home":         { it: "Home", ru: "Главная" },
    "nav-storia":       { it: "Storia dell'Impero", ru: "История Империи" },
    "nav-eventi":       { it: "Eventi e attivita", ru: "Мероприятия" },
    "nav-attualita":    { it: "Attualita", ru: "Актуальное" },
    "nav-feste":        { it: "Feste e ricorrenze", ru: "Праздники и памятные даты" },
    "nav-galleria":     { it: "Galleria", ru: "Галерея" },
    "nav-tesseramento": { it: "Tesseramento", ru: "Вступить в ассоциацию" },
    "nav-contatti":     { it: "Contatti", ru: "Контакты" },
    "nav-area":         { it: "Area riservata", ru: "Личный кабинет" },

    /* --- Pulsanti / azioni --- */
    "btn-scopri":          { it: "Scopri di piu", ru: "Узнать больше" },
    "btn-diventa":         { it: "Diventa socio", ru: "Вступить в ассоциацию" },
    "btn-contattaci":      { it: "Contattaci", ru: "Написать нам" },
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
    "foot-cookie":     { it: "Cookie Policy", ru: "Политика cookies" },

    /* --- Moduli --- */
    "lbl-nome":     { it: "Nome", ru: "Имя и фамилия" },
    "lbl-cognome":  { it: "Cognome", ru: "Фамилия" },
    "lbl-email":    { it: "Email", ru: "Электронная почта" },
    "lbl-telefono": { it: "Telefono (facoltativo)", ru: "Номер телефона" },
    "lbl-messaggio":{ it: "Messaggio", ru: "Сообщение (по желанию)" },
    "lbl-oggetto":  { it: "Oggetto", ru: "Тема" },

    /* --- Intestazioni di pagina --- */
    "ph-storia-h1":     { it: "Storia dell'Impero Russo", ru: "История Российской империи" },
    "ph-storia-lead":   { it: "Articoli, ritratti e approfondimenti dedicati alla storia dell'Impero Russo. Una pagina pensata per la lettura.", ru: "Статьи, портреты и очерки, посвящённые истории Российской империи. Страница, созданная для вдумчивого чтения." },
    "ph-eventi-lead":   { it: "Conferenze, incontri, escursioni e viaggi del Circolo. Le date sono indicate in chiaro e complete.", ru: "Конференции, встречи, экскурсии и поездки Клуба. Все даты указываются полностью и заблаговременно." },
    "ph-attualita-lead":{ it: "Estratti dalla stampa e dal web e articoli scritti dal Circolo su temi di attualita legati alla cultura russa.", ru: "Материалы из прессы и сети, а также статьи Клуба на актуальные темы, связанные с русской культурой." },
    "ph-feste-lead":    { it: "Le ricorrenze religiose e civili dell'Impero Russo, con date, significato e tradizioni.", ru: "Религиозные и гражданские праздники Российской империи: даты, значение и традиции." },
    "ph-galleria-lead": { it: "Immagini degli eventi del Circolo e delle associazioni collegate. Ogni foto e accompagnata da una breve didascalia.", ru: "Фотографии мероприятий Клуба и дружественных организаций. Каждый снимок сопровождается краткой подписью." },
    "ph-tess-h1":       { it: "Diventa socio del Circolo", ru: "Станьте частью ассоциации" },
    "ph-tess-lead":     { it: "Avvicinarsi al Circolo e semplice. Compila la richiesta di iscrizione: ti ricontatteremo con tutte le informazioni.", ru: "Ассоциация открыта для всех, кто разделяет любовь к истории, культуре и духовному наследию Российской империи." },

    /* --- Home: finalita --- */
    "fin-eyebrow":  { it: "Le nostre finalita", ru: "НАШИ ЦЕЛИ" },
    "fin-title":    { it: "Quattro vie, una sola eredita", ru: "Четыре направления - единое наследие" },
    "fin-t-storia": { it: "Storia", ru: "История" },
    "fin-t-spirit": { it: "Spiritualita", ru: "Духовность" },
    "fin-t-cultura":{ it: "Cultura", ru: "Культура" },
    "fin-t-dialogo":{ it: "Dialogo", ru: "Диалог" },
    "socio-eyebrow":{ it: "Tesseramento", ru: "ВСТУПИТЬ В АССОЦИАЦИЮ" },

    /* --- Contenuti pagine interne --- */
    "foot-brand-a": { it: "Circolo Internazionale Amici della Russia Imperiale Terza Roma. Associazione culturale dedicata alla storia, alla cultura e alle tradizioni dell'Impero Russo.", ru: "Международная культурная ассоциация «Друзья Российской Империи - Третий Рим». Независимая, неполитическая и некоммерческая организация, основанная в Милане в 2026 году." },
    "foot-brand-b": { it: "Circolo Culturale Internazionale Amici della Russia Imperiale Terza Roma. Associazione culturale apartitica e senza fini di lucro, fondata a Milano nel 2026.", ru: "Международная культурная ассоциация «Друзья Российской Империи - Третий Рим». Независимая, неполитическая и некоммерческая организация, основанная в Милане в 2026 году." },
    "foot-tel-it": { it: "Tel. Italia: [numero italiano]", ru: "Тел. Италия: [итальянский номер]" },
    "foot-tel-ru": { it: "Tel. Russia: [numero russo]", ru: "Тел. Россия: [российский номер]" },
    "foot-fb": { it: "Pagina Facebook", ru: "Страница Facebook" },
    "foot-name-a": { it: "Circolo Internazionale Amici della Russia Imperiale - Terza Roma", ru: "Международная культурная ассоциация «Друзья Российской Империи - Третий Рим»" },
    "foot-name-b": { it: "Circolo Culturale Internazionale Amici della Russia Imperiale - Terza Roma", ru: "Международная культурная ассоциация «Друзья Российской Империи - Третий Рим»" },
    "foot-noprofit": { it: "Associazione culturale, non a scopo di lucro", ru: "Некоммерческая организация." },
    "cap-chi": { it: "La grazia di un'epoca, custodita con cura.", ru: "Облик эпохи, бережно хранимый." },
    "cap-fond": { it: "Icona della Famiglia Imperiale.", ru: "" },
    "ph-chi": { it: "[FOTO: ritratto imperiale o veduta del Palazzo d'Inverno, verticale]", ru: "[ФОТО: императорский портрет или вид Зимнего дворца, вертикальное]" },
    "ph-fond": { it: "[FOTO: icona o ritratto della Famiglia Imperiale, verticale]", ru: "[ФОТО: икона или портрет Императорской семьи, вертикальное]" },
    "st-autore": { it: "A cura di [Autore]", ru: "Автор: [Автор]" },
    "st-titolo": { it: "[Titolo dell'articolo storico]", ru: "[Заголовок исторической статьи]" },
    "st-sommario": { it: "[Sommario o primo paragrafo dell'articolo. Sostituire con il testo reale fornito dal Circolo.]", ru: "[Аннотация или первый абзац статьи. Заменить реальным текстом, предоставленным Клубом.]" },
    "ph-st-1": { it: "[FOTO: ritratto / dipinto storico]", ru: "[ФОТО: портрет / историческая картина]" },
    "ph-st-2": { it: "[FOTO: evento storico]", ru: "[ФОТО: историческое событие]" },
    "ph-st-3": { it: "[FOTO: opera d'arte imperiale]", ru: "[ФОТО: императорское произведение искусства]" },
    "ph-st-4": { it: "[FOTO: ritratto imperiale]", ru: "[ФОТО: императорский портрет]" },
    "ph-st-5": { it: "[FOTO: veduta storica]", ru: "[ФОТО: исторический вид]" },
    "ph-st-6": { it: "[FOTO: documento / cimelio]", ru: "[ФОТО: документ / реликвия]" },
    "ev-eyebrow1": { it: "In programma", ru: "В программе" },
    "ev-h1": { it: "Prossimi eventi", ru: "Ближайшие мероприятия" },
    "ph-ev-1": { it: "[FOTO: locandina evento]", ru: "[ФОТО: афиша мероприятия]" },
    "ev-d1": { it: "Sabato 12 settembre 2026, ore 18.00", ru: "Суббота, 12 сентября 2026 г., 18:00" },
    "ev-t-incontro": { it: "[Titolo dell'incontro]", ru: "[Название встречи]" },
    "ev-desc": { it: "[Luogo e descrizione dell'evento. Relatori e tema. Sostituire con il testo reale.]", ru: "[Место и описание мероприятия. Докладчики и тема. Заменить реальным текстом.]" },
    "ph-ev-2": { it: "[FOTO: locandina conferenza]", ru: "[ФОТО: афиша конференции]" },
    "ev-d2": { it: "Domenica 4 ottobre 2026, ore 16.30", ru: "Воскресенье, 4 октября 2026 г., 16:30" },
    "ev-t-conf": { it: "[Titolo della conferenza]", ru: "[Название конференции]" },
    "ph-ev-3": { it: "[FOTO: locandina incontro]", ru: "[ФОТО: афиша встречи]" },
    "ev-d3": { it: "Sabato 7 novembre 2026, ore 17.00", ru: "Суббота, 7 ноября 2026 г., 17:00" },
    "ev-h2": { it: "Escursioni e viaggi", ru: "Экскурсии и поездки" },
    "ph-ev-4": { it: "[FOTO: meta del viaggio]", ru: "[ФОТО: место назначения]" },
    "ev-d4": { it: "Da venerdi 23 a domenica 25 ottobre 2026", ru: "С пятницы 23 по воскресенье 25 октября 2026 г." },
    "ev-t-esc": { it: "[Titolo dell'escursione]", ru: "[Название экскурсии]" },
    "ev-prog": { it: "[Programma e descrizione del viaggio. Sostituire con il testo reale.]", ru: "[Программа и описание поездки. Заменить реальным текстом.]" },
    "ev-d5": { it: "Primavera 2027, date in definizione", ru: "Весна 2027 г., даты уточняются" },
    "ev-t-viaggio": { it: "[Titolo del viaggio]", ru: "[Название поездки]" },
    "ev-d6": { it: "Data da definire", ru: "Дата уточняется" },
    "fe-h1": { it: "Feste religiose", ru: "Религиозные праздники" },
    "ph-fe-1": { it: "[FOTO: icona / festivita]", ru: "[ФОТО: икона / праздник]" },
    "fe-data-cal": { it: "[Data nel calendario]", ru: "[Дата по календарю]" },
    "fe-nome-rel": { it: "[Nome della festa religiosa]", ru: "[Название религиозного праздника]" },
    "fe-desc-rel": { it: "[Significato e tradizioni della ricorrenza. Sostituire con il testo reale.]", ru: "[Значение и традиции праздника. Заменить реальным текстом.]" },
    "fe-h2": { it: "Feste civili", ru: "Гражданские праздники" },
    "ph-fe-2": { it: "[FOTO: ricorrenza civile]", ru: "[ФОТО: гражданский праздник]" },
    "fe-data": { it: "[Data]", ru: "[Дата]" },
    "fe-nome-civ": { it: "[Nome della ricorrenza civile]", ru: "[Название гражданского праздника]" },
    "fe-desc-civ": { it: "[Significato storico della ricorrenza. Sostituire con il testo reale.]", ru: "[Историческое значение праздника. Заменить реальным текстом.]" },
    "ph-at": { it: "[FOTO: immagine della notizia]", ru: "[ФОТО: изображение новости]" },
    "at-fonte": { it: "[Fonte] / [Data]", ru: "[Источник] / [Дата]" },
    "at-titolo": { it: "[Titolo della notizia]", ru: "[Заголовок новости]" },
    "at-estratto1": { it: "[Estratto o sommario. Sostituire con il testo reale. Indicare la fonte se ripreso dalla stampa.]", ru: "[Отрывок или аннотация. Заменить реальным текстом. Указать источник, если материал взят из прессы.]" },
    "at-articolo": { it: "Articolo del Circolo / [Data]", ru: "Статья Клуба / [Дата]" },
    "at-titolo2": { it: "[Titolo dell'articolo]", ru: "[Заголовок статьи]" },
    "at-sommario": { it: "[Sommario dell'articolo scritto dal Circolo. Sostituire con il testo reale.]", ru: "[Аннотация статьи, написанной Клубом. Заменить реальным текстом.]" },
    "at-estratto2": { it: "[Estratto o sommario. Sostituire con il testo reale.]", ru: "[Отрывок или аннотация. Заменить реальным текстом.]" },
    "ph-ga-1": { it: "[FOTO: evento del Circolo]", ru: "[ФОТО: мероприятие Клуба]" },
    "ga-cap": { it: "[Didascalia: luogo e data dell'evento]", ru: "[Подпись: место и дата мероприятия]" },
    "ph-ga-2": { it: "[FOTO: conferenza]", ru: "[ФОТО: конференция]" },
    "ph-ga-3": { it: "[FOTO: viaggio]", ru: "[ФОТО: поездка]" },
    "ph-ga-4": { it: "[FOTO: mostra]", ru: "[ФОТО: выставка]" },
    "ph-ga-5": { it: "[FOTO: cerimonia]", ru: "[ФОТО: церемония]" },
    "ph-ga-6": { it: "[FOTO: incontro]", ru: "[ФОТО: встреча]" },
    "ph-ga-7": { it: "[FOTO: associazione collegata]", ru: "[ФОТО: партнёрская организация]" },
    "ph-ga-8": { it: "[FOTO: escursione]", ru: "[ФОТО: экскурсия]" },
    "co-eyebrow": { it: "Scrivici", ru: "Напишите нам" },
    "co-h1": { it: "Modulo di contatto", ru: "Форма обратной связи" },
    "co-eyebrow2": { it: "Recapiti", ru: "Контактные данные" },
    "co-h2": { it: "Dove trovarci", ru: "Как нас найти" },
    "et-email": { it: "Email", ru: "Электронная почта" },
    "et-tel-it": { it: "Telefono Italia", ru: "Телефон в Италии" },
    "et-tel-ru": { it: "Telefono Russia", ru: "Телефон в России" },
    "et-fb": { it: "Facebook", ru: "Facebook" },
    "num-it": { it: "[numero italiano]", ru: "[итальянский номер]" },
    "num-ru": { it: "[numero russo]", ru: "[российский номер]" },
    "te-eyebrow": { it: "Come iscriversi", ru: "Как вступить" },
    "te-h1": { it: "I passi per diventare socio", ru: "Шаги для вступления в ассоциацию" },
    "te-step1": { it: "Compila il modulo di richiesta qui sotto.", ru: "Заполните заявку" },
    "te-step2": { it: "Riceverai una risposta con le modalita di adesione e la quota associativa.", ru: "Ожидайте подтверждения" },
    "te-step3": { it: "Perfezioni l'iscrizione e ricevi la tessera del Circolo.", ru: "Добро пожаловать" },
    "te-nota": { it: "Inviando accetti di essere ricontattato dal Circolo. I tuoi dati non saranno ceduti a terzi.", ru: "Мы ответим вам в течение нескольких дней и сообщим все подробности." },
    "te-box1": { it: "Il tesseramento online con pagamento della quota sara disponibile in una fase successiva. Per ora l'iscrizione avviene tramite il modulo di richiesta e il contatto diretto con il Circolo.", ru: "Онлайн-вступление с оплатой взноса будет доступно позднее. Пока вступление происходит через форму заявки и прямой контакт с Клубом." },
    "te-box2-tag": { it: "Preferisci scriverci", ru: "Предпочитаете написать нам" },
    "area-h1": { it: "Area riservata ai soci", ru: "Личный кабинет для членов Клуба" },
    "area-h2": { it: "Uno spazio dedicato ai soci", ru: "Пространство для членов Клуба" },
    "area-p": { it: "L'area riservata, con i contenuti e i servizi per i soci, sara disponibile in una fase successiva. Nel frattempo puoi conoscere il Circolo e richiedere l'iscrizione.", ru: "Личный кабинет с материалами и услугами для членов Клуба будет доступен позднее. А пока вы можете познакомиться с Клубом и подать заявку на вступление." },
    "soon": { it: "Prossimamente", ru: "Скоро" },
    "legal-eyebrow": { it: "Note legali", ru: "Правовая информация" },
    "co-nota": { it: "In alternativa puoi scriverci direttamente a <a href=\"mailto:russia.imperiale@yandex.com\">russia.imperiale@yandex.com</a>.", ru: "Вы также можете написать нам напрямую на <a href=\"mailto:russia.imperiale@yandex.com\">russia.imperiale@yandex.com</a>." },
    "te-box2": { it: "Puoi anche contattarci direttamente a <a href=\"mailto:russia.imperiale@yandex.com\">russia.imperiale@yandex.com</a> o dalla pagina <a href=\"contatti.html\">Contatti</a>.", ru: "Вы также можете связаться с нами напрямую по адресу <a href=\"mailto:russia.imperiale@yandex.com\">russia.imperiale@yandex.com</a> или на странице <a href=\"contatti.html\">Контакты</a>." },

    /* --- Placeholder dei campi (attributo placeholder) --- */
    "ph-msg": { it: "Presentati in breve e indica perche desideri iscriverti.", ru: "Расскажите нам о своём интересе к истории и культуре Российской империи." }
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
    var phNodes = document.querySelectorAll("[data-i18n-ph]");
    for (var p = 0; p < phNodes.length; p++) {
      var phEl = phNodes[p];
      var phEntry = DICT[phEl.getAttribute("data-i18n-ph")];
      if (phEntry && typeof phEntry[lang] === "string") { phEl.setAttribute("placeholder", phEntry[lang]); }
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
