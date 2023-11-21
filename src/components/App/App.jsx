import { useState } from 'react';
import axios from 'axios';

import 'semantic-ui-css/semantic.min.css';
import logo from '../../assets/logospotify.jpg';

import './App.scss';
import SearchBar from '../SearchBar/SearchBar';
import Message from '../Message/Message';
import ReposResults from '../ReposResults/ReposResults';

function App() {
  return (
    <div className="App">
      <header className="logo">
        <img src={logo} alt="" />
      </header>
      <SearchBar />
      <Message />
      <ReposResults />
    </div>
  );
}

export default App;
