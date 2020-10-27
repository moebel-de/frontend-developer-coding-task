import React from "react";
import logo from "./logo.svg";
import { CityInput } from './Components';

function App() {
  return (
    <div>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <strong>whatweather?</strong>
      </header>
      <main>
        <CityInput />
      </main>
    </div>
  );
}

export default App;
