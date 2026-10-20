# circolo-russia-imperiale
Sito del Circolo Internazionale Amici della Russia Imperiale - Terza Roma

## SEO statico e scoperta dei contenuti

Il sito resta HTML/CSS/JavaScript statico: nessun servizio di ricerca, database,
dipendenza runtime o configurazione DNS aggiunti.

- `sitemap.xml`: tutte e sole le pagine HTML canoniche indicizzabili e le immagini
  presenti nel loro contenuto principale. Esclude pagine di conferma, 404,
  area riservata in preparazione e articolo di Messina ancora incompleto.
- `robots.txt`: consente la scansione delle pagine e degli asset. Le pagine
  escluse dall'indice restano raggiungibili perché i crawler leggano `noindex`.
  Non sostituisce autenticazione o una politica sui permessi di addestramento AI.
- `llms.txt`: guida sintetica al Circolo e alle fonti pubbliche, incluso il Word
  originale richiesto dal cliente. È una proposta per strumenti AI, non un fattore
  di ranking Google o una garanzia di traffico.
- JSON-LD statico: identità del Circolo, sito, pagine, argomenti, breadcrumb,
  articoli, eventi e raccolte di contenuti. Le relazioni corrispondono a contenuti
  e link già visibili; non sono un motore di ricerca semantico interno al sito.

I testi, le immagini e i fatti editoriali già presenti nell'HTML restano la fonte
dei dati. Per aggiungere una pagina indicizzabile, registrare anche il percorso,
il genitore effettivo e gli argomenti in `strumenti/seo-build.cjs`, quindi eseguire:

```powershell
node strumenti/seo-build.cjs --write
node strumenti/seo-build.cjs --check
python strumenti/seo-audit.py
node strumenti/translation-audit.cjs
node strumenti/gallery-audit.cjs
node strumenti/attualita-audit.cjs
```

`--write` rigenera soltanto dati di scoperta e markup nel `head`: non cambia il
`body`, il design, i moduli o la navigazione. `--check` non scrive file e fallisce
se gli output non sono aggiornati. L'audit usa i parser HTML/XML della libreria
standard Python e verifica copertura, file, immagini, dati semantici, contatti e
reciprocità degli hreflang. Non c'è un build applicativo o TypeScript nel progetto.

Non vengono inventati `lastmod`, autori, date di pubblicazione, recensioni o URL
di lingua. Attualmente solo il resoconto del convegno del 1812 ha tre URL autonomi
IT/EN/RU; le altre traduzioni dipendono dal selettore JavaScript e condividono
l'URL italiano. Aggiungere URL linguistici statici per tutto il sito richiederebbe
una scelta separata su routing e manutenzione delle traduzioni.

Dopo una pubblicazione autorizzata, verificare che `/sitemap.xml`, `/robots.txt`
e `/llms.txt` rispondano HTTP 200 dal dominio canonico, quindi inviare la sitemap
in Google Search Console e Bing Webmaster Tools negli account del proprietario.
Misurare impression, clic e pagine indicizzate: l'indicizzazione e il traffico non
sono garantiti dai file. Restano da completare dal titolare gli eventuali campi
segnaposto delle informative legali; questo intervento non inventa dati legali.

Riferimenti: [Google: sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap),
[robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro),
[versioni localizzate](https://developers.google.com/search/docs/specialty/international/localized-versions),
[AI e SEO](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide),
[proposta llms.txt](https://llmstxt.org/).
