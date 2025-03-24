// // frontend/src/components/Navigation/Navigation.jsx

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import fortbnblogo from '../../images/fortbnblogo.png';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <ul className="nav-container">
      <NavLink to="/">
        <img
          src={fortbnblogo}
          className="airbnb-logo"
        />
      </NavLink>
      <div className="nav-right-buttons">
        {sessionUser && (
          <div>
            <NavLink to="spot/create-spot/"
              className="create-spot-link">
              Create a Spot
            </NavLink>
          </div>
        )}
        {isLoaded && (
          <li>
            <ProfileButton user={sessionUser} />
          </li>
        )}
      </div>
    </ul>
  );
};

export default Navigation;