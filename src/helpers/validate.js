

export const validateUsername = (input) => {
  if (input.length >= 4) {
    return true;
  } else {
    return false;
  }
}


export const validateEmail = (input) => {
  const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (input.match(mailformat)) {
    return true;
  } else {
    return false;
  }
}

export function validatePassword(input) {
  const passwordFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  const password = input;
  if (( password.length >= 7 && password.length <= 15 ) && password.match(passwordFormat) ) {
    return true;
  } else {
    return false;
  }
}  

