import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Eye, EyeOff } from '../assets/svg';
import {
  validateEmail,
  validatePassword,
  validateUsername
} from '../helpers/validate';
import { register } from '../helpers/web';
import Backdrop from './backdrop';
import FormInput from './form-input';
import LogoContainer from './logo-container';

function Register() {
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    setIsLoading(true);
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const validatedUsername = validateUsername(username);
    const validatedEmail = validateEmail(email);
    const validatedPassword = validatePassword(password);

    
    if (!validatedUsername) {
      setUsernameError(true);
      setIsLoading(false);
    } else if (!validatedEmail) {
      setEmailError(true);
      setIsLoading(false);
      setUsernameError(false);
    } else if (!validatedPassword) {
      setPasswordError(true);
      setIsLoading(false);
      setUsernameError(false);
      setEmailError(false);
    } else {
      setUsernameError(false);
      setEmailError(false);
      setPasswordError(false);
      sendUserDetails({ username, email, password });
    }
  }

  function sendUserDetails(data) {
    register(data).then((result) => {
      if (result.message === 'Email verification message sent successfully') {
        navigate('/confirmation');
      } else {
        toast.info('Something went wrong, try again.');
        setIsLoading(false);
      }
    });
  }

  return (
    <div className='form-container'>
      <LogoContainer />
      <div className='intro-container'>
        <h3>Create Account</h3>
        <p >for business, band or celebrity</p>
      </div>
      <form onSubmit={submitHandler}>
        <FormInput
          label={'Username'}
          type={'text'}
          placeholder={'username'}
          name={'username'}
          className={` ${usernameError && 'error'}`}
          errorMsg={
            usernameError &&
            'You have entered an invalid username, username must be more than 3 characters!'
          }
          refer={usernameRef}
        />
        <FormInput
          label={'Email'}
          type={'email'}
          placeholder={'email'}
          name={'email'}
          refer={emailRef}
          className={`${emailError && ' error'}`}
          errorMsg={
            emailError &&
            'You have entered an invalid email, check and try again!'
          }
        />
        <FormInput
          label={'Password'}
          type={showPassword ? 'text' : 'password'}
          placeholder={'password'}
          name={'password'}
          refer={passwordRef}
          className={`${passwordError && 'error '}`}
          errorMsg={
            passwordError &&
            ' 7 to 15 characters with one numeric value and special character e.g. 123qwerty$'
          }
        >
          <button
            type='button'
            className='show-pass-btn'
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {' '}
            {showPassword ? <Eye /> : <EyeOff />}
          </button>
        </FormInput>
        <button className='form-btn'>Create Account</button>
      </form>
      <footer className='form-footer'>
        <h5>
          Already have an account ? <Link  to={'/'}> Login</Link>{' '}
        </h5>
      </footer>
      {isLoading && <Backdrop />}
    </div>
  );
}
export default Register;
