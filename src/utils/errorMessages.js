const registerForm = {
  username: ['this field is required'],
  password: ['this field is required'],
  confirm: ['this field is required'],
  email: ['this field is required', 'email is not valid'],
  full_name: [],
};

const loginForm = {
  username: ['this field is required'],
  password: ['this field is required'],
};

export {registerForm, loginForm};
