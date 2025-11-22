import './Header.scss';
import '../Navigation/Navigation.scss'
import linkToSection from './HeaderHelpers';
import NavIcon from '../Icons/NavIcon';
import { useState } from 'react';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  const [navActve, setNavActive] = useState<boolean>(false);
  let timeoutId: null | number = null;

  const handleNavState = (event?: React.MouseEvent<Element, MouseEvent>, pageName?: string | undefined) => {
    event?.stopPropagation();

    if (timeoutId === null) {
      setTimeout(() => {
        setNavActive(!navActve);
        timeoutId = null;
      }, 150);
    }

    if (pageName) {
      linkToSection(event, pageName);
    }
  }

  return (
    <div className="header-nav">
      <nav>
        <ul className="nav-icon">
          <li>
            <button className="nav-icon-button" onMouseOver={(event) => handleNavState(event)}>
              <NavIcon />
            </button>
            <div className={`${ navActve ? 'nav-links-active' : 'nav-links'}`}>
              <Navigation handleNavState={handleNavState} />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
