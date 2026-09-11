/* =====================================================================
   Selettore lingua Italiano / Russo (senza traduzione automatica).
   I testi russi sono quelli ufficiali forniti dal Circolo.
   Ogni elemento traducibile ha data-i18n="chiave".
   ===================================================================== */
(function () {
  "use strict";

  var DICT = {
    "num-ro": { it: "<a href=\"tel:+40731316456\">+40 731 316 456</a>", ru: "<a href=\"tel:+40731316456\">+40 731 316 456</a>" },
    "et-tel-ro": { it: "Romania", ru: "Румыния" },
    "foot-tel-ro": { it: "Romania: <a href=\"tel:+40731316456\">+40 731 316 456</a>", ru: "Румыния: <a href=\"tel:+40731316456\">+40 731 316 456</a>" },
    /* ===== Blocco 5: eventi passati in Galleria ===== */
    "gl1-data": { it: "17 luglio 2026", ru: "17 июля 2026 года" },
    "gl1-title": { it: "Divina Liturgia in memoria del Martirio della Santa Famiglia Imperiale", ru: "Божественная литургия в память о мученичестве Святой Царской Семьи" },
    "gl1-p1": { it: "Il 17 luglio 2026, nella Chiesa Ortodossa dei Santi Sergio, Serafino e Vincenzo Martire a Milano, e stata celebrata la Divina Liturgia in memoria del Martirio della Famiglia Imperiale: l'Imperatore Nicola II, l'Imperatrice Aleksandra, il Granduca Aleksej e le Granduchesse Olga, Tatiana, Maria e Anastasia, uccisi durante la rivoluzione bolscevica.", ru: "17 июля 2026 года в храме святых Сергия, Серафима и Викентия в Милане была совершена Божественная литургия в день памяти Страстотерпцев: Императора Николая II, Императрицы Александры, царевича Алексия, великих княжен Ольги, Татианы, Марии и Анастасии, убитых во время большевистской революции." },
    "gl1-p2": { it: "Durante la predica, il rettore della Chiesa, padre Siluan, ha sottolineato la profonda fede cristiana dell'Imperatore Nicola, che lo condusse alla morte martiriale.", ru: "На проповеди настоятель храма иеромонах Силуан подчеркнул глубокую христианскую веру императора Николая, которая привела его к мученической кончине." },
    "gl1-p3": { it: "Tra i partecipanti erano presenti il barone Antonio Imperatore, presidente onorario e rappresentante in Italia dell'associazione, Giovanni Trombetta e il comandante Rudolf Kniesel, artista restauratore e rilegatore di libri antichi.", ru: "Среди присутствовавших были барон Антонио Императоре, почётный президент и представитель ассоциации в Италии, Джованни Тромбетта и командор Рудольф Книсель, художник-реставратор и переплётчик древних книг." },
    "gl2-data": { it: "26 giugno 2026", ru: "26 июня 2026 года" },
    "gl2-title": { it: "Cerimonia a Villa Sormani Marzorati Uva di Missaglia", ru: "Церемония на вилле Сормани Марцорати Ува в Миссалье" },
    "gl2-p1": { it: "Il 26 giugno 2026, in occasione della visita dello Ieromonaco Ambrogio Matsegora, Vicario generale della Chiesa Ortodossa Russa del Patriarcato di Mosca in Italia, presso Villa Sormani Marzorati Uva di Missaglia, in Brianza, si e svolta una cerimonia nel corso della quale la Metropolia dell'Europa Occidentale ha conferito attestati di benemerenza a un gruppo di personalita italiane e straniere, cattoliche e ortodosse, per meriti culturali e sociali, fra cui alcuni soci e simpatizzanti del nostro Circolo. Altre benemerenze sono state consegnate dalla Principessa Silvia Andronik Cantacuzino, ospite d'onore della serata. La cerimonia era organizzata dalla Confraternita Cavalleresca Imperiale Russa Ortodossa di San Giovanni di Gerusalemme e di Malta, con l'attiva partecipazione del nostro Circolo.", ru: "26 июня 2026 года в исторической вилле Сормани Марцорати Ува в Миссалье, в Брианца, состоялась торжественная церемония, приуроченная к особому визиту иеромонаха Амвросия Мацегора, генерального викария Русской православной церкви Московского патриархата в Италии. В ознаменование этого события Митрополия Западной Европы удостоила почётных грамот ряд итальянских и иностранных деятелей - как католического, так и православного исповедания, - чья деятельность снискала признание в культурной и общественной сферах. В числе удостоенных были также некоторые члены и друзья нашей ассоциации. Ряд иных знаков отличия был вручён членам нашей ассоциации княгиней Сильвией Андроник Кантакузино, присутствовавшей на церемонии в качестве почётной гостьи вечера. Организация торжества была осуществлена Императорским русским православным рыцарским братством святого Иоанна Иерусалимского и Мальтийского при деятельном и непосредственном участии нашей ассоциации." },
    "gl2-p2": { it: "Padre Ambrogio era accompagnato dal segretario padre Adriano, priore della confraternita organizzatrice, e da padre Vasilij, parroco della comunita ortodossa russa di Saronno. Erano presenti circa un centinaio di persone, fra cui autorita civili, militari e diplomatiche.", ru: "Иеромонаха отца Амвросия сопровождали его секретарь отец Адриан, являющийся приором братства-организатора, а также отец Василий, настоятель русской православной общины в Саронно. На церемонии присутствовало около ста приглашенных, среди которых были представители гражданских властей, военного сословия и дипломатического корпуса." },
    "gl2-p3": { it: "La cerimonia e stata seguita da una visita guidata alla villa, edificio di origini risalenti all'epoca romana e oggetto di successive trasformazioni nel corso dei secoli. Il conte Alberto Uva ne e l'attuale proprietario e promotore di iniziative culturali legate alla storia del territorio brianzolo.", ru: "По завершении торжественной части для собравшихся была устроена экскурсия по вилле Сормани Марцорати Ува - выдающемуся памятнику историко-архитектурного наследия, истоки которого восходят к римской эпохе, тогда как его последующий облик формировался на протяжении столетий в ходе последовательных перестроек и преобразований. Ныне вилла принадлежит графу Альберто Ува, который известен как вдохновитель и попечитель культурных инициатив, направленных на сохранение и осмысление исторического наследия Брианцы." },

    /* ===== Blocco 3: Feste e ricorrenze (elenco religiose + civili) ===== */
    "fs-nat-d": { it: "25 dicembre / 7 gennaio", ru: "25 декабря / 7 января" },
    "fs-nat-n": { it: "Natività di Cristo", ru: "Рождество Христово" },
    "fs-nat-t": { it: "La Natività di Cristo è, dopo la Pasqua, la festa più solenne dell'anno liturgico. È preceduta da quaranta giorni di digiuno e culmina nella veglia notturna. In Russia la ricorrenza unisce la liturgia alle tradizioni domestiche: la cena della vigilia, i canti natalizi e le visite tra le famiglie. La festa apre il tempo delle Sviatki, i dodici giorni santi fino alla Teofania.", ru: "Рождество Христово — после Пасхи самый торжественный праздник литургического года. Ему предшествует сорокадневный пост, а завершается он ночным богослужением. В России праздник соединяет литургию с домашними традициями: сочельник, колядки и семейные визиты. Праздник открывает Святки — двенадцать святых дней до Богоявления." },
    "fs-teo-d": { it: "6 / 19 gennaio", ru: "6 / 19 января" },
    "fs-teo-n": { it: "Santa Teofania e Battesimo del Signore", ru: "Святое Богоявление и Крещение Господне" },
    "fs-teo-t": { it: "La festa ricorda il Battesimo di Cristo nel Giordano e la manifestazione della Santissima Trinità. Il rito centrale è la grande benedizione delle acque, celebrata in chiesa e presso fiumi e sorgenti. In Russia è tradizione immergersi nelle acque benedette, spesso attraverso un'apertura a forma di croce nel ghiaccio. L'acqua benedetta viene conservata dai fedeli durante tutto l'anno.", ru: "Праздник вспоминает Крещение Христа в Иордане и явление Пресвятой Троицы. Центральный обряд — великое освящение воды, совершаемое в храме и на реках и источниках. В России существует традиция погружения в освящённую воду, часто через прорубь в форме креста. Освящённую воду верующие хранят в течение всего года." },
    "fs-pres-d": { it: "2 / 15 febbraio", ru: "2 / 15 февраля" },
    "fs-pres-n": { it: "Presentazione di Gesù al Tempio", ru: "Сретение Господне" },
    "fs-pres-t": { it: "Quaranta giorni dopo la Natività, la Chiesa ricorda la presentazione del Bambino Gesù al Tempio di Gerusalemme e l'incontro con il giusto Simeone. Il nome slavo della festa, Sretenie, significa proprio incontro: quello fra l'Antico e il Nuovo Testamento. È una delle dodici grandi feste del calendario ortodosso. In questo giorno si benedicono le candele.", ru: "Через сорок дней после Рождества Церковь вспоминает принесение Младенца Иисуса в Иерусалимский храм и встречу с праведным Симеоном. Славянское название праздника, Сретение, и означает встречу: Ветхого и Нового Заветов. Это один из двунадесятых праздников православного календаря. В этот день освящают свечи." },
    "fs-annu-d": { it: "25 marzo / 7 aprile", ru: "25 марта / 7 апреля" },
    "fs-annu-n": { it: "Santa Annunciazione", ru: "Благовещение Пресвятой Богородицы" },
    "fs-annu-t": { it: "La festa celebra l'annuncio dell'arcangelo Gabriele alla Vergine Maria e l'inizio dell'Incarnazione. Cade sempre durante la Quaresima e, per la sua importanza, consente un'attenuazione del digiuno. In Russia si è mantenuta l'antica usanza di liberare gli uccelli dalle gabbie, segno della libertà donata all'uomo. È una delle dodici grandi feste dell'anno liturgico.", ru: "Праздник отмечает благовестие архангела Гавриила Деве Марии и начало Воплощения. Он всегда приходится на Великий пост и по своей важности допускает послабление поста. В России сохранился древний обычай выпускать птиц из клеток — знак дарованной человеку свободы. Это один из двунадесятых праздников литургического года." },
    "fs-orto-d": { it: "Festa mobile, prima domenica di Quaresima", ru: "Переходящий праздник, первое воскресенье Великого поста" },
    "fs-orto-n": { it: "Festa dell'Ortodossia", ru: "Торжество Православия" },
    "fs-orto-t": { it: "La prima domenica di Quaresima commemora il ristabilimento della venerazione delle sante icone, sancito nell'843 dopo la lunga crisi iconoclasta. La liturgia proclama solennemente la fede dei sette Concili ecumenici. In molte chiese i fedeli portano in processione le icone di famiglia. È la festa dell'identità stessa della Chiesa ortodossa.", ru: "Первое воскресенье Великого поста воспоминает восстановление почитания святых икон, утверждённое в 843 году после длительного иконоборческого кризиса. Литургия торжественно провозглашает веру семи Вселенских соборов. Во многих храмах верующие несут в крестном ходе семейные иконы. Это праздник самой идентичности Православной Церкви." },
    "fs-palme-d": { it: "Festa mobile, domenica prima della Pasqua", ru: "Переходящий праздник, воскресенье перед Пасхой" },
    "fs-palme-n": { it: "Domenica delle Palme", ru: "Вход Господень в Иерусалим" },
    "fs-palme-t": { it: "La festa ricorda l'ingresso di Cristo a Gerusalemme, accolto dalla folla con rami di palma. Nella tradizione russa, dove le palme non crescono, si benedicono rami di salice fioriti: da qui il nome popolare di Verbnoe voskresene, domenica del salice. I rami benedetti vengono conservati in casa presso le icone. La festa apre la Settimana Santa.", ru: "Праздник вспоминает вход Христа в Иерусалим, где народ встречал Его пальмовыми ветвями. В русской традиции, где пальмы не растут, освящают распустившиеся ветви вербы: отсюда народное название Вербное воскресенье. Освящённые ветви хранят дома у икон. Праздник открывает Страстную седмицу." },
    "fs-pasqua-d": { it: "Festa mobile, secondo il calendario ortodosso", ru: "Переходящий праздник, по православному календарю" },
    "fs-pasqua-n": { it: "Pasqua Ortodossa", ru: "Пасха Христова" },
    "fs-pasqua-t": { it: "La Resurrezione di Cristo è la festa delle feste, il centro di tutto l'anno liturgico. La celebrazione culmina nella veglia notturna, quando il sacerdote annuncia Cristo è risorto e l'assemblea risponde Veramente è risorto. Si benedicono il kulic, la pascha di ricotta e le uova dipinte. La gioia pasquale si prolunga per quaranta giorni.", ru: "Воскресение Христово — праздников праздник, средоточие всего литургического года. Празднование достигает вершины в ночном богослужении, когда священник возглашает «Христос воскресе», а собрание отвечает «Воистину воскресе». Освящают кулич, творожную пасху и крашеные яйца. Пасхальная радость продолжается сорок дней." },
    "fs-asc-d": { it: "Festa mobile, quaranta giorni dopo la Pasqua", ru: "Переходящий праздник, на сороковой день после Пасхи" },
    "fs-asc-n": { it: "Ascensione del Signore", ru: "Вознесение Господне" },
    "fs-asc-t": { it: "Quaranta giorni dopo la Resurrezione la Chiesa celebra l'ascensione di Cristo al cielo, alla presenza degli apostoli sul monte degli Ulivi. La festa chiude il tempo pasquale e prepara alla Pentecoste. La liturgia sottolinea che la natura umana, assunta da Cristo, è portata alla destra del Padre. È una delle dodici grandi feste dell'anno.", ru: "На сороковой день после Воскресения Церковь празднует вознесение Христа на небо в присутствии апостолов на горе Елеонской. Праздник завершает пасхальное время и готовит к Пятидесятнице. Литургия подчёркивает, что человеческая природа, воспринятая Христом, вознесена одесную Отца. Это один из двунадесятых праздников года." },
    "fs-pent-d": { it: "Festa mobile, cinquanta giorni dopo la Pasqua", ru: "Переходящий праздник, на пятидесятый день после Пасхи" },
    "fs-pent-n": { it: "Pentecoste", ru: "День Святой Троицы, Пятидесятница" },
    "fs-pent-t": { it: "Cinquanta giorni dopo la Pasqua si celebra la discesa dello Spirito Santo sugli apostoli e la nascita della Chiesa. In Russia la festa è chiamata Giorno della Santissima Trinità: le chiese e le case si adornano di rami di betulla e di erbe fresche, segno della vita nuova. I fedeli assistono in ginocchio alle preghiere solenni del vespro.", ru: "На пятидесятый день после Пасхи празднуется сошествие Святого Духа на апостолов и рождение Церкви. В России праздник называется Днём Святой Троицы: храмы и дома украшают ветвями берёзы и свежей травой — знаком новой жизни. Верующие коленопреклонённо слушают торжественные молитвы вечерни." },
    "fs-pp-d": { it: "12 luglio", ru: "12 июля" },
    "fs-pp-n": { it: "Santi Pietro e Paolo", ru: "Святые первоверховные апостолы Пётр и Павел" },
    "fs-pp-t": { it: "La Chiesa venera i due sommi apostoli, Pietro la roccia della fede e Paolo l'apostolo delle genti. La festa è preceduta dal digiuno detto appunto dei Santi Apostoli, di durata variabile. Innumerevoli chiese russe sono loro dedicate, a cominciare dalla cattedrale della fortezza di San Pietroburgo, dove riposano gli imperatori della Casa Romanov.", ru: "Церковь чтит двух первоверховных апостолов: Петра, камень веры, и Павла, апостола язычников. Празднику предшествует пост, называемый Петровым, различной продолжительности. Бесчисленные русские храмы посвящены им, начиная с собора Петропавловской крепости в Санкт-Петербурге, где покоятся императоры Дома Романовых." },
    "fs-mar-d": { it: "17 luglio", ru: "17 июля" },
    "fs-mar-n": { it: "Martirio della Santa Famiglia Imperiale Romanov", ru: "Мученичество Святой Царской Семьи Романовых" },
    "fs-mar-t": { it: "Nella notte fra il 16 e il 17 luglio 1918, a Ekaterinburg, furono uccisi l'Imperatore Nicola II, l'Imperatrice Aleksandra, il Granduca Aleksej e le Granduchesse Olga, Tatiana, Maria e Anastasia, insieme ai fedeli che vollero seguirli. La Chiesa Ortodossa Russa li venera come Santi Portatori della Passione, esempio di mitezza e di fede nella prova.", ru: "В ночь с 16 на 17 июля 1918 года в Екатеринбурге были убиты Император Николай II, Императрица Александра, цесаревич Алексий и великие княжны Ольга, Татиана, Мария и Анастасия вместе с верными, пожелавшими следовать за ними. Русская Православная Церковь чтит их как святых Царственных страстотерпцев — пример кротости и веры в испытании." },
    "fs-serg-d": { it: "18 luglio", ru: "18 июля" },
    "fs-serg-n": { it: "San Sergio di Radonež", ru: "Преподобный Сергий Радонежский" },
    "fs-serg-t": { it: "Il 18 luglio la Chiesa celebra il ritrovamento delle venerabili reliquie di san Sergio, igumeno di Radonež. Fondatore della Lavra della Santissima Trinità, fu maestro e guida spirituale di molte decine di santi russi e intercessore di tutta la Terra Russa. Benedisse il principe Dimitrij Donskoj prima della battaglia di Kulikovo. È esempio di mitezza e umiltà.", ru: "18 июля Церковь празднует обретение честных мощей преподобного Сергия, игумена Радонежского. Основатель Троице-Сергиевой Лавры, он был наставником и духовным руководителем многих десятков русских святых и заступником всей Русской земли. Он благословил князя Димитрия Донского перед Куликовской битвой. Он — пример кротости и смирения." },
    "fs-trasf-d": { it: "6 / 19 agosto", ru: "6 / 19 августа" },
    "fs-trasf-n": { it: "Santa Trasfigurazione", ru: "Преображение Господне" },
    "fs-trasf-t": { it: "La festa ricorda la trasfigurazione di Cristo sul monte Tabor davanti a Pietro, Giacomo e Giovanni. La luce increata del Tabor è al centro della spiritualità ortodossa. In Russia la ricorrenza è detta popolarmente Salvatore delle mele, perché in questo giorno si benedicono i frutti del nuovo raccolto. È una delle dodici grandi feste.", ru: "Праздник вспоминает преображение Христа на горе Фавор перед Петром, Иаковом и Иоанном. Нетварный Фаворский свет — в средоточии православной духовности. В России праздник в народе называют Яблочным Спасом, потому что в этот день освящают плоды нового урожая. Это один из двунадесятых праздников." },
    "fs-dorm-d": { it: "15 / 28 agosto", ru: "15 / 28 августа" },
    "fs-dorm-n": { it: "Dormizione della Madre di Dio", ru: "Успение Пресвятой Богородицы" },
    "fs-dorm-t": { it: "La festa celebra il transito della Madre di Dio, addormentatasi nel Signore e accolta in cielo. È preceduta da un breve digiuno e conclude l'anno liturgico ortodosso. Alla Dormizione sono dedicate le cattedrali principali di Mosca e di Vladimir, cuore spirituale della Russia antica. La liturgia canta la morte come passaggio alla vita.", ru: "Праздник отмечает преставление Божией Матери, уснувшей в Господе и принятой на небо. Ему предшествует краткий пост, и он завершает православный литургический год. Успению посвящены главные соборы Москвы и Владимира — духовное сердце древней Руси. Литургия воспевает смерть как переход к жизни." },
    "fs-natbg-d": { it: "8 / 21 settembre", ru: "8 / 21 сентября" },
    "fs-natbg-n": { it: "Natività della Madre di Dio", ru: "Рождество Пресвятой Богородицы" },
    "fs-natbg-t": { it: "È la prima delle dodici grandi feste dell'anno liturgico ortodosso, che comincia in settembre. Si ricorda la nascita della Vergine Maria dai giusti Gioacchino e Anna, dopo lunghi anni di attesa. La festa apre il ciclo dell'Incarnazione e annuncia la salvezza. In Russia molte chiese e monasteri antichi portano il suo nome.", ru: "Это первый из двунадесятых праздников православного литургического года, начинающегося в сентябре. Вспоминается рождение Девы Марии от праведных Иоакима и Анны после долгих лет ожидания. Праздник открывает цикл Воплощения и возвещает спасение. В России многие древние храмы и монастыри носят его имя." },
    "fs-croce-d": { it: "14 / 27 settembre", ru: "14 / 27 сентября" },
    "fs-croce-n": { it: "Esaltazione della Santa Croce", ru: "Воздвижение Креста Господня" },
    "fs-croce-t": { it: "La festa ricorda il ritrovamento della Croce di Cristo a Gerusalemme da parte di sant'Elena e la sua solenne elevazione davanti al popolo. È giorno di digiuno rigoroso, pur essendo una delle dodici grandi feste. Al centro della chiesa viene esposta la croce ornata di fiori, che i fedeli venerano prostrandosi.", ru: "Праздник вспоминает обретение Креста Христова в Иерусалиме святой Еленой и его торжественное воздвижение перед народом. Это день строгого поста, хотя он и принадлежит к двунадесятым праздникам. Посреди храма выносится крест, украшенный цветами, которому верующие поклоняются с земными поклонами." },
    "fs-ingr-d": { it: "21 novembre / 4 dicembre", ru: "21 ноября / 4 декабря" },
    "fs-ingr-n": { it: "Ingresso al Tempio della Madre di Dio", ru: "Введение во храм Пресвятой Богородицы" },
    "fs-ingr-t": { it: "La festa ricorda la presentazione al Tempio di Gerusalemme della Vergine Maria bambina, condotta dai genitori Gioacchino e Anna. La tradizione narra che rimase nel Tempio, nutrita dalla preghiera, fino alla giovinezza. La ricorrenza cade all'inizio del digiuno della Natività e prepara al Natale. È una delle dodici grandi feste.", ru: "Праздник вспоминает приведение во храм Иерусалимский отроковицы Марии её родителями Иоакимом и Анной. Предание повествует, что Она пребывала во храме, питаемая молитвой, до юности. Праздник приходится на начало Рождественского поста и готовит к Рождеству. Это один из двунадесятых праздников." },
    "fs-nic-d": { it: "4 / 19 dicembre", ru: "4 / 19 декабря" },
    "fs-nic-n": { it: "San Nicola", ru: "Святитель Николай Чудотворец" },
    "fs-nic-t": { it: "San Nicola, vescovo di Mira, è il santo più amato del popolo russo, protettore dei viaggiatori, dei marinai e dei bambini. La sua icona è presente in quasi ogni casa e in ogni chiesa. La festa invernale ne ricorda la morte, mentre in maggio si celebra la traslazione delle reliquie a Bari, meta di pellegrinaggio anche per i fedeli russi.", ru: "Святитель Николай, епископ Мирликийский, — самый любимый святой русского народа, покровитель путешественников, моряков и детей. Его икона есть почти в каждом доме и в каждом храме. Зимний праздник вспоминает его кончину, а в мае празднуется перенесение мощей в Бари — место паломничества и для русских верующих." },
    "fs-capo-d": { it: "1 gennaio", ru: "1 января" },
    "fs-capo-n": { it: "Capodanno", ru: "Новый год" },
    "fs-capo-t": { it: "Il Capodanno è la festa civile più sentita in Russia, celebrata in famiglia con l'abete addobbato e lo scambio dei doni. La sua importanza attuale nasce nel periodo sovietico, quando assorbì molte usanze natalizie. Fu Pietro il Grande, nel 1700, a spostare l'inizio dell'anno al primo gennaio secondo l'uso europeo. Le celebrazioni proseguono per diversi giorni.", ru: "Новый год — самый любимый гражданский праздник в России, который встречают в семье с наряженной ёлкой и обменом подарками. Его нынешнее значение сложилось в советское время, когда он вобрал многие рождественские обычаи. Именно Пётр Великий в 1700 году перенёс начало года на первое января по европейскому обычаю. Празднования продолжаются несколько дней." },
    "fs-dif-d": { it: "23 febbraio", ru: "23 февраля" },
    "fs-dif-n": { it: "Giorno dei Difensori della Patria", ru: "День защитника Отечества" },
    "fs-dif-t": { it: "La giornata è dedicata a quanti hanno servito e servono nelle forze armate, e per estensione a tutti gli uomini. Si depongono corone ai monumenti ai caduti e si rende onore ai veterani. La ricorrenza fu istituita nel 1918 e mantenuta nella Federazione Russa come festa nazionale. È una delle date civili più partecipate dell'anno.", ru: "День посвящён всем, кто служил и служит в вооружённых силах, а в широком смысле — всем мужчинам. К памятникам павшим возлагают венки, чествуют ветеранов. Праздник был учреждён в 1918 году и сохранён в Российской Федерации как государственный. Это одна из самых широко отмечаемых гражданских дат года." },
    "fs-donna-d": { it: "8 marzo", ru: "8 марта" },
    "fs-donna-n": { it: "Giornata Internazionale della Donna", ru: "Международный женский день" },
    "fs-donna-t": { it: "In Russia l'8 marzo è una festa nazionale molto sentita, dedicata alle donne di ogni età. È tradizione offrire fiori, in particolare mimose e tulipani, a madri, mogli, figlie e colleghe. La giornata ha perduto il carattere rivendicativo delle origini per assumere un tono familiare e affettuoso. Gli uffici e le scuole restano chiusi.", ru: "В России 8 марта — государственный праздник, который отмечают очень тепло и посвящают женщинам всех возрастов. Принято дарить цветы, особенно мимозу и тюльпаны, матерям, жёнам, дочерям и коллегам. День утратил первоначальный протестный характер и приобрёл семейное, сердечное звучание. Учреждения и школы в этот день закрыты." },
    "fs-lav-d": { it: "1 maggio", ru: "1 мая" },
    "fs-lav-n": { it: "Festa della Primavera e del Lavoro", ru: "Праздник Весны и Труда" },
    "fs-lav-t": { it: "Il primo maggio segna in Russia l'inizio della bella stagione e la festa del lavoro. Alle grandi manifestazioni del passato si sono sostituite celebrazioni più raccolte: gite fuori porta, apertura delle case di campagna e cura degli orti. La ricorrenza conserva il carattere di festa popolare e di ritrovo familiare.", ru: "Первое мая знаменует в России начало тёплого времени года и праздник труда. На смену массовым демонстрациям прошлого пришли более камерные торжества: загородные поездки, открытие дачного сезона и работа в саду. Праздник сохраняет характер народного гулянья и семейной встречи." },
    "fs-vitt-d": { it: "9 maggio", ru: "9 мая" },
    "fs-vitt-n": { it: "Giorno della Vittoria", ru: "День Победы" },
    "fs-vitt-t": { it: "È la ricorrenza civile più solenne dell'anno, in memoria della vittoria del 1945 e degli enormi sacrifici sostenuti dal popolo. Si tengono parate, deposizioni di corone e il minuto di silenzio; le famiglie portano i ritratti dei propri caduti. Il nastro di San Giorgio è il segno distintivo della giornata. La memoria è trasmessa di generazione in generazione.", ru: "Это самая торжественная гражданская дата года — в память о победе 1945 года и о неисчислимых жертвах народа. Проходят парады, возложения венков и минута молчания; семьи несут портреты своих павших. Георгиевская лента — отличительный знак этого дня. Память передаётся из поколения в поколение." },
    "fs-russia-d": { it: "12 giugno", ru: "12 июня" },
    "fs-russia-n": { it: "Giornata della Russia", ru: "День России" },
    "fs-russia-t": { it: "La giornata celebra la Russia nella sua storia, nella sua cultura e nella sua unità. Si tengono concerti, cerimonie ufficiali e la consegna dei premi di Stato al Cremlino. La data, istituita nel 1992, è oggi intesa come festa dell'identità nazionale e del legame fra i popoli che compongono il Paese.", ru: "День посвящён России, её истории, культуре и единству. Проходят концерты, официальные церемонии и вручение государственных премий в Кремле. Дата, учреждённая в 1992 году, сегодня понимается как праздник национальной идентичности и связи между народами, составляющими страну." },
    "fs-gloria-d": { it: "Data mobile, prima domenica di settembre", ru: "Переходящая дата, первое воскресенье сентября" },
    "fs-gloria-n": { it: "Giornata della Gloria Militare", ru: "День воинской славы" },
    "fs-gloria-t": { it: "La giornata onora le vittorie e le imprese delle armi russe nel corso dei secoli. Le date della gloria militare, fissate per legge, ricordano i momenti decisivi della difesa del Paese, da Kulikovo a Borodino fino al Novecento. Si tengono cerimonie ai monumenti, rievocazioni storiche e onori ai reparti.", ru: "День чтит победы и подвиги русского оружия на протяжении веков. Дни воинской славы, установленные законом, напоминают о решающих моментах защиты страны — от Куликова поля до Бородина и до двадцатого века. Проходят церемонии у памятников, исторические реконструкции и чествование воинских частей." },
    "fs-bor-d": { it: "7 settembre", ru: "7 сентября" },
    "fs-bor-n": { it: "Battaglia di Borodino", ru: "Бородинское сражение" },
    "fs-bor-t": { it: "Il 7 settembre 1812 si combatté presso il villaggio di Borodino, a ovest di Mosca, la battaglia più sanguinosa della campagna di Napoleone in Russia. L'esercito russo, guidato dal feldmaresciallo Kutuzov, resistette per un'intera giornata a costo di perdite gravissime. Lo scontro segnò l'inizio della ritirata francese ed è celebrato come simbolo di sacrificio e fermezza.", ru: "7 сентября 1812 года у села Бородино, к западу от Москвы, произошло самое кровопролитное сражение наполеоновской кампании в России. Русская армия под командованием фельдмаршала Кутузова держалась весь день ценой тягчайших потерь. Битва положила начало отступлению французов и почитается как символ жертвенности и стойкости." },
    "fs-fond-d": { it: "2 novembre", ru: "2 ноября" },
    "fs-fond-n": { it: "Fondazione dell'Impero Russo", ru: "Основание Российской Империи" },
    "fs-fond-t": { it: "Il 2 novembre 1721, al termine della guerra del Nord, il Senato conferì a Pietro I il titolo di Imperatore di tutte le Russie e la Moscovia assunse il nome di Impero Russo. L'atto sanciva l'ingresso della Russia fra le grandi potenze europee. La data segna l'inizio dei due secoli imperiali che il Circolo studia e custodisce.", ru: "2 ноября 1721 года, по завершении Северной войны, Сенат поднёс Петру I титул Императора Всероссийского, и Московское царство приняло имя Российской Империи. Этот акт закрепил вхождение России в число великих европейских держав. Дата отмечает начало двух имперских столетий, которые изучает и хранит ассоциация." },
    "fs-unita-d": { it: "4 novembre", ru: "4 ноября" },
    "fs-unita-n": { it: "Giorno dell'Unità Nazionale", ru: "День народного единства" },
    "fs-unita-t": { it: "La ricorrenza ricorda la liberazione di Mosca nel 1612, quando la milizia popolare guidata da Kuzma Minin e dal principe Dmitrij Požarskij pose fine al Torbido. La data coincide con la festa dell'icona della Madre di Dio di Kazan, invocata dalle truppe. È celebrata come giorno dell'unità del popolo al di sopra delle divisioni.", ru: "Праздник напоминает об освобождении Москвы в 1612 году, когда народное ополчение во главе с Кузьмой Мининым и князем Дмитрием Пожарским положило конец Смуте. Дата совпадает с праздником Казанской иконы Божией Матери, к которой обращалось войско. Он отмечается как день единства народа поверх разделений." },
    "fs-h-rel": { it: "Ricorrenze religiose", ru: "Религиозные праздники" },
    "fs-h-civ": { it: "Ricorrenze civili", ru: "Гражданские праздники" },
    "fs-nota": { it: "Nota sulle date. Dove sono indicate due date, la prima segue il calendario liturgico giuliano, la seconda il calendario gregoriano oggi in uso. Le feste mobili non hanno data fissa: dipendono dalla data della Pasqua ortodossa.", ru: "Примечание о датах. Там, где указаны две даты, первая соответствует юлианскому богослужебному календарю, вторая — григорианскому календарю, используемому сегодня. Переходящие праздники не имеют постоянной даты: она зависит от дня православной Пасхи." },
    "fs-cal-h": { it: "Calendario delle ricorrenze", ru: "Календарь памятных дат" },

    /* ============ San Sergio di Radonež (18 luglio) — IT/RU (EN nell'oggetto EN) ============ */
    "ss-title":     { it: "San Sergio di Radonež", ru: "Преподобный Сергий Радонежский" },
    "ss-sub":       { it: "18 luglio", ru: "18 июля" },
    "ss-cal-name":  { it: "San Sergio di Radonež", ru: "Преподобный Сергий Радонежский" },
    "ss-cal-desc":  { it: "Ritrovamento delle reliquie", ru: "Обретение мощей" },
    "ss-excerpt":   { it: "Il 18 luglio la Chiesa celebra il ritrovamento delle venerabili reliquie di san Sergio, igumeno di Radonež.", ru: "18 июля Церковь празднует обретение честных мощей преподобного Сергия, игумена Радонежского." },
    "ss-p1":        { it: "Il 18 luglio la Chiesa celebra il ritrovamento delle venerabili reliquie di san Sergio, igumeno di Radonež.", ru: "18 июля Церковь празднует обретение честных мощей преподобного Сергия, игумена Радонежского." },
    "ss-p2":        { it: "San Sergio di Radonež è uno dei santi russi più venerati. Fondatore della Lavra della Santissima Trinità e di San Sergio, fu maestro e guida spirituale di molte decine di santi russi. Divenne igumeno e intercessore di tutta la Terra Russa, esempio di mitezza e umiltà per monaci e laici. Fu lui a benedire il santo principe Dimitrij Donskoj prima della battaglia di Kulikovo.", ru: "Преподобный Сергий Радонежский — один из самых почитаемых русских святых. Основатель Троице-Сергиевой Лавры, он был наставником и духовным руководителем многих десятков русских святых. Он стал игуменом и заступником всей Русской земли, примером кротости и смирения для монахов и мирян. Именно он благословил святого князя Димитрия Донского перед Куликовской битвой." },
    "ss-p3":        { it: "A san Sergio si rivolgono preghiere per ricevere aiuto nello studio e nella vita monastica, per vincere le passioni, specialmente la superbia, per crescere nella fede e per proteggere la Patria dalle invasioni straniere.", ru: "К преподобному Сергию обращаются с молитвами о помощи в учении и в монашеской жизни, о победе над страстями, особенно над гордостью, о возрастании в вере и о защите Отечества от иноземных нашествий." },
    "ss-pray-label":{ it: "Preghiera", ru: "Молитва" },
    "ss-pray-1":    { it: "O venerabile e teoforo padre nostro Sergio!", ru: "О священная главо, преподобне и богоносне отче наш Сергие!" },
    "ss-pray-2":    { it: "Volgi misericordiosamente il tuo sguardo su di noi, tuoi servi, e innalza noi, attaccati alle cose della terra, verso le altezze celesti. Rafforza la nostra debolezza e confermaci nella fede, affinché possiamo sperare senza esitazione di ricevere ogni bene dalla misericordia del Signore Dio per mezzo delle tue preghiere.", ru: "Милостивно призри на нас, рабов твоих, и возведи нас, привязанных к земному, к небесным высотам. Укрепи нашу немощь и утверди нас в вере, чтобы мы могли несомненно надеяться получить всякое благо от милости Господа Бога твоими молитвами." },
    "ss-pray-3":    { it: "Ottieni con la tua intercessione ogni dono necessario e salutare per ciascuno di noi e, con le tue potenti preghiere, concedi a tutti noi, nel giorno del Giudizio tremendo, di essere liberati dalla parte sinistra, di essere annoverati tra coloro che stanno alla destra e di ascoltare la voce beata del Signore Cristo:", ru: "Испроси твоим ходатайством всякий необходимый и спасительный дар каждому из нас и твоими сильными молитвами сподоби всех нас в день Страшного Суда быть избавленными от левой стороны, причтёнными к стоящим справа и услышать блаженный глас Господа Христа:" },
    "ss-pray-quote":{ it: "\"Venite, benedetti del Padre mio, ricevete in eredità il Regno preparato per voi fin dalla fondazione del mondo\".", ru: "«Приидите, благословенные Отца Моего, наследуйте Царство, уготованное вам от создания мира»." },
    "ss-pray-amen": { it: "Amen.", ru: "Аминь." },
    "ss-ph":        { it: "[FOTO: San Sergio di Radonež, da inserire]", ru: "[ФОТО: преподобный Сергий Радонежский, будет добавлено]" },

    /* ============ Redesign Aesop: HOME + pagina "Il Circolo" ============ */
    "nav-circolo": { it: "Il Circolo", ru: "Ассоциация" },

    "hero-nome":  { it: "Circolo Internazionale Amici della Russia Imperiale", ru: "Международная ассоциация «Друзья Российской Империи»" },
    "hero-terza": { it: "Terza Roma", ru: "Третий Рим" },
    "hero-frase": { it: "Custodire la memoria e la bellezza della Russia imperiale.", ru: "Хранить память и красоту императорской России." },

    "home-chi-eye":  { it: "Chi siamo", ru: "КТО МЫ" },
    "home-chi-text": { it: "Un sodalizio culturale che custodisce la storia, l'arte e la spiritualità della Russia imperiale. Italiani, russi e discendenti di antiche famiglie dell'Impero, uniti da una stessa eredità.", ru: "Культурное сообщество, хранящее историю, искусство и духовность императорской России. Итальянцы, русские и потомки старинных семей Империи, объединённые общим наследием." },
    "home-chi-link": { it: "Scopri il Circolo", ru: "Узнать больше" },
    "home-storia-link": { it: "Leggi la storia", ru: "Читать историю" },
    "home-feste-link": { it: "Vedi il calendario", ru: "Открыть календарь" },
    "home-eventi-link": { it: "Vedi gli eventi", ru: "Смотреть мероприятия" },
    "home-galleria-link": { it: "Apri la galleria", ru: "Открыть галерею" },
    "home-tess-link": { it: "Diventa socio", ru: "Вступить в ассоциацию" },

    /* La nostra storia: sezione home (Passo 2) + articolo fondazione (Passo 3) */
    "home-fond-eye":  { it: "La nostra storia", ru: "НАША ИСТОРИЯ" },
    "home-fond-text": { it: "Il 16 giugno 2026, nel giorno dei Santi della Terra Russa, l'associazione nasce ufficialmente a Milano. Una storia che intreccia fede, memoria e appartenenza.", ru: "16 июня 2026 года, в день Всех святых, в земле Русской просиявших, ассоциация была официально основана в Милане. История, соединяющая веру, память и принадлежность." },
    "home-fond-link": { it: "Leggi la storia", ru: "Читать историю" },

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
    "btn-scopri":          { it: "Scopri di più", ru: "Узнать больше" },
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
    /* Variante per il modulo Contatti, dove il messaggio e obbligatorio. */
    "lbl-messaggio-obb": { it: "Messaggio", ru: "Сообщение" },
    "lbl-professione": { it: "Professione", ru: "Профессия" },
    "lbl-oggetto":  { it: "Oggetto", ru: "Тема" },

    /* --- Intestazioni di pagina --- */
    "ph-storia-h1":     { it: "Storia dell'Impero Russo", ru: "История Российской империи" },
    "ph-storia-lead":   { it: "Articoli, ritratti e approfondimenti dedicati alla storia dell'Impero Russo. Una pagina pensata per la lettura.", ru: "Статьи, портреты и очерки, посвящённые истории Российской империи. Страница, созданная для вдумчивого чтения." },
    "ph-eventi-lead":   { it: "Conferenze, incontri, escursioni e viaggi del Circolo. Qui trovi i prossimi appuntamenti e gli inviti.", ru: "Конференции, встречи, экскурсии и поездки ассоциации. Здесь публикуются предстоящие мероприятия и приглашения." },
    "ph-attualita-lead":{ it: "Estratti dalla stampa e dal web e articoli scritti dal Circolo su temi di attualita legati alla cultura russa.", ru: "Материалы из прессы и сети, а также статьи ассоциации на актуальные темы, связанные с русской культурой." },
    "ph-feste-lead":    { it: "Le ricorrenze religiose e civili dell'Impero Russo, con date, significato e tradizioni.", ru: "Религиозные и гражданские праздники Российской империи: даты, значение и традиции." },
    "ph-galleria-lead": { it: "L'archivio degli eventi gia svolti dal Circolo, con fotografie, racconto e rassegna stampa.", ru: "Архив уже состоявшихся мероприятий ассоциации: фотографии, описание и публикации в прессе." },
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
    "foot-tel-it": { it: "Italia: <a href=\"tel:+393355460464\">+39 335 546 0464</a>", ru: "Италия: <a href=\"tel:+393355460464\">+39 335 546 0464</a>" },
    "foot-tel-ru": { it: "Russia: <a href=\"tel:+79990052206\">+7 999 005 22 06</a>", ru: "Россия: <a href=\"tel:+79990052206\">+7 999 005 22 06</a>" },
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
    /* ===== Attualità: Processione della Croce a Mosca, 6 settembre 2026 ===== */
    "mosca-2026-date": { it: "Mosca / 6 settembre 2026", ru: "Москва / 6 сентября 2026 года" },
    "mosca-2026-title": { it: "Processione della Croce a Mosca: oltre 100.000 fedeli in cammino", ru: "Крестный ход в Москве: более 100 000 верующих приняли участие в шествии" },
    "mosca-2026-excerpt": { it: "La processione dedicata alla Sinassi di tutti i Santi di Mosca, guidata dal Patriarca Kirill, ha percorso circa 6,5 chilometri dalla Cattedrale di Cristo Salvatore al Monastero di Novodevičij. Ha partecipato anche una delegazione del Circolo.", ru: "Крестный ход, посвящённый празднику Собора Московских святых и возглавленный Святейшим Патриархом Кириллом, прошёл около 6,5 километра от храма Христа Спасителя до Новодевичьего монастыря. В мероприятии также приняла участие делегация ассоциации." },
    "mosca-2026-read": { it: "Leggi l'articolo", ru: "Читать статью" },
    "mosca-2026-p1": { it: "Domenica 6 settembre 2026, a Mosca, si è svolta l'annuale Processione della Croce, che ha visto una partecipazione di oltre 100.000 fedeli.", ru: "В воскресенье, 6 сентября 2026 года, в Москве состоялся ежегодный крестный ход, в котором приняли участие более 100 000 верующих." },
    "mosca-2026-p2": { it: "La solenne processione, dedicata alla festività della Sinassi di tutti i Santi di Mosca, è stata guidata da Sua Santità il Patriarca Kirill, capo della Chiesa ortodossa russa. I fedeli hanno sfilato per circa 6,5 chilometri dalla Cattedrale di Cristo Salvatore al Monastero di Novodevičij.", ru: "Торжественный крестный ход, посвящённый празднику Собора Московских святых, возглавил Святейший Патриарх Кирилл, Предстоятель Русской Православной Церкви. Верующие прошли около 6,5 километра от храма Христа Спасителя до Новодевичьего монастыря." },
    "mosca-2026-p3": { it: "Una delegazione del Circolo Amici della Russia Imperiale - Terza Roma, presente a Mosca in questi giorni, ha partecipato all'evento.", ru: "Делегация Международной культурной ассоциации «Друзья Российской Империи - Третий Рим», находившаяся в эти дни в Москве, также приняла участие в этом событии." },
    "mosca-2026-videos": { it: "Video dell'evento", ru: "Видеозаписи события" },
    "mosca-2026-video1": { it: "La Processione della Croce a Mosca guidata dal Patriarca Kirill", ru: "Крестный ход в Москве во главе с Патриархом Кириллом" },
    "mosca-2026-video2": { it: "Oltre 100.000 fedeli partecipano alla Processione della Croce", ru: "Более 100 000 верующих приняли участие в крестном ходе" },
    "mosca-2026-watch": { it: "Guarda il video", ru: "Смотреть видео" },
    "mosca-2026-back": { it: "Torna ad Attualità", ru: "Вернуться к разделу «Актуальное»" },
    "co-eyebrow": { it: "Scrivici", ru: "Напишите нам" },
    "co-h1": { it: "Modulo di contatto", ru: "Форма обратной связи" },
    "co-eyebrow2": { it: "Recapiti", ru: "Контактные данные" },
    "co-h2": { it: "Dove trovarci", ru: "Как нас найти" },
    "et-email": { it: "Email", ru: "Электронная почта" },
    "et-tel-it": { it: "Italia", ru: "Италия" },
    "et-tel-ru": { it: "Russia", ru: "Россия" },
    "et-fb": { it: "Facebook", ru: "Facebook" },
    "num-it": { it: "<a href=\"tel:+393355460464\">+39 335 546 0464</a>", ru: "<a href=\"tel:+393355460464\">+39 335 546 0464</a>" },
    "num-ru": { it: "<a href=\"tel:+79990052206\">+7 999 005 22 06</a>", ru: "<a href=\"tel:+79990052206\">+7 999 005 22 06</a>" },
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
    "romanov-label": { it: "Casa Romanov", ru: "Дом Романовых" },
    "romanov-title": { it: "Breve storia della dinastia Romanov", ru: "Краткая история династии Романовых" },
    "romanov-excerpt": { it: "Dalle origini nel XVI secolo alla fine dell'Impero Russo e alla successione contemporanea.", ru: "От истоков в XVI веке до конца Российской империи и современной линии престолонаследия." },
    "romanov-body": { it: "", ru:
      "<h2>Происхождение и восшествие на престол</h2>" +
      "<p>Романовы были второй династией русских государей после пресечения рода Рюриковичей в конце XVI века. Они правили до 1917 года, когда были отстранены от власти во время Февральской революции; многие представители семьи были убиты в ходе большевистской революции, другие бежали за границу, главным образом во Францию, Великобританию и Соединённые Штаты.</p>" +
      "<p>Романовы имеют общее происхождение с другими русскими дворянскими родами через Андрея Кобылу, боярина на службе у Симеона Русского и, предположительно, сына прусского князя Гланды Камбилы, прибывшего на Русь во второй половине XIII века, спасаясь от немецких завоевателей. Однако многие историки считают фактическим родоначальником московского боярина Романа Юрьевича Захарьина-Кошкина, жившего в XVI веке. Его дочь Анастасия Романовна Захарьина в 1547 году вышла замуж за царя Ивана IV Грозного и была коронована царицей.</p>" +
      "<p>В 1584 году Иван IV умер, и ему наследовал Фёдор I, сын Ивана и Анастасии. Благочестивый и, возможно, умственно слабый государь оставался на престоле до своей смерти в 1598 году, однако фактически управление разделяли его дядя Никита Романович, новгородский наместник и член регентского совета, и боярин Борис Годунов.</p>" +
      "<p>После бездетной смерти Фёдора семисотлетняя династия Рюриковичей пресеклась, и началась борьба двух группировок: одна поддерживала Бориса Годунова, другая хотела видеть царём Фёдора Никитича Романова, двоюродного брата Фёдора I. Сторонники Годунова после ряда интриг добились его избрания на царство. Стремясь обезопасить себя, новый царь сослал всех Романовых в отдалённые области на севере и на Урале, где многие умерли от голода или холода. Учитывая авторитет Фёдора Никитича, Борис не казнил его, а заставил его и супругу принять монашество и жить в Антониево-Сийском монастыре.</p>" +
      "<p>Со смертью Бориса Годунова в 1605 году началось так называемое Смутное время, когда на престоле сменились три самозванца, известные как Лжедмитрии и выдававшие себя за Дмитрия, исчезнувшего сына Ивана IV, вероятно убитого по приказу Бориса Годунова. В тот же период польско-литовские войска неоднократно вторгались в Россию и три года, с 1610 по 1612 год, занимали Москву.</p>" +
      "<p>После изгнания поляков из Москвы в 1612 году Земский собор предложил корону многим князьям из потомков Гедиминовичей и Рюриковичей, но все отказались. Наконец корона была предложена шестнадцатилетнему Михаилу Фёдоровичу, сыну Фёдора Никитича, уже принявшего монашество под именем Филарета и утратившего возможность наследовать престол. Юноша, живший с семьёй в Ипатьевском монастыре, сначала отказался, но мать, Ксения Ивановна Шестова, убедила его и благословила образом Феодоровской Божией Матери. Не считая свой престол достаточно прочным, Михаил подчёркивал кровное родство с последними Рюриковичами и часто созывал Земский собор для принятия важных решений. Благодаря этому первые Романовы пользовались большой любовью русского народа и считались законными преемниками Ивана IV.</p>" +
      "<h2>Пётр Великий и XVIII век</h2>" +
      "<p>В 1645 году Михаилу наследовал сын Алексей I, управлявший страной в условиях многочисленных трудностей. После его смерти в 1676 году развернулась династическая борьба между детьми от первого брака, Фёдором III, Софьей и Иваном V, и сторонниками семьи второй супруги, Натальи Кирилловны Нарышкиной, матери будущего царя Петра I, Петра Великого. В 1682 году Пётр был утверждён единственным царём. Он радикально преобразовал государство, превратив его в европейскую державу, принял наряду с титулом царя титул Императора Всероссийского и перенёс столицу из Москвы в Санкт-Петербург, построенный по его воле на недавно завоёванных землях у Финского залива.</p>" +
      "<p>После Петра Великого в 1725 году престол заняла его вторая супруга Екатерина I, а в 1727 году — внук Пётр II, ребёнок, правивший всего три года под опекой князя Меншикова. С его смертью мужская линия Романовых пресеклась. Преемницей стала единственная остававшаяся в живых дочь Ивана V, императрица Анна (1693-1740). Не имея детей, она назначила наследником правнука своей сестры, ставшего царём Иваном VI всего на несколько месяцев при регентстве матери. Затем великая княжна Елизавета, родственница покойной императрицы Анны и последняя живая дочь Петра Великого и Екатерины I, в 1741 году совершила государственный переворот и взошла на престол. Не имея потомства, она назначила наследником герцога Карла Петера Ульриха Гольштейн-Готторпского, сына своей старшей сестры и претендента на шведский престол. В 1762 году он стал Петром III, однако вскоре был свергнут и убит по воле супруги, провозгласившей себя императрицей Екатериной II и завершившей почти век дворцовой борьбы.</p>" +
      "<p>После блестящего и новаторского царствования Екатерины, во многом напоминавшей великого предка своего мужа Петра Великого, в 1796 году престол занял её сын Павел I. Он особенно гордился происхождением от этого императора, хотя в мемуарах мать намекала, что его настоящим отцом мог быть придворный Сергей Салтыков. Будучи единственным сыном и не имея близких двоюродных родственников из рода Романовых, Павел издал стройный закон о престолонаследии, один из самых строгих в тогдашней Европе, чтобы не допустить повторения кризисов XVII века. Династический закон основывался на агнатическом первородстве и требовал православного вероисповедания от монарха и членов династии, супруги императора и первых наследников престола.</p>" +
      "<h2>XIX век</h2>" +
      "<p>После нескольких лет правления Павел I был убит в результате дворцового заговора в 1801 году, но монархия оставалась прочной в руках его сына Александра I. При поддержке братьев и сестёр он руководил Россией во время Наполеоновских войн. Учитывая возможность морганатического брака брата и наследника Константина, император изменил закон о престолонаследии, добавив условие, согласно которому супруги членов династии должны происходить из царствующего или владетельного дома, иначе их дети лишались всех прав.</p>" +
      "<p>Великий князь Константин отказался от престола, и после смерти Александра I в 1825 году ему наследовал младший брат Николай I. Подобно отцу Павлу I он укреплял армию, но затем столкнулся с Крымской войной; говорили, что в 1855 году царь умер от горя. У Николая I было четыре сына, от которых произошли четыре главные ветви Романовых: Александровичи, к которым принадлежали его преемники на престоле и чья старшая линия ныне пресеклась, тогда как боковая ветвь Владимировичей существует и считается законной линией престолонаследия; Николаевичи, некоторые представители которых живы и сегодня; Константиновичи, многие из которых были убиты после Октябрьской революции, а мужская линия пресеклась в 1973 году и женская в 2007 году; и Михайловичи, существующие поныне и оспаривающие притязания Владимировичей. Николай I уделял особое внимание воспитанию сыновей, тщательно выбирал наставников и отправлял их в путешествия по Европе. Его сын Константин реформировал флот, а сын Николай был выдающимся военачальником.</p>" +
      "<p>Преемник Александр II был образованным и умным человеком, первым стремлением которого стало восстановление мира между Россией и остальной Европой. Полагая, что за рубежом мир обеспечивается сильной армией, а внутри страны — реформами, он реорганизовал императорские вооружённые силы, расширил свободы Великого княжества Финляндского и в 1861 году отменил крепостное право. Это принесло ему поддержку интеллигенции и реформаторов, но также вызвало неприязнь части дворянства и революционеров-нигилистов. Овдовев, он женился на княжне Екатерине Долгоруковой, с которой прежде состоял в отношениях, и узаконил их детей. Возможность её коронации как императрицы и прекращения морганатического статуса брака вызвала серьёзные разногласия в императорской семье. Великие княгини особенно возмущались перспективой оказаться ниже княгини Долгоруковой по рангу, поскольку придворный протокол отдавал императрице первенство перед другими членами семьи. 13 марта 1881 года, когда Александр II готовился представить конституционный проект, способный сделать империю либеральной монархией, он был убит в результате покушения нигилистов.</p>" +
      "<p>Во второй половине XIX века всё большее влияние приобретали славянский патриотизм, связанный с культурным возрождением, и панславистские идеи, побуждавшие династию становиться более русской. От членов императорской семьи ожидали большей религиозной преданности Русской православной церкви; на лицах великих князей вновь появились бороды — славянский символ, который Пётр Великий в соответствии с западной модой когда-то велел убрать; заключались первые браки с принцессами других славянских или православных монархий. Некоторым княжнам младших ветвей было даже позволено вступать в брак с представителями высшего русского дворянства, тогда как до 1850 года члены династии преимущественно женились на принцах и принцессах германского происхождения.</p>" +
      "<p>Александру II наследовал сын Александр III, первый со времён Ивана царь с бородой и усами. Это был огромный и внушительный человек, обладавший большой физической силой и авторитарным характером. Он восстановил самодержавие и твёрдо управлял Россией, свернув многие реформы Александра II, способные сделать империю более либеральной. Александр III женился на Дагмар Датской, невесте своего старшего брата, умершего молодым. Несмотря на разницу в характерах и сложении — он был могучим мужчиной ростом почти два метра, она маленькой и хрупкой женщиной — супруги были счастливы и имели шестерых детей.</p>" +
      "<h2>Николай II и конец Империи</h2>" +
      "<p>Старший сын Николай наследовал отцу после его преждевременной смерти в 1894 году в возрасте всего 49 лет. Не подготовленный к своей роли, у смертного одра отца он плакал в объятиях молодого двоюродного брата и шурина, великого князя Александра: &laquo;Я не готов, я этого не хочу. Я не царь&raquo;. Николай II не получил полного образования, необходимого государю, и продолжил политику отца, следуя советам супруги Александры Фёдоровны, немецкой принцессы, ещё не вполне понимавшей действительность Российской империи. Царицу также мучили страх и чувство вины из-за болезни, переданной единственному сыну и наследнику, великому князю Алексею. Гемофилия делала жизнь мальчика тяжёлой и постоянно угрожала ей. Всё это толкало Александру к всё более глубокому мистицизму и отдаляло от двора, дворянства и императорской семьи, общества которой она избегала.</p>" +
      "<p>Когда в 1913 году Романовы отмечали трёхсотлетие своего восшествия на престол, торжества были омрачены зловещими предзнаменованиями: лик почитаемой Феодоровской иконы Божией Матери, покровительницы семьи, потемнел, а монах Григорий Ефимович Распутин, пользовавшийся большим доверием царицы, предрёк, что власть Романовых падёт, если Россия вступит в войну, и не переживёт его смерти более чем на два года, если к ней окажется причастен кто-либо из членов семьи.</p>" +
      "<p>В следующем году Россия вступила в Первую мировую войну против Германии, откуда происходила царица. Несмотря на глубокую православную веру, она стала мишенью народного недовольства. Пока царь находился на фронте, она влияла на политику, оттолкнув от себя многих представителей двора и российского политического мира. Из-за огромного влияния Распутина группа заговорщиков убила монаха 16 декабря 1916 года. Организатором убийства был князь Феликс Юсупов, супруг великой княгини Ирины Александровны Романовой; участвовал и великий князь Дмитрий Павлович, двоюродный брат царя. Всего два месяца спустя, во время Февральской революции 1917 года, Николай II был вынужден отречься от престола за себя и сына в пользу брата Михаила. Михаил отказался принять корону, и царствование Романовых в России завершилось.</p>" +
      "<p>Николай II и его семья были помещены новым правительством под домашний арест, тогда как нескольким членам императорской семьи, в том числе двоюродному брату царя великому князю Кириллу, предполагавшемуся наследнику после Михаила, удалось установить хорошие отношения с Временным правительством и покинуть Россию до Октябрьской революции. После прихода большевиков к власти Николая II с семьёй перевезли в Екатеринбург за Урал.</p>" +
      "<p>Тем временем часть вооружённых сил и граждан восстала против победивших большевиков, создав многочисленные контрреволюционные армии, получившие название Белых, и начав страшную гражданскую войну, унёсшую миллионы жизней. Она завершилась лишь в 1921 году победой Советов, чему способствовала пассивность западного мира, недооценившего большевистскую угрозу и оказавшего Белым армиям лишь ограниченную поддержку.</p>" +
      "<p>Однако летом 1918 года Белые казались близкими к изменению политической ситуации, а армия адмирала Колчака наступала с востока на Екатеринбург. Опасаясь освобождения Николая II, Уральский совет распорядился расстрелять его вместе со всей семьёй и немногими слугами 17 июля 1918 года. Тела были расчленены и сожжены большевиками; обнаруженные в конце XX века останки ныне покоятся в Санкт-Петербурге, в Петропавловском соборе.</p>" +
      "<h2>Семья после революции</h2>" +
      "<p>Многие члены Императорской семьи, бежавшие за границу, чтобы избежать грозившей им расправы, поселились во Франции, Соединённых Штатах Америки, Великобритании, Италии и у родственников, которые могли или хотели их принять. Они нередко заключали браки вопреки династическим законам и тем самым утрачивали права престолонаследия.</p>" +
      "<p>Сегодня официальной наследницей Всероссийского престола является великая княгиня Мария Владимировна Романова, родившаяся в 1953 году. Ей должен наследовать великий князь Георгий Михайлович Романов, родившийся в 1981 году, гражданин России и десятый в линии наследования германского императорского престола как сын Гогенцоллерна, принца Франца Вильгельма Прусского. Георгий женился на итальянской графине Ребекке Беттарини; императорская чета живёт в России и имеет двоих детей, сына и дочь.</p>" +
      "<p>Эта линия престолонаследия оспаривалась князем Николаем Романовичем Романовым, умершим в 2014 году без сыновей. Представителем этой ветви является князь Алексис Андреевич Романов, гражданин США, живущий в Соединённых Штатах.</p>" +
      "<h2>Государи династии Романовых</h2>" +
      "<p>Полный список государей династии Романовых в хронологическом порядке:</p>" +
      "<ol class='romanov-rulers'>" +
      "<li><strong>Михаил I</strong> (1613-1645) — первый царь династии.</li>" +
      "<li><strong>Алексей I</strong> (1645-1676) — сын Михаила.</li>" +
      "<li><strong>Фёдор III</strong> (1676-1682) — сын Алексея.</li>" +
      "<li><strong>Иван V</strong> (1682-1696) — соправитель своего единокровного брата Петра I.</li>" +
      "<li><strong>Пётр I Великий</strong> (1682-1725) — преобразовал царство в Российскую империю.</li>" +
      "<li><strong>Екатерина I</strong> (1725-1727) — вторая супруга Петра Великого.</li>" +
      "<li><strong>Пётр II</strong> (1727-1730) — внук Петра Великого.</li>" +
      "<li><strong>Анна I</strong> (1730-1740) — дочь Ивана V.</li>" +
      "<li><strong>Иван VI</strong> (1740-1741) — свергнут государственным переворотом в младенчестве.</li>" +
      "<li><strong>Елизавета I</strong> (1741-1762) — дочь Петра Великого.</li>" +
      "<li><strong>Пётр III</strong> (1762) — внук Петра Великого, правил несколько месяцев.</li>" +
      "<li><strong>Екатерина II Великая</strong> (1762-1796) — супруга Петра III, просвещённая императрица.</li>" +
      "<li><strong>Павел I</strong> (1796-1801) — сын Екатерины II.</li>" +
      "<li><strong>Александр I</strong> (1801-1825) — победил Наполеона.</li>" +
      "<li><strong>Николай I</strong> (1825-1855) — брат Александра I.</li>" +
      "<li><strong>Александр II</strong> (1855-1881) — отменил крепостное право и погиб в результате покушения.</li>" +
      "<li><strong>Александр III</strong> (1881-1894) — сторонник строгого самодержавия.</li>" +
      "<li><strong>Николай II</strong> (1894-1917) — последний царь, вынужденный отречься от престола и убитый вместе с семьёй большевиками в 1918 году.</li>" +
      "</ol>"
    },
    "romanov-oggi-label": { it: "La dinastia oggi", ru: "Династия сегодня" },
    "romanov-oggi-title": { it: "La famiglia imperiale Romanov oggi", ru: "Императорская семья Романовых сегодня" },
    "romanov-oggi-excerpt": { it: "La continuità della Casa Imperiale dopo la Rivoluzione e i suoi rappresentanti contemporanei.", ru: "Преемственность Императорского Дома после революции и его современные представители." },
    "romanov-oggi-link": { it: "Scopri la famiglia Romanov oggi", ru: "Узнать о семье Романовых сегодня" },
    "romanov-storia-link": { it: "Leggi la storia della dinastia Romanov", ru: "Читать историю династии Романовых" },
    "romanov-oggi-gallery": { it: "La famiglia in immagini", ru: "Семья в фотографиях" },
    "romanov-oggi-cap1": { it: "La granduchessa Marija Vladimirovna.", ru: "Великая княгиня Мария Владимировна." },
    "romanov-oggi-cap2": { it: "La granduchessa Marija Vladimirovna e il granduca George Romanov.", ru: "Великая княгиня Мария Владимировна и великий князь Георгий Романов." },
    "romanov-oggi-cap3": { it: "Il granduca George Romanov con la moglie Victoria Romanova.", ru: "Великий князь Георгий Романов с супругой Викторией Романовой." },
    "romanov-oggi-cap4": { it: "Il granduca George Romanov con la sua famiglia.", ru: "Великий князь Георгий Романов со своей семьёй." },
    "romanov-oggi-body": { it: "", ru:
      "<h2>Престолонаследие в изгнании</h2>" +
      "<p>После революции большинство оказавшихся в эмиграции представителей семьи Романовых объединилось вокруг великого князя Кирилла Владимировича, занимавшего первое место в линии престолонаследия среди выживших Романовых. 8 августа 1922 года Кирилл Владимирович объявил себя Блюстителем Государева Престола, а 31 августа 1924 года принял титул Императора Всероссийского Кирилла I, тем самым автоматически возведя своих детей в достоинство великих князей Российских. Кирилл содержал во Франции собственный двор в изгнании и создал организацию для координации монархических движений и русской эмиграции.</p>" +
      "<p>В 1938 году Кирилл умер, и в качестве претендента ему наследовал единственный сын, великий князь Владимир. Он никогда публично не принимал императорский титул, но в следующем году возвёл троюродного брата своего отца и верного сторонника его прав великого князя Гавриила Константиновича Романова в достоинство великого князя. Таким образом, Гавриил стал единственным князем Романовым, которому этот титул был пожалован ad personam со времён императрицы Елизаветы I, сделавшей это для своего племянника, будущего Петра III.</p>" +
      "<h2>Династическая преемственность</h2>" +
      "<p>11 октября 1938 года с одобрения Владимира пять представителей династии, следовавших непосредственно за ним в порядке наследования, три великих князя и два князя Российских, опубликовали документ значительной юридической важности, в котором изложили своё понимание престолонаследия. Его подписали великие князья Борис Владимирович Романов, первый после Владимира в линии наследования, его брат Андрей Владимирович, второй, Дмитрий Павлович, третий, а также князья Всеволод Иванович и Гавриил Константинович, четвёртый и пятый. Документ признавал Владимира Главой Российского Императорского Дома и перечислял живых членов династии, имевших право наследовать ему, в установленном порядке. Тем самым из линии престолонаследия исключались многочисленные потомки от морганатических браков, не соответствовавших династическому закону семьи Романовых.</p>" +
      "<p>В 1948 году Владимир Кириллович женился на Леониде Георгиевне Кирби, урождённой княжне Леониде Багратион-Мухранской, которая после брака стала великой княгиней Леонидой Георгиевной Российской. Союз был признан династическим в соответствии с Основными законами Российского Императорского Дома. Несмотря на прежний развод, к моменту второго брака княгиня Леонида была вдовой; кроме того, она принадлежала к старшей ветви династии Багратионов и потому рассматривалась как княжна царской крови. Наконец, сам Владимир как Глава Российского Императорского Дома обладал правом толковать статус супруги члена императорской семьи.</p>" +
      "<p>В 1969 году Владимир, не имевший сыновей и предвидевший скорое пресечение мужского потомства династических Романовых, объявил свою дочь Марию Владимировну будущей Блюстительницей Престола. В 1989 году, после смерти князя Василия Александровича, последнего признанного наследника мужского пола, он официально провозгласил её династической наследницей.</p>" +
      "<h2>Императорский Дом сегодня</h2>" +
      "<p>Сегодня законной наследницей и признанной Главой Российского Императорского Дома является Её Императорское Высочество великая княгиня Мария Владимировна Романова, родившаяся в 1953 году и ранее состоявшая в браке с принцем Францем Вильгельмом Гогенцоллерном Прусским. У супругов, разведённых в 1985 году, в 1981 году родился наследник, цесаревич Его Императорское Высочество великий князь Георгий Михайлович Романов. Великий князь, ныне гражданин России и десятый в линии наследования германского императорского престола, в 2021 году женился на итальянской графине Ребекке Беттарини, принявшей в православии имя Виктории Романовой. У супругов двое детей: князь Александр, родившийся 21 октября 2022 года, и княжна Кира Леонида, родившаяся 2 июня 2025 года.</p>" +
      "<p>Эту линию престолонаследия оспаривал князь Николай Романович Романов, умерший в 2014 году без сыновей и опиравшийся на так называемое &laquo;Объединение членов рода Романовых&raquo;. Представителем этой ветви является князь Алексис Андреевич Романов, гражданин США, живущий в Соединённых Штатах.</p>"
    },
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

    /* --- Punto 4: consenso privacy, validazione e stati di invio del modulo --- */
    "te-privacy":     { it: "Ho letto e accetto la <a href=\"privacy.html\">Privacy Policy</a>.", ru: "Я прочитал(а) и принимаю <a href=\"privacy.html\">Политику конфиденциальности</a>." },
    "te-invio":       { it: "Invio in corso...", ru: "Отправка..." },
    "err-obbligo":    { it: "Questo campo e obbligatorio.", ru: "Это поле обязательно для заполнения." },
    "err-email":      { it: "Inserisci un indirizzo email valido.", ru: "Введите действительный адрес электронной почты." },
    "err-privacy":    { it: "Per proseguire e necessario accettare la Privacy Policy.", ru: "Для продолжения необходимо принять Политику конфиденциальности." },
    "err-invio":      { it: "Non siamo riusciti a inviare la richiesta. Riprova piu tardi oppure scrivici a <a href=\"mailto:russia.imperiale@yandex.com\">russia.imperiale@yandex.com</a>.", ru: "Не удалось отправить заявку. Попробуйте позже или напишите нам на <a href=\"mailto:russia.imperiale@yandex.com\">russia.imperiale@yandex.com</a>." },
    "err-invio-msg":  { it: "Non siamo riusciti a inviare il messaggio. Riprova piu tardi oppure scrivici a <a href=\"mailto:russia.imperiale@yandex.com\">russia.imperiale@yandex.com</a>.", ru: "Не удалось отправить сообщение. Попробуйте позже или напишите нам на <a href=\"mailto:russia.imperiale@yandex.com\">russia.imperiale@yandex.com</a>." },

    /* --- Pagina di ringraziamento dopo l'invio del modulo di contatto --- */
    "grm-title":  { it: "Grazie per il tuo messaggio", ru: "Спасибо за ваше сообщение" },
    "grm-text":   { it: "Abbiamo ricevuto il tuo messaggio. Ti risponderemo al piu presto.", ru: "Мы получили ваше сообщение. Мы ответим вам в ближайшее время." },

    /* --- Punto 1: pagina di ringraziamento dopo l'invio della richiesta --- */
    "gr-eyebrow": { it: "Tesseramento", ru: "ВСТУПЛЕНИЕ В АССОЦИАЦИЮ" },
    "gr-title":   { it: "Grazie per la tua richiesta", ru: "Спасибо за вашу заявку" },
    "gr-text":    { it: "Abbiamo ricevuto la tua richiesta di adesione. Ti invieremo una email con tutte le informazioni. A presto.", ru: "Мы получили вашу заявку на вступление. Мы отправим вам письмо со всей информацией. До скорой встречи." },
    "gr-home":    { it: "Torna alla home", ru: "Вернуться на главную" },

    /* --- Blocco 4: modulo cartaceo di iscrizione + quote associative --- */
    "te-pdf-h":    { it: "Modulo di iscrizione", ru: "Бланк заявления" },
    "te-pdf-btn":  { it: "Scarica il modulo di iscrizione (PDF)", ru: "Скачать бланк заявления (PDF)" },
    "te-pdf-nota": { it: "Il modulo va stampato, compilato, firmato e consegnato o inviato al Circolo. Per informazioni scrivere a <a href=\"mailto:russia.imperiale@yandex.com\">russia.imperiale@yandex.com</a>.", ru: "Бланк необходимо распечатать, заполнить, подписать и передать или отправить в ассоциацию. По всем вопросам пишите на <a href=\"mailto:russia.imperiale@yandex.com\">russia.imperiale@yandex.com</a>." },
    "te-quote-h":  { it: "Quote associative", ru: "Годовые взносы" },
    "te-q1-n":     { it: "Socio sostenitore", ru: "Участник-благотворитель" },
    "te-q2-n":     { it: "Socio ordinario", ru: "Действительный участник" },
    "te-q3-n":     { it: "Socio junior (fino a 21 anni)", ru: "Юниор (до 21 года)" },
    "te-q1-v":     { it: "50 euro", ru: "50 евро" },
    "te-q2-v":     { it: "20 euro", ru: "20 евро" },
    "te-q3-v":     { it: "10 euro", ru: "10 евро" },

    /* --- Blocco 2: Eventi (solo futuri) e Galleria (archivio eventi passati) --- */
    "ev-nessuno":     { it: "Le prossime date verranno pubblicate qui.", ru: "Ближайшие даты будут опубликованы здесь." },
    "ev-prossimi-h":  { it: "Prossimi appuntamenti", ru: "Предстоящие мероприятия" },
    "ev-1812-date":    { it: "13 settembre 2026", ru: "13 сентября 2026 года" },
    "ev-1812-title":   { it: "La Guerra Patriottica del 1812", ru: "Отечественная война 1812 года" },
    "ev-1812-details": { it: "Conferenza a Milano, domenica alle ore 15.00, presso la Chiesa Ortodossa dei Santi Sergio, Serafino e Vincenzo Martire.", ru: "Конференция в Милане в воскресенье в 15:00, в православном храме святых Сергия, Серафима и мученика Викентия." },
    "ev-poster-link":  { it: "Apri la locandina", ru: "Открыть афишу" },
    "ga-archivio-h":  { it: "Eventi passati", ru: "Прошедшие мероприятия" },
    "ga-foto-sub":    { it: "Fotografie della cerimonia", ru: "Фотографии церемонии" },
    "ga-press-sub":   { it: "Rassegna stampa", ru: "Публикации в прессе" },
    "ga-video-link":  { it: "Guarda il video della cerimonia", ru: "Смотреть видео церемонии" },

    /* --- Partnership --- */
    "nav-partnership": { it: "Partnership", ru: "Партнёры" },
    "part-h1":    { it: "Partnership", ru: "Партнёрство" },
    "part-intro": { it: "Le realtà e i progetti culturali vicini al Circolo.", ru: "Организации и культурные проекты, близкие ассоциации." },
    "part-altri": { it: "Altre realtà partner", ru: "Другие партнёры" },

    "tdc-title":   { it: "Tra due culture", ru: "Между двух культур" },
    "tdc-sub":     { it: "Un progetto di Oxana Senchenko Pasqualino di Marineo", ru: "Проект Оксаны Сенченко Паскуалино ди Маринео" },
    "part-tdc-desc": { it: "Un progetto di divulgazione culturale dedicato al dialogo tra Italia e Russia: artisti, architetti e intellettuali che nei secoli hanno intrecciato le due culture, raccontati con rigore storico e senza stereotipi. Ideato da Oxana Senchenko, nata a Mosca e da oltre trent'anni in Italia.", ru: "Проект культурного просвещения, посвящённый диалогу между Италией и Россией: художники, архитекторы и мыслители, на протяжении веков связывавшие две культуры, представленные с исторической точностью и без стереотипов. Создан Оксаной Сенченко, родившейся в Москве и уже более тридцати лет живущей в Италии." },
    "part-social": { it: "Segui il progetto", ru: "Следить за проектом" },

    "part-desc-soon": { it: "Descrizione in arrivo.", ru: "Описание скоро." },
    "part-scopri":    { it: "Scopri di più", ru: "Подробнее" },
    "part-p1-name": { it: "Associazione Aristocrazia Europea", ru: "Ассоциация Европейской Аристократии" },
    "part-p2-name": { it: "Santa Rus", ru: "Святая Русь" },
    "part-p3-name": { it: "Ordine Giovannita", ru: "Орден иоаннитов" },
    "part-p4-name": { it: "Ordine del Drago", ru: "Орден Дракона" },

    /* --- Banner cookie (informativo) --- */
    "cb-text": { it: "Questo sito utilizza solo cookie tecnici necessari al suo funzionamento.", ru: "Этот сайт использует только технические файлы cookie, необходимые для его работы." },
    "cb-link": { it: "Leggi la Cookie Policy", ru: "Политика cookie" },
    "cb-btn":  { it: "Ho capito", ru: "Понятно" },

    /* --- Pagine legali interne (Privacy + Cookie), IT/RU --- */
    "legal-updated": { it: "Ultimo aggiornamento: [DATA]", ru: "Последнее обновление: [ДАТА]" },

    "pp-title": { it: "Informativa sulla Privacy", ru: "Политика конфиденциальности" },
    "pp-intro": { it: "Ai sensi del Regolamento (UE) 2016/679 (GDPR), questa informativa descrive come vengono trattati i dati personali degli utenti di questo sito.", ru: "В соответствии с Регламентом (ЕС) 2016/679 (GDPR) настоящая политика описывает, каким образом обрабатываются персональные данные пользователей этого сайта." },
    "pp-h1": { it: "Titolare del trattamento", ru: "Оператор обработки данных" },
    "pp-p1": { it: "Il titolare del trattamento è [NOME COMPLETO DELL'ASSOCIAZIONE], con sede in [INDIRIZZO COMPLETO]. Per qualsiasi questione relativa ai dati personali è possibile scrivere a russia.imperiale@yandex.com.", ru: "Оператором обработки данных является [ПОЛНОЕ НАЗВАНИЕ АССОЦИАЦИИ], с местонахождением по адресу [ПОЛНЫЙ АДРЕС]. По любым вопросам, связанным с персональными данными, можно написать по адресу russia.imperiale@yandex.com." },
    "pp-h2": { it: "Quali dati raccogliamo", ru: "Какие данные мы собираем" },
    "pp-p2": { it: "Questo sito raccoglie esclusivamente i dati che l'utente fornisce volontariamente compilando il modulo di contatto: nome, indirizzo email e contenuto del messaggio. Non raccogliamo altri dati personali e non effettuiamo profilazione.", ru: "Этот сайт собирает исключительно данные, которые пользователь добровольно предоставляет при заполнении контактной формы: имя, адрес электронной почты и текст сообщения. Мы не собираем иные персональные данные и не осуществляем профилирование." },
    "pp-h3": { it: "Finalità e base giuridica", ru: "Цели и правовое основание" },
    "pp-p3": { it: "I dati forniti tramite il modulo di contatto sono trattati al solo scopo di rispondere alle richieste dell'utente. La base giuridica è il consenso dell'utente, espresso con l'invio del messaggio.", ru: "Данные, предоставленные через контактную форму, обрабатываются исключительно с целью ответа на обращения пользователя. Правовым основанием является согласие пользователя, выраженное при отправке сообщения." },
    "pp-h4": { it: "Conservazione dei dati", ru: "Хранение данных" },
    "pp-p4": { it: "I dati sono conservati per il tempo necessario a gestire la richiesta e adempiere a eventuali obblighi di legge, dopodiché vengono cancellati.", ru: "Данные хранятся в течение времени, необходимого для обработки обращения и выполнения возможных обязательств по закону, после чего удаляются." },
    "pp-h5": { it: "Comunicazione dei dati", ru: "Передача данных" },
    "pp-p5": { it: "I dati non sono diffusi né ceduti a terzi. Possono essere trattati unicamente dalle persone autorizzate dell'associazione per rispondere alle richieste.", ru: "Данные не разглашаются и не передаются третьим лицам. Они могут обрабатываться исключительно уполномоченными лицами ассоциации для ответа на обращения." },
    "pp-h6": { it: "Diritti dell'utente", ru: "Права пользователя" },
    "pp-p6": { it: "L'utente ha diritto di accedere ai propri dati, chiederne la rettifica o la cancellazione, limitarne o opporsi al trattamento, e proporre reclamo all'Autorità Garante per la protezione dei dati personali. Per esercitare questi diritti può scrivere a russia.imperiale@yandex.com.", ru: "Пользователь имеет право получить доступ к своим данным, потребовать их исправления или удаления, ограничить обработку или возразить против неё, а также подать жалобу в надзорный орган по защите персональных данных. Для реализации этих прав можно написать по адресу russia.imperiale@yandex.com." },

    "cp-title": { it: "Informativa sui Cookie", ru: "Политика использования файлов cookie" },
    "cp-intro": { it: "Questa informativa spiega come questo sito utilizza i cookie.", ru: "Настоящая политика объясняет, каким образом этот сайт использует файлы cookie." },
    "cp-h1": { it: "Cosa sono i cookie", ru: "Что такое файлы cookie" },
    "cp-p1": { it: "I cookie sono piccoli file di testo che i siti salvano sul dispositivo dell'utente per funzionare correttamente o raccogliere informazioni.", ru: "Файлы cookie — это небольшие текстовые файлы, которые сайты сохраняют на устройстве пользователя для корректной работы или сбора информации." },
    "cp-h2": { it: "Cookie utilizzati da questo sito", ru: "Файлы cookie, используемые этим сайтом" },
    "cp-p2": { it: "Questo sito utilizza esclusivamente cookie tecnici necessari al suo corretto funzionamento. Non utilizziamo cookie di profilazione né cookie di marketing.", ru: "Этот сайт использует исключительно технические файлы cookie, необходимые для его корректной работы. Мы не используем файлы cookie для профилирования или маркетинга." },
    "cp-h3": { it: "Gestione dei cookie", ru: "Управление файлами cookie" },
    "cp-p3": { it: "L'utente può in ogni momento gestire o disattivare i cookie tramite le impostazioni del proprio browser. La disattivazione dei cookie tecnici potrebbe compromettere alcune funzionalità del sito.", ru: "Пользователь может в любой момент управлять файлами cookie или отключить их в настройках своего браузера. Отключение технических файлов cookie может нарушить работу некоторых функций сайта." },

    /* --- Placeholder dei campi (attributo placeholder) --- */
    "ph-msg": { it: "Presentati in breve e indica perche desideri iscriverti.", ru: "Расскажите нам о своём интересе к истории и культуре Российской империи." }
  };

  /* ===================================================================
     INGLESE (EN): traduzioni scritte a mano. NIENTE traduzione automatica.
     Dove la stringa inglese manca, si mostra "[English version coming soon]"
     finche il cliente non fornisce la traduzione ufficiale.
     =================================================================== */
  var EN_PLACEHOLDER = "[English version coming soon]";
  var EN = {
    "num-ro": "<a href=\"tel:+40731316456\">+40 731 316 456</a>",
    "et-tel-ro": "Romania",
    "foot-tel-ro": "Romania: <a href=\"tel:+40731316456\">+40 731 316 456</a>",
    "gl1-data": "17 July 2026",
    "gl1-title": "Divine Liturgy in memory of the Martyrdom of the Holy Imperial Family",
    "gl1-p1": "On 17 July 2026, at the Orthodox Church of Saints Sergius, Seraphim and Vincent the Martyr in Milan, the Divine Liturgy was celebrated in memory of the martyrdom of the Imperial Family: Emperor Nicholas II, Empress Alexandra, Tsarevich Alexei and the Grand Duchesses Olga, Tatiana, Maria and Anastasia, killed during the Bolshevik revolution.",
    "gl1-p2": "In his homily, the rector of the church, Father Silouan, emphasised the deep Christian faith of Emperor Nicholas, which led him to a martyr's death.",
    "gl1-p3": "Among those present were Baron Antonio Imperatore, honorary president and representative of the association in Italy, Giovanni Trombetta, and Commander Rudolf Kniesel, restorer and binder of ancient books.",
    "gl2-data": "26 June 2026",
    "gl2-title": "Ceremony at Villa Sormani Marzorati Uva in Missaglia",
    "gl2-p1": "On 26 June 2026, on the occasion of the visit of Hieromonk Ambrose Matsegora, Vicar General of the Russian Orthodox Church of the Patriarchate of Moscow in Italy, a ceremony was held at Villa Sormani Marzorati Uva in Missaglia, in Brianza, during which the Metropolia of Western Europe conferred certificates of merit upon a group of Italian and foreign figures, both Catholic and Orthodox, for cultural and social service, among them several members and friends of our Circle. Further honours were presented by Princess Silvia Andronik Cantacuzino, guest of honour of the evening. The ceremony was organised by the Imperial Russian Orthodox Chivalric Brotherhood of Saint John of Jerusalem and of Malta, with the active participation of our Circle.",
    "gl2-p2": "Father Ambrose was accompanied by the secretary Father Adrian, prior of the organising brotherhood, and by Father Vasily, parish priest of the Russian Orthodox community of Saronno. About one hundred people were present, including civil, military and diplomatic authorities.",
    "gl2-p3": "The ceremony was followed by a guided visit to the villa, a building of Roman origin that underwent successive transformations over the centuries. Count Alberto Uva is its present owner and a promoter of cultural initiatives connected with the history of the Brianza region.",
    "fs-nat-d": "25 December / 7 January",
    "fs-nat-n": "Nativity of Christ",
    "fs-nat-t": "The Nativity of Christ is, after Pascha, the most solemn feast of the liturgical year. It is preceded by forty days of fasting and culminates in the night vigil. In Russia the feast unites the liturgy with domestic traditions: the eve supper, carols and visits among families. It opens the Svyatki, the twelve holy days until Theophany.",
    "fs-teo-d": "6 / 19 January",
    "fs-teo-n": "Holy Theophany and the Baptism of the Lord",
    "fs-teo-t": "The feast recalls the Baptism of Christ in the Jordan and the manifestation of the Holy Trinity. Its central rite is the Great Blessing of the Waters, celebrated in church and at rivers and springs. In Russia it is customary to immerse oneself in the blessed waters, often through a cross-shaped opening cut in the ice. The blessed water is kept by the faithful throughout the year.",
    "fs-pres-d": "2 / 15 February",
    "fs-pres-n": "Presentation of the Lord in the Temple",
    "fs-pres-t": "Forty days after the Nativity, the Church recalls the presentation of the Child Jesus in the Temple of Jerusalem and the meeting with the righteous Symeon. The Slavonic name of the feast, Sretenie, means precisely meeting: that of the Old and the New Testament. It is one of the twelve great feasts of the Orthodox calendar. On this day candles are blessed.",
    "fs-annu-d": "25 March / 7 April",
    "fs-annu-n": "Holy Annunciation",
    "fs-annu-t": "The feast celebrates the announcement of the Archangel Gabriel to the Virgin Mary and the beginning of the Incarnation. It always falls during Great Lent and, by reason of its importance, permits a mitigation of the fast. In Russia the ancient custom of releasing birds from their cages has been preserved, a sign of the freedom given to man. It is one of the twelve great feasts.",
    "fs-orto-d": "Movable feast, first Sunday of Great Lent",
    "fs-orto-n": "Sunday of Orthodoxy",
    "fs-orto-t": "The first Sunday of Great Lent commemorates the restoration of the veneration of the holy icons, established in 843 after the long iconoclast crisis. The liturgy solemnly proclaims the faith of the seven Ecumenical Councils. In many churches the faithful carry their family icons in procession. It is the feast of the very identity of the Orthodox Church.",
    "fs-palme-d": "Movable feast, the Sunday before Pascha",
    "fs-palme-n": "Palm Sunday",
    "fs-palme-t": "The feast recalls the entry of Christ into Jerusalem, welcomed by the crowd with palm branches. In the Russian tradition, where palms do not grow, blossoming willow branches are blessed: hence the popular name Verbnoe voskresenie, Willow Sunday. The blessed branches are kept at home beside the icons. The feast opens Holy Week.",
    "fs-pasqua-d": "Movable feast, according to the Orthodox calendar",
    "fs-pasqua-n": "Orthodox Pascha",
    "fs-pasqua-t": "The Resurrection of Christ is the feast of feasts, the centre of the whole liturgical year. The celebration culminates in the night vigil, when the priest proclaims Christ is risen and the assembly answers Truly He is risen. The kulich, the cheese paskha and painted eggs are blessed. The paschal joy continues for forty days.",
    "fs-asc-d": "Movable feast, forty days after Pascha",
    "fs-asc-n": "Ascension of the Lord",
    "fs-asc-t": "Forty days after the Resurrection the Church celebrates the ascension of Christ into heaven, in the presence of the apostles on the Mount of Olives. The feast closes the paschal season and prepares for Pentecost. The liturgy stresses that human nature, assumed by Christ, is borne to the right hand of the Father. It is one of the twelve great feasts.",
    "fs-pent-d": "Movable feast, fifty days after Pascha",
    "fs-pent-n": "Pentecost",
    "fs-pent-t": "Fifty days after Pascha the Church celebrates the descent of the Holy Spirit upon the apostles and the birth of the Church. In Russia the feast is called the Day of the Holy Trinity: churches and homes are adorned with birch branches and fresh grasses, a sign of new life. The faithful kneel for the solemn prayers of vespers.",
    "fs-pp-d": "12 July",
    "fs-pp-n": "Saints Peter and Paul",
    "fs-pp-t": "The Church venerates the two chief apostles, Peter the rock of faith and Paul the apostle of the nations. The feast is preceded by the fast known as that of the Holy Apostles, of variable length. Countless Russian churches are dedicated to them, beginning with the cathedral of the Peter and Paul Fortress in Saint Petersburg, where the emperors of the House of Romanov rest.",
    "fs-mar-d": "17 July",
    "fs-mar-n": "Martyrdom of the Holy Imperial Family of the Romanovs",
    "fs-mar-t": "On the night of 16 to 17 July 1918, at Ekaterinburg, Emperor Nicholas II, Empress Alexandra, Tsarevich Alexei and the Grand Duchesses Olga, Tatiana, Maria and Anastasia were killed, together with the faithful who chose to follow them. The Russian Orthodox Church venerates them as Holy Passion-Bearers, an example of meekness and of faith under trial.",
    "fs-serg-d": "18 July",
    "fs-serg-n": "Saint Sergius of Radonezh",
    "fs-serg-t": "On 18 July the Church celebrates the uncovering of the venerable relics of Saint Sergius, hegumen of Radonezh. Founder of the Trinity Lavra, he was the teacher and spiritual guide of many dozens of Russian saints and intercessor of all the Russian Land. He blessed Prince Dmitry Donskoy before the Battle of Kulikovo. He is an example of meekness and humility.",
    "fs-trasf-d": "6 / 19 August",
    "fs-trasf-n": "Holy Transfiguration",
    "fs-trasf-t": "The feast recalls the transfiguration of Christ on Mount Tabor before Peter, James and John. The uncreated light of Tabor lies at the heart of Orthodox spirituality. In Russia the day is popularly called the Apple Saviour, because the fruits of the new harvest are blessed. It is one of the twelve great feasts.",
    "fs-dorm-d": "15 / 28 August",
    "fs-dorm-n": "Dormition of the Mother of God",
    "fs-dorm-t": "The feast celebrates the passing of the Mother of God, fallen asleep in the Lord and received into heaven. It is preceded by a short fast and concludes the Orthodox liturgical year. The principal cathedrals of Moscow and Vladimir, the spiritual heart of ancient Russia, are dedicated to the Dormition. The liturgy sings of death as a passage to life.",
    "fs-natbg-d": "8 / 21 September",
    "fs-natbg-n": "Nativity of the Mother of God",
    "fs-natbg-t": "This is the first of the twelve great feasts of the Orthodox liturgical year, which begins in September. It recalls the birth of the Virgin Mary to the righteous Joachim and Anna, after long years of waiting. The feast opens the cycle of the Incarnation and announces salvation. In Russia many ancient churches and monasteries bear its name.",
    "fs-croce-d": "14 / 27 September",
    "fs-croce-n": "Exaltation of the Holy Cross",
    "fs-croce-t": "The feast recalls the finding of the Cross of Christ at Jerusalem by Saint Helena and its solemn elevation before the people. It is a day of strict fasting, although it is one of the twelve great feasts. In the centre of the church the cross is set forth adorned with flowers, and the faithful venerate it with prostrations.",
    "fs-ingr-d": "21 November / 4 December",
    "fs-ingr-n": "Entrance of the Mother of God into the Temple",
    "fs-ingr-t": "The feast recalls the presentation in the Temple of Jerusalem of the Virgin Mary as a child, led there by her parents Joachim and Anna. Tradition relates that she remained in the Temple, nourished by prayer, until her youth. The day falls at the beginning of the Nativity fast and prepares for Christmas. It is one of the twelve great feasts.",
    "fs-nic-d": "4 / 19 December",
    "fs-nic-n": "Saint Nicholas the Wonderworker",
    "fs-nic-t": "Saint Nicholas, bishop of Myra, is the best loved saint of the Russian people, protector of travellers, sailors and children. His icon is present in almost every home and every church. The winter feast recalls his repose, while in May the translation of his relics to Bari is celebrated, a place of pilgrimage for Russian faithful as well.",
    "fs-capo-d": "1 January",
    "fs-capo-n": "New Year",
    "fs-capo-t": "New Year is the most keenly felt civil holiday in Russia, celebrated with the family around the decorated fir tree and the exchange of gifts. Its present importance arose in the Soviet period, when it absorbed many Christmas customs. It was Peter the Great who, in 1700, moved the beginning of the year to the first of January after the European usage. The celebrations continue for several days.",
    "fs-dif-d": "23 February",
    "fs-dif-n": "Defender of the Fatherland Day",
    "fs-dif-t": "The day is dedicated to all who have served and serve in the armed forces, and by extension to all men. Wreaths are laid at monuments to the fallen and honour is paid to veterans. The observance was instituted in 1918 and retained in the Russian Federation as a national holiday. It is one of the most widely kept civil dates of the year.",
    "fs-donna-d": "8 March",
    "fs-donna-n": "International Women's Day",
    "fs-donna-t": "In Russia the eighth of March is a national holiday, warmly kept and dedicated to women of every age. It is customary to offer flowers, especially mimosa and tulips, to mothers, wives, daughters and colleagues. The day has lost the vindicatory character of its origins and taken on a familial and affectionate tone. Offices and schools remain closed.",
    "fs-lav-d": "1 May",
    "fs-lav-n": "Spring and Labour Day",
    "fs-lav-t": "The first of May marks in Russia the beginning of the fine season and the festival of labour. The great demonstrations of the past have given way to quieter celebrations: excursions out of town, the opening of country houses and the tending of gardens. The day keeps the character of a popular festival and of a family gathering.",
    "fs-vitt-d": "9 May",
    "fs-vitt-n": "Victory Day",
    "fs-vitt-t": "This is the most solemn civil observance of the year, in memory of the victory of 1945 and of the immense sacrifices borne by the people. Parades are held, wreaths are laid and a minute of silence is kept; families carry the portraits of their fallen. The ribbon of Saint George is the emblem of the day. The memory is handed down from generation to generation.",
    "fs-russia-d": "12 June",
    "fs-russia-n": "Day of Russia",
    "fs-russia-t": "The day celebrates Russia in its history, its culture and its unity. Concerts and official ceremonies are held, and the State prizes are presented at the Kremlin. The date, instituted in 1992, is today understood as a festival of national identity and of the bond among the peoples that make up the country.",
    "fs-gloria-d": "Movable date, first Sunday of September",
    "fs-gloria-n": "Day of Military Glory",
    "fs-gloria-t": "The day honours the victories and feats of Russian arms through the centuries. The days of military glory, fixed by law, recall the decisive moments in the defence of the country, from Kulikovo to Borodino and into the twentieth century. Ceremonies are held at monuments, with historical re-enactments and honours to the regiments.",
    "fs-bor-d": "7 September",
    "fs-bor-n": "Battle of Borodino",
    "fs-bor-t": "On 7 September 1812, near the village of Borodino west of Moscow, the bloodiest battle of Napoleon's Russian campaign was fought. The Russian army, led by Field Marshal Kutuzov, held out for an entire day at the cost of grievous losses. The engagement marked the beginning of the French retreat and is celebrated as a symbol of sacrifice and steadfastness.",
    "fs-fond-d": "2 November",
    "fs-fond-n": "Foundation of the Russian Empire",
    "fs-fond-t": "On 2 November 1721, at the close of the Great Northern War, the Senate conferred upon Peter I the title of Emperor of All the Russias, and Muscovy took the name of the Russian Empire. The act sealed Russia's entry among the great European powers. The date marks the beginning of the two imperial centuries that the Circle studies and preserves.",
    "fs-unita-d": "4 November",
    "fs-unita-n": "Day of National Unity",
    "fs-unita-t": "The observance recalls the liberation of Moscow in 1612, when the popular militia led by Kuzma Minin and Prince Dmitry Pozharsky brought the Time of Troubles to an end. The date coincides with the feast of the Kazan icon of the Mother of God, invoked by the troops. It is kept as a day of the unity of the people above all divisions.",
    "fs-h-rel": "Religious feasts",
    "fs-h-civ": "Civil commemorations",
    "fs-nota": "A note on dates. Where two dates are given, the first follows the Julian liturgical calendar and the second the Gregorian calendar in use today. Movable feasts have no fixed date: they depend on the date of Orthodox Pascha.",
    "fs-cal-h": "Calendar of commemorations",
    "hero-frase": "To preserve the memory and the beauty of Imperial Russia.",
    "home-chi-text": "A cultural fellowship that preserves the history, the art and the spirituality of Imperial Russia. Italians, Russians and descendants of ancient families of the Empire, united by a shared inheritance.",
    "home-fond-text": "On 16 June 2026, on the day of All Saints of the Russian Land, the association was formally founded in Milan. A history that weaves together faith, memory and belonging.",
    "idx-storia": "A thousand years of history of the House of Romanov and the Russian Empire.",
    "idx-feste": "The calendar of commemorations that mark the Orthodox and imperial year.",
    "idx-eventi": "Gatherings, ceremonies and visits devoted to Russian culture in Italy.",
    "idx-galleria": "Images of our ceremonies and of the places of memory.",
    "idx-tesseramento": "To draw near to the Circle and take part in its cultural life.",
    "circ-eyebrow": "Friends of Imperial Russia",
    "circ-title": "The Circle",
    "circ-h1": "Who we are",
    "circ-p1": "The International Circle of Friends of Imperial Russia - Third Rome is a cultural fellowship, non-partisan and non-profit. Its members include Italians, Russians and people of other nationalities once present within the Russian Empire, together with Swiss, French and German members descended from ancient Russian families.",
    "circ-h2": "Our identity",
    "circ-p2": "The Circle has a monarchical and Orthodox identity, resting upon two essential points of reference. The first is the Orthodox Church of the Patriarchate of Moscow; the Circle nevertheless places no restriction upon the admission of members belonging to other Christian Churches. The second is the Imperial House of Romanov, in the Vladimirovich line of succession, which the Circle recognises as legitimate, today represented by Grand Duchess Maria Vladimirovna and her son, Grand Duke George Mikhailovich.",
    "circ-h3": "Our history",
    "circ-p3": "The Circle was founded in 2020 in Milan and constituted as a Third Sector Body with Legal Personality in 2026. It is chaired by Count Pëtr Stramezzi, with Vice-President Maya Bubashvili, the Delegate for Italy Baron Antonio Imperatore and the Deputy Delegate Dr Elena Grinko Maruotti.",
    "circ-h4": "Our activities",
    "circ-p4": "The Circle promotes cultural events in Italy devoted to Russian culture, art, history and spirituality. It takes part in religious ceremonies and events, and organises gatherings and cultural visits to places connected with Russian history and Orthodox spirituality. It carries out initiatives in partnership with the Association of European Aristocracy, the Union of Byzantine Nobility and the Imperial Russian Orthodox Chivalric Brotherhood of Saint John of Jerusalem and of Malta.",
    "circ-torna": "Back to the home page",
    "fond-title": "Milan, 16 June 2026",
    "fond-p1": "On a date that Orthodox tradition dedicates to All Saints who have shone forth in the Russian Land, the Circle was officially established in Milan, at the offices of Studio Varano &amp; Partners.",
    "fond-p2": "Its form as a cultural association, non-partisan and non-profit, allows us today to carry our activity into public settings as well, in order to promote knowledge of the Imperial House of Romanov and of the culture of the Russian people.",
    "fond-firma": "The founding assembly was attended by President Pietro Veniamin Andreevich Stramezzi, joining from Moscow, Vice-President Maya Bubashvili, the Secretary and Delegate for Italy Antonio Imperatore, the Treasurer Giovanni Trombetta and the Councillors Elena Grinko, Irina Khodossevitch, Lali Panchulidze and Oxana Senchenko.",
    "ph-storia-h1": "History of the Russian Empire",
    "ph-storia-lead": "Articles, portraits and studies devoted to the history of the Russian Empire. A page conceived for reading.",
    "ph-attualita-lead": "Extracts from the press and the web, and articles written by the Circle on current themes connected with Russian culture.",
    "ph-feste-lead": "The religious and civil commemorations of the Russian Empire, with dates, meaning and traditions.",
    "ph-eventi-lead": "Conferences, gatherings, excursions and journeys of the Circle. Here you will find the forthcoming appointments and invitations.",
    "ph-galleria-lead": "The archive of events already held by the Circle, with photographs, accounts and press coverage.",
    "te-privacy": "I have read and accept the <a href=\"privacy.html\">Privacy Policy</a>.",
    "te-invio": "Sending...",
    "err-obbligo": "This field is required.",
    "err-email": "Please enter a valid email address.",
    "err-privacy": "To proceed you must accept the Privacy Policy.",
    "err-invio": "We could not send your request. Please try again later or write to us at <a href=\"mailto:russia.imperiale@yandex.com\">russia.imperiale@yandex.com</a>.",
    "err-invio-msg": "We could not send your message. Please try again later or write to us at <a href=\"mailto:russia.imperiale@yandex.com\">russia.imperiale@yandex.com</a>.",
    "grm-title": "Thank you for your message",
    "grm-text": "We have received your message. We will reply as soon as possible.",
    "gr-eyebrow": "Membership",
    "gr-title": "Thank you for your request",
    "gr-text": "We have received your membership request. We will send you an email with all the information. See you soon.",
    "gr-home": "Back to home",
    "te-pdf-h": "Membership form",
    "te-pdf-btn": "Download the membership form (PDF)",
    "te-pdf-nota": "The form should be printed, completed, signed and delivered or sent to the Circle. For information write to <a href=\"mailto:russia.imperiale@yandex.com\">russia.imperiale@yandex.com</a>.",
    "te-quote-h": "Annual subscriptions",
    "te-q1-n": "Supporting member",
    "te-q2-n": "Ordinary member",
    "te-q3-n": "Junior member (up to 21 years)",
    "te-q1-v": "50 euro",
    "te-q2-v": "20 euro",
    "te-q3-v": "10 euro",
    "ev-nessuno": "Upcoming dates will be published here.",
    "ev-prossimi-h": "Forthcoming appointments",
    "ev-1812-date": "13 September 2026",
    "ev-1812-title": "The Patriotic War of 1812",
    "ev-1812-details": "Conference in Milan on Sunday at 3.00 pm, at the Orthodox Church of Saints Sergius, Seraphim and Vincent the Martyr.",
    "ev-poster-link": "Open the poster",
    "ga-archivio-h": "Past events",
    "ga-foto-sub": "Photographs of the ceremony",
    "ga-press-sub": "Press review",
    "ga-video-link": "Watch the video of the ceremony",
    "ph-tess-h1": "Become a member of the Circle",
    "ph-tess-lead": "Drawing near to the Circle is simple. Complete the membership request: we shall contact you with all the information.",
    "art-messina-date": "28 December 1908",
    "art-messina-title": "The relief brought by Russian sailors to the victims of the Messina earthquake (1908)",
    "art-messina-excerpt": "Extract in preparation. The full text of the article will be published shortly.",
    "art-messina-body": "<p>The text of this article is in preparation. It will be published shortly, with a full account of the relief brought by the sailors of the Russian Imperial Navy to the victims of the earthquake that destroyed Messina in 1908.</p>",
    "romanov-label": "House of Romanov",
    "romanov-title": "A brief history of the Romanov dynasty",
    "romanov-excerpt": "From its origins in the sixteenth century to the end of the Russian Empire and the modern line of succession.",
    "romanov-body":
      "<h2>Origins and accession to the throne</h2>" +
      "<p>The Romanovs were the second dynasty of Russian sovereigns, following the extinction of the Rurikids at the end of the sixteenth century. They reigned until 1917, when they were deposed during the February Revolution; many members of the family were killed during the Bolshevik Revolution, while others fled abroad, chiefly to France, Britain and the United States.</p>" +
      "<p>The Romanovs share their origins with other Russian noble families through Andrei Kobyla, a boyar in the service of Simeon of Russia and probably the son of the Prussian prince Glanda Kambila, who came to Russia in the second half of the thirteenth century while fleeing German invaders. Many historians, however, regard the Moscow boyar Roman Yurievich Zakharyin-Koshkin, who lived in the sixteenth century, as the family's true founder. His daughter, Anastasia Romanovna Zakharyina, married Tsar Ivan IV &ldquo;the Terrible&rdquo; in 1547 and was crowned tsarina.</p>" +
      "<p>Ivan IV died in 1584 and was succeeded by Feodor I, his son by Anastasia. A pious prince who may have been mentally weak, he remained on the throne until his death in 1598, although government was in practice shared by his uncle Nikita Romanovich, governor of Novgorod and a member of the regency council, and the boyar Boris Godunov.</p>" +
      "<p>When Feodor died without children, the House of Rurik came to an end after seven hundred years and a struggle opened between two factions: one supported Boris Godunov, while the other wanted Feodor Nikitich Romanov, Feodor I's cousin, as tsar. After a series of intrigues, Godunov's party secured his election. To protect himself, the new tsar exiled all the Romanovs to distant regions in the north or the Urals, where many died of hunger or cold. Mindful of Feodor Nikitich's prestige, Boris did not kill him, but forced him and his wife to take monastic vows and live in the Antonievo-Siysky Monastery.</p>" +
      "<p>The death of Boris Godunov in 1605 began the so-called Time of Troubles. Three different impostors, the &ldquo;False Dmitrys&rdquo;, came to the throne in succession, each claiming to be Dmitry, the vanished son of Ivan IV who had probably been killed on Godunov's orders. During the same period, Polish-Lithuanian forces repeatedly invaded Russia and occupied Moscow for three years, from 1610 to 1612.</p>" +
      "<p>After the Poles were driven from Moscow in 1612, the Zemsky Sobor offered the crown to several princes descended from the Gediminids and the Rurikids, but all refused it. The crown was finally offered to sixteen-year-old Mikhail Feodorovich, son of Feodor Nikitich, who had by then become the monk Filaret and was no longer eligible for the succession. The young man, living with his family at the Ipatiev Monastery, initially refused, but was persuaded by his mother, Ksenia Ivanovna Shestova, who blessed him with the image of Our Lady of Saint Feodor. Believing his throne insecure, Michael stressed his blood relationship with the last Rurikids and frequently summoned the Zemsky Sobor for important decisions. In this way, the first Romanovs became greatly loved by the Russian people and were regarded as the legitimate successors of Ivan IV.</p>" +
      "<h2>Peter the Great and the eighteenth century</h2>" +
      "<p>Michael was succeeded in 1645 by his son Alexis I, who led the country through many difficulties. After his death in 1676, dynastic struggles arose between the children of his first marriage, Feodor III, Sophia and Ivan V, and the party associated with the family of his second wife, Natalia Kirillovna Naryshkina, mother of the future Tsar Peter I, Peter the Great. In 1682 Peter was confirmed as sole tsar. He radically reformed the state and transformed it into a European power, adding the title Emperor of All the Russias to that of tsar and moving the capital from Moscow to Saint Petersburg, a city built at his command on newly conquered lands beside the Gulf of Finland.</p>" +
      "<p>Peter the Great was succeeded in 1725 by his second wife, Catherine I, and in 1727 by his grandson Peter II, a child who reigned for only three years under the guardianship of Prince Menshikov. His death ended the Romanovs' male line. The only surviving daughter of Ivan V was chosen as successor and became Empress Anna (1693-1740). Childless herself, she adopted as heir a great-nephew, the grandson of her sister, who became Tsar Ivan VI for only a few months under his mother's regency. Grand Duchess Elizabeth, a relative of the late Empress Anna and the last surviving daughter of Peter the Great and Catherine I, then engineered a coup in 1741 and took the throne. Having no descendants, she adopted as heir Duke Karl Peter Ulrich of Holstein-Gottorp, the son of her elder sister and a claimant to the Swedish throne. He became Peter III in 1762, but was soon deposed and killed at the instigation of his wife, who proclaimed herself Empress Catherine II and brought almost a century of palace struggles to an end.</p>" +
      "<p>Catherine's brilliant and innovative reign, which in many respects resembled that of her husband's ancestor Peter the Great, was followed in 1796 by that of her son Paul I. He was especially proud of his descent from the emperor, although Catherine suggested in her memoirs that he was actually the child of a relationship with the courtier Sergei Saltykov. An only son with no close Romanov cousins, Paul issued a comprehensive law of succession, one of the strictest in Europe at the time, to prevent the crises faced by the Romanovs in the seventeenth century from recurring. The family law was based on agnatic primogeniture and required the monarch and members of the dynasty, the emperor's consort and the first heirs in the line of succession to profess the Orthodox faith.</p>" +
      "<h2>The nineteenth century</h2>" +
      "<p>After only a few years on the throne, Paul I was killed in a palace conspiracy in 1801, but the monarchy remained secure in the hands of his son Alexander I. Supported by his brothers and sisters, Alexander led Russia during the wars of the Napoleonic period. Aware that his brother and heir Constantine might enter a morganatic marriage, the emperor amended the law of succession by adding a clause requiring the spouses of dynastic members to belong to a royal or reigning house; otherwise, their children would lose all rights.</p>" +
      "<p>Grand Duke Constantine therefore renounced the throne, and after Alexander I's death in 1825 he was succeeded by his younger brother Nicholas I. Like his father Paul I, Nicholas devoted himself to strengthening the army, but later had to face the Crimean War; it was said that the tsar died of grief in 1855. Nicholas I had four sons, from whom arose four principal branches of the Romanov family: the Alexandrovichi, to whom his successors on the throne belonged and whose senior line is now extinct, although the collateral Vladimirovichi branch survives and is regarded as the legitimate line of succession; the Nikolaevichi, some members of whom remain alive; the Konstantinovichi, many of whom were killed after the October Revolution and whose male line became extinct in 1973 and female line in 2007; and the Mikhailovichi, who survive and oppose the Vladimirovichi claimants. Nicholas I paid particular attention to his sons' education, carefully choosing their tutors and sending them to travel in Europe. His son Constantine reformed the Navy, while his son Nikolai was an excellent military commander.</p>" +
      "<p>His successor Alexander II was a cultivated and intelligent man whose first undertaking was to restore peace between Russia and the rest of Europe. Believing that peace abroad required a strong army and peace at home required reform, he reorganised the imperial armed forces, expanded the liberties of the Grand Duchy of Finland and abolished serfdom in 1861. He gained the support of intellectuals and reformers, but also the hostility of part of the nobility and of nihilist revolutionaries. After becoming a widower, he married Princess Catherine Dolgoruki, with whom he had previously had a relationship, and legitimised their children. The possibility that he might have her crowned empress, ending the marriage's morganatic status, created considerable tension within the imperial family. The grand duchesses were especially scandalised by the prospect of ranking below Princess Dolgorukaya, since court protocol gave the empress precedence over other members of the family. On 13 March 1881, as he was preparing to submit a constitutional measure that would have made the empire a liberal monarchy, Alexander II was killed in a nihilist attack.</p>" +
      "<p>Meanwhile, during the second half of the nineteenth century, Slavic patriotism associated with cultural revival and Pan-Slavic ideas gained increasing influence, encouraging the dynasty to become more Russian. Members of the imperial family were expected to show greater religious devotion to the Russian Orthodox Church; beards, a Slavic symbol that Peter the Great had ordered the nobility to remove in accordance with Western fashion, reappeared on the faces of the grand dukes; and the first marriages were contracted with princesses of other Slavic or Orthodox monarchies. Some princesses of cadet branches were even permitted to marry members of the high Russian nobility, whereas until 1850 members of the dynasty had married predominantly princes and princesses of German origin.</p>" +
      "<p>Alexander II was succeeded by his son Alexander III, the first bearded and moustached tsar since Ivan. A huge and imposing man of great strength and an authoritarian character, he restored autocracy and ruled Russia firmly, reversing many of Alexander II's reforms that might have made the empire more liberal. Alexander III married Dagmar of Denmark, who had been engaged to his elder brother before the latter died young. Despite their different temperaments and statures, the couple enjoyed a happy marriage and had six children: he was imposing and nearly two metres tall, while she was small and slight.</p>" +
      "<h2>Nicholas II and the end of the Empire</h2>" +
      "<p>The eldest son, Nicholas, succeeded his father when the latter died prematurely in 1894 at only 49 years of age. Still unprepared for his task, beside his father's deathbed he sobbed in the arms of his young cousin and brother-in-law, Grand Duke Alexander: &ldquo;I am not ready, I do not want it. I am not a tsar.&rdquo; Nicholas II lacked a complete education for his role and continued his father's policies, advised in this by his wife Alexandra Feodorovna, a German princess who had not yet fully grasped the realities of the Russian Empire. The tsarina was also burdened by fear and guilt over the illness she had passed to her only son and heir, Grand Duke Alexei. Haemophilia made the boy's life difficult and constantly endangered it. All this drew her towards ever deeper mysticism and distanced her from the court, the nobility and the imperial family, whose company she avoided.</p>" +
      "<p>When the Romanovs celebrated the tercentenary of their accession in 1913, the ceremonies were overshadowed by ominous signs. The face of the revered Feodorovskaya icon of the Mother of God, patroness of the family, darkened, and the monk Grigori Efimovich Rasputin, greatly trusted by the tsarina, declared that Romanov power would fall if Russia entered a war and would not survive his death by more than two years if a member of the family was responsible for it.</p>" +
      "<p>The following year Russia entered the First World War against Germany, the tsarina's country of origin. Although a devout Orthodox Christian, she became a target of popular discontent. While the tsar was at the front, she directed policy and alienated many at court and in Russian political life. Because she listened so closely to Rasputin, a group of conspirators killed the monk on 16 December 1916. The murder was planned by Prince Felix Yusupov, husband of Grand Duchess Irina Alexandrovna Romanova, and Grand Duke Dmitri Pavlovich, the tsar's first cousin, also took part. Barely two months later, during the February Revolution of 1917, Nicholas II was forced to abdicate for himself and his son in favour of his brother Michael. When Michael refused the crown, Romanov rule over Russia ended.</p>" +
      "<p>Nicholas II and his family were placed under house arrest by the new government, while several members of the imperial family, including the tsar's cousin Grand Duke Kirill, heir presumptive after Michael, established good relations with the Provisional Government and were therefore able to leave Russia before the October Revolution. After the Bolsheviks seized power, Nicholas II and his family were moved to Ekaterinburg beyond the Urals.</p>" +
      "<p>Meanwhile, part of the armed forces and civilian population rebelled against the victorious Bolsheviks, forming numerous counter-revolutionary armies known as the White Armies and beginning a terrible civil war that caused millions of deaths. The war ended only in 1921 with the Soviet victory, also because of the inertia of the Western world, which underestimated the Bolshevik danger and offered the White Armies only limited support.</p>" +
      "<p>In the summer of 1918, however, the Whites appeared close to reversing the political situation in Russia, and Admiral Kolchak's army was advancing on Ekaterinburg from the east. Fearing that Nicholas II might be freed, the Ural Soviet had him shot with his entire family and their few servants on 17 July 1918. The bodies were dismembered and burned by the Bolsheviks; discovered at the end of the twentieth century, the remains now lie in the Cathedral of Saints Peter and Paul in Saint Petersburg.</p>" +
      "<h2>The family after the Revolution</h2>" +
      "<p>Many members of the Imperial Family fled abroad to escape the massacre that would otherwise have awaited them. They settled in France, the United States of America, the United Kingdom, Italy and with relatives able or willing to receive them. They often married outside the family laws and consequently lost their rights of succession.</p>" +
      "<p>Today the official heir to the throne of All the Russias is Grand Duchess Maria Vladimirovna Romanova, born in 1953. She is to be succeeded by Grand Duke George Mikhailovich Romanov, born in 1981, a Russian citizen and tenth in the line of succession to the German imperial throne as the son of a Hohenzollern, Prince Franz Wilhelm of Prussia. George married the Italian Countess Rebecca Bettarini; the imperial couple live in Russia and have two children, a son and a daughter.</p>" +
      "<p>This line of succession was disputed by Prince Nicholas Romanovich Romanov, who died in 2014 without sons. The representative of that branch is Prince Alexis Andreevich Romanov, a United States citizen living in America.</p>" +
      "<h2>The Romanov sovereigns</h2>" +
      "<p>The complete list of Romanov sovereigns in chronological order:</p>" +
      "<ol class='romanov-rulers'>" +
      "<li><strong>Michael I</strong> (1613-1645) - First tsar of the dynasty.</li>" +
      "<li><strong>Alexis I</strong> (1645-1676) - Son of Michael.</li>" +
      "<li><strong>Feodor III</strong> (1676-1682) - Son of Alexis.</li>" +
      "<li><strong>Ivan V</strong> (1682-1696) - Co-tsar with his half-brother Peter I.</li>" +
      "<li><strong>Peter I the Great</strong> (1682-1725) - Transformed the tsardom into the Russian Empire.</li>" +
      "<li><strong>Catherine I</strong> (1725-1727) - Peter the Great's second wife.</li>" +
      "<li><strong>Peter II</strong> (1727-1730) - Grandson of Peter the Great.</li>" +
      "<li><strong>Anna I</strong> (1730-1740) - Daughter of Ivan V.</li>" +
      "<li><strong>Ivan VI</strong> (1740-1741) - Deposed by a coup while still an infant.</li>" +
      "<li><strong>Elizabeth I</strong> (1741-1762) - Daughter of Peter the Great.</li>" +
      "<li><strong>Peter III</strong> (1762) - Grandson of Peter the Great, reigned for only a few months.</li>" +
      "<li><strong>Catherine II the Great</strong> (1762-1796) - Wife of Peter III and an enlightened empress.</li>" +
      "<li><strong>Paul I</strong> (1796-1801) - Son of Catherine II.</li>" +
      "<li><strong>Alexander I</strong> (1801-1825) - Defeated Napoleon.</li>" +
      "<li><strong>Nicholas I</strong> (1825-1855) - Brother of Alexander I.</li>" +
      "<li><strong>Alexander II</strong> (1855-1881) - Abolished serfdom and was assassinated.</li>" +
      "<li><strong>Alexander III</strong> (1881-1894) - Supporter of strict autocracy.</li>" +
      "<li><strong>Nicholas II</strong> (1894-1917) - The last tsar, forced to abdicate and killed with his family by the Bolsheviks in 1918.</li>" +
      "</ol>",
    "romanov-oggi-label": "The dynasty today",
    "romanov-oggi-title": "The Imperial Romanov family today",
    "romanov-oggi-excerpt": "The continuity of the Imperial House after the Revolution and its present-day representatives.",
    "romanov-oggi-link": "Discover the Romanov family today",
    "romanov-storia-link": "Read the history of the Romanov dynasty",
    "romanov-oggi-gallery": "The family in photographs",
    "romanov-oggi-cap1": "Grand Duchess Maria Vladimirovna.",
    "romanov-oggi-cap2": "Grand Duchess Maria Vladimirovna and Grand Duke George Romanov.",
    "romanov-oggi-cap3": "Grand Duke George Romanov with his wife Victoria Romanova.",
    "romanov-oggi-cap4": "Grand Duke George Romanov with his family.",
    "romanov-oggi-body":
      "<h2>The succession in exile</h2>" +
      "<p>After the Revolution, most members of the Romanov family in exile rallied around Grand Duke Kirill Vladimirovich, first in the line of succession among the surviving Romanovs. On 8 August 1922 Kirill Vladimirovich proclaimed himself Curator of the Throne, and on 31 August 1924 assumed the title Kirill I, Emperor of All the Russias, automatically raising his children to the rank of Grand Dukes of Russia. Kirill maintained his own court in exile in France and created an organisation to coordinate monarchist movements and Russian émigrés.</p>" +
      "<p>Kirill died in 1938 and was succeeded as claimant by his only son, Grand Duke Vladimir. Vladimir never publicly assumed the imperial title, but the following year raised his father's second cousin and loyal supporter, Gavriil Konstantinovich Romanov, to the rank of grand duke. Gavriil thereby became the only Romanov prince to receive that title ad personam since Empress Elizabeth I of Russia had granted it to her nephew, the future Peter III.</p>" +
      "<h2>Dynastic continuity</h2>" +
      "<p>On 11 October 1938, with Vladimir's approval, the five representatives of the dynasty immediately following him in the hereditary line, three grand dukes and two Princes of Russia, published a document of considerable legal importance setting out their view of the succession. The signatories were Grand Dukes Boris Vladimirovich Romanov, first after Vladimir in the line of succession, his brother Andrei Vladimirovich, second, Dmitri Pavlovich, third, and Princes Vsevolod Ivanovich and Gavriil Konstantinovich, fourth and fifth. The document recognised Vladimir as Head of the Imperial House and listed the living dynasts eligible to succeed him, in order. It also excluded from the succession the many descendants of morganatic marriages that did not comply with the Romanov family's dynastic law.</p>" +
      "<p>In 1948 Vladimir Kirillovich married Leonida Georgievna Kirby, born Princess Leonida Bagration-Mukhrani, who thereafter took the name Grand Duchess Leonida Georgievna of Russia. The marriage was declared dynastic under the Family Laws of the Imperial House. Although previously divorced, Princess Leonida was a widow at the time of her second marriage; she also belonged to the senior branch of the Bagration dynasty and was therefore considered a princess of royal blood. Finally, Vladimir himself, as Head of the Russian Imperial House, possessed the right to interpret the status of the spouse of a member of the imperial family.</p>" +
      "<p>In 1969 Vladimir, having no sons and foreseeing the approaching extinction of the male descendants of the dynastic Romanovs, proclaimed his daughter Maria Vladimirovna future Curator of the Throne. In 1989, following the death of Prince Vasili Alexandrovich, the last recognised male heir of the dynasty, he formally proclaimed her the dynastic heir.</p>" +
      "<h2>The Imperial House today</h2>" +
      "<p>Today the legitimate descendant and recognised Head of the Imperial House of Romanov is Her Imperial Highness Grand Duchess Maria Vladimirovna Romanova, born in 1953 and formerly married to Prince Franz Wilhelm Hohenzollern of Prussia. The couple, who divorced in 1985, had an heir in 1981: His Imperial Highness Grand Duke George Mikhailovich Romanov, the tsarevich. Grand Duke George, now a Russian citizen and tenth in the line of succession to the German imperial throne, married the Italian Countess Rebecca Bettarini in 2021; she took the Orthodox name Victoria Romanova. The couple have two children: Prince Alexander, born on 21 October 2022, and Princess Kira Leonida, born on 2 June 2025.</p>" +
      "<p>This line of succession was disputed by Prince Nicholas Romanovich Romanov, who died in 2014 without sons and was associated with the self-styled &ldquo;Romanov Family Association&rdquo;. The representative of this branch is Prince Alexis Andreevich Romanov, a United States citizen living in America.</p>",
    "art-torna-storia": "Back to History of the Empire",
    "soon-date": "Forthcoming",
    "soon-title": "New study",
    "soon-excerpt": "Article in preparation. Available shortly in this section.",
    "cal-eyebrow-title": "Calendar of commemorations",
    "cal-mar-date": "17 July",
    "cal-mar-name": "Martyrdom of the Holy Imperial Family",
    "cal-mar-desc": "Holy Imperial Family",
    "cal-bor-date": "7 September",
    "cal-bor-name": "Borodino (1812)",
    "cal-bor-desc": "Battle of 1812",
    "cal-nic-date": "19 December",
    "cal-nic-name": "Saint Nicholas",
    "cal-nic-desc": "Veneration in Russia",
    "bor-date": "7 September 1812",
    "bor-title": "Borodino",
    "bor-excerpt": "The commemoration of the Battle of Borodino of 1812. Full text forthcoming.",
    "bor-art-title": "Borodino, 7 September 1812",
    "bor-body": "<p>The text of this article is in preparation. It will be published shortly.</p>",
    "mar-date": "17 July",
    "mar-title": "Martyrdom of the Holy Imperial Family",
    "mar-excerpt": "The remembrance of the martyrdom of the Holy Imperial Family. Full text forthcoming.",
    "mar-art-title": "Martyrdom of the Holy Imperial Family",
    "mar-body": "<p>The text of this article is in preparation. It will be published shortly.</p>",
    "nic-date": "19 December",
    "nic-title": "Saint Nicholas",
    "nic-excerpt": "The veneration of Saint Nicholas in Russia. Full text forthcoming.",
    "nic-art-title": "The veneration of Saint Nicholas in Russia",
    "nic-body": "<p>The text of this article is in preparation. It will be published shortly.</p>",
    "ev-prossimo-data": "Dates forthcoming",
    "ev-prossimo-title": "Forthcoming gatherings",
    "ev-prossimo-text": "The dates of the Circle's forthcoming events will be announced here.",
    "ev1-date": "26 June 2026",
    "ev1-title": "[Title of the event]",
    "ev1-excerpt": "[Description of the event in preparation. The text will be published shortly.]",
    "ev1-body": "<p>[Description of the event in preparation. The text will be published shortly.]</p>",
    "ev2-date": "2026",
    "ev2-title": "[Title of the event]",
    "ev2-excerpt": "[Description of the event in preparation. The text will be published shortly.]",
    "ev2-body": "<p>[Description of the event in preparation. The text will be published shortly.]</p>",
    "art-torna-eventi": "Back to Events and activities",
    "chiesa-cap": "Icon of the Holy Imperial Passion-Bearers, Emperor Nicholas II and his family.",
    "ga-ev-eyebrow": "26 June 2026",
    "ga-ev-title": "Ceremony at Villa Sormani Marzorati Uva in Missaglia",
    "ga-ev-p1": "On 26 June 2026, on the occasion of the special visit of Hieromonk Ambrose Matsegora, Vicar General of the Russian Orthodox Church of the Patriarchate of Moscow in Italy, a ceremony was held at Villa Sormani Marzorati Uva in Missaglia, in Brianza, during which the Metropolia of Western Europe conferred certificates of merit upon a group of Italian and foreign figures, both Catholic and Orthodox, for cultural and social service, among them several members and friends of our Circle. Further honours were presented to our members by Princess Silvia Andronik Cantacuzino, guest of honour of the evening. The ceremony was organised by the Imperial Russian Orthodox Chivalric Brotherhood of Saint John of Jerusalem and of Malta, with the active participation of our Circle.",
    "ga-ev-p2": "Hieromonk Father Ambrose was accompanied by the Secretary Father Adrian, Prior of the organising brotherhood, and by Father Vasily, parish priest of the Russian Orthodox community of Saronno. About one hundred people were present, including civil, military and diplomatic authorities.",
    "ga-ev-p3": "The ceremony was followed by a guided visit to the splendid Villa Sormani Marzorati Uva in Missaglia, a building of Roman origin that underwent successive transformations over the centuries. Count Alberto Uva is its present owner and a promoter of cultural initiatives connected with the history of the Brianza region.",
    "ga-press-title": "Press review",
    "ga-press-video": "Video of the ceremony",
    "tdc-title": "Between Two Cultures",
    "tdc-sub": "A project by Oxana Senchenko Pasqualino di Marineo",
    "part-tdc-desc": "A project of cultural outreach devoted to the dialogue between Italy and Russia: artists, architects and thinkers who over the centuries have interwoven the two cultures, presented with historical rigour and without stereotypes. Conceived by Oxana Senchenko, born in Moscow and living in Italy for over thirty years.",
    "part-p1-name": "Association of European Aristocracy",
    "part-p2-name": "Holy Rus",
    "part-p3-name": "Order of Saint John",
    "part-p4-name": "Order of the Dragon",
    "te-h1": "The steps to becoming a member",
    "te-step1": "Complete the request form below.",
    "te-step2": "You will receive a reply setting out the terms of membership and the annual subscription.",
    "te-step3": "You complete your enrolment and receive the membership card of the Circle.",
    "te-nota": "By submitting this form you agree to be contacted by the Circle. Your data will not be passed to third parties.",
    "te-form-title": "Application for membership",
    "te-box2-tag": "You may prefer to write to us",
    "te-box2": "You may also contact us directly at <a href=\"mailto:russia.imperiale@yandex.com\">russia.imperiale@yandex.com</a> or through the <a href=\"contatti.html\">Contacts</a> page.",
    "socio-eyebrow": "Membership",
    "socio-title": "Join those who preserve this memory",
    "contatti-intro": "Write to us for information, events or membership. We shall be glad to reply.",
    "co-h1": "Contact form",
    "co-h2": "Where to find us",
    "co-nota": "Alternatively you may write to us directly at <a href=\"mailto:russia.imperiale@yandex.com\">russia.imperiale@yandex.com</a>.",
    "num-it": "<a href=\"tel:+393355460464\">+39 335 546 0464</a>",
    "num-ru": "<a href=\"tel:+79990052206\">+7 999 005 22 06</a>",
    "area-h1": "Members' area",
    "area-h2": "A space dedicated to members",
    "area-p": "The members' area, with content and services for members, will be available at a later stage. In the meantime you may learn about the Circle and request membership.",
    "foot-brand-b": "A cultural fellowship, non-partisan and non-profit, founded in Milan in 2020.",
    "foot-name-b": "International Circle of Friends of Imperial Russia - Third Rome",
    "foot-tel-it": "Italy: <a href=\"tel:+393355460464\">+39 335 546 0464</a>",
    "foot-tel-ru": "Russia: <a href=\"tel:+79990052206\">+7 999 005 22 06</a>",
    "legal-eyebrow": "Legal notices",
    "legal-updated": "Last updated: [DATE]",
    "pp-title": "Privacy Policy",
    "pp-intro": "In accordance with Regulation (EU) 2016/679 (GDPR), this policy describes how the personal data of the users of this website are processed.",
    "pp-h1": "Data controller",
    "pp-p1": "The data controller is [FULL NAME OF THE ASSOCIATION], with registered office at [FULL ADDRESS]. For any matter concerning personal data you may write to russia.imperiale@yandex.com.",
    "pp-h2": "What data we collect",
    "pp-p2": "This website collects solely the data that the user provides voluntarily by completing the contact form: name, email address and the content of the message. We collect no other personal data and we carry out no profiling.",
    "pp-h3": "Purposes and legal basis",
    "pp-p3": "The data provided through the contact form are processed for the sole purpose of replying to the user's enquiry. The legal basis is the consent of the user, expressed by sending the message.",
    "pp-h4": "Data retention",
    "pp-p4": "The data are retained for the time necessary to handle the enquiry and to fulfil any legal obligations, after which they are deleted.",
    "pp-h5": "Disclosure of data",
    "pp-p5": "The data are neither disseminated nor transferred to third parties. They may be processed solely by the authorised persons of the association in order to reply to enquiries.",
    "pp-h6": "Rights of the user",
    "pp-p6": "The user has the right to access their data, to request their rectification or erasure, to restrict or object to their processing, and to lodge a complaint with the Supervisory Authority for the protection of personal data. To exercise these rights you may write to russia.imperiale@yandex.com.",
    "cp-title": "Cookie Policy",
    "cp-intro": "This policy explains how this website uses cookies.",
    "cp-h1": "What cookies are",
    "cp-p1": "Cookies are small text files that websites save on the user's device in order to function correctly or to gather information.",
    "cp-h2": "Cookies used by this website",
    "cp-p2": "This website uses solely technical cookies necessary for its correct operation. We use neither profiling cookies nor marketing cookies.",
    "cp-h3": "Managing cookies",
    "cp-p3": "The user may at any time manage or disable cookies through the settings of their browser. Disabling technical cookies may impair certain functions of the website.",
    "at-fonte": "[Source] / [Date]",
    "at-titolo": "[Title of the news item]",
    "at-estratto1": "[Extract or summary. Replace with the actual text. Indicate the source if taken from the press.]",
    "at-articolo": "Article by the Circle / [Date]",
    "at-titolo2": "[Title of the article]",
    "at-sommario": "[Summary of the article written by the Circle. Replace with the actual text.]",
    "mosca-2026-date": "Moscow / 6 September 2026",
    "mosca-2026-title": "Cross procession in Moscow: more than 100,000 faithful take part",
    "mosca-2026-excerpt": "The procession, dedicated to the Synaxis of All Saints of Moscow and led by Patriarch Kirill, covered approximately 6.5 kilometres from the Cathedral of Christ the Saviour to Novodevichy Convent. A delegation from the Circle also took part.",
    "mosca-2026-read": "Read the article",
    "mosca-2026-p1": "On Sunday, 6 September 2026, the annual Cross procession took place in Moscow, with more than 100,000 faithful taking part.",
    "mosca-2026-p2": "The solemn procession, dedicated to the feast of the Synaxis of All Saints of Moscow, was led by His Holiness Patriarch Kirill, head of the Russian Orthodox Church. The faithful walked approximately 6.5 kilometres from the Cathedral of Christ the Saviour to Novodevichy Convent.",
    "mosca-2026-p3": "A delegation from the International Circle of Friends of Imperial Russia - Third Rome, present in Moscow at the time, also took part in the event.",
    "mosca-2026-videos": "Videos from the event",
    "mosca-2026-video1": "The Cross procession in Moscow led by Patriarch Kirill",
    "mosca-2026-video2": "More than 100,000 faithful take part in the Cross procession",
    "mosca-2026-watch": "Watch the video",
    "mosca-2026-back": "Back to News",
    "skip": "Skip to content",
    "soon": "Coming soon",

    "nav-home": "Home",
    "nav-circolo": "The Circle",
    "nav-storia": "History of the Empire",
    "nav-eventi": "Events and activities",
    "nav-attualita": "News",
    "nav-feste": "Feasts and commemorations",
    "nav-chiesa": "Russian Orthodox Church",
    "nav-galleria": "Gallery",
    "nav-partnership": "Partnership",
    "nav-tesseramento": "Membership",
    "nav-contatti": "Contacts",
    "nav-area": "Members' area",

    "btn-diventa": "Become a member",
    "btn-scopri": "Discover more",
    "btn-leggi": "Read the article",
    "btn-leggi-tutto": "Read more",
    "btn-contattaci": "Contact us",
    "btn-invia-richiesta": "Send request",
    "btn-invia-messaggio": "Send message",
    "socio-btn": "Request membership",
    "home-chi-link": "Discover the Circle",
    "home-storia-link": "Read the history",
    "home-feste-link": "See the calendar",
    "home-eventi-link": "See the events",
    "home-galleria-link": "Open the gallery",
    "home-tess-link": "Become a member",
    "home-fond-link": "Read the story",
    "home-chi-eye": "About us",
    "home-fond-eye": "Our history",

    "foot-naviga": "Navigate",
    "foot-contatti-h": "Contacts",
    "foot-privacy": "Privacy Policy",
    "foot-cookie": "Cookie Policy",
    "foot-noprofit": "Cultural association, non-profit",
    "foot-fb": "Facebook page",

    "cb-text": "This website uses only technical cookies necessary for its operation.",
    "cb-link": "Read the Cookie Policy",
    "cb-btn": "Got it",

    "lbl-nome": "First name",
    "lbl-cognome": "Surname",
    "lbl-email": "Email",
    "lbl-telefono": "Phone (optional)",
    "lbl-professione": "Profession",
    "lbl-messaggio": "Message",
    "lbl-messaggio-obb": "Message",
    "lbl-oggetto": "Subject",
    "et-email": "Email",
    "et-tel-it": "Italy",
    "et-tel-ru": "Russia",
    "et-fb": "Facebook",
    "ph-msg": "Introduce yourself briefly and tell us why you would like to join.",

    "part-h1": "Partnership",
    "part-intro": "The cultural organisations and projects close to the Circle.",
    "part-altri": "Other partners",
    "part-social": "Follow the project",
    "part-scopri": "Discover more",
    "part-desc-soon": "Description coming soon.",

    "cal-prossima": "Next commemoration",
    "fe-altri": "Other commemorations",
    "storia-altri": "More articles",
    "ev-prossimi": "Upcoming events",
    "ev-passati": "Past events",

    "hero-nome": "International Circle of Friends of Imperial Russia",
    "hero-terza": "Third Rome",

    /* --- San Sergio di Radonež (EN fornito dal cliente) --- */
    "ss-title": "Saint Sergius of Radonezh",
    "ss-sub": "18 July",
    "ss-cal-name": "Saint Sergius of Radonezh",
    "ss-cal-desc": "Uncovering of the relics",
    "ss-excerpt": "On 18 July the Church celebrates the uncovering of the venerable relics of Saint Sergius, hegumen of Radonezh.",
    "ss-p1": "On 18 July the Church celebrates the uncovering of the venerable relics of Saint Sergius, hegumen of Radonezh.",
    "ss-p2": "Saint Sergius of Radonezh is one of the most venerated Russian saints. Founder of the Trinity Lavra of Saint Sergius, he was the teacher and spiritual guide of many dozens of Russian saints. He became hegumen and intercessor of all the Russian Land, an example of meekness and humility for monks and laypeople alike. It was he who blessed the holy prince Dmitry Donskoy before the Battle of Kulikovo.",
    "ss-p3": "The faithful turn to Saint Sergius in prayer for help in study and in monastic life, for victory over the passions, especially pride, for growth in faith, and for the protection of the homeland from foreign invasion.",
    "ss-pray-label": "Prayer",
    "ss-pray-1": "O venerable and God-bearing father Sergius!",
    "ss-pray-2": "Look mercifully upon us, your servants, and raise us, bound to earthly things, toward the heights of heaven. Strengthen our weakness and confirm us in faith, that we may hope without doubt to receive every good thing from the mercy of the Lord God through your prayers.",
    "ss-pray-3": "Obtain by your intercession every needful and saving gift for each of us, and by your powerful prayers grant that all of us, on the day of the dread Judgment, may be delivered from the left hand, numbered among those who stand at the right, and hear the blessed voice of the Lord Christ:",
    "ss-pray-quote": "“Come, you who are blessed by my Father, inherit the Kingdom prepared for you from the foundation of the world.”",
    "ss-pray-amen": "Amen.",
    "ss-ph": "[PHOTO: Saint Sergius of Radonezh, to be added]",
    "art-torna-feste": "Back to Feasts and commemorations"
  };

  var LANGS = ["it", "ru", "en"];

  function value(key, lang) {
    if (lang === "en") {
      return (typeof EN[key] === "string") ? EN[key] : EN_PLACEHOLDER;
    }
    var e = DICT[key];
    return (e && typeof e[lang] === "string") ? e[lang] : null;
  }

  function apply(lang) {
    if (LANGS.indexOf(lang) < 0) { lang = "it"; }
    document.documentElement.lang = lang;
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var val = value(el.getAttribute("data-i18n"), lang);
      if (lang === "it" && val === "" && typeof el._i18nItalian === "string") {
        val = el._i18nItalian;
      }
      if (typeof val === "string") { el.innerHTML = val; }
    }
    var phNodes = document.querySelectorAll("[data-i18n-ph]");
    for (var p = 0; p < phNodes.length; p++) {
      var phEl = phNodes[p];
      var phVal = value(phEl.getAttribute("data-i18n-ph"), lang);
      if (typeof phVal === "string") { phEl.setAttribute("placeholder", phVal); }
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
    var sourceNodes = document.querySelectorAll("[data-i18n]");
    for (var s = 0; s < sourceNodes.length; s++) {
      sourceNodes[s]._i18nItalian = sourceNodes[s].innerHTML;
    }
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

  /* Espone la lettura del dizionario nella lingua attiva:
     serve ai messaggi dei moduli Contatti e Tesseramento (js/moduli.js). */
  window.i18nText = function (chiave) {
    var lang = document.documentElement.lang || "it";
    return value(chiave, lang);
  };

  if (document.readyState !== "loading") { init(); }
  else { document.addEventListener("DOMContentLoaded", init); }
})();
