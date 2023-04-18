(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery



// owl carousel
   $(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 1000, //Set AutoPlay to 3 seconds
 
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});
function countUpOnScroll() {
  const counter = document.querySelector('#counter');
  const counters = document.querySelectorAll('.count.percent');
  let isCounting = false;

  function startCounting() {
    counters.forEach(counter => {
      const targetCount = parseInt(counter.getAttribute('data-count'));
      let count = 0;
      const increment = Math.ceil(targetCount / 100);

      const timer = setInterval(() => {
        count += increment;
        counter.innerText = count;

        if (count >= targetCount) {
          clearInterval(timer);
          counter.innerText = targetCount;
        }
      }, 10);
    });

    isCounting = true;
  }

  function handleScroll() {
    const counterTop = counter.getBoundingClientRect().top;

    if (!isCounting && counterTop <= window.innerHeight * 0.9) {
      startCounting();
    }
  }

  window.addEventListener('scroll', handleScroll);
}

// Call the countUpOnScroll function when the page loads
window.addEventListener('load', countUpOnScroll);


const price = document.querySelector('.price');
price.addEventListener("click", ()=>{
  alert('Coming Soon...')
})





