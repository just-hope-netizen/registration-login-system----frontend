import { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import FormInput from './form-input';
import { Eye, EyeOff } from '../assets/svg';
import LogoContainer from './logo-container';
import { validateEmail, validatePassword } from '../helpers/validate';
import { login } from '../helpers/web';
import Backdrop from './backdrop';

function Login() {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const passwordRef = useRef();
  const emailRef = useRef();
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    setIsLoading(true);

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const validatedEmail = validateEmail(email);
    const validatedPassword = validatePassword(password);

    if (!validatedEmail) {
      setEmailError(true);
      setIsLoading(false);

    } else if (!validatedPassword) {
      setPasswordError(true);
      setIsLoading(false);

    } else {
      setEmailError(false);
      setPasswordError(false);
      loginUser( email, password );
    }
  }

  function loginUser(email, password) {
    login(email, password).then((res) => {
      if (res.msg === 'user not found') {
        setIsLoading(false);
        toast.info('User not found, you need to sign up.')
      } else if (res.msg === 'user is not verified') {
        setIsLoading(false);
        toast.info('You have not verify your email.')
      } else if (
        res.msg === 'password does not match the one stored in the database'
      ) {
        setIsLoading(false);
        toast.info('Wrong password!')

      }else{
        navigate('/home')
        toast.success('Welcome Back')
      }
    });
    
  }

  return (
    <div className='form-container'>
      <LogoContainer />
      <h2 className='intro'>Welcome Back</h2>
      <form onSubmit={submitHandler}>
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
        <button className='form-btn'>Login</button>
      </form>
      <footer className='form-footer'>
        <Link to={'/forgotten-password'} className='forgot-pass'>Forgot your password?</Link>
        <h5>
          Don't have an account? <Link to={'/'}>Create one</Link>
        </h5>
      </footer>
      {isLoading && <Backdrop />}
    </div>
  );
}

export default Login;
