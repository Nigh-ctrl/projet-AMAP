import React from 'react';
import profil from '../../../../public/producteurs/producteur 1/profil_1.jpg';

import './styles.scss'

const Agriculteur = () => (
  <section className="agriculteur">
    <div className="agriculteur-main">
      <div className="agriculteur-images">
        <img src={profil} alt=""/>
        <div className="agriculteur-location">
          <img src="https://www.journaldugeek.com/content/uploads/2017/02/google-maps-640x360.jpg" alt=""/>
        </div>
      </div>
      <article className="agriculteur-presentation">
        <h1>Nom de l'agriculteur</h1>
          <h2>Présentation</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae tortor vitae dui elementum volutpat vitae in velit. Aliquam eget ante lorem. Nunc facilisis diam ac nunc porta dignissim. Sed suscipit varius est at volutpat. Nulla tincidunt lobortis ex, condimentum cursus massa pellentesque sed. Pellentesque vulputate dui quis enim mollis, a lacinia mi lobortis. Fusce at nisi in dui pharetra lacinia. Integer ligula urna, malesuada vitae accumsan vel, consequat quis nulla. Vestibulum non elit at augue auctor tincidunt vel vel tortor. Integer dolor mauris, scelerisque pellentesque lectus et, facilisis aliquam lorem. Nunc ac viverra mauris. Etiam aliquet nibh quis ante lacinia sollicitudin. Proin tortor turpis, mollis eu facilisis quis, pretium nec mauris. <br/>
            Ut venenatis eu nisi ut dapibus. Nulla iaculis tempus est. Aenean urna eros, facilisis nec turpis nec, rutrum pellentesque nisi. Cras eu aliquam ipsum. Nunc vitae bibendum sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris eros quam, ornare eget magna id, luctus pharetra tortor. Curabitur cursus sapien eu odio tristique, cursus cursus lacus euismod. Nam eleifend tristique justo vitae hendrerit. Sed eu odio fringilla, vestibulum turpis sit amet, iaculis tortor. Etiam facilisis aliquet mauris, in tristique elit elementum a. Nulla placerat lectus sit amet lacus tincidunt, eleifend imperdiet turpis dictum. Suspendisse consectetur iaculis facilisis. Ut eu ipsum a justo suscipit congue non vel lectus. Quisque ornare sollicitudin eros, vitae viverra magna ultrices quis. Praesent scelerisque libero lectus, at dictum tortor condimentum ut. Nullam eu eros diam. Suspendisse sed ante non ligula congue consectetur vel eu magna.
          </p>
          <h2>Les produits proposés</h2>
          <div className="agriculteur-product">
            <ul>
              {/* Ici un map pour la liste des produits */}
              <li>Légumes</li>
              <li>Fromage</li>
              <li>Herbes aromatiques</li>
              <li>Fruits</li>
            </ul>
          </div>
      </article>
    </div>
  </section>
);

export default Agriculteur;
