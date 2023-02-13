import './App.css';
import Home from './Vistas/Home/Home.jsx';
import Form from './Components/Form/Form.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import Landing from './Vistas/Landing/Landing';
import GameDetail from './Vistas/GameDetail/GameDetail';
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
      <Route path='/game/:id'>
        <GameDetail/>
      </Route>
    </div>
  )
}

export default App;
