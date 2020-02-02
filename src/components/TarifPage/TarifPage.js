import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TarifPage.css';

function TarifPage() {
    const [ prestations, setPrestations ] = useState([]);
    useEffect(() => {
        const fetchPrestations = async () => {
            const result = await axios.get(`/api/v1/prestations`);
            setPrestations(result.data);
          };
          fetchPrestations();
    }, [])

    return(
        <div className="TarifPage">
            <div className="description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum lacinia iaculis. Suspendisse posuere, urna ac tristique vulputate, mi mi feugiat tortor, at ultrices magna nulla vitae ligula. Mauris ut nibh rutrum nulla porttitor sagittis eu in neque. Morbi sodales in ante id consequat. Nam euismod volutpat scelerisque.</p>
            </div>
            {prestations.length > 0 ? (prestations.map((prestation) => 
            <div className="prestation__list" key={prestation.id}>
                <ul className="each__prestation">
                    <li className="prestation__ville">
                        <p>Ville:{prestation.ville}</p>
                    </li>
                    <li>
                        <p>Description: {prestation.description}</p>
                    </li>
                    <li>
                        <p>Tarifs (enfants): {prestation.tarif_Enfant}</p>
                    </li>
                    <li>
                        <p>Tarifs (adultes): {prestation.tarif_Adulte}</p>
                    </li>
                    <li>
                        <p>Note: {prestation.note}/5</p>
                    </li>
                </ul>
            </div>
        )) : <p>Aucun prestation à venir</p>}
        </div>
    )
}

export default TarifPage;