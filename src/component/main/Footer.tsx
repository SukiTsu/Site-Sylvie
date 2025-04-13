import { useState } from "react";

const Footer =({}) => {

      const [subject, setSubject] = useState('');
      const [message, setMessage] = useState('');

        const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();
      
          const email = 'buibrandon47@gmail.com'; 
          const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${message}`)}`;
      
          window.location.href = mailtoLink;
        };
        
      
    return(
        <section id="footer">
            <div className="inner">
                <h2 className="major">Contact</h2>
                <p>Besoin de poser une question, ou d'avoir une réponse ? Entrez votre message ci-dessous</p>
                <form onSubmit={handleSubmit}>
                    <div className="fields">
                        <div className="field">
                            <label htmlFor="object">Objet</label>
                            <input
                                type="text"
                                placeholder="Objet"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                                id="object"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea
                                placeholder="Message"
                                rows={5}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                id="message"
                            />
                        </div>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Envoyer" id="sub"/></li>
                    </ul>
                </form>
                <ul className="contact">
                    <li className="icon solid fa-home">
                        adresse...
                    </li>
                    <li className="icon solid fa-phone">(+33) 06 32 04 09 17</li>
                    <li className="icon solid fa-envelope"><a href="#">...@gmail.com</a></li>
                    <li className="icon brands fa-facebook-f"><a href="#">facebook.com</a></li>
                    <li className="icon brands fa-linkedin"><a href="#">instagram.com</a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; Untitled Inc. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Footer