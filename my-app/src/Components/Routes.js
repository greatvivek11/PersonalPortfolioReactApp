import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Blog from './Blog';
import Project from './Projects';
import Tasks from '../Tasks/Tasks';
import ChangeLog from './ChangeLog';


const Routes = () => (
    <Switch>
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/projects" component={Project} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/changeLog" component={ChangeLog} />
            <Route path="/" component={Home} />
    </Switch>
);

export default Routes;
