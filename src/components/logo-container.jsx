import logo from '../assets/image/logo.png';

function LogoContainer() {
  return (
    <header className='logo-container'>
      <img src={logo} alt='logo' />
      <h3 className='logo-title'>Capzul</h3>
    </header>
  );
}

export default LogoContainer;
