import React, {useState} from 'react';
import useHistory from 'react-dom';

const Step3 = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const history = useHistory();
    
    const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/result');
    };

    return (
    <div>
        <h2>Step 3</h2>
        <form onSubmit={handleSubmit}>
        <label>Password:</label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password:</label>
        <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
        </form>
        </div>
    );
};

export default Step3;