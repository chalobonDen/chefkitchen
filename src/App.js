import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './page/Home';
import Menu from './page/Menu';
import Booking from './page/Booking';
import Contact from './page/Contact';
import Detail from './components/Detail';
import Cart from './page/Cart';
import Cartcopy from './page/Cartcopy';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/booking" component={Booking} />
          <Route path="/contact" component={Contact} />
          <Route path="/detail" component={Detail} />
          <Route path="/cart" component={Cart} />
          <Route path="/Cartcopy" component={Cartcopy} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
