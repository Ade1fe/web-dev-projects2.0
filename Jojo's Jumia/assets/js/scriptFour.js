const API_KEY = "34748321-56ec586673804760cca13f7f6";
const NUM_IMAGES = 3;
const URL = `https://pixabay.com/api/?key=${API_KEY}&q=old+books&image_type=photo&per_page=${NUM_IMAGES}`;

fetch(URL)
  .then(response => response.json())
  .then(data => {
    const imageUrls = data.hits.map(hit => hit.webformatURL);
    const swiperSlides = imageUrls.map(url => {
      return `<div class="swiper-slide"><img src="${url}" /></div>`;
    });
    const swiperContainer = document.querySelector("#swiper-container");
    swiperContainer.innerHTML = `<div class="swiper-wrapper">${swiperSlides.join("")}</div><div class="swiper-pagination"></div>`;
    const swiper = new Swiper(".swiper-container", {
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  })
  .catch(error => console.error(error));


// ---------------------------------------
const swiper = new Swiper('.swiper-containerTwo', {
  slidesPerView: 7,
  spaceBetween: 20,
   loop: true,
  autoplay: {
    delay: 1500,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 6.30,
    },
    992: {
      slidesPerView: 5.30,
    },
    768: {
      slidesPerView: 4.30,
    },
    576: {
      slidesPerView: 3.16,
    },
    0: {
      slidesPerView: 2,
    },
  },
});

const categories = ["purse", "television", "pan", "table", "perfume", "cups","shirts","shoes","refrigerator","fan"];

const swiperWrapper = document.querySelector('#adverts');

const NUM_IMAGES2 = 3;
const textNum = 15;
categories.forEach(category => {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&image_type=photo&per_page=3`;
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      data.hits.forEach(hit => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('swiper-slide', 'item');
        const imageElement = document.createElement('img');
        imageElement.src = hit.webformatURL;
        imageElement.alt = hit.tags;
        const linkElement = document.createElement('a');
       
        if(hit.tags.length < 25){
             linkElement.textContent = hit.tags;
        }else {
            const truncatedTags = hit.tags.substring(0, 25) + "...";
            linkElement.textContent = truncatedTags;
}

        cardElement.appendChild(imageElement);
        cardElement.appendChild(linkElement);
        swiperWrapper.appendChild(cardElement);
        
      });
    })
    .catch(error => {
      console.log(error);
    });
});


// ---------------------------------------
const swiperSell = new Swiper('.swiper-containerThree', {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    enabled: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 5.30,
    },
    992: {
      slidesPerView: 4.10,
    },
    768: {
      slidesPerView: 3.30,
    },
    576: {
      slidesPerView: 3.16,
    },
    0: {
      slidesPerView: 2,
    },
  },
});


const categoriesSell = ["dog", "car", "cat", "table", "baby", "phone","shirts","shoes","refrigerator","fan"];
const sellPrice =  ["#2000", "#2500", "#4000", "#3400", "#14000", "#1400","#6200","#5400","#3400","#7600"];
const sellPriceCross =  ["#1500", "#2400", "#3800", "#2400", "#12000", "#1100","#6150","#5000","#3100","#7500"];

const swiperWrapperSell = document.querySelector('#selling');

categoriesSell.forEach((category) => {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&image_type=photo&per_page=4`;
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      data.hits.forEach((hit, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('swiper-slide', 'items');
        const imageWrapperElement = document.createElement('div');
        imageWrapperElement.classList.add('image-wrapper');
        const imageElement = document.createElement('img');
        imageElement.src = hit.webformatURL;
        imageElement.alt = hit.tags;
        imageWrapperElement.appendChild(imageElement);
        const linkElement = document.createElement('h4');
       
        if(hit.tags.length < 25){
          linkElement.textContent = hit.tags;
        } else {
          const truncatedTags = hit.tags.substring(0, 15) + "...";
          linkElement.textContent = truncatedTags;
        }
  
        const priceElement = document.createElement('h5');
        priceElement.textContent = sellPrice[(index + categoriesSell.indexOf(category)) % sellPrice.length];

        const cart = document.createElement('a')
        cart.innerHTML = `<i class='bx bx-cart-alt'></i>`
        cart.href = '#'

        const priceCrossElement = document.createElement('h5');
        priceCrossElement.classList.add('cross')
        priceCrossElement.textContent = sellPriceCross[(index + categoriesSell.indexOf(category)) % sellPriceCross.length];

        cardElement.appendChild(imageWrapperElement);
        cardElement.appendChild(linkElement);
        cardElement.appendChild(priceElement);
        imageWrapperElement.appendChild(cart);
        cardElement.appendChild(priceCrossElement);
        swiperWrapperSell.appendChild(cardElement);     
      });
    })
    .catch(error => {
      console.log(error);
    });
});



