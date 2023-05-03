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
  loop: true,
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
      slidesPerView: 4.10,
      spaceBetween: 10
    },
    // when window width is <= 992px
    800: {
      slidesPerView: 5.10,
      spaceBetween: 10
    },
    // when window width is <= 1200px
    1200: {
      slidesPerView: 7.10,
      spaceBetween: 10
    }
  }
});



// three
 var three = new Swiper(".three", {
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



const addToCart = (item, quantity) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const productIndex = cart.findIndex(p => p.name === item.name && p.image === item.image);
  if (productIndex !== -1) {
    // If the product already exists in the cart, update its quantity and price
    cart[productIndex].quantity += quantity;
    cart[productIndex].price = item.price;
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`Added ${quantity} ${item.name} to cart!`);
  } else {
    // Otherwise, add a new product to the cart
    const product = {
      name: item.name,
      category: item.category,
      type: item.type,
      price: item.price,
      quantity: quantity,
      image: item.image
    };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`Added ${quantity} ${item.name} to cart!`);
  }
};






// myApi
const fetchAndCreateSwiperSlides = (apiUrl, swiperWrapper, prices) => {
  for (let i = 0; i < 50; i++) {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const item = data.drinks ? data.drinks[0] : data.meals[Math.floor(Math.random() * data.meals.length)];
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
        addToCartIcon.addEventListener('click', () => {
          const quantity = parseInt(prompt('How many do you want to add to cart?'), 10);
          if (!isNaN(quantity) && quantity > 0) {
            const product = {
              name: item.strDrink || item.strMeal,
              category: item.strCategory || item.strMeal,
              type: item.strCategory || item.strMealType || 'N/A',
              price: prices[i % prices.length],
              quantity: quantity,
              image: ''
            };

            if (item.strDrinkThumb) {
              product.image = item.strDrinkThumb;
            } else if (item.strMealThumb) {
              product.image = item.strMealThumb;
            }

            addToCart(product, quantity);
          } else {
            alert('Invalid quantity!');
          }
        });
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
const drinksPrices = [500, 700, 1000, 1200, 1500, 1800, 2000, 2200, 2500];
fetchAndCreateSwiperSlides('https://www.thecocktaildb.com/api/json/v1/1/random.php', swiperWrapperDrinks, drinksPrices);

const swiperWrapperDesert = document.getElementById('random-desert');
const desertPrices = [1500, 1200, 1300, 1400, 1100, 1000, 1700, 1200, 2000 ];
fetchAndCreateSwiperSlides('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert', swiperWrapperDesert, desertPrices);

const swiperWrapper = document.getElementById('random-food');
const prices = [2000, 2500, 4000, 1500, 3000, 2200, 4050, 3000, 4100];
fetchAndCreateSwiperSlides('https://www.themealdb.com/api/json/v1/1/random.php', swiperWrapper, prices);


const swiperWrapperAfrican = document.getElementById('random-african');
const africanPrices = [3500, 1700, 3300, 2400, 1800, 1600, 1900, 4200, 2900 ];
fetchAndCreateSwiperSlides('https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese', swiperWrapperAfrican, africanPrices);

const swiperWrapperThree = document.getElementById('random-three');
const threePrices = [3500, 1700, 3300, 2400, 1800, 1600, 1900, 4200, 2900 ];
fetchAndCreateSwiperSlides('https://www.themealdb.com/api/json/v1/1/filter.php?a=American', swiperWrapperThree, threePrices);

 const swiperWrapperTwo = document.getElementById('random-two');
const twoPrices = [3500, 1700, 3300, 2400, 1800, 1600, 1900, 4200, 2900 ];
fetchAndCreateSwiperSlides('https://www.themealdb.com/api/json/v1/1/filter.php?a=jamaican', swiperWrapperTwo, twoPrices);

const swiperWrapperDrinks2 = document.getElementById('random-drink2');
const drinksPrices2 = [500, 700, 1000, 1200, 1500, 1800, 2000, 2200, 2500];
fetchAndCreateSwiperSlides('https://www.thecocktaildb.com/api/json/v1/1/random.php', swiperWrapperDrinks2, drinksPrices2);
 


// localStorage.clear();





// grid
var mySwiperGridOk = new Swiper('.mySwiperGrid', {
  slidesPerView: 7,
  spaceBetween: 10,
  grid: {
    rows: 2,
    fill: 'row',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // When window width is <= 480px
    0: {
       slidesPerView: 2.19,
      grid: {
        rows: 2,
         fill: 'row',
      },
    },
    480: {
      slidesPerView: 3.30,
      grid: {
        rows: 2,
         fill: 'row',
      },
    },
    // When window width is <= 768px
    768: {
      slidesPerView: 5.18,
      grid: {
        rows: 2,
         fill: 'row',
      },
    },
    // When window width is <= 992px
    992: {
      slidesPerView: 6.10,
       grid: {
        rows: 2,
         fill: 'row',
      },
    },
    // When window width is <= 1200px
    1200: {
      slidesPerView: 6.50,
       grid: {
        rows: 2,
         fill: 'row',
      },
    }
  }
});




const categoryContainer = document.getElementById('category');
// Check if category belongs to CocktailDB or MealDB API
    const cocktailDBCategories = ['alcoholic', 'non alcoholic', 'cocktail'];
    const mealDBCategories = ['ordinary drink', 'dessert', 'seafood', 'chicken', 'pasta', 'beef', 'pork', 'vegetarian', 'vegan'];


categoryContainer.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    const category = event.target.textContent.toLowerCase();

    if (cocktailDBCategories.includes(category)) {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${category}`)
        .then(response => response.json())
        .then(data => {
          localStorage.setItem('cocktails', JSON.stringify(data.drinks));
          localStorage.setItem('category', category);
          window.location.href = '/pages/singleTwo.html';
        })
        .catch(error => {
          console.log(error);
          alert('Failed to fetch cocktails from API');
        });
    } else {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(response => response.json())
        .then(data => {
          localStorage.setItem('meals', JSON.stringify(data.meals));
          localStorage.setItem('category', category);
          window.location.href = '/pages/single.html';
        })
        .catch(error => {
          console.log(error);
          alert('Failed to fetch meals from API');
        });
    }
  }
});




// const apiKey = "<your_api_key_here>";
const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const drinks = data.drinks;
    for (const drink of drinks) {
      console.log(drink.strDrink);
    }
  })
  .catch(error => console.error(error));



const alc = document.getElementById("alc");
alc.addEventListener("click", ()=>{
  window.location.href = "/pages/nonAlc.html";
})


const ck = document.getElementById("ck");
ck.addEventListener("click", ()=>{
  window.location.href = "/pages/ck.html";
})


const ordi = document.getElementById("ordi");
ordi.addEventListener("click", ()=>{
  window.location.href = "/pages/ordi.html";
})
