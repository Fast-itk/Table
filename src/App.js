import Layout from './hoc/Layout/Layout';
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import UserState from './context/users/UsersState';

function App() {
  return (
    <UserState>
     <BrowserRouter>
        <Layout>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/:id" component={Home} ></Route>
              <Route exact path="/"><Redirect to="/1" /></Route>
            </Switch>
        </Layout>
      </BrowserRouter> 
    </UserState>
    
  );
}

export default App;