//---flash sales--------
const categoriesFlash = ["dog", "car", "cat", "table", "baby", "phone","shirts","shoes","refrigerator","fan"];
const flashPrice =  ["#2000", "#2500", "#4000", "#3400", "#14000", "#1400","#6200","#5400","#3400","#7600"];
const flashPriceCross =  ["#1500", "#2400", "#3800", "#2400", "#12000", "#1100","#6150","#5000","#3100","#7500"];

const swiperWrapperFlash = document.querySelector('#flash');

categoriesFlash.forEach((category) => {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&image_type=photo&per_page=4`;
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      data.hits.forEach((hit, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('swiper-slide', 'items');
        const imageWrapperElement = document.createElement('div');
        imageWrapperElement.classList.add('image-wrapper');
        const imageElement = document.createElement('img');
        imageElement.src = hit.webformatURL;
        imageElement.alt = hit.tags;
        imageWrapperElement.appendChild(imageElement);
        const linkElement = document.createElement('h4');
       
        if(hit.tags.length < 25){
          linkElement.textContent = hit.tags;
        } else {
          const truncatedTags = hit.tags.substring(0, 15) + "...";
          linkElement.textContent = truncatedTags;
        }
  
        const priceElement = document.createElement('h5');
        priceElement.textContent = flashPrice[(index + categoriesFlash.indexOf(category)) % flashPrice.length];

        const cart = document.createElement('a')
        cart.innerHTML = `<i class='bx bx-cart-alt'></i>`
        cart.href = '#'

        const priceCrossElement = document.createElement('h5');
        priceCrossElement.classList.add('cross')
        priceCrossElement.textContent = flashPriceCross[(index + categoriesFlash.indexOf(category)) % flashPriceCross.length];

        cardElement.appendChild(imageWrapperElement);
        cardElement.appendChild(linkElement);
        cardElement.appendChild(priceElement);
        imageWrapperElement.appendChild(cart);
        cardElement.appendChild(priceCrossElement);
        swiperWrapperFlash.appendChild(cardElement);     
      });
    })
    .catch(error => {
      console.log(error);
    });
});



//-----------stock
const categoriesStock = ["grapes", "books", "phone", "computer", "man", "stocks","pants","shoes","refrigerator","fan"];
const stockPrice =  ["#2000", "#2500", "#4000", "#3400", "#14000", "#1400","#6200","#5400","#3400","#7600"];
const stockPriceCross =  ["#1500", "#2400", "#3800", "#2400", "#12000", "#1100","#6150","#5000","#3100","#7500"];

const swiperWrapperStock = document.querySelector('#stock');

categoriesStock.forEach((category) => {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&image_type=photo&per_page=4`;
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      data.hits.forEach((hit, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('swiper-slide', 'items');
        const imageWrapperElement = document.createElement('div');
        imageWrapperElement.classList.add('image-wrapper');
        const imageElement = document.createElement('img');
        imageElement.src = hit.webformatURL;
        imageElement.alt = hit.tags;
        imageWrapperElement.appendChild(imageElement);
        const linkElement = document.createElement('h4');
       
        if(hit.tags.length < 25){
          linkElement.textContent = hit.tags;
        } else {
          const truncatedTags = hit.tags.substring(0, 15) + "...";
          linkElement.textContent = truncatedTags;
        }
  
        const priceElement = document.createElement('h5');
        priceElement.textContent = stockPrice[(index + categoriesStock.indexOf(category)) % stockPrice.length];

        const cart = document.createElement('a')
        cart.innerHTML = `<i class='bx bx-cart-alt'></i>`
        cart.href = '#'

        const priceCrossElement = document.createElement('h5');
        priceCrossElement.classList.add('cross')
        priceCrossElement.textContent =  stockPriceCross[(index + categoriesStock.indexOf(category)) % stockPriceCross.length];

        cardElement.appendChild(imageWrapperElement);
        cardElement.appendChild(linkElement);
        cardElement.appendChild(priceElement);
        imageWrapperElement.appendChild(cart);
        cardElement.appendChild(priceCrossElement);
        swiperWrapperStock.appendChild(cardElement); // changed categoriesStock to swiperWrapperStock     
      });
    })
    .catch(error => {
      console.log(error);
    });
});



