Chatbot - 
Watson Assistant  
Se repérer sur le campus 




Contexte 

Dans le cadre de l’UE Projet Tech 2019-2020 il a été posé le cadre suivant : La problématique d’orientation sur le campus est réelle pour l’ensemble des usager.e.s. De plus en plus de formations sont partagées entre différents sites, l’offre culturelle et les groupes de travails sont de plus en plus déployer sur l’ensemble des campus amenant ainsi les usager.e.s dans des salles qu’ils ne connaissent pas forcément. 
De manière beaucoup plus simple il peut également arriver qu’un cours soit déplacer dans un bâtiments où un.e usager.e n’a jamais été. De même  les néo-bachelier arrivant en L1 découvre eux l’ensemble du campus. 
C’est autant de problématique qui font naître le besoin d’un outils simple qui puisse apporter en temps réel des informations pratiques pour identifier et se diriger vers un bâtiment. 


Technologie
Après l’étude de plusieurs technologie, ce produit sera développé sur Watson assitant une technologiques d’IBM, permettant d’utiliser de nombreux autres fonctionnalités offerte dans la suite IBM cloud (Functions, Discovery , …). Pour la base de donnée c’est la suite Google qui est choisie et plus précisément google spreadsheet, cela permet une gestion de la base de donnée très simple (partage de la feuille).  


Déploiement/Intégration 
Etape 1 
Récupérer l’archive sur : https://github.com/lombre33/projet_tech_2020_rendu
Soit vous êtes familier avec git vous pouvez la cloner sinon cliquer “clone or download” puis “download ZIP” et vous récupérerez une archive zip que vous pourrez extraire dans le dossier de votre choix.
Etape 2 : 
Au choix en fonction de l'intégration dont vous avez besoin : 
Intégration web : 
Dans le fichier demo_empty_web_site.html il vous faudra copier l’ensemble <scripts …. / scripts> et l'insérer dans le footer.php de votre site web. Il est également possible pour des site web comprenant de nombreux scripts de créer un fichier chat_bot.js dans votre dossier js et d’ajouter dans votre code html d’appel vers ce fichier. 
Test sur un server node Js local 
Après avoir installer Node Js 
sous windows 10 : Placez vous dans le dossier demo_server_local et taper sur le chemin d'accès : “powershell”*1. Cela vous ouvrir un terminal directement dans ce dossier

Sous linux  : naviguer jusqu'à la racine du dossier depuis le terminal 


Ensuite taper “npm start” 

Cela démarrera le server en écoutant le port 3000 (par défaut), puis visualiser le résultat rendez vous sur “localhost:3000” depuis votre navigateur préféré. 
Vous devriez voir au centre de la page votre chat bot. 


*1 Pour d’anciennes version de windows il faudra utiliser le cmd en tapant “cmd” au lieu de powershell. 

Changement du chat bot :pour changer le chatbot qui est afficher il faut aller dans le fichier .env et remplir les variables avec les nouvelles informations récupérées sur l’interface watson assitant de votre nouveau chat bot. 

Import depuis l’interface watson assistant 
Pour accéder au chat bot depuis l’interface, une fois connecté, cliquer sur create assistant, puis dans le rectangle dialogue cliquer sur “add dialog skill” puis “import skill” et ajoutez y le fichier .json présent dans le dossier “sources” de l’archive. 



Le fichier en .js présent dans le dossier sources est donné à titre indicatif, en fonction de la situation si vous devez recréer un script dans votre cloud IBM functions, recopier y ce code(le nom donné au fichier n’a aucune importance). Pensez à activer “Web Actions”. 
Dans ce cas il vous faudra également modifier le lien du webhook par le lien présent sur le screen ci dessus. 



Etape 3 
Import des entities  : Pour fonctionner le chatbot à besoin de reconnaître un certain nombre d'élément de la base de donnée, a chaque fois que vous rajouterez des informations sur la base de données il conviendra de refaire la manipulation décrite ci dessous.

Depuis la feuille de calcul exporter en csv les deux feuilles comprenant ‘export” dans leur nom, cela vous donnera des fichiers csv qu’il faudra importer dans l’onglet entities de watson.  




Etape 4 (Options) 
Importer et publier la base de donnée.
 Pour l’instant vous accès au lien de la base de donnée qui est hébergée sur le drive du consultant. Il est conseillé sur votre google drive de créer un dossier pour ce fichier et d’y upload le fichier BDD.xslx, ensuite pour que la fonction de recherche y est accès il faudra activer le partage par lien (clic droit > partager). Puis, venir modifier l’id de la feuille de calcul dans la fonction de recherche (depuis votre IMB cloud functions). L’id de votre feuille se trouve dans son url.

Ici : 1oczOBeUcnFxx9hZWEjyjAG-m6p7ZWR2gHdJxw6nsbQ8

Administration
Administration base de donnée 
Il est primordiale de ne pas modifier les 5 premières feuille du spreadsheet, seule la feuille BDD doit être remplie ! En effet les données se sont les données entrées sur cette 6eme feuilles qui  viendront automatiquement compléter les champs des autres feuilles avec le format exploitable par le chatbot. 

Administration Watson Assistant 
Si vous êtes familier avec la gestion de chatbot, vous ne devriez pas avoir de mal à modifier l’outils pour l’adapter. Il convient cependant de décrire brièvement comment récupérer les information renvoyé par la fonction de recherche.
Cela se fait grâce à la balise suivante <? ? > au centre de laquelle on va venir entrer la syntaxe suivante $ma_context_variable.response.rows.get(le ième élément de mon tableau(0 par défaut pour des sorties simples).le_nom_de_la_colone_en_question_dans_ma_BDD
Dans notre cas pour afficher le nom du bâtiment <?$webhook_result_1.response.rows.get(0).batiment?>

Bon à savoir : 
Il est possible de formater les données en html pour les afficher ainsi dans le chat bot, les tag a, img, br ont été testé et fonctionnent. 
Versioning 
L’ensemble des technologies utilisées ne nécessitent pas de mise à jour récurrentes. 

Sécurité et RGPD 
Confidentialité 
Les données stockées sur l’IBM CLOUD sont hébergés en Europe et bénéficie donc de la protection RGPD, cependant elle restent hébergés sur le cloud d’une entreprise propriétaire. 
Concernant la base de donnée sur google la confidentialité est moins assuré puisque le contenu est stocké sur un google drive lisible par les bot de google. 

Les deux solutions sont par contre protéger d’attaques extérieur car elle repose sur deux clouds extrêmement sécurisés. 

Sécurité 
En terme de sécurité l’utilisation de watson assistant confère une bonne protection concernant des requêtes mal intentionnés qui pourrait y être entrée. 

Credit 
Code source fourni par watson pour le server node.js : https://github.com/watson-developer-cloud/assistant-simple
Api permettant la récupération de fichier json depuis un document gsheet : http://gsx2json.com/


