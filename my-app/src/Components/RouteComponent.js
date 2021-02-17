import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Blog from './Blog';
import Project from './Projects';
import NavbarComponent from './NavbarComponent';


const Routes = () => (
    <Switch>
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/projects" component={Project} />
            <Route path="/" component={Home} />
    </Switch>
);

export default Routes;
