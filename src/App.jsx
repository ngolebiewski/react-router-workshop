import { Route, Routes, Link } from "react-router-dom";
import Blue from "./components/Blue.jsx";
import Red from "./components/Red.jsx";
import Home from "./components/Home.jsx";

const App = () => {

  return (
    <>
      <div id="container">
        <div id="navbar">
         <Link to='/'>home</Link>
          <Link to='/blue'>blue</Link>
          <Link to='/red'>red</Link>
        </div>

        <div id="main-section">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/red' element={<Red />} />
            <Route path='/blue' element={<Blue />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
