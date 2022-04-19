import './App.css';
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import ProductDetail from './pages/Product-detail/ProductDetail';
import ProductsList from './pages/ProductListing/ProductsList';
import Login from '../src/components/Authentication/Login/Login';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import Signin from '../src/components/Authentication/SignUp/Signin';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className='App'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductsList />}/>
          <Route path='/products/:id' element={<ProductDetail />}/>
          
          <Route path='/cart' element={<Cart />}/>

          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signin />}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
