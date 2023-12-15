import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Pages/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Firebase from "./Components/Firebase";
import Novedades from "./Components/Novedades"
import Catalogo from "./Pages/Catalogo";
function App() {
  return (
      <div className="app">
          <Firebase/>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={ <Main/> } />
                  <Route path="catalogo" element={ <Catalogo/> } />
                  <Route path="novedades" element={ <Novedades/> } />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
