const fetchAndCreateSwiperSlides = (apiUrl, swiperWrapper, prices, meals) => {
  for (let i = 0; i < 100; i++) {
    let item = i % 2 === 0 ? meals[i/2] : null;
    if (!item) {
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          item = data.drinks ? data.drinks[0] : data.meals[Math.floor(Math.random() * data.meals.length)];
          createSwiperSlide(item, swiperWrapper, prices[i % prices.length]);
        })
        .catch(error => console.log(error));
    } else {
      createSwiperSlide(item, swiperWrapper, prices[i % prices.length]);
    }
  }
};


const createSwiperSlide = (item, swiperWrapper, price) => {
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

  // const h4_1 = document.createElement('h4');
  // h4_1.textContent = 'Category: ' + (item.strCategory || item.strMeal);
  // swiperSlide.appendChild(h4_1);

  
  const addToCartButton = document.createElement('i');
  addToCartButton.className = 'fas fa-cart-plus';
  swiperSlide.appendChild(addToCartButton);

  const h4_2 = document.createElement('h4');
  h4_2.textContent = 'Type: ' + (item.strCategory || item.strMealType || "N/A");
  swiperSlide.appendChild(h4_2);

  const h4_3 = document.createElement('h4');
  h4_3.textContent = 'Price: #' + price;
  swiperSlide.appendChild(h4_3);

  swiperWrapper.appendChild(swiperSlide);

  addToCartButton.addEventListener('click', () => {
    addToCart(item, price);
  });
};

const addToCart = (item, price) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const productIndex = cart.findIndex(p => p.name === item.strDrink || p.name === item.strMeal);
  if (productIndex !== -1) {
    // If the product already exists in the cart, update its quantity and price
    const quantity = prompt(`Enter the quantity of ${item.strDrink || item.strMeal} you want to add to cart:`);
    cart[productIndex].quantity += Number(quantity);
    cart[productIndex].price = price;
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`Added ${quantity} ${item.strDrink || item.strMeal} to cart!`);
  } else {
    // Otherwise, add a new product to the cart
    const quantity = prompt(`Enter the quantity of ${item.strDrink || item.strMeal} you want to add to cart:`);
    const product = {
      name: item.strDrink || item.strMeal,
      category: item.strCategory || item.strMeal,
      type: item.strCategory || item.strMealType || "N/A",
      price: price,
      quantity: Number(quantity),
      image: item.strDrinkThumb || item.strMealThumb
    };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`Added ${quantity} ${item.strDrink || item.strMeal} to cart!`);
  }
  console.log(cart);
};






const meals = JSON.parse(localStorage.getItem('meals'));
const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
const swiperWrapper = document.querySelector('.swiper-wrapper');
const prices = [100, 200, 300, 400, 500];

fetchAndCreateSwiperSlides(apiUrl, swiperWrapper, prices, meals);
// retrieve the category text from local storage
const category = localStorage.getItem('category');

// set the category text to the h2 element on the single.html page
const h2 = document.querySelector('.mySwiperTwo h2');
h2.textContent = category.toLocaleUpperCase();






// mySwiperTwo
 var mySwiperTwo = new Swiper(".mySwiperTwo", {
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
      slidesPerView: 2.18,
      spaceBetween: 10
    },
    // when window width is <= 768px
    500: {
      slidesPerView: 3.19,
      spaceBetween: 10
    },
    // when window width is <= 992px
    800: {
      slidesPerView: 4.19,
      spaceBetween: 10
    },
    // when window width is <= 1200px
    1200: {
      slidesPerView: 5.19,
      spaceBetween: 10
    }
  }
});


//
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
