# monsieurluge.dev

Portfolio perso.

## Installation

L'installation du projet est très classique :

```bash
npm install
```

Une fois l'installation des dépendances terminée, les **hooks git** seront copiés dans le dossier .git racine. Voici la liste des hooks :

### pre-commit

Exécute les scripts ci-dessous. L'action de `commit` est interrompue si au moins l'une de ces étapes n'a pas correctement abouti.

- lint

### pre-push

Exécute les scripts ci-dessous. L'action de `push` est interrompue si au moins l'une de ces étapes n'a pas correctement abouti

- build

## Commandes

Toutes les commandes sont à lancer depuis la racine du projet.

```bash
# installe les dépendances
npm run install
# lance le serveur de développement
npm run dev
# génère le code de production dans le dossier ./dist
npm run build
# lance une commande via la CLI Astro (cf. https://docs.astro.build/en/reference/cli-reference/)
npm run astro [command]
```
