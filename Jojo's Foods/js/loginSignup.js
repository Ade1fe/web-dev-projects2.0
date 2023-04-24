// Define the showNotification function
function showNotification(message) {
  const notificationContainer = document.getElementById('notification-container-');
  const notificationMessage = document.createElement('div');
  notificationMessage.classList.add('notification');
  notificationMessage.textContent = message + localStorage.getItem('userDetails');
  notificationContainer.appendChild(notificationMessage);
  setTimeout(() => {
    notificationMessage.remove();
  }, 3000);
}

// Select the login and sign up forms
const loginForm = document.querySelector('.login form');
const signUpForm = document.querySelector('.signup form');

// Add event listeners to both forms to prevent the default form submission
loginForm.addEventListener('submit', e => {
  e.preventDefault();
  validateLogin();
});

signUpForm.addEventListener('submit', e => {
  e.preventDefault();
  validateSignUp();
});


function validateLogin() {
  // Select the input fields for email and password
  const emailField = loginForm.querySelector('input[type="email"]');
  const passwordField = loginForm.querySelector('input[type="password"]');
  
  // Get the values from the input fields
  const email = emailField.value.trim();
  const password = passwordField.value.trim();
  
  // Check if the email and password are valid
  if (email === '' || !isValidEmail(email)) {
    showError(emailField, 'Please enter a valid email address');
  } else if (password === '') {
    showError(passwordField, 'Please enter a password');
  } else {
    // Login successful
    loginForm.reset();
    const userDetails = {
      email: email,
      password: password
    };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    showNotification('Login successful');
     window.location.href = '/pages/landingpage.html'
  }
}

function validateSignUp() {
  // Select the input fields for username, email, and password
  const usernameField = signUpForm.querySelector('input[name="txt"]');
  const emailField = signUpForm.querySelector('input[type="email"]');
  const passwordField = signUpForm.querySelector('input[type="password"]');
  
  // Get the values from the input fields
  const username = usernameField.value.trim();
  const email = emailField.value.trim();
  const password = passwordField.value.trim();
  
  // Check if the username, email, and password are valid
  if (username === '') {
    showError(usernameField, 'Please enter a username');
  } else if (email === '' || !isValidEmail(email)) {
    showError(emailField, 'Please enter a valid email address');
  } else if (password === '') {
    showError(passwordField, 'Please enter a password');
  } else {
    // Sign up successful
    signUpForm.reset();
    const userDetails = {
      username: username,
      email: email,
      password: password
    };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    showNotification('Sign up successful');
      window.location.href = '/pages/landingpage.html'
  }
}


// Helper function to check if an email address is valid
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Helper function to show an error message for an input field
function showError(inputField, message) {
  inputField.classList.add('error');
  inputField.setAttribute('aria-invalid', 'true');
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('error-message');
  errorMessage.textContent = message;
  inputField.insertAdjacentElement('afterend', errorMessage);
}
