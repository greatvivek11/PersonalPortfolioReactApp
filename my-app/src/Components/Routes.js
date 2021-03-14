import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Blog = lazy(() => import('../Components/Blog'));
const Project = lazy(() => import('../Components/Projects'));
const About = lazy(() => import('../Components/About'));
const Tasks = lazy(() => import('../Tasks/Tasks'));
const ChangeLog = lazy(() => import('../Components/ChangeLog'));
const Home = lazy(() => import('../Components/Home'));


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