// jumia
const containerFour = new Swiper('.swiper-containerFour', {
  slidesPerView: 7,
  spaceBetween: 20,
   loop: true,
  autoplay: {
    delay: 1500,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 6,
    },
    992: {
      slidesPerView: 5.30,
    },
    768: {
      slidesPerView: 4.30,
    },
    576: {
      slidesPerView: 3.16,
    },
    0: {
      slidesPerView: 2.44,
    },
  },
});


// ------------philip
const categoriesPhilip = ["dog", "car", "cat", "table", "baby", "phone","shirts","shoes","refrigerator","fan"];
const philipPrice =  ["#2000", "#2500", "#4000", "#3400", "#14000", "#1400","#6200","#5400","#3400","#7600"];
const philipPriceCross =  ["#1500", "#2400", "#3800", "#2400", "#12000", "#1100","#6150","#5000","#3100","#7500"];

const swiperWrapperPhilip = document.querySelector('#philip');

categoriesPhilip.forEach((category) => {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&image_type=photo&per_page=4`;
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      data.hits.forEach((hit, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('swiper-slide', 'items');
        const imageWrapperElement = document.createElement('div');
        imageWrapperElement.classList.add('image-wrapper');
        const imageElement = document.createElement('img');
        imageElement.src = hit.webformatURL;
        imageElement.alt = hit.tags;
        imageWrapperElement.appendChild(imageElement);
        const linkElement = document.createElement('h4');
       
        if(hit.tags.length < 25){
          linkElement.textContent = hit.tags;
        } else {
          const truncatedTags = hit.tags.substring(0, 15) + "...";
          linkElement.textContent = truncatedTags;
        }
  
        const priceElement = document.createElement('h5');
        priceElement.textContent = philipPrice[(index + categoriesPhilip.indexOf(category)) % philipPrice.length];

        const cart = document.createElement('a')
        cart.innerHTML = `<i class='bx bx-cart-alt'></i>`
        cart.href = '#'

        const priceCrossElement = document.createElement('h5');
        priceCrossElement.classList.add('cross')
        priceCrossElement.textContent = philipPriceCross[(index + categoriesPhilip.indexOf(category)) % philipPriceCross.length];

        cardElement.appendChild(imageWrapperElement);
        cardElement.appendChild(linkElement);
        cardElement.appendChild(priceElement);
        imageWrapperElement.appendChild(cart);
        cardElement.appendChild(priceCrossElement);
        swiperWrapperPhilip.appendChild(cardElement);     
      });
    })
    .catch(error => {
      console.log(error);
    });
});


// ------------large Appliances
const categoriesLarge = ["dog", "car", "cat", "table", "baby", "phone","shirts","shoes","refrigerator","fan"];
const largePrice =  ["#2000", "#2500", "#4000", "#3400", "#14000", "#1400","#6200","#5400","#3400","#7600"];
const largePriceCross =  ["#1500", "#2400", "#3800", "#2400", "#12000", "#1100","#6150","#5000","#3100","#7500"];

const swiperWrapperLarge = document.querySelector('#large');

categoriesLarge.forEach((category) => {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&image_type=photo&per_page=4`;
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      data.hits.forEach((hit, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('swiper-slide', 'items');
        const imageWrapperElement = document.createElement('div');
        imageWrapperElement.classList.add('image-wrapper');
        const imageElement = document.createElement('img');
        imageElement.src = hit.webformatURL;
        imageElement.alt = hit.tags;
        imageWrapperElement.appendChild(imageElement);
        const linkElement = document.createElement('h4');
       
        if(hit.tags.length < 25){
          linkElement.textContent = hit.tags;
        } else {
          const truncatedTags = hit.tags.substring(0, 15) + "...";
          linkElement.textContent = truncatedTags;
        }
  
        const priceElement = document.createElement('h5');
        priceElement.textContent = largePrice[(index + categoriesLarge.indexOf(category)) % largePrice.length];

        const cart = document.createElement('a')
        cart.innerHTML = `<i class='bx bx-cart-alt'></i>`
        cart.href = '#'

        const priceCrossElement = document.createElement('h5');
        priceCrossElement.classList.add('cross')
        priceCrossElement.textContent = largePriceCross[(index + categoriesLarge.indexOf(category)) % largePriceCross.length];

        cardElement.appendChild(imageWrapperElement);
        cardElement.appendChild(linkElement);
        cardElement.appendChild(priceElement);
        imageWrapperElement.appendChild(cart);
        cardElement.appendChild(priceCrossElement);
        swiperWrapperLarge.appendChild(cardElement);     
      });
    })
    .catch(error => {
      console.log(error);
    });
});

