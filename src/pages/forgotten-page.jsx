import { useRef, useState } from 'react';
import BgContainer from '../components/bg-img-container';
import FormInput from '../components/form-input';
import LogoContainer from '../components/logo-container';
import { validateEmail } from '../helpers/validate';
import { forgottenPassword } from '../helpers/web';
import ConfirmationPage from './confirmation-page';
import inbox from '../assets/image/email-icon.png';
import Backdrop from '../components/backdrop';
import { toast } from 'react-toastify';

function ForgottenPage() {
  const [emailError, setEmailError] = useState(false);
  const [emailConfirmed, setEmailConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const emailRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    setIsLoading(true);
    const email = emailRef.current.value;
    const validatedEmail = validateEmail(email);
    if (!validatedEmail) {
      setEmailError(true);
      setIsLoading(false);
    } else {
      forgottenHandler(email);
    }
  }

  function forgottenHandler(email) {
    forgottenPassword(email).then((res) => {
      if (res.msg === 'Password reset message sent successfully') {
        setEmailConfirmed(true);
        setIsLoading(false);
      } else if (res.msg === 'Email is not registered') {
            toast.info('Email is not registered');
      } else {
        toast.error('Something went wrong, try again.');
        setIsLoading(false);
      }
    });
  }
  return (
    <>
      {emailConfirmed ? (
        <ConfirmationPage>
          <div className='email-confirm-text'>
            <img src={inbox} alt='mail icon' />
            <p>A password reset link has been sent to your email.</p>
          </div>
        </ConfirmationPage>
      ) : (
        <div className='container'>
          <BgContainer />
          <div className='form-container'>
            <LogoContainer />
            <p>Forgot your account's password? Enter your email address and we'll send you a recovery link.</p>
            <form onSubmit={submitHandler}>
              <FormInput
                label={'Email'}
                type={'email'}
                placeholder={'email'}
                name={'email'}
                refer={emailRef}
                className={`${emailError && 'error'}`}
                errorMsg={
                  emailError &&
                  'You have entered an invalid email, check and try again!'
                }
              />
              <button className='form-btn'>Send recovery email</button>
            </form>
            {isLoading && <Backdrop />}
          </div>
        </div>
      )}
    </>
  );
}

export default ForgottenPage;
