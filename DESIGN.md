# DESIGN.md — Circolo Internazionale Amici della Russia Imperiale - Terza Roma

> **Come usare questo file:** è la guida assoluta del sito. All'inizio di ogni sessione:
> *"Leggi DESIGN.md e usalo come guida assoluta per ogni decisione di UI. Non deviare dai
> token senza chiedermelo."*

---

## 0. Filosofia (la regola madre) — ispirazione Aesop

Calma e raffinatezza attraverso il **vuoto** e la **disciplina**, non attraverso le decorazioni.
Pochissimo testo nella home. Tantissimo spazio bianco. **Un solo font. Due colori.**
Nessun ornamento, nessun oro, nessuna terracotta, nessun fregio.

**La bellezza sta in ciò che si toglie. Se un elemento non è necessario, si rimuove.**

Principi guida:
- **Una sezione, una idea.** Molto respiro attorno a ogni elemento.
- **La home è breve.** Descrizioni brevi e accattivanti; ogni sezione ha una freccia "→"
  che porta alla pagina dedicata dove vive il **testo lungo** in formato articolo.
- **Il colore viene solo dalle fotografie storiche**, mai dall'interfaccia.
- **Gerarchia solo con dimensione, peso e spazio** dello stesso font.

---

## 1. Font (uno solo: Manrope)

Un solo font in tutto il sito: **Manrope** (auto-ospitato in `assets/fonts/`, supporta il
cirillico per il russo). Nessun altro font: rimossi Cormorant, Playfair, Inter.

