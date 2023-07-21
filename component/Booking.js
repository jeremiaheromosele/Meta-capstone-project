import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from './BookingAPI';
import { validateEmail } from "./utils";

const Booking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);
  const navigate = useNavigate();
  const [guests,setGuests] = useState('0');

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]; // Get today's date
    fetchData(today);
  }, []);

  const fetchData = (selectedDate) => {
    const times = fetchAPI(selectedDate);
    setAvailableTimes(times);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    fetchData(event.target.value); // Fetch available times for the selected date
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };
  const handleGugestChange = (event) => {
    setGuests(event.target.value);
  };

  const submitForm = () => {
    // Perform reservation submission logic here
    console.log('Reservation submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Date:', date);
    console.log('Time:', time);
    // Call the submitAPI function to submit the form data
    const formData = {
      name: name,
      email: email,
      date: date,
      time: time,
      guests:guests
    };
    const submissionResult = submitAPI(formData);
    if (submissionResult) {
      // Navigate to the booking confirmation page
      navigate('/Confirmed');
    } else {
      console.log('Error submitting the form.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm();
    // Reset form fields
    setName('');
    setEmail('');
    setDate('');
    setTime('');
    setGuests('0');
  };
  const getIsFormValid = () => {
    return (
       name &&
      validateEmail(email)
    );
   };

  return (
    <section className="booking-section" id='booking-section'>
     <div className="card" style={
      {"background": "transparent","backdrop-filter":"blur(20px)"}
     }>
      <div className="card-header">
        <h1>Make a Reservation</h1>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input required type="text" value={name} onChange={handleNameChange} minLength={5} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} required onChange={handleEmailChange} minLength={6} maxLength={200}/>
          </label>
          <br />
          <label>
            Guests:
            <input type="number" value={guests} required onChange={handleGugestChange} min={2} max={10}/>
          </label>
          <br />
          <label>
            Ocassion:
            <select required>
              <option value='' disabled selected hidden>Choose an option...</option>
              <option value="Birthday Party">Birthday Party</option>
              <option value="Wedding Ceremony">Wedding Ceremony</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </label>
          <br />
          <label>
            Date:
            <input required type="date" value={date} onChange={handleDateChange} />
          </label>
          <br />
          <label required>
            Time:
            <select value={time} onChange={handleTimeChange}>
              <option value="">Select a time</option>
              {availableTimes.map((timeOption) => (
                <option key={timeOption} value={timeOption}>
                  {timeOption}
                </option>
              ))}
            </select>
          </label>
          <br />
          <button  type="submit" disabled={!getIsFormValid()}>submit</button>
        </form>
      </div>
     </div>
  </section>
);
};


export default Booking;
