# Portfolio — Anas Semghouni

Portfolio personnel réalisé avec React, TypeScript, Vite, React Router et Tailwind CSS. Le code de l’application se trouve dans le dossier `portfolio/`.

## Lancer le site

Depuis la racine du dépôt :

```sh
cd portfolio
npm install
npm run dev
```

Vite affiche ensuite l’adresse locale à ouvrir dans le navigateur.

## Autres commandes

À exécuter depuis `portfolio/` :

```sh
npm run build
npm run lint
```

## Organisation

```text
portfolio/
├── public/          # Fichiers publics
├── src/
│   ├── components/  # Composants partagés
│   ├── data/        # Navigation, compétences et expériences
│   ├── hooks/       # Hooks React réutilisables
│   ├── pages/       # Pages associées aux routes
│   ├── styles/      # Styles globaux et styles du portfolio
│   ├── App.tsx      # Déclaration des routes
│   └── main.tsx     # Point d’entrée React et BrowserRouter
├── index.html
└── package.json
```
