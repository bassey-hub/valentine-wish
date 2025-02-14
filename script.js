document.addEventListener("DOMContentLoaded", () => {
    const notification = document.getElementById("notification");
    const balloonsContainer = document.getElementById("balloons-container");
  
    // Trigger the fade-in animation for the notification
    setTimeout(() => {
      notification.style.opacity = "1";
    }, 500);
  
    // Function to create a balloon
    function createBalloon() {
      const balloon = document.createElement("div");
      balloon.classList.add("balloon");
  
      // Randomize balloon colors
      const colors = ["#ff6f61", "#ffcc00", "#6bc1ff", "#ff8c00", "#c88ffa"];
      balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  
      // Randomize position and animation duration
      balloon.style.left = Math.random() * 100 + "vw";
      balloon.style.animationDuration = Math.random() * 3 + 5 + "s";
  
      balloonsContainer.appendChild(balloon);
  
      // Remove balloon after animation
      setTimeout(() => {
        balloon.remove();
      }, 8000);
    }
  
    // Generate balloons every 300ms
    setInterval(createBalloon, 300);
  
    // Add click event to notification for transition
    notification.addEventListener("click", () => {
      // Add a fade-out effect and redirect
      document.body.style.transition = "opacity 1s ease";
      document.body.style.opacity = 0;
  
      // Redirect to the next page after fade-out
      setTimeout(() => {
        window.location.href = "main-page.html"; // Replace with your next page URL
      }, 1000);
    });
  });
  