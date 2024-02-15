// pages/countdown.js
'use client'
import React, { useState, useEffect } from 'react';
import './countdown.css';

// Function to calculate remaining time until a specific date
const calculateTimeUntil = (endDate) => {
  const now = new Date();
  const difference = new Date(endDate) - now;

  if (difference <= 0) {
    // If the end date has passed, return zeros
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  // Calculate remaining days, hours, minutes, and seconds
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days,
    hours,  
    minutes,
    seconds
  };
};

// Function to calculate the percentage of time passed
const calculatePercentage = (time) => {
  const totalSeconds = (time.days * 24 * 60 * 60) + (time.hours * 60 * 60) + (time.minutes * 60) + time.seconds;
  const totalSecondsInADay = 24 * 60 * 60;
  return ((totalSecondsInADay - totalSeconds) / totalSecondsInADay) * 100;
};

const Countdown = () => {
  // Define your list of trips with their destination and end date
  const trips = [
    { destination: 'Mars', endDate: '2024-03-15T12:00:00' },
    { destination: 'Jupiter', endDate: '2025-06-20T09:00:00' },
    { destination: 'Saturn', endDate: '2026-09-10T15:30:00' },
    { destination: 'Neptune', endDate: '2027-12-25T18:45:00' },
    { destination: 'Uranus', endDate: '2028-08-31T10:15:00' },
    { destination: 'Pluto', endDate: '2029-10-01T20:00:00' },
    { destination: 'Venus', endDate: '2030-05-12T14:30:00' }
  ];

  // Initialize state to hold the remaining time for each trip
  const [remainingTime, setRemainingTime] = useState({});

  // Function to update remaining time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate remaining time for each trip
      const updatedRemainingTime = {};
      trips.forEach((trip) => {
        updatedRemainingTime[trip.destination] = calculateTimeUntil(trip.endDate);
      });
      // Update state with new remaining time
      setRemainingTime(updatedRemainingTime);
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <h1>Upcoming Trips Countdown</h1>
      {trips.map((trip) => (
        <div className="trip-card" key={trip.destination}>
          <h2>{trip.destination}</h2>
          <p>
            Time until departure: {remainingTime[trip.destination]?.days} days,{' '}
            {remainingTime[trip.destination]?.hours} hours,{' '}
            {remainingTime[trip.destination]?.minutes} minutes,{' '}
            {remainingTime[trip.destination]?.seconds} seconds 
          </p>
          {remainingTime[trip.destination]?.days === 0 && remainingTime[trip.destination]?.hours === 0 &&
            remainingTime[trip.destination]?.minutes === 0 && remainingTime[trip.destination]?.seconds === 0 && (
              <p>The time for this trip has come!</p>
          )}
          <div className="countdown-bar" style={{ width: `${calculatePercentage(remainingTime[trip.destination])}%` }}></div>
          <hr /> {/* Add a line under each trip */}
        </div>
      ))}
    </div>
  );
};

export default Countdown;
