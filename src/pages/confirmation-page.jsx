import inbox from '../assets/image/email-icon.png';
import BgContainer from '../components/bg-img-container';
import LogoContainer from '../components/logo-container';

function ConfirmationPage(props) {
  return (
    <div className='container'>
      <BgContainer />
      <div className='confirm-container'>
        <LogoContainer />
        {props.children || (
          <div className='email-confirm-text'>
            <img src={inbox} alt='mail icon' />
            <h3>Confirm your email</h3>
            <p>
              Your account has been successfully registered. To complete the
              process please check your email for a validation request.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ConfirmationPage;
