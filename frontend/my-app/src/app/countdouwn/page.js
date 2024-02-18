'use client'
import React, { useState, useEffect } from 'react';
import CountdownTimer from '../countdouwn/CountdownTimer';
import './countdown.css';

const calculateTimeUntil = (endDate) => {
  const now = new Date();
  const difference = new Date(endDate) - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

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

const calculatePercentage = (remainingTime) => {
  const totalSeconds = (remainingTime.days * 24 * 60 * 60) + (remainingTime.hours * 60 * 60) + (remainingTime.minutes * 60) + remainingTime.seconds;
  const totalTime = 60 * 60 * 24; // Total seconds in a day
  return (totalTime - totalSeconds) / totalTime; // Percentage of time elapsed
};

const Countdown = () => {
  const trips = [
    { destination: 'Mars', endDate: '2024-03-15T12:00:00', price: '$10,000,000' },
    { destination: 'Jupiter', endDate: '2024-06-20T09:00:00', price: '$20,000,000' },
    { destination: 'Saturn', endDate: '2026-09-10T15:30:00', price: '$30,000,000' },
    { destination: 'Neptune', endDate: '2027-12-25T18:45:00', price: '$40,000,000' },
    { destination: 'Uranus', endDate: '2028-08-31T10:15:00', price: '$50,000,000' },
    { destination: 'Pluto', endDate: '2029-10-01T20:00:00', price: '$60,000,000' },
    { destination: 'Venus', endDate: '2030-05-12T14:30:00', price: '$70,000,000' }
  ];

  const [remainingTime, setRemainingTime] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedRemainingTime = {};
      trips.forEach((trip) => {
        updatedRemainingTime[trip.destination] = calculateTimeUntil(trip.endDate);
      });
      setRemainingTime(updatedRemainingTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <h1>Upcoming Trips Countdown</h1>
      {trips.map((trip) => (
        <div className="trip-card" key={trip.destination}>
          <h2>{trip.destination}</h2>
          <div className="countdown-container">
            <div className="countdown-circle">
              <CountdownTimer
                duration={(remainingTime[trip.destination] && calculatePercentage(remainingTime[trip.destination])) * 60}
                remainingTime={remainingTime[trip.destination]?.days}
                unit="Days"
              />
            </div>
            <div className="countdown-circle">
              <CountdownTimer
                duration={(remainingTime[trip.destination] && calculatePercentage(remainingTime[trip.destination])) * 60}
                remainingTime={remainingTime[trip.destination]?.hours}
                unit="Hours"
              />
            </div>
            <div className="countdown-circle">
              <CountdownTimer
                duration={(remainingTime[trip.destination] && calculatePercentage(remainingTime[trip.destination])) * 60}
                remainingTime={remainingTime[trip.destination]?.minutes}
                unit="Minutes"
              />  
            </div>
            <div className="countdown-circle">
              <CountdownTimer
                duration={(remainingTime[trip.destination] && calculatePercentage(remainingTime[trip.destination])) * 60}
                remainingTime={remainingTime[trip.destination]?.seconds}
                unit="Seconds"
              />
            </div>
          </div>
          {remainingTime[trip.destination]?.days === 0 && remainingTime[trip.destination]?.hours === 0 &&
            remainingTime[trip.destination]?.minutes === 0 && remainingTime[trip.destination]?.seconds === 0 && (
              <p>The time for this trip has come!</p>
          )}
          <hr />
          <div className="actions">
            <button className="book-now-btn"><a href='/Book' className='books'>Book Now</a></button>
            <div className="trip-price">{trip.price}</div>
          </div>
        </div>
      ))}
       <div className="background-video">
  <video autoPlay loop muted playsInline>
    <source src="/b.mp4" type="video/mp4" />    
  </video>
</div>
    </div>
  );
};

export default Countdown;
