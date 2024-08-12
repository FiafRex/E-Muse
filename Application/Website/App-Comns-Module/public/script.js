setInterval(() => {
  fetch('/check-redirect')
      .then(response => response.json())
      .then(data => {
          if (data.redirect) {
              window.location.href = data.url;
          }
      })
      .catch(error => console.error('Error checking redirect:', error));
}, 1000);  // Check every 1000 milliseconds (1 second)

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
      document.getElementById('info-box').style.display = 'block';
  }, 2000);
});

function yoga(){
    window.location.href="yoga.html"
  }

  function HIIT(){
    window.location.href="next.html"
  }

  function med(){
    window.location.href="med.html"
  }