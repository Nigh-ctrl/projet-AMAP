import React from 'react';
import schema from '../../../public/Infographie/AMAP-schema.png';

import './styles.scss'

const Presentation = () => (
  <section className="presentation-container">
    <h1 className="page-title">Présentation de l'amap</h1>
    <div className="presentation">
        <h2>Schéma de présentation de l'Amap</h2>
    <div className="presentation-schema">
      <img src={schema} alt=""/>
    </div>
        <h2 >qu'est-ce qu'une Amap?</h2>
        <p>
        Une AMAP est une Association pour le Maintien d’une Agriculture Paysanne. Elle a pour objectif de préserver l’existence et la continuité des fermes de proximité dans une logique d’agriculture durable et biologique. Le fermier s’engage à cultiver sain, dans le respect de la nature et de l’environnement. Conformément à la Charte des AMAP, iI n’utilise ni engrais chimique de synthèse, ni pesticide, ni OGM.
      </p>
      <p>
L’AMAP est composée de personnes qui deviennent partenaires d’une ferme. Un engagement contractuel permet au paysan d’assurer à l’avance la commercialisation de ses denrées et à l'adhérent d’obtenir un panier des légumes, fruits, fromages, viandes, poissons (etc) de la ferme. 
      </p>
      <p>
Les "Amapiens" et le paysan s’engagent dans une démarche éthique.
Chaque membre de l’A.M.A.P. achète en début de saison une part de la récolte de la ferme. La recette ainsi obtenue par avance par le paysan constitue un fonds qui couvre les coûts de production pour la saison et assure la juste rémunération du travail du paysan (et des ouvriers).
      </p>
      <p>
En contrepartie, l’approvisionnement de l'Amapien en aliments de qualité est assuré durant toute la saison de culture, d'élevage ou de pêche. 
      </p>
      <p>
Au travers des échanges avec le producteur, des visites de la ferme et des fêtes les membres apprennent à connaître les producteurs et leurs lieux de productions.
Dans ce système hors économie de marché, l’agriculteur livre l’intégralité de sa production, évite la surproduction et toute mévente due à la forte concurrence internationale. N’ayant plus le souci de vendre, il peut se consacrer à la valorisation de son savoir-faire et à la qualité de sa pratique agricole.
      </p>
        <h2>L'AMAP la Seyne sur Mer</h2>
        <p className="subtitle">La naissance des AMAP en France</p>
      <p>
A l'origine de toutes les AMAP, se trouvent les teikei (qu'on peut traduire en japonais par « coopération », « collaboration » ou « partenariat ») qui ont émergé dans les années 1970 aux Japon. Le fonctionnement est simple : en échange de l’achat par souscription de la récolte du paysan, ce dernier s’engage à fournir des aliments cultivés sans produits chimiques.
      </p>
      <p>
Dans un contexte de prise de conscience citoyenne face aux crises traversées par les domaines de l’agriculture (remise en question de modèle de production intensive,…) et de l’alimentation (interrogation sur la séparation entre lieu de production et lieu de consommation, remise en question du modèle agroalimentaire industriel...), ce concept s'exporte aux Etats-Unis (Community Supported Agriculture) et au Canada, puis arrive en France en 2001. 
Le Var et les bouches du Rhône sont les figures de proue d’un mouvement qui depuis 20 ans se répand en France
      </p>
        <p className="subtitle">La naissance de l'AMAP la Seyne sur Mer</p>
      <p>
L’AMAP la Seyne sur Mer nait en 2008 du souhait de quelques amapiens issus du premier groupe d’Aubagne de fonder une AMAP centrée sur la production biologique et locale (statuts, sous le régime d’une association 1901, déposés en Préfecture du Var JO du 24/01/2009 N° 1903).
      </p>
      <p>
Elle a pour objet de maintenir et promouvoir une agriculture durable, de proximité, socialement équitable et écologiquement saine.
L'association fait partie du Réseau des AMAP DE PROVENCE (cf l’amap tout un réseau). 
      </p>
      <p>
L’association, ses membres, ses producteurs adhèrent aux principes portées par la charte des Amap (lien vers charte des amap).
      </p>
      <p>
Organisée autour d'un projet de soutien à l'agriculture biologique, l'AMAP LA SEYNE SUR MER est liée depuis plusieurs années avec les mêmes producteurs :  
      </p>
      <ul>
        <li>Thierry, le maraîcher cultive ses terres à la Cadière d'Azur, </li>
        <li>les autres producteurs sont installés dans le Var hormis les producteurs de pommes, poires, noix et châtaignes qui se trouvent dans les départements limitrophes.</li>
      </ul>  
      <p>
L'association bénéficie d'une convention municipale pour l'occupation du préau de l’ancienne école Jean-Baptiste Coste afin de pouvoir effectuer les distributions.
      </p>
      <p className="bold">
Les distributions ont lieu les vendredis en fin de journée.
      </p>
      <p>
Un vendredi par mois nous proposons un moment de convivialité autour d’un apéritif pendant la distribution pour se connaitre un peu plus, pour prendre des nouvelles de nos producteurs, pour discuter de choses et d’autres….Juste pour décompresser en fin de semaine
      </p>
        <h2>Les produits que vous trouverez à l’AMAP de La Seyne</h2>

      <p>
(Cette liste peut évoluer selon les souhaits des amapiens et les producteurs que nous trouvons)
      </p>
      <h3>CHAQUE SEMAINE</h3>
        <ul>
          <li>
            Un panier de légumes de Thierry
          </li>
          <li>
            Du pain de Théodore
          </li>
        </ul>  
      <h3>TOUS LES MOIS</h3>
        <ul>
          <li>
            Des œufs de Brice
          </li>
          <li>
          Des fromages : en hiver les fromages de brebis de Sylvain et l’été Mathias prend le relais avec les fromages de chèvre
          </li>
        </ul>
      <h3>TOUS LES DEUX MOIS</h3>
        <ul>
          <li>
            Des volailles de Yannick (poulets et aussi pintades et chapon vers Noel)
          </li>
          <li>
            Les pommes entre octobre et mars produites par Grégoire et Maruschka
          </li>
          <li>
            Les poires sur le contrat hiver de Philipe Billocq
          </li>
        </ul>
      <h3>LES COMMANDES PONCTUELLES (une a deus fois par ans)</h3>
        <ul>
          <li>
            Le miel de Mélanie
          </li>
          <li>
            Les farines et légumineuses de Bertrand
          </li>
          <li>
            Les noix et huiles de noix de Vincent
          </li>
          <li>
            Les Châtaignes et produits dérivés d’Elisabeth
          </li>
          <li>
            Les pruneaux de la famille Pourcel
          </li>
          <li>
            La viande bovine de Jean Louis
          </li>

        </ul>
    </div>
  </section>
);

export default Presentation;
