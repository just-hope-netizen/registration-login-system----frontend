import { useState } from 'react';
import congratsIcon from '../assets/image/congrats-icon.png';
import LogoContainer from '../components/logo-container';
import { getRandomJoke } from '../helpers/web';

function HomePage() {
  const [joke, setJoke] = useState([]);

  return (
    <div className='home-container'>
      <LogoContainer />
      <div className='home-content-container'>
        <img src={congratsIcon} alt='congrats icon' className='home-img' />
        <p>Thank you for testing my app.</p>
        <span className='pulse'></span>
        <button
        className='button'
          onClick={() => {
            getRandomJoke().then((res) => setJoke(res.body));
          }}
        >
          {' '}
          click me!
        </button>
        {joke.map((i) => (
          <h5 className='joke-text' key={i._id}>
            {i.setup}....{i.punchline}
          </h5>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
