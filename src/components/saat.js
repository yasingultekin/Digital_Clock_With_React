import React, { useState } from "react";

function Saat() {
  const [timer, setTimer] = useState();

  setInterval(() => {
    let time = new Date().toLocaleTimeString();
    setTimer(time);
  });

  return (
    <div>
      <p>{timer}</p>
    </div>
  );
}

export default Saat;
