import React from 'react';
import './ContactPage.css';

function ContactPage() {
    return(
        <div className="ContactPage">
            <div className="form">
                <form action="" method="get" className="form-example">
                    <div className="form-example">
                        <label htmlFor="name">Nom et prénom: </label>
                        <input type="text" name="name" id="name" required/>
                    </div>
                    <div className="form-example">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" required/>
                    </div>
                    <div className="form-example">
                        <label htmlFor="tel">Téléphone: </label>
                        <input type="tel" id="phone" name="phone"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                required/>
                    </div>
                    <div className="form-example">
                        <label htmlFor="text">Commentaire: </label>
                        <textarea rows="5" name="msg" id="text" required></textarea>
                    </div>
                    <button className="button__submit" type="submit">Envoyer</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage;