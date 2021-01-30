import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';



const Dashboard = () => {

    const [error, setError] = useState('');

    const { currentUser, logout } = useAuth();

    const history = useHistory();

    const handleLogOut = async () => {
        try {
            await logout();
            history.push('/login');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            {error && <p> {error} </p>}
            <div className="mt-20">
                <strong>Email: {currentUser.email} </strong>
            </div>
            <div className="mt-20">
                <div>
                    <button onClick={handleLogOut}>Log Out</button>
                </div>
                <div className="mt-20">
                    <Link to="/update-profile">Update your profile</Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;