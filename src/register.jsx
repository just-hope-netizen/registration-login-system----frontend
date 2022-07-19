import { useRef, useState } from 'react';
import FormInput from './form-input';
import logo from './assets/image/logo.png';
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from './helpers/validate';
import { Eye, EyeOff } from './assets/svg';

function Register() {
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const validatedUsername = validateUsername(username);
    const validatedEmail = validateEmail(email);
    const validatedPassword = validatePassword(password);

    if (!validatedUsername) {
      setUsernameError(true);
    } else if (!validatedEmail) {
      setEmailError(true);
    } else if (!validatedPassword) {
      setPasswordError(true);
    } else {
      setUsernameError(false);
      setEmailError(false);
      setPasswordError(false);
      sendUserDetails({ username, email, password });
    }
  }

  function sendUserDetails(data) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
    fetch('http://localhost:2000/auth/register', requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className='form-container'>
      <header className='form-header'>
        <img src={logo} alt='logo' />
        <h3 className='logo-title'>Capzul</h3>
      </header>
      <div>
        <h3>Create account</h3>
        <p className='category-text'>for business, band or celebrity</p>
      </div>
      <form onSubmit={submitHandler}>
        <FormInput
          label={'Username'}
          type={'username'}
          placeholder={'username'}
          name={'username'}
          className={`input-username ${
            usernameError && 'error error-username'
          }`}
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
          className={`input-email ${emailError && ' error error-email'}`}
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
          className={`input-password ${
            passwordError && 'error error-password'
          }`}
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
            {showPassword ? <Eye /> :  <EyeOff />}
          </button>
        </FormInput>
        <button>sign up</button>
      </form>
    </div>
  );
}
export default Register;
