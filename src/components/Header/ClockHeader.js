import { useState, useEffect, useMemo } from "react";
import { format } from "date-fns";

const UpperClock = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const myDate = new Date();
      setClockState(format(myDate, "ppp"));
    }, 1000);
  }, [clockState]);

  return clockState;
};

const LowerClock = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const myDate = new Date();
      setClockState(format(myDate, "cccc',' yyyy MMMM d"));
    }, 1000);
  }, [clockState]);

  return clockState;
};

export default UpperClock;
export { LowerClock };

// function Clock() {
//   const [clockState, setClockState] = useState();

//   function refreshClock() {
//     const myDate = new Date();
//     setClockState(format(myDate, "cccc',' yyyy MMMM d"));
//   }
//   useEffect(() => {
//     const timerId = setInterval(refreshClock, 1000);
//     return function cleanup() {
//       clearInterval(timerId);
//     };
//     return clockState;
//   }, []);
// }