// shop from
var swiper1 = new Swiper(".containerFive .swiper", {
  slidesPerView: 6,
  grid: {
    rows: 2,
    fill: 'row'
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0:{
      slidesPerView: 2.47,
      spaceBetween: 20,
      grid: {
        rows: 2,
        fill: 'row'
      }
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
      grid: {
        rows: 2,
        fill: 'row'
      }
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row'
      }
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 40,
      grid: {
        rows: 2,
        fill: 'row'
      }
    }
  }
});


// best Price
const categoriesBestPrice = ["dog", "car", "cat", "table", "baby", "phone","shirts","shoes","refrigerator","fan"];
const bestPrice =  ["#2000", "#2500", "#4000", "#3400", "#14000", "#1400","#6200","#5400","#3400","#7600"];
const bestPriceCross =  ["#1500", "#2400", "#3800", "#2400", "#12000", "#1100","#6150","#5000","#3100","#7500"];

const swiperWrapperBestPrice = document.querySelector('#bestPrice');

categoriesBestPrice.forEach((category) => {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&image_type=photo&per_page=4`;
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      data.hits.forEach((hit, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('swiper-slide', 'items');
        const imageWrapperElement = document.createElement('div');
        imageWrapperElement.classList.add('image-wrapper');
        const imageElement = document.createElement('img');
        imageElement.src = hit.webformatURL;
        imageElement.alt = hit.tags;
        imageWrapperElement.appendChild(imageElement);
        const linkElement = document.createElement('h4');
       
        if(hit.tags.length < 25){
          linkElement.textContent = hit.tags;
        } else {
          const truncatedTags = hit.tags.substring(0, 15) + "...";
          linkElement.textContent = truncatedTags;
        }
  
        const priceElement = document.createElement('h5');
        priceElement.textContent = bestPrice[(index + categoriesBestPrice.indexOf(category)) % bestPrice.length];

        const cart = document.createElement('a')
        cart.innerHTML = `<i class='bx bx-cart-alt'></i>`
        cart.href = '#'

        const priceCrossElement = document.createElement('h5');
        priceCrossElement.classList.add('cross')
        priceCrossElement.textContent = bestPriceCross[(index + categoriesBestPrice.indexOf(category)) % bestPriceCross.length];

        cardElement.appendChild(imageWrapperElement);
        cardElement.appendChild(linkElement);
        cardElement.appendChild(priceElement);
        imageWrapperElement.appendChild(cart);
        cardElement.appendChild(priceCrossElement);
        swiperWrapperBestPrice.appendChild(cardElement);     
      });
    })
    .catch(error => {
      console.log(error);
    });
});



// best Price
const categoriesBestSeller = ["dog", "car", "cat", "table", "baby", "phone","shirts","shoes","refrigerator","fan"];
const bestSellerPrice =  ["#2000", "#2500", "#4000", "#3400", "#14000", "#1400","#6200","#5400","#3400","#7600"];
const bestSellerPriceCross =  ["#1500", "#2400", "#3800", "#2400", "#12000", "#1100","#6150","#5000","#3100","#7500"];

const swiperWrapperBestSeller = document.querySelector('#bestSeller');

categoriesBestSeller.forEach((category) => {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&image_type=photo&per_page=4`;
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      data.hits.forEach((hit, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('swiper-slide', 'items');
        const imageWrapperElement = document.createElement('div');
        imageWrapperElement.classList.add('image-wrapper');
        const imageElement = document.createElement('img');
        imageElement.src = hit.webformatURL;
        imageElement.alt = hit.tags;
        imageWrapperElement.appendChild(imageElement);
        const linkElement = document.createElement('h4');
       
        if(hit.tags.length < 25){
          linkElement.textContent = hit.tags;
        } else {
          const truncatedTags = hit.tags.substring(0, 15) + "...";
          linkElement.textContent = truncatedTags;
        }
  
        const priceElement = document.createElement('h5');
        priceElement.textContent = bestSellerPrice[(index + categoriesBestSeller.indexOf(category)) % bestSellerPrice.length];

        const cart = document.createElement('a')
        cart.innerHTML = `<i class='bx bx-cart-alt'></i>`
        cart.href = '#'

        const priceCrossElement = document.createElement('h5');
        priceCrossElement.classList.add('cross')
        priceCrossElement.textContent = bestSellerPriceCross[(index + categoriesBestSeller.indexOf(category)) % bestSellerPriceCross.length];

        cardElement.appendChild(imageWrapperElement);
        cardElement.appendChild(linkElement);
        cardElement.appendChild(priceElement);
        imageWrapperElement.appendChild(cart);
        cardElement.appendChild(priceCrossElement);
        swiperWrapperBestSeller.appendChild(cardElement);     
      });
    })
    .catch(error => {
      console.log(error);
    });
});


