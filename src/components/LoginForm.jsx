import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {MediaContext} from '../contexts/mediaContext';
import {useAuth} from '../hooks/ApiHooks';
import useForm from '../hooks/FormHooks';
import Button from '@mui/material/Button';
import {TextField} from '@mui/material';

const LoginForm = (props) => {
  const {setUser} = useContext(MediaContext);
  const {postLogin} = useAuth();
  const navigate = useNavigate();

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async () => {
    try {
      const result = await postLogin(inputs);
      console.log('doLogin ~ result:', result);
      localStorage.setItem('userToken', result.token);
      setUser(result.user);
      navigate('/home');
    } catch (error) {
      console.error('doLogin ~ error:', error.message);
    }
  };

  const {inputs, handleSubmit, handleInputChange} = useForm(
    doLogin,
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
        <Button fullWidth sx={{mt: 2}} variant="contained" type="submit">
          Login
        </Button>
      </form>
    </>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
