import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { AuthProvider } from '../context/AuthContext';

const App = () => {
    return(
        <AuthProvider>
            <Router>
                <div className='App'>
                    <Navbar />
                    <div className='content'>
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <PrivateRoute path="/create" component={Create} />
                            <Route path="/blogs/:id">
                                <BlogDetails />
                            </Route>
                            <PublicRoute path="/login" component={Login} />
                            <PublicRoute path="/signup" component={Signup} />
                            <PrivateRoute path="/dashboard" component={Dashboard} />
                            <Route>
                                <NotFound path="/404" />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </AuthProvider>
    );
}
export default App;