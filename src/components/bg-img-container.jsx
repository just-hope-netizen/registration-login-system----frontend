import bgImage from '../assets/image/bg-img.png';

function BgContainer() {
  return (
    <div className='bg-img-container'>
      <h5 className='bg-heading'>
        Social media shared today, tomorrow or by location
      </h5>
      <div>
        <img src={bgImage} alt='background' />
      </div>
    </div>
  );
}

export default BgContainer;
