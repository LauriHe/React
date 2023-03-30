import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {MediaContext} from '../contexts/mediaContext';
import {useAuth} from '../hooks/ApiHooks';
import useForm from '../hooks/FormHooks';

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
        <input
          name="username"
          placeholder="Username"
          onChange={handleInputChange}
          value={inputs.username}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleInputChange}
          value={inputs.password}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
