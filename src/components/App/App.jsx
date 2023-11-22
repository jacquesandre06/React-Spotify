import { useState, useEffect } from 'react';
import axios from 'axios';

import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import logo from '../../assets/logospotify.jpg';

import './App.scss';
import SearchBar from '../SearchBar/SearchBar';
import Message from '../Message/Message';
import ReposResults from '../ReposResults/ReposResults';

function App() {
  const CLIENT_ID = 'c409d20cdce94e7e8e90ac043a13d150';
  const REDIRECT_URI = 'http://localhost:5173';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';

  const [token, setToken] = useState('');

  useEffect(() => {
    const { hash } = window.location;
    // eslint-disable-next-line @typescript-eslint/no-shadow
    let token = window.localStorage.getItem('token');

    if (hash && hash) {
      // eslint-disable-next-line prefer-destructuring
      token = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1];
      window.location.hash = '';
      window.localStorage.setItem('token', token);
    }
    setToken(token);
  }, []);

  const logout = () => {
    setToken('');
    window.localStorage.removeItem('token');
  };

  return (
    <div className="App">
      <header className="logo">
        <img src={logo} alt="" />
        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            <Button color="brown">Connexion</Button>
          </a>
        ) : (
          <Button color="brown" onClick={logout}>
            Logout
          </Button>
        )}
      </header>

      <SearchBar />
      <Message />
      <ReposResults />
    </div>
  );
}

export default App;
