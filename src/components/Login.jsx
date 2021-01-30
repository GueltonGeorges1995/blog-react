import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {

    const [inputEmailValue, setInputEmailValue] = useState('');
    const [inputPasswordValue, setInputPasswordValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { login } = useAuth();
    const history = useHistory();
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(inputEmailValue, inputPasswordValue);
            history.push('/');
        } 
        catch (error) {
            setError(error.message);
        }
        finally {
            setLoading(false);
        }
        
    };

    return (
        <div className="create">
            <h2>Log In Page</h2>
            {error && <p> {error} </p>}
            <form onSubmit={handleSubmit}>
                <label >Email</label>
                <input type="email" onChange={(e)=>setInputEmailValue(e.target.value)}  />
                <label >Password</label>
                <div>
                    <input type="password" onChange={(e)=>setInputPasswordValue(e.target.value)}  />
                    
                </div>
               
                <button disabled={loading}>Log In</button>
            </form>
            <p>Need an account ? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
};

export default Login;