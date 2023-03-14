import logo from './logo.svg';
import './App.css';
import Homenav from './Components/Main/HomeNav';
import Routers from './Components/Main/Routers';
import { useState } from "react";
import context from './Components/MyContext/Context';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <context.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Homenav/>
      <Routers/>
    </context.Provider>
    </div>
  );
}

export default App;
