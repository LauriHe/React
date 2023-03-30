import useForm from '../hooks/FormHooks';
import {useUser} from '../hooks/ApiHooks';
import {Button, TextField} from '@mui/material';

const RegisterForm = (props) => {
  const {postUser, getCheckUser} = useUser();

  const initValues = {
    username: '',
    password: '',
    email: '',
    full_name: '',
  };

  const doRegister = async () => {
    try {
      const result = await postUser(inputs);
      console.log('doRegister ~ result:', result);
    } catch (error) {
      alert('doRegister ~ error:', error);
    }
  };

  const handleUsername = async () => {
    const available = await getCheckUser(inputs.username);
    available.available || alert('Username not available');
  };

  const {inputs, handleSubmit, handleInputChange} = useForm(
    doRegister,
    initValues
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          name="username"
          placeholder="Username"
          onChange={handleInputChange}
          value={inputs.username}
          onBlur={handleUsername}
        />
        <TextField
          fullWidth
          margin="normal"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleInputChange}
          value={inputs.password}
        />
        <TextField
          fullWidth
          margin="normal"
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleInputChange}
          value={inputs.email}
        />
        <TextField
          fullWidth
          margin="normal"
          name="full_name"
          placeholder="Full name"
          onChange={handleInputChange}
          value={inputs.full_name}
        />
        <Button fullWidth sx={{mt: 2}} variant="contained" type="submit">
          Register
        </Button>
      </form>
    </>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