// eld sales
const categoriesEld = ["dog", "car", "cat", "table", "baby", "phone","shirts","shoes","refrigerator","fan"];
const eldPrice =  ["#2000", "#2500", "#4000", "#3400", "#14000", "#1400","#6200","#5400","#3400","#7600"];
const eldPriceCross =  ["#1500", "#2400", "#3800", "#2400", "#12000", "#1100","#6150","#5000","#3100","#7500"];

const swiperWrapperEld = document.querySelector('#eld');

categoriesEld.forEach((category) => {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&image_type=photo&per_page=4`;
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      data.hits.forEach((hit, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('swiper-slide', 'items');
        const imageWrapperElement = document.createElement('div');
        imageWrapperElement.classList.add('image-wrapper');
        const imageElement = document.createElement('img');
        imageElement.src = hit.webformatURL;
        imageElement.alt = hit.tags;
        imageWrapperElement.appendChild(imageElement);
        const linkElement = document.createElement('h4');
       
        if(hit.tags.length < 25){
          linkElement.textContent = hit.tags;
        } else {
          const truncatedTags = hit.tags.substring(0, 15) + "...";
          linkElement.textContent = truncatedTags;
        }
  
        const priceElement = document.createElement('h5');
        priceElement.textContent = eldPrice[(index + categoriesEld.indexOf(category)) % eldPrice.length];

        const cart = document.createElement('a')
        cart.innerHTML = `<i class='bx bx-cart-alt'></i>`
        cart.href = '#'

        const priceCrossElement = document.createElement('h5');
        priceCrossElement.classList.add('cross')
        priceCrossElement.textContent = eldPriceCross[(index + categoriesEld.indexOf(category)) % eldPriceCross.length];

        cardElement.appendChild(imageWrapperElement);
        cardElement.appendChild(linkElement);
        cardElement.appendChild(priceElement);
        imageWrapperElement.appendChild(cart);
        cardElement.appendChild(priceCrossElement);
        swiperWrapperEld.appendChild(cardElement);     
      });
    })
    .catch(error => {
      console.log(error);
    });
});


// phone sales
const categoriesPhones = ["dog", "car", "cat", "table", "baby", "phone","shirts","shoes","refrigerator","fan"];
const phonesPrice =  ["#2000", "#2500", "#4000", "#3400", "#14000", "#1400","#6200","#5400","#3400","#7600"];
const phonesPriceCross =  ["#1500", "#2400", "#3800", "#2400", "#12000", "#1100","#6150","#5000","#3100","#7500"];

const swiperWrapperPhones = document.querySelector('#phones');

categoriesPhones.forEach((category) => {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&image_type=photo&per_page=4`;
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      data.hits.forEach((hit, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('swiper-slide', 'items');
        const imageWrapperElement = document.createElement('div');
        imageWrapperElement.classList.add('image-wrapper');
        const imageElement = document.createElement('img');
        imageElement.src = hit.webformatURL;
        imageElement.alt = hit.tags;
        imageWrapperElement.appendChild(imageElement);
        const linkElement = document.createElement('h4');
       
        if(hit.tags.length < 25){
          linkElement.textContent = hit.tags;
        } else {
          const truncatedTags = hit.tags.substring(0, 15) + "...";
          linkElement.textContent = truncatedTags;
        }
  
        const priceElement = document.createElement('h5');
        priceElement.textContent = phonesPrice[(index + categoriesPhones.indexOf(category)) % phonesPrice.length];

        const cart = document.createElement('a')
        cart.innerHTML = `<i class='bx bx-cart-alt'></i>`
        cart.href = '#'

        const priceCrossElement = document.createElement('h5');
        priceCrossElement.classList.add('cross')
        priceCrossElement.textContent = phonesPriceCross[(index + categoriesPhones.indexOf(category)) % phonesPriceCross.length];

        cardElement.appendChild(imageWrapperElement);
        cardElement.appendChild(linkElement);
        cardElement.appendChild(priceElement);
        imageWrapperElement.appendChild(cart);
        cardElement.appendChild(priceCrossElement);
        swiperWrapperPhones.appendChild(cardElement);     
      });
    })
    .catch(error => {
      console.log(error);
    });
});



