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
