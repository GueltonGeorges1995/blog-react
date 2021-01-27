import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
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
                            <Route path="/create">
                                <Create />
                            </Route>
                            <Route path="/blogs/:id">
                                <BlogDetails />
                            </Route>
                            <Route path="/login">
                                <Login />
                            </Route>
                            <Route path="/signup">
                                <Signup />
                            </Route>
                            <Route path="/dashboard">
                                <Dashboard />
                            </Route>
                            <Route>
                                <NotFound path="*" />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </AuthProvider>
    );
}
export default App;