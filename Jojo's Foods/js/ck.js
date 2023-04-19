const fetchAndCreateSwiperSlides = (apiUrl, swiperWrapper, prices) => {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const drinks = data.drinks.slice(0, 100);
      drinks.forEach((item, i) => {
        createSwiperSlide(item, swiperWrapper, prices[i % prices.length]);
      });
    })
    .catch(error => {
      console.log(error);
      const errorMsg = document.createElement('p');
      errorMsg.textContent = 'Error fetching data. Please try again later.';
      swiperWrapper.appendChild(errorMsg);
    });
};

const createSwiperSlide = (item, swiperWrapper, price) => {
  const swiperSlide = document.createElement('div');
  swiperSlide.className = 'swiper-slide item';

  const imgDiv = document.createElement('div');
  imgDiv.className = 'imgDiv';
  const img = document.createElement('img');
  img.src = item.strDrinkThumb;
  img.alt = item.strDrink;
  imgDiv.appendChild(img);
  swiperSlide.appendChild(imgDiv);

  const h4 = document.createElement('h4');
  h4.textContent = item.strDrink;
  swiperSlide.appendChild(h4);

  const addToCartIcon = document.createElement('i');
  addToCartIcon.className = 'fas fa-cart-plus'; // replace with the class for your cart icon
  swiperSlide.appendChild(addToCartIcon);

  const h4_2 = document.createElement('h4');
  h4_2.textContent = 'Type: ' + item.strAlcoholic;
  swiperSlide.appendChild(h4_2);

  const h4_3 = document.createElement('h4');
  h4_3.textContent = 'Price: #' + price;
  swiperSlide.appendChild(h4_3);

  swiperWrapper.appendChild(swiperSlide);
};

const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`;

const swiperWrapper = document.querySelector('.swiper-wrapper');
const prices = [3000, 2400, 1300, 4400, 5900, 4000, 2300, 5050, 6200, 2300, 5300, 7000,2000,5500, 2300];

fetchAndCreateSwiperSlides(apiUrl, swiperWrapper, prices);

const myH2 = document.getElementById("myH2")
myH2.innerText = "Cocktail";





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
