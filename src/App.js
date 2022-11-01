import './App.css';
import {Routes,Route} from "react-router-dom";
import Zocket from './components/Zocket';
import Home from './components/Home';
import Campaign from './components/Campaign';
import Product from './components/Product';
import Customer from './components/Customer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={ <Zocket/> } exact></Route>
          <Route path="/home" element={ <Home/> } exact></Route>
          <Route path="/campaign" element={ <Campaign/> } exact></Route>
          <Route path="/products" element={ <Product/> } exact></Route>
          <Route path="/customers" element={ <Customer/> } exact></Route>
        </Routes>

      </div>
    </div>
  );
}

export default App;
