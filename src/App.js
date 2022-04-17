import Home from './pages/Home';
import ProductDetail from './pages/Product-detail/ProductDetail';
import ProductsList from './pages/ProductListing/ProductsList';
import Login from './pages/Login';
import './App.css';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <div className='navbar'>
        <Navbar/>
      </div>
      <main>
        {/* <Home /> */}
        {/* <ProductsList /> */}
        {/* <ProductDetail/> */}
        <Login/>
      </main>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
