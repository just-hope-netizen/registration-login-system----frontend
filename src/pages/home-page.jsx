import congratsIcon from '../assets/image/congrats-icon.png';

function HomePage() {
  return (
    <div className='home-container'>
      <div>
        <img src={congratsIcon} alt='congrats icon' className='home-img'/>
      </div>
      <p >Hello, thank you for testing my app.</p>
    </div>
  );
}

export default HomePage;
