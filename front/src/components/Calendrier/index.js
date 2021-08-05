import React from 'react';
import calendar from '../../../public/calendrier/calendar.png'



import './styles.scss';

const Calendrier = () => (
  <section className="calendrier">
      <h1 className="page-title">Calendrier</h1>
      <div className="calendrier-div">
        <p className="calendrier-information">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt necessitatibus molestiae quaerat tenetur porro! Qui tempora aliquam distinctio, ipsa tenetur voluptatem id error eveniet? Quibusdam nisi iure harum nam repellat.
        </p>
      </div>
      <div className="calendrier-api-div">
        {/*l'image sera remplaçée par un vrai calendrier en V2 */}
        <img className="img" src={calendar} alt=""/>
        
      </div>

  </section>
);



export default Calendrier;
