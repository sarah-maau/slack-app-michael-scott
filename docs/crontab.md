# Génerer des publications automatiques

Une fois le repo clôné, les dépendances intsallées et la création de l'app sur Slack, il faut rendre les publications automatiques.  

Sous Linux, il existe l'outil Crontab qui permet de lancer des applications de façon régulières - ce qui est très pratique étant donné qu'il nous faut lancer le script `slack.js` pour publier une nouvelle citation.

Pour mettre en place un Crontab, voici les étapes à suivre : 
1. Éditer le fichier   
Depuis le terminal: `crontab -e`
2. Renseigner la nouvelle commande à la fin du fichier.  
Cette dernière est de type :   
`*/<fréquence> cd <chemin> && <commande> >/dev/null 2>&1
`

> les commandes Crontab peuvent être générées facilement [ici](https://crontab-generator.org/)

3. Enregistrer et quitter