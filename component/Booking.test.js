// Booking.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Booking from './Booking';
import { BrowserRouter as Router } from 'react-router-dom';

// Mocking the API functions (You can adjust these mocks based on your use case)
jest.mock('./BookingAPI', () => ({
  fetchAPI: jest.fn(() => ['17:00', '17:30 ', '18:00 ']),
  submitAPI: jest.fn(() => true),
}));

describe('Booking form', () => {
  test('should submit the form with valid data', () => {
        render(
          <Router>
            <Booking />
          </Router>
        );
    // Fill in the form fields
    const nameInput = screen.getByLabelText('Name:');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    const emailInput = screen.getByLabelText('Email:');
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });

    const guestsInput = screen.getByLabelText('Guests:');
    fireEvent.change(guestsInput, { target: { value: '5' } });

    const dateInput = screen.getByLabelText('Date:');
    fireEvent.change(dateInput, { target: { value: '2023-07-25' } });

    const timeSelect = screen.getByLabelText('Time:');
    fireEvent.change(timeSelect, { target: { value: '09:00 AM' } });

    // Submit the form
    const submitButton = screen.getByText('submit');
    fireEvent.click(submitButton);

    // Check if the form submission is successful
    expect(screen.getByText('Reservation submitted!')).toBeInTheDocument();
    expect(screen.getByText('Name: John Doe')).toBeInTheDocument();
    expect(screen.getByText('Email: john.doe@example.com')).toBeInTheDocument();
    expect(screen.getByText('Date: 2023-07-25')).toBeInTheDocument();
    expect(screen.getByText('Time: 09:00 AM')).toBeInTheDocument();

  });

  test('should show an error message when the form is submitted with invalid data', () => {
    render( <Router>
        <Booking />
      </Router>);
    // Fill in the form fields with invalid data
    const nameInput = screen.getByLabelText('Name:');
    fireEvent.change(nameInput, { target: { value: 'Jo' } }); // Invalid name

    const emailInput = screen.getByLabelText('Email:');
    fireEvent.change(emailInput, { target: { value: 'invalid_email' } }); // Invalid email

    // Submit the form
    const submitButton = screen.getByText('submit');
    fireEvent.click(submitButton);

    // Check if the error message is displayed
    expect(screen.getByText('Error submitting the form.')).toBeInTheDocument();
expect(submitButton).toHaveAttribute('disabled')

  });
});
