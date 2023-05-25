import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const {
    name, 
    email,
    phone,
    bootcamp,
    tanggalLahir,
    tempatLahir,
    alamat,
  } = location.state;

  return (
    <div>
      <h2>Result</h2>
      <p>Welcome! Here are the details you provided:</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Bootcamp: {bootcamp}</p>
      <p>Date of Birth: {tanggalLahir}</p>
      <p>Place of Birth: {tempatLahir}</p>
      <p>Address: {alamat}</p>
      <button type="button" onClick={() => location.goBack()}>Go Back</button>
    </div>
  );
};

export default Result;