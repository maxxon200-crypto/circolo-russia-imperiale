# DESIGN.md — Circolo Russia Imperiale

> **Come usare questo file:** Tienilo nella cartella del progetto `circolo-russia-imperiale`.
> All'inizio di OGNI sessione con Claude Code scrivi:
> *"Leggi DESIGN.md e usalo come guida assoluta per ogni decisione di UI. Non deviare dai
> token senza chiedermelo."*
> È l'ancora che impedisce all'AI di tornare ai suoi default generici dopo molti messaggi.

---

## 0. Scopo e contesto

Sito per il **Circolo Russia Imperiale**, associazione culturale italiana dedicata alla
storia, alla cultura e alle tradizioni dell'Impero Russo.

- **Natura:** culturale e istituzionale, NON commerciale. Deve trasmettere prestigio storico,
  serietà e bellezza, come una fondazione o un'accademia, non un negozio.
- **Pubblico:** appassionati di storia e cultura russa, soci e potenziali soci, in Italia.
- **Lingua:** italiano.
- **Compito principale di ogni pagina:** far conoscere il Circolo, le sue attività e la sua
  cultura, e invitare ad avvicinarsi (iscriversi, partecipare agli eventi, leggere).
- **Carattere:** elegante, autorevole, colto, ricco e vivo. Non polveroso, non freddo, non spento.

**Regola anti-slop:** ogni scelta nasce dal mondo dell'Impero Russo (i suoi materiali,
la sua araldica, la sua arte), non da un template. Immagini storiche vere, testi curati,
sobrietà aristocratica ma con personalità cromatica forte.

---

## 1. La trappola da evitare (leggi prima di tutto)

Due rischi opposti da evitare:

1. **L'estetica AI di default:** tutto crema/beige con un accento caldo, righe sottili
   ovunque, piatto e impersonale. Riconoscibile e anonimo.
2. **Il poster acceso:** i tre colori della bandiera russa (bianco, blu, rosso) nelle loro
   versioni primarie e sparate, in parità, tipo cartellone. Sembra una grafica da chiosco,
   non un'istituzione di prestigio.

La via giusta sta nel mezzo: **l'identità cromatica della bandiera russa, ma nobilitata.**
Bianco diventa avorio caldo; blu diventa blu notte profondo, zaffiro istituzionale; rosso
diventa lacca/granato scuro e prezioso. L'oro brunito lega il tutto e dà la nobiltà. Sono i
materiali reali dell'epoca imperiale (l'oro delle icone, il blu degli Ordini, il rosso lacca
degli smalti, l'avorio della carta antica) a dare anima, non i colori in sé.

