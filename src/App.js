import logo from '../src/assets/logo.svg'
import './App.css';
import { User } from './User';
import ReactDOM, { BrowserRouter, NavLink, Route, Router, Routes } from 'react-router-dom';
import {Array} from './Array'
import { ThemeProvider, createTheme } from '@material-ui/core';
import { Cart } from './Cart';
import { Demotab } from './Demotab';

function App() {
  const theam=createTheme(
    {
      palette:{
        primary:{
          main:"#d32f2f"
        },
        secondary:{
          main:"#7CFC00"
        }
      }
    }
  )
  return (
    <BrowserRouter>
    <ThemeProvider theme={theam}>
    <header>
      <nav className='navigation'>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/book">Book</NavLink></li>
          <li><NavLink to="/cart">Cart</NavLink></li>
          <li><NavLink to="/demotab">Tabs</NavLink></li>
        </ul>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<User text={{name:"THIS IS E-BOOK STORE",info:"Book is over best friends"}} data={"Enjoy the life with book"}/>}/>
      <Route path="/book" element={<Array/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/demotab" element={<Demotab/>}/>
    </Routes>
    <img className='webimg' src={logo}/>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
