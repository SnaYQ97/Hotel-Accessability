import "./styles.css";
import { Path } from "../../main";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="Główne menu nawigacyjne">
      <div className="navbar__container">
        <Link to={Path.HOME} className="navbar__logo" aria-label="Strona główna">
          Hotel
        </Link>
        <div className="navbar__menu" role="menubar">
          <ul className="navbar__list">
            <li className="navbar__item" role="none">
              <Link to={Path.HOME} className="navbar__link" role="menuitem" aria-label="Strona główna">
                Strona główna
              </Link>
            </li>
            <li className="navbar__item" role="none">
              <Link to={Path.ROOMS} className="navbar__link" role="menuitem" aria-label="Pokoje">
                Pokoje
              </Link>
            </li>
            <li className="navbar__item" role="none">
              <Link to={Path.SERVICES} className="navbar__link" role="menuitem" aria-label="Dodatkowe usługi">
                Dodatkowe usługi
              </Link>
            </li>
            <li className="navbar__item" role="none">
              <Link to={Path.PRICES} className="navbar__link" role="menuitem" aria-label="Cennik">
                Cennik
              </Link>
            </li>
            <li className="navbar__item" role="none">
              <Link to={Path.ABOUT} className="navbar__link" role="menuitem" aria-label="O nas">
                O nas
              </Link>
            </li>
            <li className="navbar__item" role="none">
              <Link to={Path.CONTACT} className="navbar__link" role="menuitem" aria-label="Kontakt">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