Tre regole non negoziabili:
1. **Immagini storiche vere e di qualità** (Palazzo d'Inverno, Famiglia Imperiale, Pietro il
   Grande, opere d'arte). Mai stock generico, mai placeholder lasciati nel sito finito.
2. **Testi curati in italiano**, dal tono colto ma chiaro. Niente marketese, niente frasi vuote.
3. **Ricchezza disciplinata.** Colori profondi e ritmo cromatico forte, ma un colore domina
   per sezione e l'oro è una rifinitura preziosa, mai sparato. Il kitsch è il nemico.

---

## 2. Token di colore

Palette dell'**identità russa nobilitata**: avorio, blu notte, granato e oro brunito.
I colori della bandiera nelle loro versioni profonde e aristocratiche, mai accese.
Usa SEMPRE variabili CSS, mai hex sparsi nel codice.

```css
:root {
  /* Base chiara — avorio della carta antica, bianco caldo (NON bianco freddo) */
  --avorio:        #F4EFE6;   /* sfondo chiaro principale, per la lettura */
  --avorio-chiaro: #FBF8F1;   /* superfici sollevate, card su fondo chiaro */
  --pergamena:     #EBE3D2;   /* fasce chiare alternate, leggermente più calde */

  /* Blu — colore ISTITUZIONALE forte: blu notte / zaffiro imperiale */
  --blu:           #14284B;   /* blu notte, fondali di sezione e hero */
  --blu-zaffiro:   #1B2F57;   /* variante zaffiro, gradienti e superfici */
  --blu-scuro:     #0E1B33;   /* blu profondissimo, footer e fondali estremi */
  --blu-chiaro:    #2E4A7D;   /* hover, bordi e dettagli su fondo blu */

  /* Rosso — lacca/granato scuro e nobile, ACCENTO per CTA ed evidenziazioni */
  --granato:       #7C1F2E;   /* rosso lacca/granato, pulsanti e accenti */
  --granato-scuro: #5E1622;   /* hover dei CTA, dettagli incisi */
  --granato-chiaro:#9B3340;   /* richiami più tenui, bordi */

  /* Oro — brunito/antico, la rifinitura preziosa che lega tutto */
  --oro:           #B8924A;   /* accenti, titoli chiave, fregi, profili */
  --oro-scuro:     #8A6B30;   /* testo oro su fondo chiaro, hover */
  --oro-chiaro:    #DBC081;   /* oro su fondo scuro, riflessi, filetti tenui */

  /* Inchiostro — per i testi su fondo chiaro */
  --nero:          #15110C;   /* testo principale su avorio */
  --nero-soft:     #3A332A;   /* testo secondario su avorio */

  /* Funzionali */
  --linea:         #D8CCB4;   /* righe e bordi sottili su fondo chiaro */
  --linea-oro:     #C7A24E;   /* filetti dorati sottili, separatori firma */
}
```

**Ritmo cromatico (regola di sistema):** il sito NON deve essere tutto chiaro. Alterna le
sezioni per dare respiro e identità:
- sezioni di **lettura** (testi, articoli, missione): fondo **avorio/pergamena**, testo scuro;
- sezioni **istituzionali e d'apertura** (hero, eventi, inviti forti): fondo **blu notte**,
  testo avorio e accenti oro;
- **un solo** momento per pagina può usare il **granato** come fondo pieno (di norma il CTA
  "Diventa socio"): è il colore più raro e prezioso, mai diffuso.

**Regola d'uso dei colori:**
- **Un colore domina per sezione.** Gli altri due restano accenti. Non mettere mai blu, rosso
  e oro accesi in parità nello stesso blocco.
- **L'oro è rifinitura, non riempimento:** filetti, fregi araldici, titoli chiave, profili
  delle immagini, lo stemma. Se è ovunque diventa kitsch.
- **Il granato è un accento d'onore:** CTA principali, una parola evidenziata, un dettaglio.
  Mai grandi superfici rosse diffuse (tranne l'unica sezione-invito).
- **Su fondo blu** usa testo avorio e oro chiaro (`--oro-chiaro`) per i dettagli: l'oro scuro
  non avrebbe contrasto sufficiente.

---

## 3. Tipografia

Niente font di sistema, niente Inter nei titoli. La tipografia porta l'autorevolezza storica
e dà carattere. Il contrasto tra il serif elegante dei titoli e il serif da lettura del corpo
è parte dell'identità.

```css
:root {
  /* Display — serif classico ed elegante, per titoli. Nobiltà e personalità. */
  --font-display: "Cormorant Garamond", "EB Garamond", "Playfair Display", Georgia, serif;
  /* Body — serif leggibile per i testi lunghi (articoli storici). */
  --font-body:    "Lora", "EB Garamond", Georgia, serif;
  /* Utility — sans sobrio in maiuscoletto per etichette, date, menu, didascalie. */
  --font-util:    "Spectral SC", "Inter", system-ui, sans-serif;
}
```

**Scala tipografica** (mobile-first):

| Ruolo | Dimensione | Stile | Note |
|---|---|---|---|
| Hero / H1 | `clamp(2.8rem, 6.5vw, 5rem)` | display, 500 | line-height 1.06, elegante, ben spaziato, mai grassetto pesante |
| H2 sezione | `clamp(1.9rem, 4vw, 2.9rem)` | display, 500 | accompagnato da eyebrow e fregio dorato |
| H3 | `1.35rem` | display/body 600 | titoli di scheda |
| Corpo articoli | `1.075rem` | body, 400 | line-height 1.7, pensato per LEGGERE testi lunghi |
| Eyebrow/etichetta | `0.78rem` | util, maiuscoletto | letter-spacing 0.16em, color oro (su chiaro: oro scuro) |
| Data/didascalia | `0.85rem` | util | per eventi, articoli, foto storiche |

**Firma tipografica:** le etichette di sezione (eyebrow) in maiuscoletto spaziato color oro,
accompagnate dal fregio dorato, danno subito un'aria di documento storico curato. I titoli in
serif display, grandi e arieggiati, con personalità. I testi degli articoli in serif da
lettura: il sito si LEGGE, non si scorre soltanto.

---

## 4. Layout, spaziatura e profondità

- **Griglia:** contenuto centrato, larghezza massima `1140px`; per gli articoli lunghi,
  colonna di lettura più stretta (`720px`) per leggibilità.
- **Ritmo verticale:** sezioni separate da `clamp(4.5rem, 9vw, 8rem)`. Molto respiro:
  l'eleganza è fatta di spazio, non di riempimento.
- **Border-radius:** molto contenuto, `4px` (quasi squadrato), coerente con un'estetica
  classica e istituzionale. Niente bolle arrotondate.
- **Profondità (importante):** le schede (eventi, articoli, galleria) si SOLLEVANO dal fondo
  con un'ombra morbida e, su fondo chiaro, un sottile filo dorato in alto. Mai rettangoli
  piatti dello stesso colore del fondo. Su fondo blu, le schede sono avorio e risaltano.
- **Bordi e filetti:** righe sottili `1px solid var(--linea)`; come accento, filetti dorati
  `var(--linea-oro)` e il **fregio araldico** (vedi §7) per separare sezioni importanti.
- **Mobile-first:** molti apriranno da telefono. Tutto deve impilarsi in modo pulito ed elegante.

### Wireframe della HOME (con ritmo cromatico)

```
┌───────────────────────────────────────────────┐
│ [stemma] CIRCOLO RUSSIA IMPERIALE      menu ☰  │ ← header chiaro, stemma + nome, filo oro
├───────────────────────────────────────────────┤
│  ███ HERO — fondo BLU NOTTE profondo ███████████ │
│  [IMMAGINE storica scura: Palazzo d'Inverno…]  │
│  Nome del Circolo in oro/avorio + frase nobile  │
│  ─────── fregio dorato ───────                  │
├───────────────────────────────────────────────┤
│  LA NOSTRA MISSIONE      (fondo AVORIO, lettura) │
├───────────────────────────────────────────────┤
│  PROSSIMI EVENTI         (fondo BLU, card avorio)│
├───────────────────────────────────────────────┤
│  DALLA STORIA DELL'IMPERO (fondo AVORIO, lettura)│
├───────────────────────────────────────────────┤
│  GALLERIA                (fondo BLU profondo)    │
├───────────────────────────────────────────────┤
│  DIVENTA SOCIO           (fondo GRANATO, l'unico)│
├───────────────────────────────────────────────┤
│  Footer: contatti, email, Facebook (BLU scuro)  │
└───────────────────────────────────────────────┘
```

La home è una **soglia**: dà il senso del prestigio e mostra le porte (eventi, storia,
galleria, tesseramento) verso il resto. Il ritmo blu/avorio/blu evita la piattezza.

---

## 5. Movimento

Minimo ed elegante. Il movimento deve dare solennità e cura, mai spettacolo.

- **Hero:** comparsa morbida e lenta del titolo e dell'immagine. Una volta sola, dignitosa.
- **Scroll:** rivelazioni delicate (leggera dissolvenza/salita) con tempi VARIATI, mai lo
  stesso identico fade ovunque (è la firma dei siti AI).
- **Hover:** sulle schede (eventi, articoli) un sollevamento lieve, ombra più marcata e la
  comparsa di un filo dorato. Discreto.
- **Sempre:** rispetta `prefers-reduced-motion`. Niente animazioni vistose o continue.

---

## 6. Voce e microcopy (italiano colto ma chiaro)

Tono di un'istituzione culturale seria, ospitale, mai pomposa fino all'illeggibilità.

**Sì:**
- "Un circolo dedicato alla storia, alla cultura e alle tradizioni dell'Impero Russo."
- "Scopri i prossimi incontri" / "Leggi gli articoli" / "Diventa socio"
- Etichette chiare: "Eventi e attività", "Storia dell'Impero", "Galleria", "Tesseramento".

**No:**
- Frasi vuote e magniloquenti senza contenuto ("Un viaggio senza tempo nell'eternità dello
  spirito imperiale...").
- Marketese commerciale ("La soluzione ideale per i tuoi interessi culturali").

**Regole:**
- Voce attiva. I pulsanti dicono cosa succede: "Diventa socio", "Leggi l'articolo",
  "Iscriviti all'evento".
- Coerenza: il pulsante "Invia richiesta" porta a una conferma "Richiesta inviata".
- Errori del form chiari e non scuse vaghe: "Inserisci un indirizzo email valido".
- Le date degli eventi sempre in chiaro e complete (es. "Sabato 12 ottobre 2026, ore 18.00").

**REGOLA TRATTINI (importante):** nei testi VISIBILI non usare mai il trattino lungo "—"
come pausa. Usa punti, virgole, due punti. Frasi naturali. (Il trattino lungo dà aria di
testo generato dall'AI.) Questo NON riguarda il codice CSS (le variabili tipo `--oro` restano
così: sono codice, non testo visibile).

---

## 7. Elementi distintivi del tema (l'anima)

Da usare con misura, per radicare il sito nell'Impero Russo senza scadere nel kitsch:
- **Fregio araldico dorato:** il "filo conduttore" ricorrente. Un piccolo motivo araldico in
  oro (un losanga/rombo con sottili linee dorate ai lati, richiamo agli ornamenti imperiali)
  separa le sezioni importanti e firma le intestazioni. Elegante, mai pesante.
- **Stemma/aquila bicipite:** nell'header e nel footer in versione sobria e monocromatica
  (oro su blu o nero su avorio). È il simbolo, non un timbro ripetuto ovunque.
- **Immagini storiche** come opere: cornice sottile con filetto oro e didascalia in font util.
  NIENTE texture rumorose, NIENTE righe diagonali, niente riempitivi.
- **Accento granato** allo smalto degli Ordini imperiali per UN dettaglio d'onore (un CTA, una
  parola evidenziata), non diffuso.

---

## 8. Pavimento di qualità (non negoziabile)

Claude costruisce ogni pagina rispettando questi minimi, senza che debba chiederlo:
- **Responsive** fino a 320px, impilamento pulito ed elegante su mobile.
- **Performance:** immagini storiche ottimizzate (WebP/AVIF, dimensionate). Le immagini
  storiche sono pesanti: vanno compresse bene.
- **Accessibilità:** contrasto AA. Attenzione al testo avorio su blu (deve restare ben
  leggibile) e all'oro, che su fondo chiaro va scurito (`--oro-scuro`) e su fondo scuro
  schiarito (`--oro-chiaro`): verifica sempre. Focus tastiera visibile, `alt` descrittivi
  sulle immagini storiche, navigazione da tastiera.
- **SEO in italiano:** title e meta per ogni pagina (es. "Storia dell'Impero Russo, Circolo
  Russia Imperiale"); struttura semantica corretta.
- **Leggibilità degli articoli:** colonna di lettura stretta, interlinea generosa. Il sito
  ospita testi lunghi: devono essere piacevoli da leggere.

---

## 9. La firma (l'elemento da ricordare)

Ogni sito ha **un** elemento memorabile. Qui la firma è:

> **La soglia imperiale.** L'hero è una "soglia" solenne: fondo **blu notte profondo** (o
> grande immagine storica scura dell'Impero), il nome del Circolo in serif elegante color
> oro/avorio, chiuso da un **fregio dorato araldico**. Dà subito il senso di entrare in un
> luogo di prestigio e storia. Da quel fregio nasce il "filo" dorato che separa con eleganza
> tutte le sezioni del sito, mentre il colore alterna blu istituzionale e avorio da lettura.
> Il blu e il granato danno l'identità russa; l'oro la nobiltà. È nell'hero che oro e
> solennità sono pieni; il resto resta disciplinato e leggibile.

Spendi l'audacia QUI. Tieni tutto il resto ricco ma disciplinato.

---

## 10. Checklist anti-slop (rivedere prima di consegnare)

- [ ] L'hero ha presenza (fondo blu notte o immagine storica scura), non testo su beige?
- [ ] La palette è l'identità russa nobilitata (avorio, blu notte, granato, oro), non beige piatto?
- [ ] C'è un vero ritmo cromatico (sezioni blu alternate ad avorio, granato solo una volta)?
- [ ] Un colore domina per sezione, gli altri sono accenti, mai i tre accesi in parità?
- [ ] L'oro è usato con misura (titoli, fregi, araldica) e non sparato ovunque?
- [ ] Le schede hanno profondità (ombra morbida, filo dorato), non rettangoli piatti?
- [ ] La tipografia display NON è un font di sistema ed è ben spaziata?
- [ ] I testi visibili sono senza trattini lunghi "—"?
- [ ] I testi suonano colti ma chiari, senza frasi vuote e magniloquenti?
- [ ] Gli articoli lunghi sono leggibili (colonna stretta, interlinea generosa)?
- [ ] Il contrasto è AA (avorio su blu, oro leggibile sul suo fondo)?
- [ ] Il movimento è minimo, elegante e con tempi variati?
- [ ] Lo stemma/aquila e il fregio araldico sono sobri e non ripetuti ovunque?
- [ ] C'è UNA sola firma piena (la soglia imperiale) e il resto è disciplinato?
- [ ] Funziona e si legge bene sul telefono?

---

## 11. Nota sulle funzioni avanzate (fuori dal design)

Il cliente chiede anche: area riservata soci con login, blog con moderazione, tesseramento
con pagamento, gestione contenuti da parte degli amministratori. Queste NON sono decisioni di
design ma di piattaforma e non si realizzano con un sito statico semplice. Questo DESIGN.md
copre l'aspetto e la struttura della **vetrina** (fase 1). Le pagine "Area riservata" e
"Tesseramento" vanno progettate come segnaposto eleganti ("prossimamente") finché non si
sceglie la tecnologia della fase 2.

---

*Questo file è il punto di partenza, non una gabbia. La struttura resta; l'anima la portano
le immagini storiche reali e i testi curati forniti dal Circolo.*
