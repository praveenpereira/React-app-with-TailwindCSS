import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Shop from './Shop';
import Blog from './Blog';
import Contact from './Contact';
import Home from './Home';

const Main=()=>(

    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route   path="/shop" component={Shop}></Route>
        <Route   path="/blog" component={Blog}/>
        <Route   path="/contact" component={Contact}/>
    </Switch>
 
)
export default Main;