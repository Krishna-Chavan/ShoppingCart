import logo from './logo.svg';
import './App.css';
import ProductList from './components/product/ProductList';
import Header from './components/header/Header';
import OfferList from './components/offerList/OfferList';
import Slider from './components/slidings/Slider';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Clothings from './components/clothings/Clothings';
import WomensCloth from './components/womensClothing/WomensCloth';
import Jewellers from './components/jewellers/Jewellers';
import Electronics from './components/electronics/Electronics';
import Login from './components/login/Login';
import Furniture from './components/furnitures/Furniture';
import DealsOfDayList from './components/dealsOfDay/DealsOfDayList';
import CountDownTimer from './components/timer/CountDownTimer';
import Footer from './components/footer/Footer';
function App() {
 
  return (
    <Router>
      <div>
        <Header  />
        {/* <OfferList />
        <Slider /> */}
        {/* <Route exact path="/" component={Header} /> */}
        <Route exact path="/" component={OfferList} />
        <Route exact path="/" component={Slider} />
        <Route exact path="/" component={DealsOfDayList} />
        <Route exact path="/mensclothings" component={Clothings} />
        <Route exact path="/womensclothings" component={WomensCloth} />
        <Route exact path="/products" component={ProductList} />
        <Route exact path="/jewelry" component={Jewellers} />
        <Route exact path="/electronics" component={Electronics} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/furnitures" component={Furniture} />
        <Route exact path="/timer" component={CountDownTimer} />
        {/* <ProductList /> */}
        {/* <ProductList /> */}

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
