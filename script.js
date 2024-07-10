// GSAP Timeline
var tl = gsap.timeline();

// Animate the loader's h3 elements
tl.from("#loader h3", { opacity: 0, duration: 1, stagger: 0.1 })
  .to("#loader h3", { opacity: 0, duration: 1 })
  .to("#loader", { display: "none", duration: 0 })

  // Show the main content
  .set(".main", { display: "block" })

  // Animate the main content elements
  .from(".main .navBtns", { duration: 0.2, y: -10 })
  .from(".section1 p, .section1 h1", { duration: 0.2, opacity: 0, scale: 0.8 });

// Set the launch date to November 14
var launchDate = new Date();
launchDate.setMonth(10); // November (month is 0-indexed)
launchDate.setDate(14);
launchDate.setHours(0, 0, 0, 0); // Optional: Set the time to midnight

// Update the countdown timer
function updateCountdown() {
  var now = new Date().getTime();
  var timeLeft = launchDate - now;

  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is over, display a message
  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerHTML = "We have launched!";
  }
}

// Update the countdown every second
var countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display the timer immediately
updateCountdown();

document.getElementById('scroll-down').addEventListener('click', function() {
  document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
});
