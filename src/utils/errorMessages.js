const registerForm = {
  username: [
    'this field is required',
    'minimum 3 characters',
    'username is taken',
  ],
  password: ['this field is required', 'minimum 5 characters'],
  confirm: ['this field is required', 'passwords do not match'],
  email: ['this field is required', 'email is not valid'],
  full_name: ['minimum 2 characters'],
};

const loginForm = {
  username: ['this field is required'],
  password: ['this field is required'],
};

export {registerForm, loginForm};