// 
var swiper3 = new Swiper(".containerSix", {
  spaceBetween: 30,
   speed: 2000,
  autoplay: {
    delay: 3000, 
  },
  loop: true,
});




// official store 
var swiper4 = new Swiper(".containerSeven .swiper", {
  slidesPerView: 6,
  grid: {
    rows: 3, // set rows to 3
    fill: 'row'
  },
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0:{
      slidesPerView: 2.47,
      spaceBetween: 10,
      grid: {
        rows: 3,
        fill: 'row'
      }
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 10,
      grid: {
        rows: 3,
        fill: 'row'
      }
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
      grid: {
        rows: 3,
        fill: 'row'
      }
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 10,
      grid: {
        rows: 3,
        fill: 'row'
      }
    }
  }
});


// nivea offical
const categoriesNivea = ["dog", "car", "cat", "table", "baby", "phone", "shirts", "shoes", "refrigerator", "fan"];
const niveaPrice = ["#2000", "#2500", "#4000", "#3400", "#14000", "#1400", "#6200", "#5400", "#3400", "#7600"];
const niveaPriceCross = ["#1500", "#2400", "#3800", "#2400", "#12000", "#1100", "#6150", "#5000", "#3100", "#7500"];

const swiperWrapperNivea = document.querySelector('#nivea');

categoriesNivea.forEach((category) => {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&image_type=photo&per_page=4`;
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      data.hits.forEach((hit, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('swiper-slide', 'items');
        const imageWrapperElement = document.createElement('div');
        imageWrapperElement.classList.add('image-wrapper');
        const imageElement = document.createElement('img');
        imageElement.src = hit.webformatURL;
        imageElement.alt = hit.tags;
        imageWrapperElement.appendChild(imageElement);
        const linkElement = document.createElement('h4');

        if (hit.tags.length < 25) {
          linkElement.textContent = hit.tags;
        } else {
          const truncatedTags = hit.tags.substring(0, 15) + "...";
          linkElement.textContent = truncatedTags;
        }

        const priceElement = document.createElement('h5');
        priceElement.textContent = niveaPrice[(index + categoriesNivea.indexOf(category)) % niveaPrice.length];

        const cart = document.createElement('a')
        cart.innerHTML = `<i class='bx bx-cart-alt'></i>`
        cart.href = '#'

        const priceCrossElement = document.createElement('h5');
        priceCrossElement.classList.add('cross')
        priceCrossElement.textContent = niveaPriceCross[(index + categoriesNivea.indexOf(category)) % niveaPriceCross.length];

        cardElement.appendChild(imageWrapperElement);
        cardElement.appendChild(linkElement);
        cardElement.appendChild(priceElement);
        imageWrapperElement.appendChild(cart);
        cardElement.appendChild(priceCrossElement);
        swiperWrapperNivea.appendChild(cardElement);
      });
    })
    .catch(error => {
      console.log(error);
    });
});



// Oraimo offical
const categoriesOraimo = ["dog", "car", "cat", "table", "baby", "phone", "shirts", "shoes", "refrigerator", "fan"];
const oraimoPrice = ["#2000", "#2500", "#4000", "#3400", "#14000", "#1400", "#6200", "#5400", "#3400", "#7600"];
const oraimoPriceCross = ["#1500", "#2400", "#3800", "#2400", "#12000", "#1100", "#6150", "#5000", "#3100", "#7500"];

const swiperWrapperOraimo = document.querySelector('#oraimo');

categoriesOraimo.forEach((category) => {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&image_type=photo&per_page=4`;
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      data.hits.forEach((hit, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('swiper-slide', 'items');
        const imageWrapperElement = document.createElement('div');
        imageWrapperElement.classList.add('image-wrapper');
        const imageElement = document.createElement('img');
        imageElement.src = hit.webformatURL;
        imageElement.alt = hit.tags;
        imageWrapperElement.appendChild(imageElement);
        const linkElement = document.createElement('h4');

        if (hit.tags.length < 25) {
          linkElement.textContent = hit.tags;
        } else {
          const truncatedTags = hit.tags.substring(0, 15) + "...";
          linkElement.textContent = truncatedTags;
        }

        const priceElement = document.createElement('h5');
        priceElement.textContent = oraimoPrice[(index + categoriesOraimo.indexOf(category)) % oraimoPrice.length];

        const cart = document.createElement('a')
        cart.innerHTML = `<i class='bx bx-cart-alt'></i>`
        cart.href = '#'

        const priceCrossElement = document.createElement('h5');
        priceCrossElement.classList.add('cross')
        priceCrossElement.textContent = oraimoPriceCross[(index + categoriesOraimo.indexOf(category)) % oraimoPriceCross.length];

        cardElement.appendChild(imageWrapperElement);
        cardElement.appendChild(linkElement);
        cardElement.appendChild(priceElement);
        imageWrapperElement.appendChild(cart);
        cardElement.appendChild(priceCrossElement);
        swiperWrapperOraimo.appendChild(cardElement);
      });
    })
    .catch(error => {
      console.log(error);
    });
});




