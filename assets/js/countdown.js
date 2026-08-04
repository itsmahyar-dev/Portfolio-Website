
/*=========================================
  Portfolio V2 Countdown
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

  const countdown = document.querySelector(".launch-card");

  // Exit if countdown section doesn't exist
  if (!countdown) return;

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  // Launch Date
  const launchDate = new Date("2026-08-15T11:11:11").getTime();

  function updateCountdown() {

    const now = Date.now();
    const distance = launchDate - now;

    // Launch Completed
    if (distance <= 0) {

      clearInterval(timer);

      countdown.innerHTML = `
        <span class="launch-badge">
          🎉 NOW LIVE
        </span>

        <h2 class="launch-title">
          Portfolio V2 is Live!
        </h2>

        <p class="launch-description">
          Welcome to the next generation of my portfolio.
          Explore modern UI, faster performance,
          developer blogs, case studies and much more.
        </p>

        <div class="launch-footer">
          🇮🇳 Happy Independence Day 🇮🇳
        </div>

        <div style="text-align:center;margin-top:25px;">
          <a href="https://vikaskoledev.vercel.app/"
             class="launch-btn">
             Explore Portfolio →
          </a>
        </div>
      `;

      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    );

    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) /
      (1000 * 60)
    );

    const seconds = Math.floor(
      (distance % (1000 * 60)) /
      1000
    );

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");

  }

  // Run immediately
  updateCountdown();

  // Update every second
  const timer = setInterval(updateCountdown, 1000);

});