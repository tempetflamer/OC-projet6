# Projet 6 - FishEye

Projet 6 du parcours "Développeur d'application - JavaScript React", qui consiste à créer un site accessible pour une plateforme de photographes.

## Informations du projets :

### A propos

FishEye est un site web qui permet aux photographes indépendants de présenter leurs meilleurs travaux.
Ils ont récemment levé des fonds et aimeraient mettre à jour leur site web pour le faire passer d'un site statique à un site dynamique.

### Objectif

Notre équipe est chargé de fournir un prototype fonctionnel d'un nouveau site qui pourra être présenté à FishEye lors de notre prochaine réunion avec les clients.
Je serais chargé de fournir tout le HTML, le CSS et le JavaScript nécessaires au prototype, ainsi qu'être accessible pour tous.


## Cahiers des charges :

### Spécifications fonctionnelles :

- Page d'accueil :
    - Liste de tous les photographes avec leur nom, leur slogan, leur localisation, leur prix/heure et une image miniature de leur choix.
    - Lorsque l'utilisateur clique sur la vignette d'un photographe, il est amené à sa page.
- Page des photographes (le contenu de la page sera généré de manière dynamique en fonction du photographe) :
    - Affiche une galerie des travaux du photographe.
    - Les photographes peuvent montrer à la fois des photos et des vidéos.
        - Dans le cas des vidéos, montrer une image miniature dans la galerie.
    - Chaque média comprend un titre et un nombre de likes.
        - Lorsque l'utilisateur clique sur l'icône "Like", le nombre de likes affiché est incrémenté.
        - Le nombre de likes total d’un photographe doit correspondre à la somme des likes de chacun de ses médias.aw
    - Les médias peuvent être triés par popularité ou par titre.
    - Lorsque l'utilisateur clique sur un média, celui-ci doit s’ouvrir dans une lightbox :
        - Lorsque la lightbox est affichée, il y a une croix dans le coin pour fermer la fenêtre.
        - Des boutons de navigation permettent de passer d'un élément média à l'autre dans la lightbox (les utilisateurs peuvent cliquer sur ces boutons pour naviguer).
        - Les touches fléchées du clavier permettent également de naviguer entre les médias dans la lightbox.
    - Afficher un bouton pour contacter le photographe.
        - Le formulaire de contact est une modale qui s'affiche par-dessus le reste.
        - Il comprend des champs pour les noms, l'adresse électronique et le message.
        - Plus tard, le bouton de contact enverra un message au photographe. Pour l'instant, seulement afficher le contenu des trois champs dans les logs de la console.

### Spécifications d'accessibilitées :

- Utilisez des éléments HTML "sémantiques" qui décrivent leur intention autant que possible, au lieu de mettre des éléments <div> et <span> partout.
- Lorsque vous devez créer un élément personnalisé, ajoutez des attributs ARIA pour décrire ce qu'il fait.
- Les images doivent présenter un attribut “alt”. Utilisez le titre des photos pour remplir cet attribut, et le nom du photographe dans le cas d’une photo de profil de photographe.
- Le code devrait passer les tests AChecker sans “known issue”, afin de s'assurer de sa conformité aux WCAG).
- Toute la gestion des événements doit être configurée (utilisez KeyboardEvent.key ou KeyboardEvent.code.).
- Utilisez un lecteur d'écran gratuit pour vous faire une idée de ce que représente l'utilisation du site pour une personne malvoyante.


### Spécifications techniques additionelles

- Le code est séparé en différents fichiers (HTML, CSS, JavaScript).
- ESLint est utilisé (avec les paramètres par défaut) pour garantir que le code est robuste. Ceci est particulièrement facile à intégrer avec l'IDE VSCode.
- Une version moderne (ES6 ou supérieure) de JavaScript est utilisée et les fonctionnalités obsolètes ne sont pas utilisées.
- Le code est lisible. Il faudra s'assurer que les variables et fonctions ont un nom qui ont un sens, et commenter le code lorsque le nom n'indique pas explicitement ce qu'il se passe


## Ressources du projets :

### Maquette
[Mockup](https://www.figma.com/file/Q3yNeD7WTK9QHDldg9vaRl/UI-Design-FishEye-FR?node-id=0%3A1&t=t2u0uAGCr2iGt26x-0)

### Héberhement
[Projet 6 - FishEye](https://tempetflamer.github.io/OC-projet6/)

### Base du projet
[Forkez la base du projet](https://github.com/OpenClassrooms-Student-Center/Front-End-Fisheye);

## Organisation du projet

`assets/`, contient toutes les images utilisées
- `default/`, contient une image défaut de profil utilisateur
- `icons/`, contient les icônes svg utilisées
- `images/`, contient les images utilisées dans l'application
    - `avatar/`, contients les avatars des photographes
    - `gallery/`, contient les images des photographes à des formats différents
        - `medium/`, medias (images et vidéos) des photographes pour un affichage dans la listbox
        - `small/`, medias (images et vidéos) des photographes à un petit format pour affichage en gallery
    - `logo.png`, logo de FishEye (nom)
- `favicon`, icon du logo de FishEye

`css/`, contient les fichiers css où sont définit les styles de l'application
- `photographer.css`, style de la page des photographe
- `style.css`, style de la page index

`data/`, contient les données en JSON pour l'application

`sass/`, contient les fichiers sass sous le modèle 7-1, ensuite compilé en css
- `Base/`, contients les fondations du site.
- `Componants/`, contient blocs BEM indépendant réutilisable
- `Layout/`, contient les blocs BEM réutilisable
- `Pages/`, contient les blocs de code qui ne s’appliquent qu’à une seule page
- `utils/`, contient les animations et mixins créées

`scripts/`, contient les fichiers JavaScript 
- `factories/`, contient les fichiers JS nécessaire à l'usinage de création des données JSON 
- `pages/`, contient les fichiers JS `index.js` et `photographer.js` nécessaire à la création des pages de l'application
- `utils/`, contient les différents composants JS utilisés dans les pages de l'applications 

`index.html`, page d'index du site contenant la liste des photographes

`photographer.html`, page des photographes

`package.json` & `package-lock.json`, fichiers utilisés par npm pour gérer les dépendances

`.gitignore`, fichier qui permet de définir les fichiers à ignorer dans la liste des fichiers modifiés à "push"

`.eslintrc.js`, fichier de ESLint (outil d'analyse de code statique) permettant de le configurer

`README.md`, fichier de présentation et d'explication du projet que vous lisez actuellement


## Compétences évaluées

1. Gérer les évènements d'un site avec JavaScript
2. Assurer l'accessibilité d'un site web
3. Ecrire du code JavaScript maintenable
4. Développer une application web modulaire avec des design patterns