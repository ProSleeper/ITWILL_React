
/**
 * 리액트 라우터를 이용한 link 주소 이동
 */



import './App.css';
import Home from './component/Home';
import Sub from './component/Sub';
import About from './component/About';
import {Link, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
      <ul>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>about</Link></li>
        <li><Link to='/sub'>Sub</Link></li>

      </ul>
      <Switch>
        <Route path ='/' component={Home} exact/>
        <Route path ='/about' component={About}/>
        <Route path ='/about' component={Sub}/>
        <Route path='/sub' component={Sub} />
        </Switch>
    </div>
  );
}

export default App;
