import memeOne from '../assets/image/meme-img.png';
import memeTwo from '../assets/image/meme-2-img.jpg';
import memeThree from '../assets/image/meme-3-img.jpg';
import memeFour from '../assets/image/meme-4-img.jpg';
function HomePage() {
  return (
    <div className='container'>
      <div>
        <img src={memeOne} alt='' />
        <img src={memeTwo} alt='' />
        <img src={memeThree} alt='' />
        <img src={memeFour} alt='' />
        {/* <p>check out more funnny meme <a href=''></a></p> */}
      </div>
    </div>
  );
}

export default HomePage;
