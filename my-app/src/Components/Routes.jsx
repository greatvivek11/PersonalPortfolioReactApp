import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Blog = lazy(() => import('./Blog'));
const Project = lazy(() => import('./Projects'));
const About = lazy(() => import('./About'));
const Tasks = lazy(() => import('../Tasks/Tasks'));
const ChangeLog = lazy(() => import('./ChangeLog'));
const Home = lazy(() => import('./Home'));


const Routes = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/projects" component={Project} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/changeLog" component={ChangeLog} />
            <Route path="/" component={Home} />
        </Switch>
    </Suspense>

);

export default Routes;
