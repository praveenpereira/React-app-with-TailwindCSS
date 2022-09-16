import React from 'react';
import './styles/tailwind.css';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Navbar from './nav/Navbar';
import Main from './nav/Main';

const App =()=>{
 return(
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
            <Main/>
        </div>
    </div>
    )
}
export default App;