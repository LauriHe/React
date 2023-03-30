import {useContext, useEffect} from 'react';
import {useUser} from '../hooks/ApiHooks';
import {Link, Outlet, useNavigate} from 'react-router-dom';
import {MediaContext} from '../contexts/mediaContext';
import {createTheme, ThemeProvider} from '@mui/material';
import themeOptions from '../Theme/themeOptions';

const Layout = () => {
  const {user, setUser} = useContext(MediaContext);
  const {getUserByToken} = useUser();
  const navigate = useNavigate();

  const getUserInfo = async () => {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      const userData = await getUserByToken(userToken);
      if (userData) {
        setUser(userData);
        navigate('/home');
        return;
      }
    }
    navigate('/');
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/">Login</Link>
              </li>
            )}
          </ul>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
