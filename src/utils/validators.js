const registerValidator = {
  username: ['required'],
  password: ['required'],
  confirm: ['required'],
  email: ['required', 'isEmail'],
  full_name: [],
};

const loginValidator = {
  username: ['required'],
  password: ['required'],
};

export {registerValidator, loginValidator};
