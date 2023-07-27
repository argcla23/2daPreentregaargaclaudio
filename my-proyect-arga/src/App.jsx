import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


import Detail from './componentes/detalledelproducto';
import itemlistcontainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';

import './App.css';


function App() {


  return (
    <>
      <BrowserRouter>
      <NavBar/>
    
      <Routes>
        <Route 
        exact
        path='/'
        element={<itemlistcontainer/>}
        />
        <Route 
        exact
        path='/detalles'
        element={<Detail/>}
        />
        
        
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
