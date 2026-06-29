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
- **Carattere:** elegante, autorevole, colto, ma accogliente e vivo. Non polveroso, non freddo.

**Regola anti-slop:** ogni scelta nasce dal mondo dell'Impero Russo (i suoi materiali,
la sua araldica, la sua arte), non da un template. Immagini storiche vere, testi curati,
sobrietà aristocratica.

---

## 1. La trappola da evitare (leggi prima di tutto)

Il rischio numero uno per un sito "storico-elegante" è cadere nell'estetica AI di default:
sfondo crema, grande serif ad alto contrasto, un accento caldo, righe sottili ovunque.
È riconoscibile e impersonale.

Per evitarlo, questo sistema **ancóra** la palette nero/oro/avorio (richiesta dal cliente) ai
**materiali reali dell'epoca imperiale russa**: l'oro brunito delle icone e delle cornici,
il blu zaffiro e il rosso lacca degli smalti e degli Ordini imperiali, l'avorio della carta
antica e dello stucco dei palazzi. È la specificità storica a dare anima, non la palette in sé.

Tre regole non negoziabili:
1. **Immagini storiche vere e di qualità** (Palazzo d'Inverno, Famiglia Imperiale, Pietro il
   Grande, opere d'arte). Mai stock generico, mai placeholder lasciati nel sito finito.
2. **Testi curati in italiano**, dal tono colto ma chiaro. Niente marketese, niente frasi vuote.
3. **Eleganza per sottrazione.** L'oro e l'ornamento usati con misura preziosa. Il kitsch
   (oro sparato ovunque, fregi pesanti) è il nemico: ucciderebbe la credibilità.

---

## 2. Token di colore

Palette della **bandiera imperiale antica (nero, oro, bianco/avorio)**, arricchita dai
materiali dell'epoca. Usa SEMPRE variabili CSS, mai hex sparsi nel codice.

```css
:root {
  /* Base — avorio della carta antica e dello stucco, non "crema da AI" */
  --avorio:        #F4EFE6;   /* sfondo principale, avorio caldo */
  --avorio-chiaro: #FBF8F1;   /* superfici sollevate, card */
  --pergamena:     #E8DEC9;   /* fasce e sezioni alternate */

  /* Inchiostro — nero imperiale */
  --nero:          #15110C;   /* testo principale e fondali profondi */
  --nero-soft:     #3A332A;   /* testo secondario */

  /* Oro — l'identità, oro brunito/antico (NON oro giallo acceso) */
  --oro:           #A9863B;   /* accenti, titoli, fregi, profili */
  --oro-scuro:     #7C6026;   /* hover, dettagli incisi */
  --oro-chiaro:    #D8C089;   /* riflessi tenui, bordi sottili dorati */

  /* Smalti imperiali — usati RARAMENTE, per accenti speciali */
  --zaffiro:       #1B3A5B;   /* blu degli Ordini imperiali */
  --lacca:         #7B2233;   /* rosso lacca/granato, per richiami speciali */

  /* Funzionali */
  --linea:         #D8CCB4;   /* righe e bordi sottili */
  --linea-oro:     #C7A24E;   /* filetti dorati sottili (separatori firma) */
}
```

**Regola d'uso dell'oro:** l'oro è una **rifinitura preziosa**, non un colore di riempimento.
Compare nei titoli chiave, nei filetti separatori, nei profili di un'immagine, nell'araldica.
Se l'oro è ovunque, diventa kitsch e perde valore. Lo zaffiro e la lacca sono accenti rari,
per un singolo dettaglio speciale (un titolo di sezione importante, un bordo d'onore), mai diffusi.

> **Variante "fondo scuro solenne"** (per l'hero o sezioni d'apertura): fondo `--nero` con
> testo `--avorio` e oro come unico accento. Dà gravità e prestigio. Usala per i momenti
> più solenni (hero, intestazioni di sezione), non per i testi lunghi da leggere.

---

## 3. Tipografia

Niente font di sistema, niente Inter. La tipografia porta l'autorevolezza storica.

```css
:root {
  /* Display — serif classico ed elegante, per titoli. Nobiltà e tradizione. */
  --font-display: "Cormorant Garamond", "EB Garamond", "Playfair Display", Georgia, serif;
  /* Body — serif leggibile per i testi lunghi (articoli storici). */
  --font-body:    "Lora", "EB Garamond", Georgia, serif;
  /* Utility — sans sobrio per etichette, date, menu, didascalie. */
  --font-util:    "Spectral SC", "Inter", system-ui, sans-serif;
}
```

**Scala tipografica** (mobile-first):

| Ruolo | Dimensione | Stile | Note |
|---|---|---|---|
| Hero / H1 | `clamp(2.6rem, 6vw, 4.6rem)` | display, 400–500 | line-height 1.08, elegante, mai grassetto pesante |
| H2 sezione | `clamp(1.9rem, 4vw, 2.8rem)` | display, 400 | spesso con filetto dorato sopra o sotto |
| H3 | `1.35rem` | display/body 600 | |
| Corpo articoli | `1.075rem` | body, 400 | line-height 1.7, pensato per LEGGERE testi lunghi |
| Eyebrow/etichetta | `0.78rem` | util, maiuscoletto | letter-spacing 0.14em, colore --oro-scuro |
| Data/didascalia | `0.85rem` | util | per eventi, articoli, foto storiche |

**Firma tipografica:** le etichette di sezione (eyebrow) in maiuscoletto spaziato color oro
scuro, eventualmente accompagnate da un filetto dorato sottile, danno subito un'aria di
documento storico curato. I testi degli articoli in serif da lettura: il sito si LEGGE,
non si scorre soltanto.

---

## 4. Layout e spaziatura

- **Griglia:** contenuto centrato, larghezza massima `1140px`; per gli articoli lunghi,
  colonna di lettura più stretta (`720px`) per leggibilità.
- **Ritmo verticale:** sezioni separate da `clamp(4.5rem, 9vw, 8rem)`. Molto respiro:
  l'eleganza è fatta di spazio bianco, non di riempimento.
- **Border-radius:** molto contenuto, `4px` (quasi squadrato), coerente con un'estetica
  classica e istituzionale. Niente bolle arrotondate.
- **Bordi e filetti:** righe sottili `1px solid var(--linea)`; come accento, filetti dorati
  sottili `var(--linea-oro)` per separare sezioni importanti (è un elemento firma, usalo con misura).
- **Mobile-first:** molti apriranno da telefono. Tutto deve impilarsi in modo pulito ed elegante.

### Wireframe della HOME

```
┌───────────────────────────────────────────────┐
│ [stemma] CIRCOLO RUSSIA IMPERIALE      menu ☰  │ ← header sobrio, stemma + nome
├───────────────────────────────────────────────┤
│  ███ HERO su fondo scuro/immagine imperiale ███ │
│  [IMMAGINE: Palazzo d'Inverno / Famiglia Imp.] │
│  Nome del Circolo + breve frase nobile          │
│  ─────── filetto dorato ───────                 │
├───────────────────────────────────────────────┤
│  LA NOSTRA MISSIONE                             │
│  [estratto Statuto / finalità del Circolo]      │
├───────────────────────────────────────────────┤
│  PROSSIMI EVENTI (anteprime a schede)           │
├───────────────────────────────────────────────┤
│  DALLA STORIA DELL'IMPERO (ultimi articoli)     │
├───────────────────────────────────────────────┤
│  GALLERIA (anteprima immagini eventi)           │
├───────────────────────────────────────────────┤
│  DIVENTA SOCIO (invito al tesseramento)         │
├───────────────────────────────────────────────┤
│  Footer: contatti, email, Facebook, stemma      │
└───────────────────────────────────────────────┘
```

La home è una **soglia**: dà il senso del prestigio e mostra le porte (eventi, storia,
galleria, tesseramento) verso il resto.

---

## 5. Movimento

Minimo ed elegante. Il movimento deve dare solennità e cura, mai spettacolo.

- **Hero:** comparsa morbida e lenta del titolo e dell'immagine. Una volta sola, dignitosa.
- **Scroll:** rivelazioni delicate (leggera dissolvenza/salita) con tempi VARIATI, mai lo
  stesso identico fade ovunque (è la firma dei siti AI).
- **Hover:** sulle schede (eventi, articoli) un sollevamento lieve e la comparsa di un filetto
  dorato. Discreto.
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
- **Stemma/aquila bicipite:** usato nell'header e nel footer in versione sobria e monocromatica
  (oro su scuro o nero su avorio). È il simbolo, non un timbro ripetuto ovunque.
- **Filetto dorato** come separatore tra sezioni importanti: il "filo" elegante ricorrente.
- **Immagini storiche** con cornice sottile (eventuale filetto oro) e didascalia in font util:
  trattate come opere, non come riempitivo.
- **Eventuale richiamo cromatico** allo zaffiro/lacca degli smalti imperiali per UN dettaglio
  speciale per pagina, non diffuso.

---

## 8. Pavimento di qualità (non negoziabile)

Claude costruisce ogni pagina rispettando questi minimi, senza che debba chiederlo:
- **Responsive** fino a 320px, impilamento pulito ed elegante su mobile.
- **Performance:** immagini storiche ottimizzate (WebP/AVIF, dimensionate). Le immagini
  storiche sono pesanti: vanno compresse bene.
- **Accessibilità:** contrasto AA (attenzione al testo su fondi scuri e all'oro su avorio,
  che può avere contrasto debole: verificalo), focus tastiera visibile, `alt` descrittivi
  sulle immagini storiche, navigazione da tastiera.
- **SEO in italiano:** title e meta per ogni pagina (es. "Storia dell'Impero Russo — Circolo
  Russia Imperiale"); struttura semantica corretta.
- **Leggibilità degli articoli:** colonna di lettura stretta, interlinea generosa. Il sito
  ospita testi lunghi: devono essere piacevoli da leggere.

---

## 9. La firma (l'elemento da ricordare)

Ogni sito ha **un** elemento memorabile. Qui la firma di default è:

> **La soglia imperiale.** L'hero è una "soglia" solenne: fondo scuro (--nero) o grande
> immagine storica dell'Impero, il nome del Circolo in serif elegante color avorio/oro,
> chiuso da un sottile filetto dorato. Dà subito il senso di entrare in un luogo di prestigio
> e storia. Da quel filetto dorato nasce il "filo" che separa con eleganza tutte le sezioni
> del sito. È l'unico punto dove l'oro e la solennità sono pieni; tutto il resto resta quieto,
> avorio, leggibile.

Spendi l'audacia QUI. Tieni tutto il resto sobrio e disciplinato.

---

## 10. Checklist anti-slop (rivedere prima di consegnare)

- [ ] L'hero usa un'immagine storica vera dell'Impero, non un placeholder o stock generico?
- [ ] La palette è nero/oro/avorio ancorata ai materiali storici, non il solito crema da AI?
- [ ] L'oro è usato con misura (titoli, filetti, araldica) e non sparato ovunque?
- [ ] La tipografia display NON è un font di sistema?
- [ ] I testi visibili sono senza trattini lunghi "—"?
- [ ] I testi suonano colti ma chiari, senza frasi vuote e magniloquenti?
- [ ] Gli articoli lunghi sono leggibili (colonna stretta, interlinea generosa)?
- [ ] Il movimento è minimo, elegante e con tempi variati?
- [ ] Lo stemma/aquila è sobrio e non ripetuto ovunque?
- [ ] C'è UNA sola firma piena (la soglia imperiale) e il resto è quieto?
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
