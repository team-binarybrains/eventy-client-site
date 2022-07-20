import React from "react";

function calculateTimeLeft() {
  const year = new Date().getFullYear();
  const difference = +new Date(`${year}-10-1`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      HR: Math.floor((difference / (1000 * 60 * 60)) % 24),
      MIN: Math.floor((difference / 1000 / 60) % 60),
      SEC: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}

export default function CountDown() {
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

  const CountDownComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    return (
      <span className="text-green-400 text-xl  mb-3  font-bold shadow-md bg-white mx-1 mt-3 md:inline-block  rounded-full p-5 justify-items-center">
        {<span className="">{timeLeft[interval]}</span>}
        <span className=" pl-1">{interval}</span>{" "}
      </span>
    );
  });

  return (
    <div>
      {CountDownComponents.length ? (
        CountDownComponents
      ) : (
        <span>Time's up!</span>
      )}
    </div>
  );
}
