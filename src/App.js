import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader'
import Login from './components/Login/Login';
import Home from './components/Pages/Home';
import Todo from './components/Pages/Todo/Todo';
import FormField from './components/Forms/FormField';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
    <section>
      <BrandHeader></BrandHeader>
      <Switch>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/todos" exact>
          <Todo />
        </Route>
        <Route path="/login" exact>
            <Login></Login>
        </Route>
      </Switch>
    </section>
  </Router>
  );
}

export default App;
