import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Catalogo from './components/Catalogo';
import DetalleProducto from './components/DetalleProducto';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Catalogo} />
          <Route path="/producto/:id" component={DetalleProducto} />
        </Switch>
        <Cart />
      </div>
    </Router>
  );
}

export default App;
