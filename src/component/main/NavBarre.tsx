import { useEffect } from "react";
// @ts-ignore
import { initMenu } from '../../../public/js/menu';
import dataPage from "../../page/DescriptionPageData";

const NavBarre: React.FC = () => {
	useEffect(() => {
	  initMenu(); // Initialise le menu jQuery APRES le rendu React
	}, []);
  
	return (
	  <>
		<header id="header" className="alt">
		  <h1><a href="/">Au delà du  perceptible</a></h1>
		  <nav>
			<a href="#menu">Menu</a>
		  </nav>
		</header>
  
		<nav id="menu">
		  <div className="inner">
			<h2>Menu</h2>
			<ul className="links">
			  <li><a href="/">Accueil</a></li>
			  <li><a href="/#footer">Contact</a></li>
			  {dataPage.map((content) => (
				<li key={content.route}><a href={content.route}>{content.title}</a></li>
			  ))}
			</ul>
			<a href="#" className="close">Close</a>
		  </div>
		</nav>
	  </>
	);
  };
  
export default NavBarre