import congratsIcon from '../assets/image/congrats-icon.png';
import LogoContainer from '../components/logo-container';

function HomePage() {
  return (
    <div className='home-container'>
      <LogoContainer />
      <div className='home-img-wrapper'>
        <img src={congratsIcon} alt='congrats icon' className='home-img' />
        <p>Thank you for testing my app.</p>
      </div>
    </div>
  );
}

export default HomePage;
