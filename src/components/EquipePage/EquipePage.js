import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EquipePage.css'

function EquipePage() {
    const [ artistes, setArtistes ] = useState([]);
    useEffect(() => {
        const fetchArtistes = async () => {
            const result = await axios.get(`/api/v1/artistes`);
            setArtistes(result.data);
          };
          fetchArtistes();
    }, [])
    return(
        <div className="EquipePage">
            <div className="description">
                <p>description</p>
            </div>
            {artistes.length > 0 ? (artistes.map((artiste) => 
            <div className="prestation__list" key={artiste.id}>
                <ul className="each__artistes">
                    <li className="artistes__name">
                        <p>Nom: {artiste.nom}</p>
                    </li>
                    <li>
                        <p>Prenom: {artiste.prenom}</p>
                    </li>
                    <li>
                        <p>Surnom: {artiste.surnom}</p>
                    </li>
                    <li>
                        <p>Age: {artiste.age}ans</p>
                    </li>
                    <li>
                        <p>Role: {artiste.role}</p>
                    </li>
                </ul>
            </div>
            )): <p>Aucun artistes</p>}
            <form method="post" action="add.php">
                <fieldset>
                    <legend>
                        <span id="add">Ajouter un artiste</span>
                            <label>Nom</label> <input type="text" name="nom"/>
                            <label>Prenom</label> <input type="text" name="prenom"/>
                            <label>Surnom</label> <input type="text" name="surnom"/>
                            <label>Age</label> <input type="number" name="age"/>
                            <label>Role</label> <input type="text" name="role"/>
                    </legend>
                </fieldset>
                    <button className="add__button" type="submit">Ajouter !</button>
		    </form>
        </div>
    )
}

export default EquipePage;