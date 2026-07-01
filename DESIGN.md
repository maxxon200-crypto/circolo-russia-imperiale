# DESIGN.md — Circolo Internazionale Amici della Russia Imperiale - Terza Roma

> **Come usare questo file:** è la guida assoluta del sito. All'inizio di ogni sessione:
> *"Leggi DESIGN.md e usalo come guida assoluta per ogni decisione di UI. Non deviare dai
> token senza chiedermelo."* È l'ancora che tiene il sito fedele alla sua anima.

---

## 0. L'anima del sito (la cosa più importante)

Questo non è un sito che elenca informazioni: è un sito che trasmette **emozione**. Chi arriva
deve PROVARE qualcosa, il fascino, la nostalgia e la bellezza della Russia imperiale, prima
ancora di leggere. Deve sembrare **scritto a mano, con amore e cura**, non generato.

Principi guida:
- **Una sezione, un'idea.** Si introduce un pensiero alla volta, con molto spazio attorno per
  respirare. Niente muri di contenuto.
- **Immagini grandi ed evocative.** Le foto storiche sono protagoniste, non riempitivi.
- **Testi che parlano al cuore**, non schede tecniche. Frasi evocative, calde, in italiano curato.
- **Eleganza e profondità.** Card bianche che galleggiano su crema, oro usato come un gioiello,
  tipografia che emoziona.

---

## 1. La trappola da evitare

