---
author: 'monsieurluge'
category: 'development'
description: 'Lorem ipsum do in est dolor nisi ad adipisicing ullamco eu exercitation ut qui dolor irure anim dolor dolor id pariatur eu sunt.'
cover: './result-logo.png'
coverAlt: 'result logo'
lastUpdate: '2024-06-10'
layout: '../../layouts/ArticleLayout.astro'
tags: ['php', 'oop', 'librairie']
title: 'Result'
---

# Result

![logo](./result-logo.png)

## Introduction

Cette librairie est née de l'envie de "jouer" avec un pattern de développement nommé **Railway Oriented Programming** dont voici <a href="https://zohaib.me/railway-programming-pattern-in-elixir/" target="_blank">un article</a> qui l'évoque.

Certaines parties d'un projet professionnel sur lequel j'étais affecté n'étaient qu'enchainements de `if` et assignations de variables temporaires. J'ai donc voulu voir s'il était possible de transformer cette logique impérative en autre chose, lorgnant du côté de la programmation fonctionnelle et de l'orienté objet.

## La librairie

- langage : PHP v7
- sources : <a href="https://github.com/monsieurluge/result" target="_blank">github</a>
- statut : archivée

Elle a été développée en **TDD** avec PHPUnit et est par conséquent correctement couverte et documentée par les tests.

Il existait quelques librairies qui proposaient une vision du pattern en question mais rien ne m'avait vraiment convaincu et l'implémentation restait impérative ou proposait un contrat interface très chargé. Il me "fallait" proposer quelque chose 

## Exemple de code

```php
// each repository method returns a Result object, either a Success or a Failure
$this->groupRepository
    ->groupById($groupUuid)
    ->join($this->userRepository->userById($userUuid))
    ->then(function (Group $group, User $user) {
        $group->add($user);
    })
    ->else(function (Error $error) {
        /** error handling */
    });
```

## Leçons tirées

L'utilisation de cette librairie fut un semi échec, essentiellement du à la dépendance forte envers l'interface `Result` qui se retrouvait partout et pouvait parfois alourdir la lecture du code.

Les closures en PHP n'ayant pas encore de forme courte au moment de l'écriture de la librairie contribuaient également à rendre le code plus verbeux que nécessaire. Ce genre de défaut pèse lourd lorsqu'il s'agit d'adopter ou jeter une librairie.

Cependant ce fut un exercice intéressant et formateur ; mes collègues ayant été régulièrement "testés" pour éprouver et tester l'implémentation en contexte réel.
