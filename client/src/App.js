import './App.css';

import React, { Fragment }from "react";

import NavBar from "./components/Navbar"
import Main from './components/Main'

function App() {
  return (
    <Fragment>
    <div className="App">
      <NavBar />
    </div>
      <Main />
    </Fragment>
  );
}

export default App;
