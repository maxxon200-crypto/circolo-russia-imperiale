/* =====================================================================
   Selettore lingua Italiano / Russo (senza traduzione automatica).
   I testi russi sono quelli ufficiali forniti dal Circolo.
   Ogni elemento traducibile ha data-i18n="chiave".
   ===================================================================== */
(function () {
  "use strict";

  var DICT = {
    /* ============ Redesign Aesop: HOME + pagina "Il Circolo" ============ */
    "nav-circolo": { it: "Il Circolo", ru: "Ассоциация" },

    "hero-nome":  { it: "Circolo Internazionale Amici della Russia Imperiale", ru: "Международная ассоциация «Друзья Российской Империи»" },
    "hero-terza": { it: "Terza Roma", ru: "Третий Рим" },
    "hero-frase": { it: "Custodire la memoria e la bellezza della Russia imperiale.", ru: "Хранить память и красоту императорской России." },

    "home-chi-eye":  { it: "Chi siamo", ru: "КТО МЫ" },
    "home-chi-text": { it: "Un sodalizio culturale che custodisce la storia, l'arte e la spiritualità della Russia imperiale. Italiani, russi e discendenti di antiche famiglie dell'Impero, uniti da una stessa eredità.", ru: "Культурное сообщество, хранящее историю, искусство и духовность императорской России. Итальянцы, русские и потомки старинных семей Империи, объединённые общим наследием." },
    "home-chi-link": { it: "Scopri il Circolo <span class=\"arrow-gold\">&rarr;</span>", ru: "Узнать больше <span class=\"arrow-gold\">&rarr;</span>" },

    "idx-storia":       { it: "Mille anni di storia della Casa Romanov e dell'Impero Russo.", ru: "Тысячелетняя история Дома Романовых и Российской империи." },
    "idx-feste":        { it: "Il calendario delle memorie che scandiscono l'anno ortodosso e imperiale.", ru: "Календарь памятных дат православного и имперского года." },
    "idx-eventi":       { it: "Incontri, cerimonie e visite dedicati alla cultura russa in Italia.", ru: "Встречи, церемонии и визиты, посвящённые русской культуре в Италии." },
    "idx-galleria":     { it: "Immagini delle nostre cerimonie e dei luoghi della memoria.", ru: "Изображения наших церемоний и мест памяти." },
    "idx-tesseramento": { it: "Avvicinarsi al Circolo e prendere parte alla sua vita culturale.", ru: "Присоединиться к ассоциации и участвовать в её культурной жизни." },

    "circ-eyebrow": { it: "Amici della Russia Imperiale", ru: "Друзья Российской Империи" },
    "circ-title":   { it: "Il Circolo", ru: "Ассоциация" },
    "circ-h1":      { it: "Chi siamo", ru: "Кто мы" },
    "circ-p1":      { it: "Il Circolo Internazionale Amici della Russia Imperiale - Terza Roma è un sodalizio culturale, apartitico e senza fini di lucro. Ne fanno parte italiani, russi e appartenenti ad altre nazionalità un tempo presenti nell'Impero Russo, insieme a soci svizzeri, francesi e tedeschi discendenti da antiche famiglie russe.", ru: "Международная ассоциация «Друзья Российской Империи — Третий Рим» — это культурное, внепартийное и некоммерческое сообщество. В неё входят итальянцы, русские и представители других национальностей, некогда населявших Российскую империю, а также швейцарцы, французы и немцы, происходящие из старинных русских семей." },
    "circ-h2":      { it: "La nostra identità", ru: "Наша идентичность" },
    "circ-p2":      { it: "Il Circolo ha un'identità monarchica e ortodossa, con due riferimenti imprescindibili. Il primo è la Chiesa Ortodossa del Patriarcato di Mosca; il Circolo non pone tuttavia discriminazioni all'ingresso di soci appartenenti ad altre Chiese cristiane. Il secondo è la Casa Imperiale Romanov, nella linea di successione dei Vladimirovič, che il Circolo riconosce come legittima, oggi rappresentata dalla Granduchessa Marija Vladimirovna e dal figlio, il Granduca Giorgio Mihailovič.", ru: "Ассоциация имеет монархическую и православную идентичность с двумя неотъемлемыми ориентирами. Первый — Православная Церковь Московского Патриархата; при этом Ассоциация не ограничивает вступление членов, принадлежащих к другим христианским Церквям. Второй — Императорский Дом Романовых, в линии престолонаследия Владимировичей, которую Ассоциация признаёт законной и которую сегодня представляют Великая Княгиня Мария Владимировна и её сын, Великий Князь Георгий Михайлович." },
    "circ-h3":      { it: "La nostra storia", ru: "Наша история" },
    "circ-p3":      { it: "Il Circolo è stato fondato nel 2020 a Milano e costituito in Ente del Terzo Settore con Personalità Giuridica nel 2026. È presieduto dal Conte Pëtr Stramezzi, con la Vice-Presidente Maya Bubashvili, il Delegato per l'Italia Barone Antonio Imperatore e la Vice Delegata Dott.ssa Elena Grinko Maruotti.", ru: "Ассоциация была основана в 2020 году в Милане и получила статус юридического лица как организация третьего сектора в 2026 году. Её возглавляет граф Пётр Страмецци, вице-президент — Майя Бубашвили, представитель в Италии — барон Антонио Императоре, заместитель представителя — доктор Елена Гринько Маруотти." },
    "circ-h4":      { it: "Le nostre attività", ru: "Наша деятельность" },
    "circ-p4":      { it: "Il Circolo promuove in Italia eventi culturali dedicati alla cultura, all'arte, alla storia e alla spiritualità russa. Partecipa a cerimonie religiose ed eventi, organizza incontri e visite culturali in luoghi legati alla storia russa e alla spiritualità ortodossa. Realizza iniziative in partnership con l'Associazione Aristocrazia Europea, l'Unione della Nobiltà Bizantina e la Confraternita Cavalleresca Imperiale Russa Ortodossa di San Giovanni di Gerusalemme e di Malta.", ru: "Ассоциация проводит в Италии культурные мероприятия, посвящённые культуре, искусству, истории и духовности России. Участвует в религиозных церемониях и мероприятиях, организует встречи и культурные визиты в места, связанные с русской историей и православной духовностью. Реализует инициативы в партнёрстве с Ассоциацией Европейской Аристократии, Союзом Византийского Дворянства и Императорским Православным Рыцарским Братством святого Иоанна Иерусалимского и Мальтийского." },
    "circ-torna":   { it: "Torna alla home", ru: "На главную" },

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
    "fond-firma":   { it: "Alla fondazione hanno preso parte il Presidente Pietro Veniamin Andreevich Stramezzi, in collegamento da Mosca, la Vicepresidente Maya Bubashvili, il Segretario e Delegato per l'Italia Antonio Imperatore, il Tesoriere Giovanni Trombetta e i Consiglieri Elena Grinko, Irina Khodossevitch, Lali Panchulidze e Oxana Senchenko.", ru: "В учредительном собрании приняли участие Президент Пьетро Вениамин Андреевич Страмецци, присоединившийся по видеосвязи из Москвы, Вице-президент Майя Бубашвили, Секретарь и представитель Ассоциации в Италии Антонио Императоре, Казначей Джованни Тромбетта, а также советники Елена Гринько, Ирина Ходосевич, Лали Панчулидзе и Оксана Сенченко." },

    "eventi-eyebrow": { it: "Eventi e attivita", ru: "МЕРОПРИЯТИЯ И ДЕЯТЕЛЬНОСТЬ" },
    "eventi-title":   { it: "Incontri che intrecciano storia e presente", ru: "Встречи, в которых историческая память соприкасается с современностью" },
    "ev-card1-title": { it: "Una tessera nel segno della memoria", ru: "Почётный член" },
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
    "nav-chiesa":       { it: "Chiesa Ortodossa Russa", ru: "Русская Православная Церковь" },
    "nav-galleria":     { it: "Galleria", ru: "Галерея" },
    "nav-tesseramento": { it: "Tesseramento", ru: "Вступить в ассоциацию" },
    "nav-contatti":     { it: "Contatti", ru: "Контакты" },
    "nav-area":         { it: "Area riservata", ru: "Личный кабинет" },

    /* --- Pulsanti / azioni --- */
    "btn-scopri":          { it: "Scopri di piu", ru: "Узнать больше" },
    "btn-diventa":         { it: "Diventa socio", ru: "Вступить в ассоциацию" },
    "btn-contattaci":      { it: "Contattaci", ru: "Написать нам" },
    "btn-tutti-eventi":    { it: "Tutti gli eventi e le attivita", ru: "Все мероприятия" },
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
    "lbl-nome":     { it: "Nome", ru: "Имя" },
    "lbl-cognome":  { it: "Cognome", ru: "Фамилия" },
    "lbl-email":    { it: "Email", ru: "Электронная почта" },
    "lbl-telefono": { it: "Telefono (facoltativo)", ru: "Номер телефона" },
    "lbl-messaggio":{ it: "Messaggio", ru: "Сообщение (по желанию)" },
    "lbl-professione": { it: "Professione", ru: "Профессия" },
    "lbl-oggetto":  { it: "Oggetto", ru: "Тема" },

    /* --- Intestazioni di pagina --- */
    "ph-storia-h1":     { it: "Storia dell'Impero Russo", ru: "История Российской империи" },
    "ph-storia-lead":   { it: "Articoli, ritratti e approfondimenti dedicati alla storia dell'Impero Russo. Una pagina pensata per la lettura.", ru: "Статьи, портреты и очерки, посвящённые истории Российской империи. Страница, созданная для вдумчивого чтения." },
    "ph-eventi-lead":   { it: "Conferenze, incontri, escursioni e viaggi del Circolo. Le date sono indicate in chiaro e complete.", ru: "Конференции, встречи, экскурсии и поездки ассоциации. Все даты указываются полностью и заблаговременно." },
    "ph-attualita-lead":{ it: "Estratti dalla stampa e dal web e articoli scritti dal Circolo su temi di attualita legati alla cultura russa.", ru: "Материалы из прессы и сети, а также статьи ассоциации на актуальные темы, связанные с русской культурой." },
    "ph-feste-lead":    { it: "Le ricorrenze religiose e civili dell'Impero Russo, con date, significato e tradizioni.", ru: "Религиозные и гражданские праздники Российской империи: даты, значение и традиции." },
    "ph-galleria-lead": { it: "Immagini degli eventi del Circolo e delle associazioni collegate. Ogni foto e accompagnata da una breve didascalia.", ru: "Фотографии мероприятий ассоциации и дружественных организаций. Каждый снимок сопровождается краткой подписью." },
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
    "foot-brand-b": { it: "Sodalizio culturale apartitico e senza fini di lucro, fondato a Milano nel 2020.", ru: "Культурное, внепартийное и некоммерческое сообщество, основанное в Милане в 2020 году." },
    "foot-tel-it": { it: "Tel. Italia: [numero italiano]", ru: "Тел. Италия: [итальянский номер]" },
    "foot-tel-ru": { it: "Tel. Russia: [numero russo]", ru: "Тел. Россия: [российский номер]" },
    "foot-fb": { it: "Pagina Facebook", ru: "Страница Facebook" },
    "foot-name-a": { it: "Circolo Internazionale Amici della Russia Imperiale - Terza Roma", ru: "Международная культурная ассоциация «Друзья Российской Империи - Третий Рим»" },
    "foot-name-b": { it: "Circolo Culturale Internazionale Amici della Russia Imperiale - Terza Roma", ru: "Международная культурная ассоциация «Друзья Российской Империи - Третий Рим»" },
    "foot-noprofit": { it: "Associazione culturale, non a scopo di lucro", ru: "Некоммерческая организация." },
    "cap-chi": { it: "La grazia di un'epoca, custodita con cura.", ru: "Облик эпохи, бережно хранимый." },
    "ph-at": { it: "[FOTO: immagine della notizia]", ru: "[ФОТО: изображение новости]" },
    "at-fonte": { it: "[Fonte] / [Data]", ru: "[Источник] / [Дата]" },
    "at-titolo": { it: "[Titolo della notizia]", ru: "[Заголовок новости]" },
    "at-estratto1": { it: "[Estratto o sommario. Sostituire con il testo reale. Indicare la fonte se ripreso dalla stampa.]", ru: "[Отрывок или аннотация. Заменить реальным текстом. Указать источник, если материал взят из прессы.]" },
    "at-articolo": { it: "Articolo del Circolo / [Data]", ru: "Статья ассоциации / [Дата]" },
    "at-titolo2": { it: "[Titolo dell'articolo]", ru: "[Заголовок статьи]" },
    "at-sommario": { it: "[Sommario dell'articolo scritto dal Circolo. Sostituire con il testo reale.]", ru: "[Аннотация статьи, написанной ассоциацией. Заменить реальным текстом.]" },
    "at-estratto2": { it: "[Estratto o sommario. Sostituire con il testo reale.]", ru: "[Отрывок или аннотация. Заменить реальным текстом.]" },
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
    "te-box1": { it: "Il tesseramento online con pagamento della quota sara disponibile in una fase successiva. Per ora l'iscrizione avviene tramite il modulo di richiesta e il contatto diretto con il Circolo.", ru: "Онлайн-вступление с оплатой взноса будет доступно позднее. Пока вступление происходит через форму заявки и прямой контакт с ассоциацией." },
    "te-box2-tag": { it: "Preferisci scriverci", ru: "Предпочитаете написать нам" },
    "area-h1": { it: "Area riservata ai soci", ru: "Личный кабинет для участников ассоциации" },
    "area-h2": { it: "Uno spazio dedicato ai soci", ru: "Пространство для участников ассоциации" },
    "area-p": { it: "L'area riservata, con i contenuti e i servizi per i soci, sara disponibile in una fase successiva. Nel frattempo puoi conoscere il Circolo e richiedere l'iscrizione.", ru: "Личный кабинет с материалами и услугами для участников ассоциации будет доступен позднее. А пока вы можете познакомиться с ассоциацией и подать заявку на вступление." },
    "soon": { it: "Prossimamente", ru: "Скоро" },
    "legal-eyebrow": { it: "Note legali", ru: "Правовая информация" },
    "co-nota": { it: "In alternativa puoi scriverci direttamente a <a href=\"mailto:russia.imperiale@yandex.com\">russia.imperiale@yandex.com</a>.", ru: "Вы также можете написать нам напрямую на <a href=\"mailto:russia.imperiale@yandex.com\">russia.imperiale@yandex.com</a>." },
    "te-box2": { it: "Puoi anche contattarci direttamente a <a href=\"mailto:russia.imperiale@yandex.com\">russia.imperiale@yandex.com</a> o dalla pagina <a href=\"contatti.html\">Contatti</a>.", ru: "Вы также можете связаться с нами напрямую по адресу <a href=\"mailto:russia.imperiale@yandex.com\">russia.imperiale@yandex.com</a> или на странице <a href=\"contatti.html\">Контакты</a>." },

    "te-form-title": { it: "Domanda di adesione", ru: "Заявка на вступление" },

    /* --- Formato rivista: Storia / articolo Messina --- */
    "cat-storia": { it: "Storia", ru: "История" },
    "cat-soon": { it: "In preparazione", ru: "Готовится" },
    "storia-altri": { it: "Altri approfondimenti", ru: "Другие материалы" },
    "soon-date": { it: "In arrivo", ru: "Скоро" },
    "soon-title": { it: "Nuovo approfondimento", ru: "Новый материал" },
    "soon-excerpt": { it: "Articolo in preparazione. Presto disponibile in questa sezione.", ru: "Материал готовится. Скоро появится в этом разделе." },
    "art-messina-date": { it: "28 dicembre 1908", ru: "28 декабря 1908 года" },
    "art-messina-title": { it: "Il soccorso dei marinai russi alle vittime del terremoto di Messina (1908)", ru: "Помощь русских моряков жертвам землетрясения в Мессине (1908)" },
    "art-messina-excerpt": { it: "Estratto in preparazione. Il testo completo dell'articolo sara pubblicato a breve.", ru: "[перевод скоро]" },
    "art-messina-body": { it: "<p>Testo dell'articolo in preparazione. Sara pubblicato a breve, con il resoconto completo del soccorso portato dai marinai della Marina imperiale russa alle vittime del terremoto che distrusse Messina nel 1908.</p>", ru: "<p class=\"tenue\">[перевод скоро]</p>" },
    "art-torna-storia": { it: "Torna a Storia dell'Impero", ru: "Вернуться к Истории Империи" },

    /* --- Feste e ricorrenze: calendario + Borodino / Martirio / San Nicola --- */
    "cat-ricorrenze": { it: "Ricorrenze", ru: "Памятные даты" },
    "cal-eyebrow-title": { it: "Calendario delle ricorrenze", ru: "Календарь памятных дат" },
    "cal-prossima": { it: "Prossima ricorrenza", ru: "Ближайшая дата" },
    "fe-altri": { it: "Altre ricorrenze", ru: "Другие даты" },
    "cal-mar-date": { it: "17 luglio", ru: "17 июля" },
    "cal-mar-name": { it: "Martirio della Santa Famiglia Imperiale", ru: "Мученичество Святой Царской Семьи" },
    "cal-mar-desc": { it: "Santa Famiglia Imperiale", ru: "Святая Царская Семья" },
    "cal-bor-date": { it: "7 settembre", ru: "7 сентября" },
    "cal-bor-name": { it: "Borodino (1812)", ru: "Бородино (1812)" },
    "cal-bor-desc": { it: "Battaglia del 1812", ru: "Сражение 1812 года" },
    "cal-nic-date": { it: "19 dicembre", ru: "19 декабря" },
    "cal-nic-name": { it: "San Nicola", ru: "Святитель Николай" },
    "cal-nic-desc": { it: "Venerazione in Russia", ru: "Почитание на Руси" },
    "bor-date": { it: "7 settembre 1812", ru: "7 сентября 1812 года" },
    "bor-title": { it: "Borodino", ru: "Бородино" },
    "bor-excerpt": { it: "La ricorrenza della battaglia di Borodino del 1812. Testo completo in arrivo.", ru: "Каждый год 7 сентября (26 августа по юлианскому календарю) мы вспоминаем годовщину Бородинского сражения 1812 года — одной из самых кровопролитных битв XIX века." },
    "bor-art-title": { it: "Borodino, 7 settembre 1812", ru: "Бородино — 7 сентября 1812 года" },
    "bor-body": { it: "<p>Testo dell'articolo in preparazione. Sara pubblicato a breve.</p>", ru: "<p>Каждый год 7 сентября (26 августа по юлианскому календарю) мы вспоминаем годовщину Бородинского сражения 1812 года — одной из самых кровопролитных битв XIX века.</p><p>Мы помним её, потому что Бородино, вместе со всей Отечественной войной 1812 года против Наполеона, стало основополагающим мифом русского национального самосознания: мгновением, в которое русский народ перешёл от верности своему государю к вере в Отечество и в Российскую империю, Третий Рим, наследницу Рима и Константинополя.</p><p>Слава сорока пяти тысячам храбрых, павших под знамёнами Российской империи, защищая родную землю. Слава всем, кто сражался в тот день за свободу России и всей Европы: русским, украинцам, белорусам, полякам, литовцам, эстонцам, финнам, молдаванам, казакам, кавказцам, грузинам, армянам.</p><p>Слава павшим генералам, кровью искупившим позор нашествия: князю Багратиону, князю Голицыну, братьям Тучковым, Кутайсову, де Сен-Приесту, Краснову.</p><p>Слава всем командирам, офицерам, унтер-офицерам и солдатам, которые целый день выдерживали натиск врага, не отступив ни на шаг. Слава полкам Императорской гвардии, часами стоявшим под огнём и кавалерийскими атаками, не дрогнув.</p><p>Среди сражавшихся под русскими знамёнами были и десятки итальянцев, изгнанников, покинувших охваченную якобинством родину. Среди них полковник Александр Губерти, героически павший во главе своего Виленского полка, ведя его в штыковую атаку на врага.</p>" },
    "mar-date": { it: "17 luglio", ru: "17 июля" },
    "mar-title": { it: "Martirio della Santa Famiglia Imperiale", ru: "Мученичество Святой Царской Семьи" },
    "mar-excerpt": { it: "Il ricordo del martirio della Santa Famiglia Imperiale. Testo completo in arrivo.", ru: "В ночь с 16 на 17 июля 1918 года в подвале дома Ипатьева в Екатеринбурге приняли мученическую кончину Государь Николай II, Государыня Александра, Цесаревич Алексей и четыре Великие Княжны — Ольга, Татьяна, Мария и Анастасия, вместе с четырьмя верными слугами. В предшествующие и последующие дни за ними последовали ещё многие из родных и близких Императорской Семьи, среди них Великий Князь Михаил и Великая Княгиня Елизавета Феодоровна." },
    "mar-art-title": { it: "Martirio della Santa Famiglia Imperiale", ru: "Мученичество Святой Царской Семьи — 17 июля" },
    "mar-body": { it: "<p>Testo dell'articolo in preparazione. Sara pubblicato a breve.</p>", ru: "<p>В ночь с 16 на 17 июля 1918 года в подвале дома Ипатьева в Екатеринбурге приняли мученическую кончину Государь Николай II, Государыня Александра, Цесаревич Алексей и четыре Великие Княжны — Ольга, Татьяна, Мария и Анастасия, вместе с четырьмя верными слугами. В предшествующие и последующие дни за ними последовали ещё многие из родных и близких Императорской Семьи, среди них Великий Князь Михаил и Великая Княгиня Елизавета Феодоровна.</p><p>Мученичество в Екатеринбурге уподобляет Святую Царскую Семью христианским мученикам первых веков. Именно поэтому Святые Царственные Страстотерпцы были прославлены Московским Патриархатом, и их почитание распространено во всех Православных Церквях в России и за её пределами, подтверждённое многочисленными чудесами.</p><p>Каждый год 17 июля в церкви святых Сергия, Серафима и Викентия Московского Патриархата в Милане совершается торжественная литургия в память о Святой Царской Семье. В храме, украшенном тремя императорскими знамёнами, верующие русской общины Милана поминают святых Царственных мучеников, при участии членов Международной культурной ассоциации «Друзья Российской Империи — Третий Рим».</p>" },
    "nic-date": { it: "19 dicembre", ru: "19 декабря" },
    "nic-title": { it: "San Nicola", ru: "Святитель Николай" },
    "nic-excerpt": { it: "La venerazione di San Nicola in Russia. Testo completo in arrivo.", ru: "Первое известное нам свидетельство о почитании святителя Николая на Руси содержится в «Повести временных лет», где под 882 годом говорится, что на могиле князя Аскольда была построена церковь святого Николая." },
    "nic-art-title": { it: "La venerazione di San Nicola in Russia", ru: "Почитание святителя Николая в России — 19 декабря" },
    "nic-body": { it: "<p>Testo dell'articolo in preparazione. Sara pubblicato a breve.</p>", ru: "<p>Первое известное нам свидетельство о почитании святителя Николая на Руси содержится в «Повести временных лет», где под 882 годом говорится, что на могиле князя Аскольда была построена церковь святого Николая.</p><p>Почитание святителя быстро распространилось по всей Русской земле. С ним связано множество чудес: одно из самых известных — чудо о «Николе Мокром» в Киеве, когда святитель спас утонувшего младенца, вернув его родителям живым и невредимым под своей иконой в Софийском соборе.</p><p>В России святитель Николай стал одним из самых любимых святых, покровителем простых и страждущих. Его образ вошёл в народные предания, былины и духовные песни. Храмы, монастыри и иконы в его честь множились по всей стране, а паломничества русских православных к его мощам в Бари продолжаются и по сей день.</p>" },
    "art-torna-feste": { it: "Torna a Feste e ricorrenze", ru: "Вернуться к Праздникам и памятным датам" },

    /* --- Eventi e attivita: prossimi / passati --- */
    "cat-eventi": { it: "Eventi", ru: "Мероприятия" },
    "ev-prossimi": { it: "Prossimi eventi", ru: "Предстоящие мероприятия" },
    "ev-passati": { it: "Eventi passati", ru: "Прошедшие мероприятия" },
    "ev-prossimo-data": { it: "Date in arrivo", ru: "Даты уточняются" },
    "ev-prossimo-title": { it: "I prossimi appuntamenti", ru: "Ближайшие встречи" },
    "ev-prossimo-text": { it: "Le date dei prossimi eventi del Circolo verranno annunciate qui.", ru: "Даты предстоящих мероприятий будут опубликованы здесь." },
    "ev1-date": { it: "26 giugno 2026", ru: "26 июня 2026 года" },
    "ev1-title": { it: "[Titolo dell'evento]", ru: "[перевод скоро]" },
    "ev1-excerpt": { it: "[Descrizione dell'evento in preparazione. Il testo sara pubblicato a breve.]", ru: "[перевод скоро]" },
    "ev1-body": { it: "<p>[Descrizione dell'evento in preparazione. Il testo sara pubblicato a breve.]</p>", ru: "<p class=\"tenue\">[перевод скоро]</p>" },
    "ev2-date": { it: "2026", ru: "2026" },
    "ev2-title": { it: "[Titolo dell'evento]", ru: "[перевод скоро]" },
    "ev2-excerpt": { it: "[Descrizione dell'evento in preparazione. Il testo sara pubblicato a breve.]", ru: "[перевод скоро]" },
    "ev2-body": { it: "<p>[Descrizione dell'evento in preparazione. Il testo sara pubblicato a breve.]</p>", ru: "<p class=\"tenue\">[перевод скоро]</p>" },
    "art-torna-eventi": { it: "Torna a Eventi e attivita", ru: "Вернуться к Мероприятиям" },

    /* --- Galleria: cerimonia Villa Sormani + Chiesa Ortodossa --- */
    "chiesa-cap": { it: "Icona dei Santi Imperiali Portatori della Passione, l'Imperatore Nicola II e la sua famiglia.", ru: "Икона святых Царственных страстотерпцев Императора Николая II и его семьи." },
    "ga-ev-eyebrow": { it: "26 giugno 2026", ru: "26 июня 2026 года" },
    "ga-ev-title": { it: "Cerimonia a Villa Sormani Marzorati Uva di Missaglia", ru: "Церемония на вилле Сормани Марцорати Ува в Миссалье" },
    "ga-ev-p1": { it: "Il 26 giugno 2026, in occasione della speciale visita dello Ieromonaco Ambrogio Matsegora, Vicario generale della Chiesa Ortodossa Russa del Patriarcato di Mosca in Italia, presso villa Sormani Marzorati Uva di Missaglia, in Brianza, si è svolta una cerimonia nel corso della quale la Metropolia dell'Europa Occidentale ha conferito attestati di benemerenza ad un gruppo di personalità italiane e straniere, cattoliche e ortodosse, per meriti culturali e sociali, fra cui alcuni Soci e Simpatizzanti del nostro Circolo. Altre benemerenze sono state consegnate ai nostri Soci dalla Principessa Silvia Andronik Cantacuzino, Ospite d'Onore della serata. La cerimonia era organizzata dalla Confraternita Cavalleresca Imperiale Russa Ortodossa di San Giovanni di Gerusalemme e di Malta, con l'attiva partecipazione del nostro Circolo.", ru: "26 июня 2026 года в исторической вилле Сормани Марцорати Ува в Миссалье, в Брианца, состоялась торжественная церемония, приуроченная к особому визиту иеромонаха Амвросия Мацегора, генерального викария Русской православной церкви Московского патриархата в Италии. В ознаменование этого события Митрополия Западной Европы удостоила почётных грамот ряд итальянских и иностранных деятелей - как католического, так и православного исповедания, - чья деятельность снискала признание в культурной и общественной сферах. В числе удостоенных были также некоторые члены и друзья нашей ассоциации. Ряд иных знаков отличия был вручён членам нашей ассоциации княгиней Сильвией Андроник Кантакузино, присутствовавшей на церемонии в качестве почётной гостьи вечера. Организация торжества была осуществлена Императорским русским православным рыцарским братством святого Иоанна Иерусалимского и Мальтийского при деятельном и непосредственном участии нашей ассоциации." },
    "ga-ev-p2": { it: "Lo Ieromonaco padre Ambrogio era accompagnato dal Segretario padre Adriano, Priore della confraternita organizzatrice, e da padre Vasilj, Parroco della comunità ortodossa russa di Saronno. Erano presenti circa un centinaio di persone, fra cui autorità civili, militari e diplomatiche.", ru: "Иеромонаха отца Амвросия сопровождали его секретарь отец Адриан, являющийся приором братства-организатора, а также отец Василий, настоятель русской православной общины в Саронно. На церемонии присутствовало около ста приглашенных, среди которых были представители гражданских властей, военного сословия и дипломатического корпуса." },
    "ga-ev-p3": { it: "La cerimonia è stata seguita da una visita guidata alla stupenda villa Sormani Marzorati Uva di Missaglia, edificio di origini risalenti all'epoca romana ed oggetto di successive trasformazioni nel corso dei secoli. Il conte Alberto Uva ne è l'attuale proprietario e promotore di iniziative culturali legate alla storia del territorio brianzolo.", ru: "По завершении торжественной части для собравшихся была устроена экскурсия по вилле Сормани Марцорати Ува - выдающемуся памятнику историко-архитектурного наследия, истоки которого восходят к римской эпохе, тогда как его последующий облик формировался на протяжении столетий в ходе последовательных перестроек и преобразований. Ныне вилла принадлежит графу Альберто Ува, который известен как вдохновитель и попечитель культурных инициатив, направленных на сохранение и осмысление исторического наследия Брианцы." },
    "ga-press-title": { it: "Rassegna stampa", ru: "Публикации в прессе" },
    "ga-press-video": { it: "Video della cerimonia", ru: "Видео церемонии" },

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
