import React from 'react'; 
import './styles.scss';


function Recette(){

    return(

        
        <div>
            <div class="header"></div>

            <div class="titre">
              <h1>Recettes</h1>
              </div>

              <div class="">
              <nav class="nav-bar">

                <ul class="nav__links">
                  <li><a href="#">Printemps</a></li>
                  <li><a href="#">Eté</a></li>
                  <li><a href="#">Automne</a></li>
                  <li><a href="#">Hiver</a></li>

                </ul>
              </nav>
              
              </div>


            <div class="card-recette">
                
                <h1 class="titre-recette">Titre recette</h1>
                <h2 class="description-recette">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum doloribus culpa dicta. Ipsa quaerat maxime, cum debitis voluptatum natus explicabo, enim aut, quos similique eveniet doloremque nobis corporis aspernatur?</h2>
            </div>

            <div class="card-recette">
                
                <h1 class="titre-recette">Titre recette</h1>
                <h2 class="description-recette">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni ad, officiis voluptatum in ipsa quas, architecto corporis sapiente aperiam, recusandae enim harum et repellendus eveniet maxime earum laborum quisquam quibusdam!</h2>
            </div>
            <div class="card-recette"> 
                
                <h1 class="titre-recette">Titre recette</h1>
                <h2 class="description-recette">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusantium aperiam quis quam fugiat placeat ducimus porro, magni ad quos. Ad natus sequi eaque provident id ea tempore dolore praesentium!</h2>
            </div>
            <div class="card-recette"> 
                
                <h1 class="titre-recette">Titre recette</h1>
                <h2 class="description-recette">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores accusantium aperiam quis quam fugiat placeat ducimus porro, magni ad quos. Ad natus sequi eaque provident id ea tempore dolore praesentium!</h2>
            </div>


        </div>
        

    )



}




export default Recette;