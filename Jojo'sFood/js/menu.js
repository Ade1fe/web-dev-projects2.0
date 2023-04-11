const items = document.querySelectorAll("nav li");

// Looping through items
items.forEach((item) => {
  item.addEventListener("click", toggle);
});

function toggle() {
  // Looping through items
  items.forEach(() => {
    // Again loop through items
    items.forEach((item) => {
      // Removing class active from all items except .has-sub
      if (!item.classList.contains("has-sub")) {
        item.classList.remove("active");
      }
    });

    // Toggling active class to clicked item
    this.classList.toggle("active");
  });
}


// get all the navigation links
const navLinks = document.querySelectorAll('.nav-link');

// function to hide icons on big screens and hide words on small screens
function toggleNavLinks() {
  if (window.innerWidth >= 800) {
    // hide the icons on big screens
    navLinks.forEach(link => {
      link.querySelector('i').style.display = 'none';
      link.querySelector('span').style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';

    });
  } else {
    // hide the words on small screens
    navLinks.forEach(link => {
      link.querySelector('span').style.display = 'none';
      link.querySelector('i').style.clipPath = 'circle(50%)';
      link.querySelector('span').style.borderRadius = '0px'
    });
  }
}

// call the function on page load
toggleNavLinks();

// add an event listener to the window object to call the function when the screen width changes
window.addEventListener('resize', toggleNavLinks);

