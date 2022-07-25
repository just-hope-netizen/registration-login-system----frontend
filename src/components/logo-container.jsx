import { Link } from 'react-router-dom';
import logo from '../assets/image/logo.png';

function LogoContainer() {
  return (
    <header>
      <Link to='/' className='logo-container'>
        <img src={logo} alt='logo' />
        <span className='logo-title'>Ceevo</span>
      </Link>
    </header>
  );
}

export default LogoContainer;
