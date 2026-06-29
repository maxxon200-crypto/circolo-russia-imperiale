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

Palette dei **colori della bandiera russa** (blu cobalto, rosso vermiglio) su fondo bianco
caldo, con l'oro come rifinitura. Valori ESATTI, da non reinterpretare. Usa SEMPRE variabili
CSS, mai hex sparsi nel codice.

```css
:root {
  --bianco:      #FBFAF7;   /* sfondo principale chiaro, bianco caldo */
  --bianco-2:    #FFFFFF;   /* card e superfici su fondo chiaro */
  --blu:         #0B3D91;   /* BLU bandiera russa, cobalto pulito - colore primario */
  --blu-scuro:   #082D6B;   /* hover e dettagli del blu */
  --rosso:       #C8102E;   /* ROSSO bandiera russa, vermiglio - accento forte */
  --rosso-scuro: #9E0C24;   /* hover del rosso */
  --oro:         #C9A227;   /* oro, rifiniture e filetti */
  --oro-chiaro:  #E3C766;   /* riflessi e bordi dorati sottili */
  --inchiostro:  #1A1A1A;   /* testo scuro su fondo chiaro */
  --grigio:      #5A5A5A;   /* testo secondario */
  --linea:       #E2DDD0;   /* bordi sottili */
}
```

**Dove usare ogni colore (regole precise, non a intuito):**
- **Sfondo del sito:** `--bianco`. La maggior parte delle sezioni è su fondo chiaro, testo
  `--inchiostro`. Le sezioni di contenuto e lettura restano chiare e ariose.
- **Blu pieno (`--blu`) SOLO per:** hero, footer e UNA fascia "Diventa socio" come invito
  finale. Non colorare di blu/rosso intere sezioni a caso.
- **Hero:** fondo `--blu` pieno sopra una grande immagine storica scurita; nome del Circolo in
  `--oro` (Cormorant 600, molto grande), sottotitolo in `--bianco`, filetto orizzontale `--oro`
  sotto il titolo. Il blu deve dare fierezza, non cupezza.
- **Header:** fondo `--bianco`, testo `--inchiostro`, voce attiva e hover in `--rosso`, filetto
  `--oro` sottile sotto l'header.
- **Footer:** fondo `--blu`, testo `--bianco`, titoli colonna in `--oro` (su blu usa
  `--oro-chiaro` se il contrasto del testo piccolo è debole), link `--bianco` con hover `--oro`.
- **Card (eventi, articoli):** fondo `--bianco-2`, bordo 1px `--linea`, ombra morbida, filetto
  superiore `--oro` spesso 2px. Titolo in Cormorant `--inchiostro`. All'hover il filetto
  diventa `--rosso` e la card si solleva di 2px.
- **Pulsanti primari (CTA tipo "Diventa socio"):** fondo `--rosso`, testo `--bianco`, hover
  `--rosso-scuro`.
- **Pulsanti secondari ("Scopri", "Leggi"):** bordo 1px `--blu`, testo `--blu`, fondo
  trasparente, hover fondo `--blu` testo `--bianco`. (Sopra fondo blu si usa un contorno chiaro.)
- **Link nel testo:** `--blu`, sottolineati, hover `--rosso`.
- **Separatori tra sezioni:** linea sottile `--oro` (1px) centrata, con un piccolo rombo `--oro`
  al centro. Sottile, mai kitsch.

**Contrasto:** il testo `--oro` su `--blu` va verificato. Per i titoli grandi (hero) `--oro` va
bene; per il testo piccolo su blu usa `--oro-chiaro`. Su fondo bianco l'oro NON si usa per il
testo (contrasto debole): l'oro resta filetto/rifinitura, il testo piccolo è `--blu`/`--grigio`.

---

## 3. Tipografia

Niente font di sistema, niente Inter nei titoli. La tipografia porta l'autorevolezza storica
e dà carattere. Il contrasto tra il serif elegante dei titoli e il serif da lettura del corpo
è parte dell'identità.

Importa da Google Fonts e usa SOLO questi tre. Niente Playfair, niente Inter, niente font di
sistema (solo come ultima fallback generica).

```css
:root {
  /* Titoli (h1, h2, h3) e nome del Circolo — Cormorant Garamond, pesi 500 e 600 */
  --font-display: "Cormorant Garamond", Georgia, serif;
  /* Testo corrente, paragrafi, didascalie — PT Serif, pesi 400 e 700 */
  --font-body:    "PT Serif", Georgia, serif;
  /* Etichette piccole, menu, eyebrow, date — PT Sans, pesi 400 e 700, MAIUSCOLO ls 0.12em */
  --font-util:    "PT Sans", system-ui, sans-serif;
}
```

