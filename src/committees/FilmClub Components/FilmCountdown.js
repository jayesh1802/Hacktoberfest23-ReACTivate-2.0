// import './FilmEvents.css'
// import React, { useState, useEffect } from 'react';

// function FilmCountdown({ targetDate }) {
//   const calculateTimeRemaining = () => {
//     const now = new Date().getTime();
//     const targetTime = new Date(targetDate).getTime();
//     const timeRemaining = targetTime - now;

//     if (timeRemaining <= 0) {
//       clearInterval(intervalId);
//     }

//     return timeRemaining;
//   };

//   const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

//   const intervalId = setInterval(() => {
//     const newTimeRemaining = calculateTimeRemaining();
//     setTimeRemaining(newTimeRemaining);
//   }, 1000);

//   useEffect(() => {
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [intervalId]);

//   const seconds = Math.floor((timeRemaining / 1000) % 60);
//   const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
//   const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
//   const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

//   return (
//     <div>
//       {timeRemaining > 0 ? (
//         <div>
//           <h4 className="time-heading">CountDown</h4>
//           <div className="countdown">{days}d : {hours}h : {minutes}m : {seconds}s</div>
//         </div>
//       ) : (
//         <div>Countdown Expired</div>
//       )}
//     </div>
//   );
// }

// export default FilmCountdown;
