import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import loginbg from '../assets/loginbg.jpg';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { showId } = useParams();

  useEffect(() => {
    const storedName = JSON.parse(localStorage.getItem('name'));
    const storedEmail = JSON.parse(localStorage.getItem('email'));
    if (storedName) {
      setName(storedName);
    }
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    localStorage.setItem('name', JSON.stringify(newName));
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    localStorage.setItem('email', JSON.stringify(newEmail));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    setName('');
    setEmail('');
    // Redirect to show details page
    navigate(`/shows/${showId}`);
  };

  return (
    <div className='form-body'>
      <img src={loginbg} alt='Background' className='form-img' />
      <div className='form-container'>
        <h1 className='form-title'>Booking Form</h1>
        <form onSubmit={handleSubmit} className='form-contents'>
          <div className="form-group">
            <label htmlFor="name">NAME:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              onChange={handleNameChange}
              value={name}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">EMAIL:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              onChange={handleEmailChange}
              value={email}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="showName">SHOW ID:</label>
            <input
              type="text"
              id="showName"
              className="form-control"
              value={showId}
              disabled
            />
          </div>
          <button type="submit" className="btn form-btn">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
