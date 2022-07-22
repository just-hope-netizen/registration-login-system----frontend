import inbox from '../assets/image/email-icon.png';
import logo from '../assets/image/logo.png';
import BgContainer from '../components/bg-img-container';

function ConfirmationPage() {
  return (
    <div className='container'>
      <BgContainer />
      <div className='confirm-container'>
        <header className='confirm-header'>
          <img src={logo} alt='logo' />
          <h3 className='logo-title'>Capzul</h3>
        </header>
        <div className='email-confirm-text'>
          <img src={inbox} alt='mail icon' />
          <h3>Confirm your email</h3>
          <p>
            Your account has been successfully registered. To complete the
            process please check your email for a validation request.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