// fashion
const categoriesFashion = ["dog", "car", "cat", "table", "baby", "phone", "shirts", "shoes", "refrigerator", "fan"];
const fashionPrice = ["#2000", "#2500", "#4000", "#3400", "#14000", "#1400", "#6200", "#5400", "#3400", "#7600"];
const fashionPriceCross = ["#1500", "#2400", "#3800", "#2400", "#12000", "#1100", "#6150", "#5000", "#3100", "#7500"];

const swiperWrapperFashion = document.querySelector('#fashion');

categoriesFashion.forEach((category) => {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&image_type=photo&per_page=4`;
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      data.hits.forEach((hit, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('swiper-slide', 'items');
        const imageWrapperElement = document.createElement('div');
        imageWrapperElement.classList.add('image-wrapper');
        const imageElement = document.createElement('img');
        imageElement.src = hit.webformatURL;
        imageElement.alt = hit.tags;
        imageWrapperElement.appendChild(imageElement);
        const linkElement = document.createElement('h4');

        if (hit.tags.length < 25) {
          linkElement.textContent = hit.tags;
        } else {
          const truncatedTags = hit.tags.substring(0, 15) + "...";
          linkElement.textContent = truncatedTags;
        }

        const priceElement = document.createElement('h5');
        priceElement.textContent = fashionPrice[(index + categoriesFashion.indexOf(category)) % fashionPrice.length];

        const cart = document.createElement('a')
        cart.innerHTML = `<i class='bx bx-cart-alt'></i>`
        cart.href = '#'

        const priceCrossElement = document.createElement('h5');
        priceCrossElement.classList.add('cross')
        priceCrossElement.textContent = fashionPriceCross[(index + categoriesFashion.indexOf(category)) % fashionPriceCross.length];

        cardElement.appendChild(imageWrapperElement);
        cardElement.appendChild(linkElement);
        cardElement.appendChild(priceElement);
        imageWrapperElement.appendChild(cart);
        cardElement.appendChild(priceCrossElement);
        swiperWrapperFashion.appendChild(cardElement);
      });
    })
    .catch(error => {
      console.log(error);
    });
});

// health
const categoriesHealth = ["dog", "car", "cat", "table", "baby", "phone", "shirts", "shoes", "refrigerator", "fan"];
const healthPrice = ["#2000", "#2500", "#4000", "#3400", "#14000", "#1400", "#6200", "#5400", "#3400", "#7600"];
const healthPriceCross = ["#1500", "#2400", "#3800", "#2400", "#12000", "#1100", "#6150", "#5000", "#3100", "#7500"];

const swiperWrapperHealth = document.querySelector('#health');

categoriesHealth.forEach((category) => {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&image_type=photo&per_page=4`;
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      data.hits.forEach((hit, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('swiper-slide', 'items');
        const imageWrapperElement = document.createElement('div');
        imageWrapperElement.classList.add('image-wrapper');
        const imageElement = document.createElement('img');
        imageElement.src = hit.webformatURL;
        imageElement.alt = hit.tags;
        imageWrapperElement.appendChild(imageElement);
        const linkElement = document.createElement('h4');

        if (hit.tags.length < 25) {
          linkElement.textContent = hit.tags;
        } else {
          const truncatedTags = hit.tags.substring(0, 15) + "...";
          linkElement.textContent = truncatedTags;
        }

        const priceElement = document.createElement('h5');
        priceElement.textContent = healthPrice[(index + categoriesHealth.indexOf(category)) % healthPrice.length];

        const cart = document.createElement('a')
        cart.innerHTML = `<i class='bx bx-cart-alt'></i>`
        cart.href = '#'

        const priceCrossElement = document.createElement('h5');
        priceCrossElement.classList.add('cross')
        priceCrossElement.textContent = healthPriceCross[(index + categoriesHealth.indexOf(category)) % healthPriceCross.length];

        cardElement.appendChild(imageWrapperElement);
        cardElement.appendChild(linkElement);
        cardElement.appendChild(priceElement);
        imageWrapperElement.appendChild(cart);
        cardElement.appendChild(priceCrossElement);
        swiperWrapperHealth.appendChild(cardElement);
      });
    })
    .catch(error => {
      console.log(error);
    });
});

