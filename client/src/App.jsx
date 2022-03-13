import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


const App = () => {
  const user = true
  return (
    
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Products">
          <ProductList />
        </Route>
        <Route path="/Product">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/register">
          <Register/>
          {/* {user ? <Redirect to="/" /> : <Register />} */}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;