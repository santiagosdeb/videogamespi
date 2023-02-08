import './App.css';
import Home from './Components/Home/Home.jsx';
import Form from './Components/Form/Form.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import Landing from './Components/Landing/Landing';
import { Route } from 'react-router-dom' 


function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/'>
        <Landing/>
      </Route>
      <Route path='/home'>
        <Home/>
      </Route>
      <Route path='/post'>
        <Form/>
      </Route>
    </div>
  );
}

export default App;
