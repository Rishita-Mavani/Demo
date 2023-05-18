import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProductList from './Pages/ProductList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/login' Component={Login} />
            <Route path='/register' Component={Register} />
            <Route path='/product-list' Component={ProductList} />
            <Route path='/' Component={Login} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
