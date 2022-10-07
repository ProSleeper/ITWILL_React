/**
 * 리액트 라우터를 이용한 link 주소 이동
 */

import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Main from "./router4/Main";
import NotMember from './router4/NotMember';
import MemberDetail from './router4/MemberDetail';

function App() {
  return (
    <div>
      <Switch>
        <Route path={['/', '/main']} exact>
          <Main/>
        </Route>
        <Route path='/member/:memberID' exact>
          <MemberDetail/>
        </Route>
        <Route path='/*'>
          <NotMember/>
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