**Scala tipografica** (mobile-first):

| Ruolo | Dimensione | Stile | Note |
|---|---|---|---|
| Hero / H1 | `clamp(2.8rem, 6.5vw, 5rem)` | Cormorant 600 | nome del Circolo in oro su blu, ben spaziato |
| H2 sezione | `clamp(1.9rem, 4vw, 2.9rem)` | Cormorant 600 | accompagnato da eyebrow e filetto oro |
| H3 | `1.35rem` | Cormorant 600 | titoli di scheda, color inchiostro |
| Corpo articoli | `1.075rem` | PT Serif 400 | line-height 1.7, pensato per LEGGERE testi lunghi |
| Eyebrow/etichetta | `0.78rem` | PT Sans 700 | MAIUSCOLO, letter-spacing 0.12em |
| Data/didascalia | `0.85rem` | PT Sans 400 | MAIUSCOLO ls 0.12em, per eventi, articoli, foto |

**Firma tipografica:** le etichette (eyebrow, menu, date) in PT Sans maiuscolo spaziato 0.12em;
i titoli in Cormorant Garamond grandi e arieggiati, con personalità; i testi in PT Serif da
lettura. Il contrasto tra il serif elegante dei titoli e il serif del corpo dà carattere: il
sito si LEGGE, non si scorre soltanto.

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
│ [stemma] CIRCOLO RUSSIA IMPERIALE      menu ☰  │ ← header BIANCO, stemma + nome, filo oro
├───────────────────────────────────────────────┤
│  ███ HERO — fondo BLU pieno (#0B3D91) ██████████ │
│  [IMMAGINE storica scura: Palazzo d'Inverno…]  │
│  Nome del Circolo in ORO + sottotitolo bianco   │
│  ─────── filetto oro ───────                    │
├───────────────────────────────────────────────┤
│  LA NOSTRA MISSIONE       (fondo BIANCO, lettura)│
│  · · · rombo oro separatore · · ·               │
│  PROSSIMI EVENTI          (fondo BIANCO, card)   │
│  · · · rombo oro separatore · · ·               │
│  DALLA STORIA DELL'IMPERO  (fondo BIANCO, lettura)│
│  · · · rombo oro separatore · · ·               │
│  GALLERIA                 (fondo BIANCO)         │
├───────────────────────────────────────────────┤
│  DIVENTA SOCIO            (fascia BLU, l'unica)   │
├───────────────────────────────────────────────┤
│  Footer: contatti, email, Facebook (fondo BLU)  │
└───────────────────────────────────────────────┘
```

La home è una **soglia**: dà il senso del prestigio e mostra le porte (eventi, storia,
galleria, tesseramento) verso il resto. Il blu pieno apre (hero) e chiude (invito, footer);
in mezzo le sezioni restano chiare e ariose, separate da sottili rombi dorati.

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
- **Accento rosso vermiglio** (`--rosso`) per i CTA principali e qualche dettaglio d'onore,
  non diffuso su grandi superfici.

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

> **La soglia imperiale.** L'hero è una "soglia" solenne: fondo **blu pieno della bandiera**
> (`#0B3D91`) sopra una grande immagine storica scura dell'Impero, il nome del Circolo in
> **Cormorant Garamond 600 color oro**, chiuso da un **filetto orizzontale dorato**. Dà subito
> il senso di entrare in un luogo di prestigio e storia. Da quel filetto nasce il "filo" dorato
> (filetti e piccoli rombi) che separa con eleganza le sezioni chiare del sito. Il blu apre e
> chiude (hero, invito, footer); il rosso vermiglio è l'accento dei CTA; l'oro lega tutto.

Spendi l'audacia QUI. Tieni tutto il resto ricco ma disciplinato.

---

## 10. Checklist anti-slop (rivedere prima di consegnare)

- [ ] L'hero ha presenza (fondo blu pieno #0B3D91 su immagine storica scura), nome in oro?
- [ ] La palette usa i valori esatti (bianco, blu #0B3D91, rosso #C8102E, oro #C9A227)?
- [ ] Il blu pieno è usato SOLO per hero, footer e la fascia "Diventa socio"?
- [ ] Le sezioni di contenuto restano chiare e ariose, separate da rombi dorati?
- [ ] L'oro è usato con misura (filetti, rombi, bordo superiore card) e non come testo su bianco?
- [ ] Le schede hanno profondità (ombra morbida, filetto oro 2px in alto), non rettangoli piatti?
- [ ] I font sono Cormorant Garamond (titoli), PT Serif (testo), PT Sans (etichette)?
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
