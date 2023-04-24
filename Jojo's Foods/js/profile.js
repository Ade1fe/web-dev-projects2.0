


// Retrieve user details from local storage
  const userDetails = JSON.parse(localStorage.getItem('userDetails'));
  console.log(userDetails)

  // Fill in the HTML with the user details
  document.getElementById('name').textContent = "Welcome " +userDetails.username;
  document.getElementById('email').textContent = userDetails.email;
  document.getElementById('password').textContent = userDetails.password;

// Show the container element and hide the container- element
document.querySelector(".container").style.display = "block";
document.querySelector(".container-").style.display = "none";

// Add a click event listener to the button element
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  // Hide the container element and show the container- element
  document.querySelector(".container").style.display = "none";
  document.querySelector(".container-").style.display = "block";
});

// ======================================================================
// Get the form element and add a submit event listener
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    document.querySelector(".container-").style.display = "none";
  event.preventDefault(); // prevent the form from submitting normally

  // Get the existing user details from local storage
  let userDetails = JSON.parse(localStorage.getItem('userDetails'));

  // If userDetails doesn't exist, create a new object
  if (!userDetails) {
    userDetails = {};
  }
// Get the values of the form fields
const name = document.getElementById('name-').value;
const email = document.getElementById('email-').value;
const phone = document.getElementById('phone').value;
const address = document.getElementById('address').value;

// Regular expression to check if name contains only letters and spaces
const nameRegex = /^[a-zA-Z ]+$/;

// Regular expression to check if phone contains only digits
const phoneRegex = /^(\+?234|0)[\d\s-]{9,13}$/;

// Check if name and phone are valid
if (!nameRegex.test(name)) {
  alert('Please enter a valid name');
   document.querySelector(".container-").style.display = "block";
  return;
}

if (!phoneRegex.test(phone)) {
  alert('Please enter a valid phone number');
   document.querySelector(".container-").style.display = "block";
  return;
}

// Add or update the user details with the new form data
userDetails.name = name;
userDetails.email = email;
userDetails.phone = phone;
userDetails.address = address;

// Store the updated user details in local storage
localStorage.setItem('userDetails', JSON.stringify(userDetails));
console.log(userDetails, "in ")

// Get the user details from local storage
const userDetailsFromStorage = JSON.parse(localStorage.getItem('userDetails'));

// Create the HTML elements to show the user details
const container = document.createElement('div');
container.className = 'container';

const heading = document.createElement('p');
heading.id = 'name';
heading.innerHTML = `<span class="label">Name:</span> <span class="info" id="name">${userDetails.name}</span>`;

const emailPara = document.createElement('p');
emailPara.innerHTML = `<span class="label">Email:</span> <span class="info" id="email">${userDetails.email}</span>`;

const phonePara = document.createElement('p');
phonePara.innerHTML = `<span class="label">Phone:</span> <span class="info" id="phone">${userDetailsFromStorage.phone}</span>`;

const addressPara = document.createElement('p');
addressPara.innerHTML = `<span class="label">Address:</span> <span class="info" id="address">${userDetailsFromStorage.address}</span>`;

const editButton = document.createElement('button');
editButton.id = 'btn';
editButton.textContent = 'Edit details ?';

// Append the HTML elements to the container
container.appendChild(heading);
container.appendChild(emailPara);
container.appendChild(phonePara);
container.appendChild(addressPara);
// container.appendChild(editButton);

// Append the container to the document body
document.body.appendChild(container);

  // Show a success message to the user
  alert('Your details have been saved successfully!');
});
