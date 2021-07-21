import React from 'react';
// import PropTypes from 'prop-types';
import NavBarre from '../NavBarre';

import './styles.scss';

const Nutrition = () => (
  <section className="nutrition">
    <h1 className="page-title">Nutrition</h1>
    <NavBarre />
    <div className="nutrition-list">
      {/* Ici un map lors de la dynamisation */}
      <article className="nutrition-card">
        <h3 className="nutrition-title">Carence en vitamine D</h3>
        <img className="nutrition-img" src="https://thumbs.dreamstime.com/z/votre-sant%C3%A9-d%C3%A9pend-de-la-nutrition-appropri%C3%A9e-fruits-et-l%C3%A9gumes-90440440.jpg" alt=""/>
        <p className="nutrition-text">La vitamine D est un élément indispensable pour la croissance et la bonne santé du squelette. Un déficit en vitamine D peut être à l’origine d’une fragilité osseuse (ostéoporose), et d’après plusieurs études qui demandent à être confirmées, de certains cancers…</p>
        <a className="nutrition-read-more" href="">En savoir plus</a>
      </article>
      {/* fin du map */}
      <article className="nutrition-card">
        <h3 className="nutrition-title">Besoins énergétiques de chacun</h3>
        <img className="nutrition-img" src="https://thumbs.dreamstime.com/z/grossesse-et-nutrition-16694868.jpg" alt=""/>
        <p className="nutrition-text">Pour fonctionner correctement, le corps humain a besoin d’énergie (c’est-à-dire de calories). Ces besoins énergétiques sont couverts par les aliments. Les besoins énergétiques individuels dépendent de l’âge, du sexe et de l’activité physique. Pour rester en bonne santé, un individu a non seulement besoin d’énergie…</p>
        <a className="nutrition-read-more" href="">En savoir plus</a>
      </article>
      <article className="nutrition-card">
        <h3 className="nutrition-title">Alimentation du sportif</h3>
        <img className="nutrition-img" src="https://thumbs.dreamstime.com/z/r%C3%A9gime-alimentaire-concept-d-alimentation-saine-et-hygi%C3%A8ne-de-vie-mat%C3%A9riel-exercice-sportif-entra%C3%AEnement-formation-en-salle-179855057.jpg" alt=""/>
        <p className="nutrition-text">L’alimentation du sportif est un élément déterminant pour la pratique d’une activité sportive régulière, qu’elle soit de haut niveau ou simplement de loisir. Le respect de règles alimentaires essentielles est bénéfique pour la santé du sportif…</p>
        <a className="nutrition-read-more" href="">En savoir plus</a>
      </article>
      <article className="nutrition-card">
        <h3 className="nutrition-title">Intolérance au gluten (maladie cœliaque)</h3>
        <img className="nutrition-img" src="https://thumbs.dreamstime.com/z/mal-d-estomac-72280687.jpg" alt=""/>
        <p className="nutrition-text">L’intolérance au gluten, appelée également maladie cœliaque, est une maladie inflammatoire intestinale chronique et auto-immune, liée à l’ingestion de gluten. Elle peut survenir dès la petite enfance ou n’apparaître qu’à l’âge adulte…</p>
        <a className="nutrition-read-more" href="">En savoir plus</a>
      </article>
      <article className="nutrition-card">
        <h3 className="nutrition-title">Nutrithérapie</h3>
        <img className="nutrition-img" src="https://thumbs.dreamstime.com/z/l%C3%A9gumes-frais-dans-la-t%C3%AAte-de-femme-symbolisant-nutrition-sanitaire-sant%C3%A9-votre-cerveau-sur-fond-gris-panorama-espace-copie-159447391.jpg" alt=""/>
        <p className="nutrition-text">La nutrithérapie n’est pas une médecine alternative, mais une discipline qui se positionne à l’interface entre la nutrition et la médecine. Elle utilise les propriétés pharmacologiques des aliments, des nutriments et des substances actives présentes…</p>
        <a className="nutrition-read-more" href="">En savoir plus</a>
      </article>
    </div>
  </section>
);

// Content.propTypes = {
// 
// };

// Content.defaultProps = {
//   
// };

export default Nutrition;
