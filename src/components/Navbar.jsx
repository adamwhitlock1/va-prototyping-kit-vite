import PropTypes from 'prop-types';
import { Link } from 'react-router';
import VaSeal from '@department-of-veterans-affairs/component-library/dist/assets/va-seal.svg'
/**
 * @component NavBar
 * @description A simple navigation bar following VA.gov design patterns
 */
export const NavBar = ({ links }) => {
  return (
    <nav className="vads-u-background-color--primary vads-u-padding-y--1" role="navigation" aria-label="Main navigation">
      <div className="grid-container">
        <div className="grid-row vads-u-align-items--center">
          {/* Logo */}
          <div className="grid-col-3">
            <Link to="/" className="vads-u-text-decoration--none">
              <img
                src={VaSeal}
                alt="VA logo"
                className="vads-u-width--auto"
                style={{ height: '50px' }}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="grid-col-9">
            <ul className="vads-u-margin--0 vads-u-padding-left--0 display--flex">
              {links.map((link) => (
                <li
                  key={link.id}
                  className="vads-u-margin-right--2 vads-u-display--inline-block"
                >
                  <Link
                    to={link.url}
                    className="vads-u-color--white vads-u-text-decoration--none vads-u-padding--1"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};
