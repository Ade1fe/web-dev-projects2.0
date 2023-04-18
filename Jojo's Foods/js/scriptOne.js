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









// myswiperOne
 var swiperOne = new Swiper(".mySwiperOne", {
  autoplay: {
    delay: 2000, 
  },
  loop: true, 
});


// mySwiperTwo
 var mySwiperTwo = new Swiper(".mySwiperTwo", {
  slidesPerView: 6,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is <= 640px
    0: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is <= 768px
    500: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    // when window width is <= 992px
    800: {
      slidesPerView: 5,
      spaceBetween: 30
    },
    // when window width is <= 1200px
    1200: {
      slidesPerView: 6,
      spaceBetween: 40
    }
  }
});



// three
 var mySwiperTwo = new Swiper(".three", {
  slidesPerView: 6,
  spaceBetween: 10,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is <= 640px
    0: {
      slidesPerView: 2.27,
      spaceBetween: 10
    },
    // when window width is <= 768px
    510: {
      slidesPerView: 3.29,
      spaceBetween: 15
    },
    // when window width is <= 992px
    780: {
      slidesPerView: 4.29,
      spaceBetween: 15
    },
    // when window width is <= 1200px
    1020: {
      slidesPerView: 5.29,
      spaceBetween: 15
    }
  }
});



// myApi
const fetchAndCreateSwiperSlides = (apiUrl, swiperWrapper, prices) => {
  for (let i = 0; i < 20; i++) {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        const item = data.drinks ? data.drinks[0] : data.meals[Math.floor(Math.random() * data.meals.length)];
        // console.log(item);
        const swiperSlide = document.createElement('div');
        swiperSlide.className = 'swiper-slide item';

        const imgDiv = document.createElement('div');
        imgDiv.className = 'imgDiv';
        const img = document.createElement('img');
        img.src = item.strDrinkThumb || item.strMealThumb;
        img.alt = item.strDrink || item.strMeal;
        imgDiv.appendChild(img);
        swiperSlide.appendChild(imgDiv);

        const h4 = document.createElement('h4');
        if (item.strDrink && item.strDrink.length <= 15) {
          h4.textContent = item.strDrink;
        } else if (item.strMeal && item.strMeal.length <= 15) {
          h4.textContent = item.strMeal;
        } else {
          h4.textContent = (item.strDrink || item.strMeal).slice(0, 15) + '...';
        }
        swiperSlide.appendChild(h4);

        const h4_1 = document.createElement('h4');
        h4_1.textContent = 'Category: ' + (item.strCategory || item.strMeal);
        swiperSlide.appendChild(h4_1);

        const addToCartIcon = document.createElement('i');
        addToCartIcon.className = 'fas fa-cart-plus'; // replace with the class for your cart icon
        swiperSlide.appendChild(addToCartIcon);

        const h4_2 = document.createElement('h4');
         h4_2.textContent = 'Type: ' + (item.strCategory || item.strMealType || "N/A");
        swiperSlide.appendChild(h4_2);


        const h4_3 = document.createElement('h4');
        h4_3.textContent = 'Price: #' + prices[i % prices.length];
        swiperSlide.appendChild(h4_3);

        swiperWrapper.appendChild(swiperSlide);
      })
      .catch(error => console.log(error));
  }
};




const swiperWrapperDrinks = document.getElementById('random-drink');
const drinksPrices = ['500', '700', '1000', '1200', '1500', '1800', '2000', '2200', '2500'];
fetchAndCreateSwiperSlides('https://www.thecocktaildb.com/api/json/v1/1/random.php', swiperWrapperDrinks, drinksPrices);

const swiperWrapperDesert = document.getElementById('random-desert');
const desertPrices = ['1500', '1200', '1300', '1400', '1100', '1000', '1700', '1200', '2000'];
fetchAndCreateSwiperSlides('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert', swiperWrapperDesert, desertPrices);

const swiperWrapper = document.getElementById('random-food');
const prices = ['2000', '2500', '4000', '1500', '3000', '2200', '4050', '3000', '4100'];
fetchAndCreateSwiperSlides('https://www.themealdb.com/api/json/v1/1/random.php', swiperWrapper, prices);







// grid
var mySwiperGridOk = new Swiper('.mySwiperGrid', {
  slidesPerView: 7,
  spaceBetween: 30,
  grid: {
    rows: 2,
    fill: 'row',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


const categoryContainer = document.getElementById('category');

categoryContainer.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    const category = event.target.textContent;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(response => response.json())
      .then(data => {
        // save the data to localStorage
        localStorage.setItem('meals', JSON.stringify(data.meals));
       // send the category to the h2 on single.html page
       
        localStorage.setItem('category', category);
        // redirect to single.html page
        window.location.href = '/pages/single.html';
      })
      .catch(error => console.log(error));
  }
});



