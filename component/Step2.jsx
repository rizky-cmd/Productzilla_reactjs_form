import React, { useState } from 'react';
import useHistory from 'react-dom';

const Step2 = () => {
    const [tanggalLahir, setTanggalLahir] = useState('');
    const [tempatLahir, setTempatLahir] = useState('');
    const [alamat, setAlamat] = useState('');
    const history = useHistory();

const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/step3');
};

return (
    <div>
    <h2>Step 2</h2>
    <form onSubmit={handleSubmit}>
        <label>Tanggal Lahir:</label>
        <input
        type="date"
        value={tanggalLahir}
        onChange={(e) => setTanggalLahir(e.target.value)}
        />

        <label>Tempat Lahir:</label>
        <input
        type="text"
        value={tempatLahir}
        onChange={(e) => setTempatLahir(e.target.value)}
        />

        <label>Alamat Lengkap:</label>
        <textarea
        value={alamat}
        onChange={(e) => setAlamat(e.target.value)}
        ></textarea>

        <button type="submit">Next</button>
    </form>
    </div>
);
};

export default Step2;
