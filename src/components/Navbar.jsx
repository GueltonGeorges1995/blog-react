import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className='navbar'>
            <h1>Ewi Blog</h1>
            <div className="links">
                <Link to="/" >Home</Link>
                <Link to="/create" >New Blog</Link>
                <Link to="/login" >Log In</Link>
                <Link to="/signup" >Sign Up</Link>
                <Link to="/dashboard" >Dashboard</Link>
            </div>
        </nav>
    );
};

export default Navbar;