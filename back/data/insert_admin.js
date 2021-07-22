require('dotenv').config();
const bcrypt = require('bcrypt');

const db = require('../app/database');
console.log(db);

const admins = require('./admin.json');

async function importData() {
    //on commence par supprimer les éventuelles data présentes dans les 2 tables
    try {
        
        await db.query('DELETE FROM admin');

        //on va stocker l'id des categories au fur et à mesure de la boucle
        var encryptedPassword='';

        for (const admin of admins) {

            encryptedPassword = bcrypt.hashSync(admin.password, 10);

            await db.query('INSERT INTO admin(email,password) VALUES($1,$2) RETURNING id', [admin.email, encryptedPassword]);
        }

        //on ferme la connexion au client pg
        db.end();

    } catch (error) {
        console.log(error);
    }
}

importData();