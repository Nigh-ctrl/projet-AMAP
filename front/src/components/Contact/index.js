import React from 'react';
// import PropTypes from 'prop-types';

import './styles.scss';

const Contact = () => (
  <section className="contact">
      <h1 className="page-title">Contact</h1>
      <div className="contact-div">
        <p className="contact-information">
          Numéro de tel,
          adresse mail,
          adresse postale
        </p>
      </div>
      <div className="contact-api-div">
        {/* je ne fais pas de style sur l'image car elle sera remplaçée par l'api google maps par la suite */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/1024px-Google_Maps_Logo_2020.svg.png" alt=""/>
      </div>
  </section>
);


// Content.propTypes = {
// 
// };

// Content.defaultProps = {
//   
// };

export default Contact;

