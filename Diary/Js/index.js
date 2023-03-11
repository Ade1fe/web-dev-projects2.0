function validation() {
  const storedFormData = localStorage.getItem('form_data');

  if (storedFormData) {
    const { full_name, email, password } = JSON.parse(storedFormData);

    const fullNameInput = document.querySelector('input[name="full_name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');

    fullNameInput.value = full_name;
    emailInput.value = email;
    passwordInput.value = password;

    localStorage.removeItem('form_data');
  }


  // Get the form inputs
  const fullNameInput = document.querySelector('input[name="full_name"]');
  const emailInput = document.querySelector('input[name="email"]');
  const passwordInput = document.querySelector('input[name="password"]');

  // Get the values from the inputs
  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  console.log(email,fullName,password)



  function displayErrors(errors) {
  const errorList = document.querySelector('.errors');
  if (errorList) {
    errorList.innerHTML = '';
    errors.forEach((error) => {
      const li = document.createElement('li');
      li.textContent = error;
      errorList.appendChild(li);
    });
  }
}



// Define an error array
  const errors = [];

  // Validate full name
if (fullName === '') {
  errors.push('Full name is required');
} else if (fullName.match(/\d/)) {
  errors.push('Names must not include numbers');
} else if (fullName.length < 4) {
  errors.push('Name is too short');
} else if (!fullName.match(/^[a-zA-Z]{4,}\s[a-zA-Z]+$/)) {
  errors.push('Invalid name');
}


  // Validate email
  if (email === '') {
    errors.push('Email is required');
  } else if (!isValidEmail(email)) {
    errors.push('Email is invalid');
  }

  // Validate password
  if (password === '') {
    errors.push('Password is required');
  } else if (password.length < 8) {
    errors.push('Password must be at least 8 characters');
  }

  // Display errors or submit the form
  if (errors.length > 0) {
    displayErrors(errors);
  } else {
    submitForm();
    alert('Registration successful!');
     window.location.href = '../pages/homepage.html';
  }
  
}

// Helper function to validate email
function isValidEmail(email) {
  // This regex matches most valid email addresses
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Helper function to display errors
function displayErrors(errors) {
  const errorList = document.querySelector('.errors');
  errorList.innerHTML = '';
  errors.forEach((error) => {
    const li = document.createElement('li');
    li.textContent = error;
    errorList.appendChild(li);
  });
}


function submitForm() {
  const form = document.querySelector('.card-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    validation();
    form.submit();
  });
}
