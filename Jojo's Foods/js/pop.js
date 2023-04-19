// Create an array of notifications
const notifications = [
  {
    message: 'I am still working on this project bear with me',
    delay: 0 * 60 * 1000 // 2 minutes
  },
  {
    message: 'I will make update pretty soon',
    delay: 1 * 60 * 1000 // 4 minutes
  },
   {
    message: 'I will more changes soon',
    delay: 2 * 60 * 1000 // 4 minutes
  },
   {
    message: 'Sorry if the Notifications are disturbing',
    delay: 3 * 60 * 1000 // 4 minutes
  },
   {
    message: 'check out my portfolio',
    delay: 4 * 60 * 1000 // 4 minutes
  }

];

// Get the notification container element
const notificationContainer = document.getElementById('notification-container');

// Loop through the notifications array
notifications.forEach((notification, index) => {
  // Create the notification element
  const notificationElement = document.createElement('div');
  notificationElement.classList.add('notification');
  notificationElement.style.bottom = `${(index + 1) * 110}px`; // position the notification at 110px intervals

  // Create the delete button element
  const deleteButton = document.createElement('span');
  deleteButton.classList.add('delete-btn');
  deleteButton.innerHTML = '&times;'; // add an 'X' character to the button
  deleteButton.addEventListener('click', () => {
    notificationElement.remove(); // remove the notification element when the delete button is clicked
  });

  // Add the message and delete button elements to the notification element
  notificationElement.innerHTML = `${notification.message}`;
  notificationElement.appendChild(deleteButton);

  // Add the notification element to the container after the specified delay
  setTimeout(() => {
    notificationContainer.appendChild(notificationElement);
  }, notification.delay);
});
