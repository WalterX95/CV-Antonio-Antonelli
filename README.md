<p align="center">
  <img src="public/logo-full.svg" alt="Antonio Antonelli - Data Analyst" width="360">
</p>

# Antonio Antonelli · Portfolio Data Analyst

Sito portfolio e curriculum online di **Antonio Antonelli**, Junior Data Analyst formato con EPICODE.
Raccoglie i suoi progetti di analisi dati realizzati con **Excel, SQL, Python e Power BI**, con anteprima e link alle repository su GitHub.

👉 Profilo GitHub: [github.com/tonyanto99](https://github.com/tonyanto99)

## Progetti presentati

| Progetto | Strumenti | Repository |
|---|---|---|
| Analisi vendite Maven Toys Messico | Power BI, Power Query, DAX | [CAPSTONE-PROJECT](https://github.com/tonyanto99/CAPSTONE-PROJECT) |
| Dashboard e-commerce Olist | Power BI | [ESERCITAZIONE-FINALE-POWER-BI](https://github.com/tonyanto99/ESERCITAZIONE-FINALE-POWER-BI) |
| Analisi dati COVID-19 | Python, pandas, seaborn | [PYTHON-EXAM](https://github.com/tonyanto99/PYTHON-EXAM) |
| Database vendite in SQL | MySQL | [ESERCITAZIONE-FINALE-M2](https://github.com/tonyanto99/ESERCITAZIONE-FINALE-M2) |
| Strutture ricettive delle Marche | Excel | [ESERCIZIO-FINALE-M1](https://github.com/tonyanto99/ESERCIZIO-FINALE-M1) |
| Esercizi Excel: inventario e vendite | Excel | [esercizi_antonio_antonelli](https://github.com/tonyanto99/esercizi_antonio_antonelli) |

## Tecnologie

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/) con React Compiler
- [Tailwind CSS 4](https://tailwindcss.com/)
- ESLint

## Avvio in locale

Serve [Node.js](https://nodejs.org/) 20.19 o superiore (oppure 22.12+).

```bash
git clone <URL-della-repo>
cd cv-antonio
npm install
npm run dev
```

Il sito è poi disponibile su `http://localhost:5173`.

### Comandi disponibili

| Comando | Cosa fa |
|---|---|
| `npm run dev` | Avvia il server di sviluppo con ricaricamento automatico |
| `npm run build` | Crea la versione di produzione nella cartella `dist/` |
| `npm run preview` | Mostra in locale la versione di produzione appena creata |
| `npm run lint` | Controlla il codice con ESLint |

## Struttura del progetto

```
cv-antonio/
├── public/
│   ├── logo.svg            # Logo (usato anche come favicon)
│   ├── logo-full.svg       # Logo con nome e "Data Analyst"
│   ├── icons.svg           # Icone (GitHub)
│   └── works/              # Immagini di anteprima dei progetti
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Barra di navigazione
│   │   ├── HeroComponent.jsx   # Sezione di apertura
│   │   ├── MyWorks.jsx         # Schede dei progetti
│   │   └── Footer.jsx          # Presentazione, competenze e contatti
│   ├── works/
│   │   └── works.json      # Elenco dei progetti mostrati nel sito
│   ├── assets/             # Logo in PNG
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── export/                 # Logo in PNG ad alta risoluzione per il CV
└── index.html
```

## Aggiungere o modificare un progetto

I progetti si gestiscono tutti da `src/works/works.json`, senza toccare il codice dei componenti.
Per aggiungerne uno basta inserire un nuovo oggetto nell'elenco:

```json
{
    "id": 7,
    "title": "Titolo del progetto",
    "description": "Strumenti · Breve descrizione di cosa analizza il progetto.",
    "label": "Vedi su GitHub",
    "link": "https://github.com/tonyanto99/NOME-REPO",
    "image": "/works/nome-immagine.jpg",
    "imageAlt": "Descrizione dell'immagine per l'accessibilità"
}
```

L'immagine va salvata in `public/works/` (proporzione consigliata 2:1, ad esempio 1200×600 px).
Il campo `image` è facoltativo: senza immagine la scheda mostra solo testo e pulsante.

## Logo

Il logo unisce barre crescenti e una linea di tendenza, simbolo dell'analisi dati, con il gradiente blu → verde del sito.

- `public/logo.svg` e `public/logo-full.svg`: versioni vettoriali per il web
- `export/logo-512.png` e `export/logo-full-1440x320.png`: versioni PNG con sfondo trasparente, da usare nel CV o come immagine del profilo

## Licenza

© Antonio Antonelli. Tutti i diritti riservati.
I dataset usati nei progetti appartengono ai rispettivi autori (Maven Analytics, Olist, Our World in Data).
