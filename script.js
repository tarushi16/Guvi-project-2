// Smooth scroll to a section
function scrollToSection() {
    document.getElementById('github-section').scrollIntoView({ behavior: 'smooth' });
  }
  
  // Developer count animation
  let developerCount = document.getElementById('developer-count');
  let count = 0;
  let targetCount = 901437;
  
  function animateCount() {
    if (count < targetCount) {
      count += Math.floor(targetCount / 100); // Increment in steps
      developerCount.textContent = count.toLocaleString();
      setTimeout(animateCount, 50);
    } else {
      developerCount.textContent = targetCount.toLocaleString(); // Ensure the final number is accurate
    }
  }
  
  window.onload = animateCount;
  
  // GitHub login form handling
  const form = document.getElementById('github-login-form');
  const status = document.getElementById('login-status');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
  
    // Simulate a successful login
    if (username) {
      status.textContent = `Welcome, ${username}!`;
    }
  });
  