import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import ProductList from './containers/ProductList';
import ProductDetail from './containers/ProductDetail';

const App = ()=> {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' exact element={<ProductList/>}/>
          <Route path='/product/:productid' exact element={<ProductDetail/>}/>
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