// grocery
const categoriesGrocery = ["bread", "milk", "eggs", "rice", "pasta", "juice", "vegetables", "fruits", "snacks", "water"];
const groceryPrice = ["$3.50", "$2.00", "$2.50", "$6.00", "$3.75", "$4.25", "$1.50", "$1.75", "$2.25", "$1.00"];
const groceryPriceCross = ["$2.50", "$1.50", "$1.75", "$5.00", "$3.25", "$3.75", "$1.00", "$1.25", "$1.75", "$0.75"];

const swiperWrapperGrocery = document.querySelector('#grocery');

categoriesGrocery.forEach((category) => {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&image_type=photo&per_page=4`;
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      data.hits.forEach((hit, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('swiper-slide', 'items');
        const imageWrapperElement = document.createElement('div');
        imageWrapperElement.classList.add('image-wrapper');
        const imageElement = document.createElement('img');
        imageElement.src = hit.webformatURL;
        imageElement.alt = hit.tags;
        imageWrapperElement.appendChild(imageElement);
        const linkElement = document.createElement('h4');

        if (hit.tags.length < 25) {
          linkElement.textContent = hit.tags;
        } else {
          const truncatedTags = hit.tags.substring(0, 15) + "...";
          linkElement.textContent = truncatedTags;
        }

        const priceElement = document.createElement('h5');
        priceElement.textContent = groceryPrice[(index + categoriesGrocery.indexOf(category)) % groceryPrice.length];

        const cart = document.createElement('a')
        cart.innerHTML = `<i class='bx bx-cart-alt'></i>`
        cart.href = '#'

        const priceCrossElement = document.createElement('h5');
        priceCrossElement.classList.add('cross')
        priceCrossElement.textContent = groceryPriceCross[(index + categoriesGrocery.indexOf(category)) % groceryPriceCross.length];

        cardElement.appendChild(imageWrapperElement);
        cardElement.appendChild(linkElement);
        cardElement.appendChild(priceElement);
        imageWrapperElement.appendChild(cart);
        cardElement.appendChild(priceCrossElement);
        swiperWrapperGrocery.appendChild(cardElement);
      });
    })
    .catch(error => {
      console.log(error);
    });
});


// notification
const popupContainer = document.querySelector('.popup-container');
const popups = ['This is the first popup', 'This is the second popup', 'This is the third popup'];
let index = 0;
let popupTimer;

function showPopup() {
  const popupContent = popupContainer.querySelector('.popup-content');
  popupContent.querySelector('p').textContent = popups[index];
  popupContent.style.display = 'block';
  popupTimer = setTimeout(() => {
    popupContent.style.display = 'none';
    index = (index + 1) % popups.length;
    popupTimer = setTimeout(showPopup, 60000); // changed to 1 minute
  }, 3000);
}

function cancelPopup() {
  const popupContent = popupContainer.querySelector('.popup-content');
  popupContent.style.display = 'none';
  popupContainer.style.display = 'none';
  clearTimeout(popupTimer);
  index = (index + 1) % popups.length; // move to next index
  popupTimer = setTimeout(() => {
    showPopup();
    popupContent.querySelector('p').textContent = popups[index]; // update popup content
    popupContent.style.display = 'block';
    popupContainer.style.display = 'block';
  }, 60000); // use same duration as showPopup()
}

popupTimer = setTimeout(showPopup, 60000); // use same duration as cancelPopup()
popupContainer.querySelector('#cancel-button').addEventListener('click', cancelPopup);