```css
--font: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

| Ruolo | Peso | Dimensione | Note |
|---|---|---|---|
| Titolo hero / nome | 400 | `clamp(1.9rem, 4.4vw, 3.35rem)` | grande, mai grassetto pesante, `letter-spacing` leggero |
| Titolo pagina (h1) | 400 | `clamp(2rem, 4.6vw, 3.1rem)` | |
| Titolo di sezione (h2) | 500 | `clamp(1.3rem, 2.6vw, 1.7rem)` | |
| Frase / lead | 300 | `clamp(1.25rem, 2.6vw, 1.7rem)` | interlinea 1.55 |
| Corpo | 400 | `1.0625rem` | interlinea **1.8**, righe non troppo larghe (colonna 700px) |
| Occhiello / etichetta | 500 | `0.72rem` | **MAIUSCOLO**, `letter-spacing 0.2em`, colore grigio |
| Link freccia | 500 | `0.82rem` | maiuscolo, `letter-spacing 0.16em`, filetto sotto |

Regola: **mai grassetto pesante** (700+). La gerarchia nasce da dimensione, peso 300-500 e
soprattutto **spazio**.

---

## 2. Palette (monocromatica fredda — NO beige, NO oro)

```css
:root {
  --nero:   #1A1A1A;   /* testo e fondali scuri, nero morbido */
  --bianco: #F6F6F4;   /* sfondo principale: off-white FREDDO neutro (non beige caldo) */
  --grigio: #6E6E6E;   /* testo secondario, didascalie */
  --linea:  #DEDEDA;   /* righe e bordi sottilissimi */
}
```

Due colori: **fondo off-white freddo + testo nero morbido**. Il grigio solo per i secondari.
**Nessun accento colorato, nessun oro, nessuna terracotta, nessun beige.** L'unico colore del
sito arriva dalle **fotografie storiche**.

Il footer usa lo stesso sistema invertito: fondo `--nero`, testo off-white a opacità ridotta.

---

## 3. Spazio (l'anima del sistema)

- **Respiro verticale ampio** tra le sezioni: `--sez: clamp(5rem, 12vw, 10rem)`.
- **Margini laterali generosi:** `--pad: clamp(1.5rem, 6vw, 5rem)`; il contenuto non tocca i bordi.
- Larghezza massima contenuto `1200px`; **colonna di lettura articoli `700px`**; blocchi brevi
  centrati a `760px`.
- Griglie pulite, allineamenti precisi, molto vuoto attorno a ogni elemento.

---

## 4. Movimento (minimo)

- Solo **dissolvenze morbide e lente** allo scroll (`.reveal` → `.is-visible`, ~1s,
  `cubic-bezier(.22,.61,.36,1)`).
- Hover: sottilissimi cambi di **opacità** (link ~0.55), la freccia dell'indice trasla di 6px.
- Nessun sollevamento, nessuna ombra vistosa, nessun filetto colorato.
- Rispetta sempre `prefers-reduced-motion`.

---

## 5. Struttura dei contenuti

**Regola generale:** la home contiene solo testi brevi; il testo lungo vive nelle pagine
interne in **formato articolo** (colonna 700px, interlinea generosa, sottotitoli in Manrope 500).

- **HERO:** immagine imperiale a tutta larghezza come sfondo, velatura scura leggera
  (`linear-gradient` ~38→60% su nero) per la leggibilità. Nome del Circolo + una frase breve.
  Niente pulsanti.
- **Home · Chi siamo (breve):** occhiello + una descrizione breve + link freccia "→ Scopri il
  Circolo" verso la pagina `il-circolo.html`.
- **Home · indice sezioni:** un elenco pulito (occhiello + una riga descrittiva + freccia),
  separato da filetti `--linea` sottilissimi, verso Storia, Feste, Eventi, Galleria, Tesseramento.
- **Pagina "Il Circolo":** articolo lungo diviso in sezioni (Chi siamo, La nostra identità,
  La nostra storia, Le nostre attività).
- **Header:** logo a sinistra, menu essenziale, selettore lingua a destra. Fondo off-white,
  filetto inferiore `--linea`. Su mobile il menu collassa nell'hamburger.
- **Footer:** fondo `--nero`, testo off-white tenue, tre colonne (brand, naviga, contatti).

---

## 6. Bilinguismo IT / RU

- Selettore a **bandiere** (SVG inline IT/RU) nell'header; scelta salvata in `localStorage`.
- Testi tradotti via `js/i18n.js` (dizionario `data-i18n`), **mai traduzione automatica**.
- Le traduzioni russe esistenti restano **intatte**.
- **"клуб" non si usa mai** in russo: sempre **"ассоциация"** (femminile), con la declinazione
  corretta secondo il caso (e i pronomi/verbi concordati al femminile: "она", "неё", "была", "Её").
- **Trattini:** nei testi **italiani** niente trattini lunghi "—" (usa "-", virgole, due punti);
  nei testi **russi** i trattini lunghi "—" **restano**.

---

## 7. Contatti (dati reali del cliente)

- Email: **russia.imperiale@yandex.com**
- Telefono: `[numero italiano]` e `[numero russo]` (placeholder, da fornire)
- Facebook: **https://www.facebook.com/russia.imperiale**

---

## 8. Pavimento di qualità (non negoziabile)

- Responsive perfetto fino a 320px: tutto in colonna, stessa calma e stesso spazio.
- Contrasto **AA**; testo secondario mai sotto il livello leggibile.
- **REGOLA FOTO (fondamentale):** le immagini di contenuto **non vanno MAI deformate né
  tagliate**. Default ovunque: `width: 100%; height: auto` (le proporzioni naturali si
  mantengono su ogni schermo, mobile compreso). **Mai altezze fisse** in px/clamp sulle foto di
  contenuto, **mai `object-fit: fill`** (stira) e **mai `object-fit: unset`** (equivale a
  `fill`). `object-fit: cover` è ammesso SOLO per sfondi/panorami dove il taglio non elimina
  soggetti (hero) e per il logo quadrato nell'header. Per persone/gruppi/ritratti/icone:
  sempre proporzioni naturali.
- Immagini con `alt` descrittivi in italiano.
- Focus tastiera visibile, navigazione da tastiera, struttura semantica.
- **Il sistema Aesop si applica OVUNQUE:** nessuna pagina deve restare col vecchio stile
  (oro, beige, Cormorant/Inter).

---

## 9. Stato del rifacimento (avanzamento)

Il redesign procede **una sezione alla volta**, con screenshot e conferma prima di propagare.

- [x] Sistema di design (`css/aesop.css`), font Manrope auto-ospitato, DESIGN.md
- [x] HOME (hero Cormorant + sezioni a due colonne con foto + bottoni + CTA)
- [x] Pagina "Il Circolo" · "La nostra storia" (fondazione)
- [x] Storia dell'Impero · Feste e ricorrenze · Eventi · Galleria
- [x] Attualità · Chiesa Ortodossa · Tesseramento · Contatti · Area riservata
- [x] Tutte le pagine articolo (Messina, Borodino, Martirio, San Nicola, 2 eventi)
- [x] Pagine legali interne (Privacy, Cookie) + banner cookie informativo

**Tutto il sito è su `css/aesop.css`; il vecchio `css/style.css` è stato eliminato.**

---

*La struttura resta; la forza la portano le fotografie storiche vere e la disciplina del vuoto.*
