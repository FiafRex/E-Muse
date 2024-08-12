const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

const urlParams = new URLSearchParams(window.location.search);
const message = urlParams.get('message');

if (message) {
  const messageElement = document.getElementById('message');
  messageElement.textContent = message;

  setTimeout(() => {
    messageElement.textContent = '';
  }, 5000); 
}

// Toggle to registration form
registerLink.addEventListener('click', (event) => {
  event.preventDefault();
  wrapper.classList.add('active');
});

// Toggle to login form
loginLink.addEventListener('click', (event) => {
  event.preventDefault();
  wrapper.classList.remove('active');
});
// document.getElementById('register-link').addEventListener('click', function(event) {
//   event.preventDefault(); // Prevent the default behavior of the link

//   // Change the value of the hidden input field to "signup"
//   document.getElementById('action').value = "signup";

//   // Submit the form
//   this.closest('form').submit();
// });
