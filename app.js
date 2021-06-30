const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// assigning variables
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const property = document.querySelectorAll("deadline-FormData, h4");

// setting up a date
      // **set year**

      const year = futureDate.getFullYear();
      const hours = futureDate.getHours();
      const minutes = futureDate.getMinutes();
      
      let month = futureDate.getMonth();
      month = months[month];
      const weekday = weekdays[futureDate.getDay()];
      const date = futureDate.getDate();
      giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;