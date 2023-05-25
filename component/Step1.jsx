import React, { useState } from 'react';
import useHistory from 'react-dom';

const Step1 = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [bootcamp, setBootcamp] = useState('');
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        history.push('/step2');
    }
    return (
    <div>
        <h2> Step 1</h2>
        <form onSubmit={handleSubmit}>
            <label>Name :</label>
            <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <label>Email :</label>
            <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <label>Phone :</label>
            <input 
            type="tel" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />
            <label>Bootcamp :</label>
            <div>
                <label>
                    <input 
                    type="radio" 
                    value="UI/UX" 
                    checked={bootcamp === 'UI/UX'} 
                    onChange={(e) => setBootcamp(e.target.value)}
                    />
                    UI/UX
                </label>
                <label>
                    <input 
                    type="radio" 
                    value="Backend Engineer" 
                    checked={bootcamp === 'BackendEngineer'} 
                    onChange={(e) => setBootcamp(e.target.value)}
                    />
                    Backend Engineer
                </label>
                <label>
                    <input 
                    type="radio" 
                    value="Frontend Engineer" 
                    checked={bootcamp === 'Frontend Engineer'} 
                    onChange={(e) => setBootcamp(e.target.value)}
                    />
                    Frontend Engineer
                </label>
                <label>
                    <input 
                    type="radio" 
                    value="Digital Marketing" 
                    checked={bootcamp === 'Digital Marketing'}  
                    onChange={(e) => setBootcamp(e.target.value)}
                    />
                    Digital Marketing
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    );
};

export default Step1;