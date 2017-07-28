# ethmobile.io

Projet web réalisé pour SQLi-Nantes visant à faire la promotion des projets mobiles Open Source de la blockchain.

## Tutoriel

Le site a été conçu de manière à être responsive autant que possible, et ce, sur un maximum de supports (ordinateur, tablette et smartphone). Basé sur un template (HTML5 UP), il fonctionne avec la technologie Jekyll et a pour objectif d'être maintenable automatiquement en étant simple d'utilisation afin de faciliter l'ajout d'une ou plusieurs pages projet.

### Page home

Le fichier index.html présent à la racine du répertoire ethmobile.io constitue la page d'accueil de la plate-forme. Il permet d'afficher, au-delà du listing des iniatives Open Source en cours, les technologies utilisées avant d'entrer davantage dans les détails.

Un projet se voit lister dès lors qu'un répertoire dédié à celui-ci est créé sur le GitHub (Ethmobile). Dans cette même idée, un bouton de redirection apparaît à l'intérieur de chaque rubrique uniquement si une page de description précise pour un projet existe au sein de l'arborescence de fichiers (_pages/nom_du_projet/index.html).
La visibilité du projet ne dépend d'aucune intervention sur le fichier .html de la page home, il n'y a techniquement aucun apport à effectuer pour un utilisateur souhaitant exposer son ou ses codes.

### Page projet

Chaque projet mettant en avant le ou les programmes d'un utilisateur, devra faire l'objet de la création d'un sous-dossier à l'intérieur du dossier pages portant le nom de projet (ex: ethdroid) dans lequel se trouveront deux autres sous-dossiers : _posts et js.
A la racine du dossier projet devra être placé un fichier index.html, différent de la home, qui sera la page web dédiée au projet et dans les deux autres le ou les README.md du ou des programmes ainsi que le data_nom_du_projet.js pour le second.

Récapitulatif des manoeuvres à effectuer :
1. Créer un nouveau sous-dossier dans le dossier pages et attribuer lui le nom de votre projet
2. Créer deux nouveaux dossiers dans le sous-dossier précédement créé et les nommer : _posts et js
3. Copier le fichier JavaScript d'un projet pré-existant et le renommer : data_nom_du_projet.js
4. Ouvrir la copie du fichier JavaScript qui vient d'être renommée et modifier les liens de l'API GitHub pour les faire coïncider avec votre projet
5. Placer le ou les README.md de votre programme et le(s) renommer sous la forme suivante : AAAA-MM-JJ-nom_du_programme.md
6. Copier l'index.html d'une page projet pre-éxistante dans le sous-dossier nom_du_projet
7. Ouvrir l'index.html et modifier le chemin qui associe le fichier data_nom_du_projet.js pour le faire correspondre à votre projet
8. Enfin, dans ce même fichier, changer la macro présente par :

`{% for post in site.posts %} {% if post.path contains "/AAAA-MM-JJ-nom_du_programme.md" %} <div class="content"> {{ post.content }} </div> {% endif %} {% endfor %}`
