
DELETE FROM "farmer";
DELETE FROM "article";
DELETE FROM "recipe";
DELETE FROM "product";
DELETE FROM "farmer_to_product";
DELETE FROM "category";
DELETE FROM "season";

INSERT INTO "farmer" ("slug","firstname","name","location","biography","basket","admin_id") VALUES
('Thierry_Vallarino','Thierry','Vallarino','Maraîcher à la Cadière d’Azur','A La Cadière d’Azur où il est un des derniers maraîchers bio, il lui faut pugnacité et passion pour persévérer entre les aléas de la météo, les prédateurs ailés ou à grandes oreilles, la convoitise immobilière et l’expansionnisme viticole.
Thierry Vallarino exploite depuis trois décennies deux hectares au cœur de l’AOP Bandol. Soucieux de la terre, de la qualité de ses produits il n’a de cesse de chercher à faire évoluer ses pratiques entre demande des amapiens et pragmatisme de leur mise en culture (rotation des cultures, jachères pour le repos des sols, culture sous serre ou de plein champs, temps d’occupation du sol par production…).
En toute saison il fournit des légumes dont la qualité gustative et la fraicheur ravissent nos papilles. Quelques fraises peuvent venir compléter le panier à la belle saison.','Contrat été (de mai à octobre) ,
Tomates (longues, rondes, jaunes rouges…) ,
Courgettes (longues, rondes, jaune ou vertes) ,
Aubergines (blanches ou violettes) ,
Poivrons ,
Melons ,
Pomme de terre ,
Celeri rave ,
Salade ,
Basilic ,
Contrat hiver (novembre à Avril) ,
Carottes fanes ,
Pomme de terre ,
Poireaux ,
Brocolis ,
Navet ,
Choux variés ,
Courge ,
Épinard ou blette ,
Salade ,
Persil',1),

('Theodore_Planas-Rastoin','Théodore','Planas-Rastoin','Meyreuil','Ce jeune paysan-boulanger de 30 ans a plus d’une corde à son arc ; il cultive ses propres céréales, pétrit manuellement un pain bio à base de blés de variétés anciennes.
Passionné d’authenticité et respectueux de biodynamie, Théodore fait revivre les terres familiales,  y plante des céréales et installe un vignoble qu’il travaille à la main dans le plus strict respect des règles Bio et laboure avec un cheval.
Les céréales sont transformés en farine  soit chez Philippe Monteau au Moulin de Grans soit chez Bertrand Allais Paysan-Boulanger dans le var (le producteur de farine de notre AMAP). C''est donc à partir de ses céréales cultivées sur le domaine que Théodore confectionne chaque semaine ses pains. Il  fabrique  plusieurs fournées de 70 kilos de pain. 
Après une assez longue préparation des ingrédients, il pétrit à la main à plusieurs reprises pendant une heure, et laisse lever la pâte. En parallèle, il prépare le four à bois. Plus de deux brouettes de bois sont nécessaires pour alimenter le feu et obtenir l’inertie suffisante afin de bien cuire le pain. La pâte une fois levée, c’est le *boulage* et le *façonnage* sur les toiles de lin au tissage très serré, 6 ou 7 planches de pains de 500g ou un kilo. Humidification du four, positionnement des braises, enfournement des pains deux par deux … tout un art, beaucoup d’énergie et de concentration pour réussir la fournée ! 
Mais quel régal pour nos papilles.

On parle d''eux
https://www.pressreader.com/france/la-revue-du-vin-de-france/20150213/283948881028213
https://domaine-rochefontaine.com/actualite/','Farine , Pain',1),

('Sylvain_Apostolo','Sylvain','Apostolo','Le Jas du Vignal','La ferme du Jas du Vignal se situe à Sillans-la-cascade, petit village du haut-var entre Draguignan et Brignoles. 
« Les 200 brebis de race Lacaune pâturent dans les collines et les prés toute l’année suivant les conditions climatiques et nous offrent un lait onctueux, aromatique et délicat.
Le lait récolté est transformé par nos soins en fromages fermiers certifiés en agriculture biologique.
Les brebis sont traites tous les matins de septembre à juin avant d’aller se dégourdir les pattes et se remplir la panse dans nos prairies. 
Durant la période estivale, c’est repos pour tout le monde! Les brebis chaument à l’ombre des arbres et dégustent du Sorgho semé par nos soins. 
Et nous, paysans du Jas du Vignal, nous accordons un peu de repos entre les récoltes de foin, qui serviront à l’alimentation du troupeau l’année suivante ! » S Apostolo
','Fromages',1),

('John_Doe','John','Doe','Chevrier à La Roquebrussane EARL Les Vallons','Élevage extensif de chèvres en système sylvopastoral : les animaux pâturent dans les collines du massif de la Sainte Baume. Le troupeau profite ainsi des ressources fourragères et participe à la prévention des incendies en entretenant les sous-bois. Cette pratique donne un lait parfumé et riche.
Leurs animaux sont de races rustiques (chèvres du Rove et alpines chamoisées) ce qui leur permet de rester à l’extérieur toute l’année. Les Carel produisent des fromages fermiers : les matières premières sont exclusivement issues de l’exploitation et transformées sur place dans une fromagerie qui répond aux normes européennes.
Des fromages de chèvre.','Le pèbre d’aï : un crottin de chèvre de 100 gr On peut le consommer frais, à partir de 5 jours, ou affiné, de 10 à 30 jours. Il est aromatisé d’un brin de sarriette (pèbre d’aï) ,
La ravigotte : un fromage de chèvre à tartiner, aromatisé vec de l’ail, du basilic et de l’huile d’olive ,La tomme de la Sainte Baume : une pâte pressée, type tomme de Savoie. Elle est affinée au minimum un mois',1),

('Brice_Hermieux','Brice','Hermieux','La campagne du Gapeau, Hyères','EN 2017, délaissant la blouse blanche et les laboratoires de microbiologie, Brice reprend l’exploitation familiale sur Hyères succédant ainsi à son grand-père métayer et son père horticulteur.

Un retour sur les bancs du lycée agricole permet d’acquérir les connaissances nécessaires en maraichage et en élevage avicole.

EN 2017 La certificat bio est obtenue pour la première fois.

On parle d’eux :

Brice Hermieux, var matin février 2018 [https://www.pressreader.com/france/var-matin-frejus-saint- raphael/20180222/282132111925157]
','Oeufs ,Viandes',1),

('Bertrand_Allais','Bertrand','Allais','Adresse non renseignée','Entre Bras et Châteauvert se trouve le domaine de la Rouvière plane où Bertrand Allais cultive céréales et légumineuses depuis 1977. Converti à l’agriculture biologique depuis l’an 2000, sur les 70 hectares de son exploitation, il en cultive 60, en laisse 10 en jachères. L’irrigation se fait par le canal de l’Argens. 
Le compost à base de fumier récupéré chez des éleveurs biologiques et de temps à autre un engrais azoté viennent nourrir ses terres déjà enrichies en azote par la culture de légumineuses telles que luzerne et sainfoin. Il choisit de cultiver d’anciennes variétés de céréales plus adaptées au climat, plus goûteuses mais forcément moins productives : blé tendre, blé des Pharaons dit Kamut, petit épeautre, seigle… à partir desquelles il fabrique ses farines;','Farines , Pois chiches , Lentilles vertes',1),

('Philippe_Bilocq','Philippe','Bilocq','Domaine de Saint André, La Saulce','L’exploitation familiale, le Domaine St André, a été créée de toute pièce en 1992 dans les Hautes-Alpes. Elle se situe à 15km au sud de Gap, à 600m d''altitude au pied du massif de Céüse sur les coteaux ensoleillés dominant la Durance. Depuis plus de 15 ans, pommiers et poiriers sont cultivés ainsi que de la vigne selon les méthodes de l''Agriculture Biologique. 23 variétés de fruits (poires,coings…), dont 17 de pommes sont produites.

Ceci entraine un étalement de la récolte entre le 15 août au 30 octobre.

Les fruits sont ramassés à la main. Un premier tri est effectué dans le champ, d’un côté les fruits qui iront en frigo et, de l’autre, ceux à transformer de suite en purées, gelées, confiture, jus de fruits et cidre.

Tous les produits de l’exploitation sont certifiés AB par Ecocert.','Pommes , Poires , Coings , Raisin',1),

('Vincent_Mele','Vincent','Mélé','Les Sagnes, Saint Julien du Gua, Ardèche','Producteur de châtaignes, de farine de châtaignes, de confitures… Vincent Mélé est installé à Saint Julien du Gua, Ardèche, depuis 2015. 
Par la localisation de l’exploitation dans le Parc Régional des Monts d''Ardèche, ses châtaignes bénéficient de l''Appellation d''origine protégée (AOP).
Cette AOP est réservée aux châtaignes de variétés locales anciennes ardéchoises, cultivées en vergers de type traditionnels. Depuis 2016, tous ses châtaigniers sont en reconversion en l''agriculture biologique.

Son engagement principal est de produire des fruits de grande qualité. Les quantités restent donc modestes. La production de châtaignes est de l''ordre de 3 tonnes par saison (d''octobre à novembre). 
Vincent Mélé travaille en famille de façon artisanale. Tout est question de respect de la châtaigneraie et du produit. 

Le ramassage des châtaignes se fait au sol à la main avec un seau et une forcole. La main d''œuvre est familiale. Seules les plus belles châtaignes sont ramassées, les plus petits fruits sont laissés au sol pour nourrir les brebis. 
Le tri des châtaignes est aussi réalisé à la main (calibre et variété). Puis elles sont trempées dans une grande bassine d''eau pour éliminer les châtaignes véreuses. Les autres sont mises à sécher sur une grille pour les conditionner plus tard.


Les principales variétés de châtaignes cultivées sont : La Comballe (ancienne variété de châtaigne très gustative et légèrement sucrée), La Bouche Rouge et la Garinche
La farine de châtaigne est une farine sans gluten-.
La confiture de châtaigne est dite extra car c''est le produit le plus concentré en purée de châtaigne (minimum 45 % de purée de châtaigne) par rapport à une crème de marron (38 %) et une confiture de châtaigne (35 %)','Chataîgnes ,Confiture de chataîgne',1);

INSERT INTO "product" ("label") VALUES
('Légumes'),
('Fruits'),
('Herbes aromatiques'),
('Fromages'),
('Légumineuse'),
('Farine'),
('Confiture'),
('Oeufs'),
('Viande'),
('Miel'),
('Pain');

INSERT INTO "farmer_to_product" ("farmer_id","product_id") VALUES
(1,1),
(1,2),
(1,3),
(2,6),
(2,11),
(3,4),
(4,4),
(5,8),
(5,9),
(6,5),
(6,6),
(7,2),
(8,2);

INSERT INTO "category" ("label") VALUES
('Panier de produits'),
('Evenements'),
('Annonces'),
('Nutrition');

INSERT INTO "season" ("label") VALUES
('Ete'),
('Printemps'),
('Hiver'),
('Automne');

INSERT INTO "article" ("slug","title","content","admin_id","category_id") VALUES
('Grand_panier_legumes_fruits','Grand panier de légumes et fruits',
'Myrtilles Bleuet : ~0,125kg,
Haricots verts : ~0,5kg,
Nectarines (jaunes et/ou blanches en fonction de la récolte) : ~0,7kg,
Tomates (variétés anciennes) : ~0,8kg,
Pêches (jaunes et/ou blanches en fonction de la récolte) : ~0,7kg,
Pommes de terre nouvelles Délicatesse : ~0,6kg,
Botte d''oignons nouveaux blancs : 1 pièce',1,1),

('Miel_aliment_miracle?','Le miel, un aliment miracle ?',
'La fabrication du miel par les abeilles est l’un des grands miracles de la nature : pour produire 500 g de miel, les abeilles doivent butiner 8 millions de fleurs. Ces dernières années, la consommation de miel a explosé et cet aliment est devenu un argument marketing à la mode. Mais mérite-t-il vraiment sa réputation ? Le nutritionniste Anthony Berthou nous a aidés à répondre à cette question.

Une bonne alternative au sucre de table
Au cours de sa fabrication, le sucre subit un processus de raffinage qui détruit tous ses nutriments. À l’inverse, le miel est une substance pure, produite par les abeilles à partir du nectar des fleurs. Pour réaliser le miel, les abeilles se transmettent le nectar : celui-ci est peu à peu « digéré » et enrichi par les enzymes que chacune d’entre elles sécrète. Grâce à ce processus, les abeilles enrichissent naturellement le miel en minéraux (magnésium, calcium, potassium, fer) et en vitamines (B et C), même si les quantités restent faibles.',1,4),

('Creation_AMAP_Pins-Justaret','Pins-Justaret. Nouvelle AMAP',
'L’AMAP de Pins-Justaret a été créée à l’initiative de 2 habitantes, Noémie et Pauline, avec le soutien de l’équipe municipale et du réseau AMAP de Midi-Pyrénées. Elles précisent : "Nous tenons à remercier la Municipalité sans laquelle nous n’aurions pas pu faire connaître le projet, et qui nous mets à disposition un local adapté à la distribution. Ils ont soutenu le projet à chaque étape. Cela ne s’est pas fait d’un claquement de doigts. Nous avons eu beaucoup d’échanges, et une réunion importante avec le Vice-président du réseau des AMAP de Midi-Pyrénées Cyril Martinie, et des "essaimeuses" Julie et Patrica, qui habitent elles-mêmes sur Pins-Justaret et sont au COPIL de l’AMAP de la Muscadelle à Pinsaguel."',1,2),

('Comment_cuire_sans_detruire?','Comment cuire sans détruire ?',
'Cuire les aliments présente des avantages. Cela permet notamment de faciliter la digestion des fibres et de favoriser l’assimilation de certains nutriments.

Mais la cuisson a aussi des inconvénients : elle dégrade la qualité nutritionnelle des aliments. Ainsi, elle contribue à la destruction de certaines vitamines et minéraux. En effet, de nombreuses vitamines, notamment les vitamines C, B1 et B9 sont par exemple sensibles à la chaleur et peuvent perdre aisément 50% de leur teneur initiale avec la cuisson.

Mais toutes les cuissons ne se valent pas : certaines préservent davantage la qualité nutritionnelle. Plus la cuisson est longue et la température élevée, plus la teneur nutritive de l’aliment s’appauvrit. Avec le nutritionniste Anthony Berthou, nous avons fait un tour d’horizon des différents modes de cuisson.',1,4),


('Le_bénévole_une_espèce_en_voie_de_disparition?','Le bénévole, une espèce en voie de disparition?',
'Une espèce animale ou de plante disparaît toutes les 20 minutes, soit 26 280 espèces disparues chaque année. Près d''un quart des espèces animales et végétales pourrait disparaître d''ici le milieu du siècle !

Partant de ce constat alarmant, notre curiosité naturelle a été attirée par une espèce animale bien particulière, la race des bénévoles.

Cette espèce est-elle en voie de disparition, ou au contraire est-elle en train de se développer, voire de proliferer ?

A partir de l’observation scrupuleuse d’une communauté représentative nichée à Caromb, au cœur de la Provence, nous avons enquêté, fouillé, investigué pour tenter de répondre à cette question essentielle.

Nous  avons observé cette espèce afin de savoir comment elle  évolue dans son milieu naturel, et surtout si les conditions climatiques, économiques, et environnementales menacent sa reproduction.

Nous vous livrons ici le résultat de notre étude approfondie',1,3),

('paniers_du_9_et_10_juillet','paniers du 9 et 10 juillet',
'aubergine,
courgettes ou carottes,
concombre (10 et 13),
salade ou radis,
tomates cerise (paniers à 10),
tomates (paniers à 13 et 16),
betteraves rouges nouvelles (paniers à 13 et16),
haricotes vert (paniers à 16),
pomme de terre nouvelles ou fèves (paniers à 16),
Distribution des poulets ',1,1),


('Est-il_bon_de_jeûner?','Est-il bon de jeûner ?',
'Notre corps est aujourd’hui habitué à être nourri de manière régulière. Pourtant, ça n’a pas toujours été le cas. Le jeûne existe depuis des milliers d’années et est souvent pratiqué par nécessité, quand la nourriture vient à manquer.

Il fait aujourd’hui de plus en plus d’adeptes auprès de personnes désireuses d’optimiser leur bien-être. Mais est-il vraiment bénéfique de jeûner ? Comment bien jeûner et quels sont les risques potentiels de cette pratique ?

Voici notre éclairage sur le sujet, rédigé avec le nutritionniste Anthony Berthou.',1,4);


INSERT INTO "recipe" ("slug","title","ingredients","description","admin_id","season_id") VALUES
('Salade_fraîcheur_au_fenouil','Salade fraîcheur au fenouil, pomelo et noix',
'Ingrédients 4 personnes,
1 fenouil,
1 pomelo,
1 échalote,
1 poignée de raisins secs,
1 poignée de cerneaux de noix,
4 c.s d’huile d’olive,
2 c.s de vinaigre de cidre,
1 c.s de miel,
Sel, 
poivre',
'1 : À l’aide d’une mandoline ou d’un couteau, coupez finement le bulbe du fenouil. Réservez les plumets pour le dressage de votre assiette.
2 : Pelez le pomelo et retirez la partie blanche. Coupez-le en tranches puis recoupez les tranches en 4.
3 : Pour l’assaisonnement, mélangez dans un bol l’échalote préalablement ciselée, l’huile d’olive, le vinaigre, le miel et les raisins secs. Salez et poivrez.
4 : Dans un saladier, mélangez le fenouil, le pomelo et l’assaisonnement. Laissez mariner la salade au réfrigérateur.
5 : Dans une assiette, dressez la salade en la parsemant de cerneaux de noix et posez quelques plumets de fenouil.',1,1),

('Potofu_de_legumes','Potofu de légumes : le pot-au-feu revisité',
'Ingrédients 5 personnes,
2 carottes,
3 petits navets,
4 petites pommes de terre,
3 petits oignons,
1 poireau,
4 feuilles de chou vert,
250g de tofu nature ou fumé,
1 bouquet garni,
1 c.c de gros sel, 
50g de pâte de miso blanc* ou un cube de légumes',
'1 : Dans une grande casserole, faites chauffer environ 2 litres d’eau. Pendant ce temps, lavez tous les légumes. Épluchez l’oignon, les navets, les pommes de terre et les carottes si elles ne sont pas biologiques. Retirez la partie blanche et dure du chou vert. Coupez les légumes grossièrement (en 2 ou en 4).
2 : Dans un petit bol, diluez la pâte miso ou le cube de légumes avec un peu d’eau chaude.
3 : Lorsque l’eau bout, ajoutez tous les légumes, le bouquet garni et le sel. Recouvrez la casserole avec un couvercle et laissez cuire à feu doux pendant environ 1 heure.
4 : Pendant ce temps, coupez le tofu en cubes. Au bout de 30 minutes de cuisson, rajoutez-le dans la casserole de légumes et continuez la cuisson.
5 : Vérifiez la cuisson des légumes avec la pointe d’un couteau, ils doivent être tendres. Terminez en rajoutant la pâte mise diluée. Vous pouvez servir ce plat avec le bouillon versés sur les légumes ou bien à part.',1,3),

('Poivrons_farcis_au_quinoa','Poivrons farcis au quinoa, légumes et feta',
'Ingrédients 4 personnes,
4 poivrons,
180g de quinoa cru,
1 aubergine,
2 tomates,
200g de feta,
1 oignon,
2 gousses d’ail,
4 c.s d’huile d’olive,
1 noix de beurre, 
Herbes de Provence, sel, poivre',
'1 : Préchauffez le four à 180°C et lavez les légumes. Épluchez l’aubergine, et coupez-la en petits cubes. Coupez l’oignon en tranches et hachez finement les gousses d’ail. Dans une poêle, ajoutez 4 cuillères à soupe d’huile d’olive et faites revenir l’aubergine, l’oignon et l’ail. Remuez régulièrement et si ça commence à accrocher, arrosez avec un peu d’eau.
2 : Pendant ce temps, faîtes cuire le quinoa dans de l’eau portée à ébullition, pendant 10 minutes. Une fois que le quinoa est cuit, égouttez-le et arrêtez la cuisson des légumes.
3 : Coupez la feta et les tomates en petits cubes.
4 : Pour préparer la farce, mélangez dans un bol : le quinoa, l’aubergine, l’oignon, l’ail, la feta et les tomates. Salez et poivrez.
5 : Coupez les poivrons dans la longueur, retirez les graines et les parties blanches. Dans le fond d’un plat allant au four, ajoutez une noix de beurre, et un peu d’eau (environ 2cm). Déposez les poivrons coupés.
6 : Il ne reste plus qu’à garnir généreusement les poivrons avec la farce à base de quinoa. Salez, poivrez, et saupoudrez d’herbes de Provence (ou avec une autre épice de votre choix).
7 : Enfournez les poivrons pendant environ 40 minutes. Le poivron doit se tenir, mais être fondant.',1,2),

('Veloute_de_carottes','Velouté de carottes au lait de coco',
'Ingrédients 3 bols,
5 carottes bio,
1 bouillon cube de légumes,
1L d’eau,
3 c.s de lait de coco,
Épices : sel, poivre, ail semoule, cumin,
Optionnel :  lentilles corails, graines germées',
'1 : Coupez les carottes grossièrement. (Si vos carottes ne sont pas bio, épluchez-les avant).
2 : Dans une casserole, faites bouillir 1 litre d’eau avec un cube de légumes. Faites cuire les carottes pendant une vingtaine de minutes. Optionnel : pour un velouté plus rassasiant, faites cuire 4 c.s de lentilles corails en même temps que les carottes.
3 : Une fois les carottes cuites, mixez-les avec 50cl d’eau de cuisson afin d’obtenir un velouté. Ajoutez les épices. Si vous avez fait cuire des lentilles corails, mixez le tout avec 75cl d’eau.
4 : Versez le velouté dans des bols et ajoutez le lait de coco (et les graines germées si vous en avez).',1,4),

('Gaufres_salées_patate_douce','Gaufres salées à la patate douce',
'Ingrédients 15 petites gaufres,
2 œufs,
400g de patates douces (environ 2 patates),
300g de farine de petit épeautre,
1/2 sachet de levure chimique,
2 c.s d’huile d’olive,
Sel, poivres, ail semoule, herbes de Provence, cumin',
'1 : Épluchez les patates douces, coupez-les en cubes et faites-les cuire dans de l’eau bouillante pendant 20 minutes.
2 : Pendant ce temps dans un saladier, mélangez la farine, la levure et les œufs.
3 : Une fois les patates cuites, écrasez-les avec une fourchette ou un écrase purée.
4 : Ajoutez les patates à la préparation avec l’huile d’olive et les épices.
5 : Mélangez le tout jusqu’à obtenir une pâte, puis formez de petites boules de pâte et faites cuire au gaufrier.
6 : Vous pouvez accompagner vos gaufres avec de l’avocat, de la feta, ou encore du saumon.',1,4);