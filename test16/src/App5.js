/**
 * 리액트 라우터를 이용한 link 주소 이동
 */

import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Main from './router5/Main';
import Products from './router5/Products';
import NotProduct from './router5/NotProduct';

import ProducstDetail from './router5/ProductDetail';



function App() {
  return (
    <div>
      <ul>
        <li><Link to='/'></Link>Home</li>
        <li><Link to='/products'>Products</Link></li>
      </ul>
      <Switch>
        <Route path={['/', '/main']} exact><Main/>
        </Route>
        <Route path='/products' exact><Products/>
        </Route>
        <Route path='/products/:productID' exact><ProducstDetail /><Products />
          <Route path={'*'}><NotProduct/></Route> 
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
