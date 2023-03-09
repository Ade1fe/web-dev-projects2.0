const buttonElements = document.querySelectorAll('.buttons button');
let id;
const imgContainer = document.getElementById("imgContainer");
imgContainer.classList.add('imgContainer');
const search = document.getElementById("search");

buttonElements.forEach(button => {
  button.addEventListener('click', () => {
    console.log(button.textContent);
    id = button.textContent;
    const filterByCategories = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`;
    fetch(filterByCategories)
      .then(response => response.json())
      .then(data => {
        if (data.meals) {
       const h1 = document.createElement('h1');
      h1.classList.add("myHeader");
      h1.textContent = id;

    // Remove previous h1 if it exists
      const prevH1 = document.querySelector('.myHeader');
    if (prevH1) {
       prevH1.remove();
        }

      imgContainer.insertAdjacentElement('beforebegin', h1); // insert h1 before imgContainer
        alert("Swipe down to see results");

          imgContainer.innerHTML = ''; // clear previous search results
          data.meals.forEach(item => {
            console.log(item);
            const carouselItemContainer = document.createElement('div');
            carouselItemContainer.classList.add('carousel__item');
            const imageLink = document.createElement('a');
            imageLink.href = `single.html?id=${item.idMeal}`;
            const carouselItem = `
             <div class='card'>
             <div class='carousel__img'>
                <img src="${item.strMealThumb}" alt="${item.strMeal}" />
              </div>
              <div class='carousel__text'>
                <h3 class='carousel__title'>${item.strMeal}</h3>
              </div>
              <div class='carousel__text'>
                <a href="single.html?id=${item.idMeal}">more details</a>
              </div>

             </div>
            `;
            carouselItemContainer.innerHTML = carouselItem;
            carouselItemContainer.appendChild(imageLink);
            imgContainer.appendChild(carouselItemContainer);
          });
        } else {
          console.error('No meals found');
          alert(`No meals found`)
        }
      })
      .catch(error => console.error(error));
  });
});

const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
  const searchInput = document.getElementById('search').value;
  searchForMeal(searchInput);
});

const searchForMeal = async (query) => {
  const searchEndpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
  try {
    const response = await fetch(searchEndpoint);
    const data = await response.json();
    const meals = data.meals;
    displayMeals(meals);
  } catch (error) {
    console.log(error);
     alert(`No meals found`)
  }
};
const displayMeals = (meals) => {
  const imgContainer = document.getElementById('imgContainer');
  imgContainer.innerHTML = '';
  meals.forEach((meal) => {
    const carouselItemContainer = document.createElement('div');
    carouselItemContainer.classList.add('carousel__item');
    const imageLink = document.createElement('a');
    imageLink.href = `single.html?id=${meal.idMeal}`;
    const carouselItem = `
      <div class='carousel__img'>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      </div>
      <div class='carousel__text'>
        <h3 class='carousel__title'>${meal.strMeal}</h3>
      </div>
      <div class='carousel__text'>
        <a href="single.html?id=${meal.idMeal}">more details</a>
      </div>
    `;
    carouselItemContainer.innerHTML = carouselItem;
    carouselItemContainer.appendChild(imageLink);
    imgContainer.appendChild(carouselItemContainer);
  });
};





// scroll up
// Function to scroll up smoothly
function scrollToTop() {
  const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentPosition > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentPosition - currentPosition / 10);
  }
}

// Check for scroll event
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY || window.pageYOffset;
  if (scrollPosition > 500) {
    // If scroll position is more than 500px, show the button
    const scrollUpButton = document.getElementById('scroll-up-button');
    scrollUpButton.style.display = 'block';
  } else {
    // Otherwise, hide the button
    const scrollUpButton = document.getElementById('scroll-up-button');
    scrollUpButton.style.display = 'none';
  }
});

// Add click event to scroll up button
const scrollUpButton = document.getElementById('scroll-up-button');
scrollUpButton.addEventListener('click', function() {
  scrollToTop();
});





// open another div
function openAbout() {
  window.location.href = '../index.html#about';
}
function openOrder() {
  window.location.href = '../index.html#order';
}
function openContact() {
  window.location.href = '../index.html#contactR';
  console.log("ok")
}