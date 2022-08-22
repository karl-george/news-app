import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='container'>
      <h2>DailyNews</h2>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/business'>Business</Link>
        <Link to='/sport'>Sport</Link>
      </nav>
    </header>
  );
};

export default Header;
