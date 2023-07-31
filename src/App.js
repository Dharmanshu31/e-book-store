import logo from '../src/assets/logo.svg'
import './App.css';
import { User } from './User';
import ReactDOM, { BrowserRouter, NavLink, Route, Router, Routes } from 'react-router-dom';
import {Array} from './Array'

function App() {
  return (
    <BrowserRouter>
    <header>
      <nav className='navigation'>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/book">Book</NavLink></li>
        </ul>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<User text={{name:"THIS IS E-BOOK STORE",info:"Book is over best friends"}} data={"Enjoy the life with book"}/>}/>
      <Route path="/book" element={<Array/>}/>
    </Routes>
    <img src={logo}/>
    </BrowserRouter>
  );
}

export default App;
