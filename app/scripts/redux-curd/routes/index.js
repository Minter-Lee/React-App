import React from 'react';
import {Router, Route} from 'react-router-dom';
import Home from '../views/Home';
import Detail from '../views/Detail';
import Frame from '../layouts/Frame';
import Nav from '../layouts/Nav';


const routes = (history) => (
    <Router history={history}>
        <Frame>
            <Route exact path='/'  component={Home} />
            <Route path='/detail/:id' component={Detail} />
        </Frame>
    </Router>
);
export default routes;