Il rischio è il "volantino": tante informazioni stipate, fondi piatti, testi freddi, decori
sgargianti. Per evitarlo: respiro, gerarchia, immagini, e un oro discreto da palazzo imperiale
(pensa alle sale dell'Hermitage), mai folkloristico.

---

## 2. Palette (valori esatti, sostituiscono tutto)

```css
:root {
  --navy:    #0B192C;  /* Dark Midnight Navy: header, footer, testo principale del corpo */
  --crema:   #F8F6F0;  /* Alabaster Cream: sfondo della stragrande maggioranza del sito */
  --bianco:  #FFFFFF;  /* Crisp White: SOLO per card/box con testo e immagini */
  --cremisi: #9A1720;  /* Crimson Red: pulsanti CTA principali e hover */
  --oro:     #C5A059;  /* Muted Gold: divisori sottili, icone, bordi tenui */
}
```

**Regole d'uso rigide:**
- **Sfondo di quasi tutto il sito:** `--crema`. Caldo, elegante.
- **Header e footer:** `--navy`. Anche il **testo del corpo** principale è `--navy` (più
  morbido del nero puro).
- **Card e box** che contengono testi/immagini: `--bianco` puro, per **sollevarsi** dalla
  crema con un'ombra morbida. Questo "lift" dà profondità ed è centrale.
- **`--cremisi` SOLO** per i pulsanti d'azione principali ("Diventa socio", "Scopri di più") e
  i loro hover. Mai come fondo di intere sezioni.
- **`--oro` con parsimonia:** divisori sottili (rombi/puntini tra le sezioni), piccole icone,
  filetti attorno o sopra le card, ornamenti. Mai campiture piene d'oro.

Colori derivati ammessi (solo come opacità del navy, vedi §4): testo secondario
`rgba(11,25,44,0.70)`, didascalie `rgba(11,25,44,0.55)`; su fondo scuro `rgba(255,255,255,0.82)`.

---

## 3. Tipografia (esatta)

```css
:root {
  /* Titoli, nome del Circolo, frasi evocative. La voce elegante ed emotiva. */
  --font-display: "Cormorant Garamond", Georgia, serif;   /* pesi 500-600 */
  /* Testo, descrizioni, menu, etichette, pulsanti. La voce chiara e leggibile. */
  --font-body:    "Inter", system-ui, sans-serif;          /* pesi 400-500 */
}
```
Nessun altro font. **Cormorant** porta l'emozione (grande, arioso); **Inter** porta la
chiarezza.

| Ruolo | Font | Dimensione | Note |
|---|---|---|---|
| Hero / nome | Cormorant 500-600 | `clamp(2.4rem, 5.5vw, 4rem)` | centrato, equilibrato, color crema |
| Titolo sezione | Cormorant 500-600 | `clamp(2rem, 4.5vw, 3.2rem)` | colpisce per primo |
| Frase evocativa | Cormorant 500 | `clamp(1.3rem, 2.4vw, 1.8rem)` | per i passaggi al cuore |
| Corpo / descrizioni | Inter 400 | `1.05rem` | navy a opacità ridotta, line-height 1.75 |
| Eyebrow/etichetta | Inter 500 | `0.78rem` | MAIUSCOLO, letter-spacing 0.18em, color oro |
| Pulsanti | Inter 500 | `0.9rem` | maiuscolo leggero, lettere spaziate |

---

## 4. Gerarchia del testo con l'opacità

L'occhio deve cadere PRIMA sui titoli (emozione), POI sulle descrizioni (informazione).
- **Titoli:** opacità 100%, colore pieno (`--navy`, o `--bianco`/`--crema` su fondo scuro).
- **Descrizioni / testi secondari:** Inter, `--navy` a **opacità 65-75%** (`rgba(11,25,44,0.70)`),
  così "arretrano" rispetto ai titoli. Mai sotto il livello leggibile (AA).
- **Eyebrow / etichette:** piccole, Inter maiuscolo spaziato, `--oro` o navy a bassa opacità.

---

## 5. Profondità e ombre

- **Card** (su crema): fondo `--bianco`, ombra a due livelli:
  `box-shadow: 0 1px 3px rgba(11,25,44,.06), 0 14px 36px rgba(11,25,44,.10);`
  Hover: ombra più profonda e sollevamento di 3-4px, transizione morbida.
- **Filetto superiore card** in `--oro` sottilissimo, come dettaglio prezioso.
- **Header:** leggera ombra sotto quando si scorre (classe `.scrolled`).
- **Pulsanti:** lieve ombra a riposo, più marcata all'hover.
- Ombre sempre nei toni del navy, raffinate, mai pesanti.

---

## 6. Rifiniture oro (sottili, mai ingombranti)

**Principio:** "Meno è più. L'oro accompagna, non domina. Ogni dettaglio ha uno scopo, ogni
spazio ha un respiro." L'oro non occupa mai spazio da solo: incornicia e accompagna il testo,
in silenzio. Niente volute, niente foglie barocche, niente ornamenti d'angolo. Solo linee
sottili, cornici fini, piccoli rombi/cerchietti.

- **Cornici card/box:** un bordo sottile **1px `--oro`** attorno alle card e ai box importanti,
  angoli leggermente arrotondati, come la cornice di un documento prezioso. Niente decori
  dentro o sopra: solo la linea di contorno fine.
- **Divisori di sezione:** una linea orizzontale sottile **1px `--oro`** con un piccolo
  **rombo o cerchietto vuoto** in `--oro` all'inizio o al centro. Discreto.
- **Eyebrow:** Inter maiuscolo spaziato, `--oro`, piccole e raffinate, sopra i titoli.
- **Filetti:** sempre 1px, sempre `--oro`, per sottolineare un titolo o separare blocchi.
- **Su mobile** restano sottili e leggibili: la leggibilità prima di tutto.

---

## 7. Struttura emotiva delle sezioni

- **HERO:** grande immagine storica a tutta larghezza come **sfondo** (placeholder etichettato),
  velatura `--navy` semi-trasparente per la leggibilità. Nome completo in Cormorant, centrato
  ed equilibrato, color crema/bianco, con **"TERZA ROMA"** e un filetto oro come sigillo. Sotto,
  una **frase evocativa** (non descrittiva), poi i due pulsanti grandi. Deve emozionare in 2 secondi.
- **Sezioni (mission, eventi, storia, galleria, tesseramento):** ognuna su `--crema`, introdotta
  da eyebrow + grande titolo Cormorant + divisore dorato, contenuto in **card bianche sollevate**.
  Una sezione = un'idea, molto respiro verticale (almeno 6rem).
- **"Diventa socio":** invito caldo, con cornice/ornamento dorato e il solo bottone `--cremisi`.
  Non una fascia rossa piena.
- **Header:** solo il **logo** a sinistra (cliccabile, torna alla home) e il menu a destra.

---

## 8. Layout e spaziatura

- Contenuto centrato, larghezza max `1140px`; colonna di lettura `720px` per i testi lunghi.
- Border-radius contenuto (`6px`), elegante e non gonfio.
- Mobile-first: tutto si impila con eleganza fino a 320px.

**Scala di spaziatura armonica** (usala in modo coerente in tutto il sito):

| Token | Valore | Uso |
|---|---|---|
| `--sp-1` | 4px | micro-dettagli |
| `--sp-2` | 8px | spazi interni piccoli |
| `--sp-3` | 16px | padding standard |
| `--sp-4` | 24px | tra elementi correlati |
| `--sp-5` | 32px | tra sezioni |
| `--sp-6` | 48px | tra blocchi principali |
| `--sp-7` | 64px | tra sezioni importanti |
| `--sp-8` | 96px | tra macro-sezioni (respiro ampio) |

Le sezioni sono separate da `clamp(var(--sp-7), 9vw, var(--sp-8))` (respiro ampio).

---

## 8b. Selettore lingua (Italiano / Russo)

Niente traduzione automatica (Google Translate): la qualità non è adatta a un sito
istituzionale. Il sito è **bilingue IT/RU** con testi russi ufficiali forniti dal cliente.
- Nell'header, dove c'era il selettore, due **bandiere** come switch: 🇮🇹 e 🇷🇺 (emoji Unicode,
  zero KB, nessuna immagine esterna).
- Dimensione ~24px, cliccabili; la bandiera attiva ha un sottile anello in `--oro`. Tap target
  minimo 44px su mobile (padding invisibile).
- Il cambio lingua avviene via JS (`js/i18n.js`): ogni elemento traducibile ha `data-i18n` e la
  scelta è salvata in `localStorage`. I testi russi sono quelli ufficiali, mai auto-tradotti.
- Nel testo **russo** i trattini lunghi "—" fanno parte della grammatica e vanno mantenuti;
  nel testo **italiano** no (vedi §9).

---

## 9. Voce e microcopy

Tono di chi ama questo mondo e lo racconta con cura. Frasi evocative, calde, mai marketese.
- **Sì:** "Dove la memoria di un Impero diventa incontro e bellezza."
- **No:** "La soluzione ideale per i tuoi interessi culturali."
- Pulsanti in voce attiva: "Diventa socio", "Scopri di più", "Leggi la storia".
- **REGOLA TRATTINI:** nei testi visibili mai il trattino lungo "—". Usa punti, virgole, due
  punti. (Le variabili CSS tipo `--oro` restano: sono codice.)

---

## 10. Pavimento di qualità (non negoziabile)

- Responsive fino a 320px, impilamento elegante.
- Immagini ottimizzate (placeholder etichettati finché non arrivano quelle vere).
- **Accessibilità AA:** attenzione al testo a bassa opacità (mai sotto il leggibile), focus
  tastiera visibile, `alt` descrittivi, navigazione da tastiera.
- SEO in italiano: title e meta per ogni pagina; struttura semantica.
- Pulsanti grandi, buon padding, presenza.

---

## 11. La firma (l'elemento da ricordare)

> **La soglia imperiale.** L'hero è una grande **immagine storica** come sfondo, con velatura
> navy; sopra, il nome del Circolo in **Cormorant** color crema, chiuso dal sigillo dorato
> **"Terza Roma"**, e una **frase che parla al cuore**. Da lì in poi, tutto è crema e respiro:
> card bianche che galleggiano, titoli Cormorant che emozionano, descrizioni che arretrano in
> opacità, e l'oro che compare solo come un gioiello (fregi, filetti, ornamenti d'angolo).

