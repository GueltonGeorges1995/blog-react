import { Link, useHistory } from "react-router-dom";
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Signup = () => {

    const [inputEmailValue, setInputEmailValue] = useState('');
    const [inputPasswordValue, setPasswordValue] = useState('');
    const [inputPasswordConfirmationValue, setInputPasswordConfirmationValue] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const history = useHistory();

   
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (inputPasswordValue !== inputPasswordConfirmationValue) {
            return setError('Password do not match');
        }

        try {
            setError('');
            setLoading(true);
            await signup(inputEmailValue, inputPasswordValue);
            history.push('/');
        } 
        catch (error) {
            setError(error.message);
            console.log(error);
        }
        finally {
            setLoading(false);
        }
        
    };

    return (
        <div className="create">
            <h2>Sign Up Page</h2>
            {error && <p> {error} </p>}
            <form onSubmit={handleSubmit} >
                <label >Email</label>
                <input type="email" onChange={(e)=>setInputEmailValue(e.target.value)} required />
                <label >Password</label>
                <input type="password" onChange={(e)=>setPasswordValue(e.target.value)} required/>
                <label >Confirmation Password</label>
                <input type="password" onChange={(e)=> setInputPasswordConfirmationValue(e.target.value)} required/>
                <button disabled={loading}>Sign Up</button>
            </form>
            <p>Already have an account ? <Link to="/login">Log in</Link></p>
        </div>
    );
};

export default Signup;