import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='container'>
      <div className='nav-bar'>
        <h2>DailyNews</h2>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/business'>Business</Link>
            </li>
            <li>
              <Link to='/sport'>Sport</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
