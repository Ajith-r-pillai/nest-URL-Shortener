
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='home' element={<Home/>}></Route>
     </Routes>
     
     
    </div>
  );
}

export default App;
