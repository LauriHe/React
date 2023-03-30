import './App.css';
import Home from './views/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './views/Layout';
import Single from './views/Single';
import Profile from './views/Profile';
import Login from './views/Login';
import {MediaProvider} from './contexts/mediaContext';
import Logout from './views/Logout';
import {ThemeProvider, createTheme} from '@mui/material/styles';

console.log('base', import.meta.env.BASE_URL);

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <MediaProvider>
        <ThemeProvider theme={darkTheme}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/single" element={<Single />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/logout" element={<Logout />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </MediaProvider>
    </Router>
  );
};

export default App;
