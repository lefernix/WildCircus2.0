import React, { useState, useEffect } from 'react';

function TarifPage() {

    useEffect(() => {
        const fetchPrestations = async () => {
            const result = await api.get(`/api/v1/prestations`);
          };
          fetchPrestations();
    }, [ville, date, tarifsAdulte, tarifsEnfants])
    
    return(
        <div className="TarifPage">
            <div className="description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum lacinia iaculis. Suspendisse posuere, urna ac tristique vulputate, mi mi feugiat tortor, at ultrices magna nulla vitae ligula. Mauris ut nibh rutrum nulla porttitor sagittis eu in neque. Morbi sodales in ante id consequat. Nam euismod volutpat scelerisque.</p>
            </div>
            {prestations.length > 0 ? (prestations.map((prestation) => 
            <div className="prestation__list" key={prestation.id}>
                <ul className="each__prestation">
                    <li className="prestation__ville">
                        <p>Ville:{ville}</p>
                    </li>
                    <li>
                        <p>Date: {date}</p>
                    </li>
                    <li>
                        <p>Tarifs (adulte): {tarifsAdulte}</p>
                    </li>
                    <li>
                        <p>Tarifs (enfant): {tarifsEnfants}</p>
                    </li>
                </ul>
            </div>
        )) : <p>Aucun prestation à venir</p>}
        </div>
    )
}

export default TarifPage;