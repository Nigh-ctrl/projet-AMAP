import React from 'react';
import calendar from '../../../public/calendrier/calendar.png'

// import PropTypes from 'prop-types';

import './styles.scss';

const Calendrier = () => (
  <section className="calendrier">
      <h1 className="page-title">Calendrier</h1>
      <div className="calendrier-div">
        <p className="calendrier-information">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt necessitatibus molestiae quaerat tenetur porro! Qui tempora aliquam distinctio, ipsa tenetur voluptatem id error eveniet? Quibusdam nisi iure harum nam repellat.
        </p>
      </div>
      <div className="calendrier-div">
        {/* je ne fais pas de style sur l'image car elle sera remplaçée par un vrai calendrier en V2 */}
        <img className="img" src={calendar} alt=""/>
        
      </div>

  </section>
);


// Content.propTypes = {
// 
// };

// Content.defaultProps = {
//   
// };

export default Calendrier;