---

## 12. Checklist anti-piattezza (prima di consegnare)

- [ ] L'hero emoziona in 2 secondi (foto evocativa, nome Cormorant, frase al cuore)?
- [ ] Ogni sezione introduce UNA idea con molto respiro attorno?
- [ ] La palette usa i valori esatti (navy, crema, bianco, cremisi, oro)?
- [ ] I titoli sono Cormorant a piena opacità e le descrizioni Inter arretrate (65-75%)?
- [ ] Le card bianche galleggiano sulla crema con ombra morbida e filetto oro?
- [ ] L'oro è solo dettaglio (fregi, filetti, ornamenti), mai campitura?
- [ ] Il cremisi è solo nei pulsanti d'azione, mai fondo di sezione?
- [ ] Gli ornamenti dorati sono SVG eleganti e si semplificano su mobile?
- [ ] I testi parlano al cuore, senza trattini lunghi e senza marketese?
- [ ] Tutto leggibile e bello sul telefono, contrasto AA?

---

## 13. Funzioni avanzate (fase 2, fuori dal design)

Login soci, blog con moderazione, tesseramento con pagamento e gestione contenuti non si
realizzano con un sito statico: sono fase 2 (piattaforma). Qui le pagine "Area riservata" e
"Tesseramento" restano segnaposto eleganti ("prossimamente") finché non si sceglie la tecnologia.

---

*La struttura resta; l'anima la portano le immagini storiche vere e i testi scritti con cura.*
