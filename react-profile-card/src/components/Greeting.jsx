// src/components/Greeting.js

export default function Greeting({ name = "Explorer" }) {
  const currentHour = new Date().getHours();
  let timeOfDayGreeting = "Good evening";

  if (currentHour < 12) {
    timeOfDayGreeting = "Good morning";
  } else if (currentHour < 18) {
    timeOfDayGreeting = "Good afternoon";
  }

  return (
    <div>
      <h1>{timeOfDayGreeting}, {name}!</h1>
      <p>Track your day, dominate your goals.</p>
    </div>
  );
}

