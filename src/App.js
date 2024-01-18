/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing";
import BuySell from "./Pages/BUYSELL";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Landing />}
          />
          <Route
            path='/buysell'
            element={<BuySell />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
