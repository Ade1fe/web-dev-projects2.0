
      fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          let html = "<option value=''>All</option>";
          for (let i = 0; i < data.meals.length; i++) {
            const country = data.meals[i].strArea;
            html += `<option value='${country}'>${country}</option>`;
          }
          document.getElementById("countryInput").innerHTML = html;
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });

// --------------------------------------------------------------


function search() {
  const input = document.getElementById('searchInput').value;
  const country = document.getElementById('countryInput').value;
  let mealUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`;
  if (country) {
    mealUrl += `&a=${country}`;
  }
  const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;
  const resultsContainer = document.getElementById('resultsContainer');
  resultsContainer.innerHTML = ''; // clear previous search results
  Promise.all([
    fetch(mealUrl),
    fetch(cocktailUrl)
  ])
    .then((responses) => {
      // Check if responses are ok
      const responsePromises = responses.map((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      });
      return Promise.all(responsePromises);
    })
    .then((data) => {
   const meals = data[0].meals || [];
const cocktails = data[1].drinks || [];
const prices = [1800, 1400, 1100, 4300, 3000, 1200, 1300, 3050, 2200, 1300, 3300, 4000, 1400, 4500, 4300];
let html = '';

meals.forEach((meal) => {
  const price = prices[Math.floor(Math.random() * prices.length)];
  html += `
    <div class="resultCard">
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <i class="fa fa-cart-plus" data-product="${meal.idMeal}"></i>
      <h4>${meal.strMeal}</h4>
      <p>${meal.strArea}</p>
      <p>Price: #${price}</p>
    </div>
  `;
});

cocktails.forEach((cocktail) => {
  const price = prices[Math.floor(Math.random() * prices.length)];
  html += `
    <div class="resultCard">
      <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
      <i class="fa fa-cart-plus" data-product="${cocktail.idDrink}"></i>
      <h4>${cocktail.strDrink}</h4>
      <p>${cocktail.strCategory}</p>
      <p>Price: #${price}</p>
    </div>
  `;
});

      resultsContainer.innerHTML = html;

      // Add an event listener to the cart icon
      const cartIcons = document.querySelectorAll(".fa-cart-plus");
      cartIcons.forEach((icon) => {
        icon.addEventListener("click", function(event) {
          const productId = event.target.dataset.product;
          const productCard = event.target.closest(".resultCard");
          const productName = productCard.querySelector("h4").textContent;
         const productPrice = parseFloat(productCard.querySelector("p:last-of-type").textContent.match(/\d+(\.\d+)?/)[0]);
          const productImage = productCard.querySelector("img").src;
          const product = {
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage
          };
          addToCart(product);
        });
      });
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const productIndex = cart.findIndex(p => p.id === product.id);
  if (productIndex !== -1) {
    const quantity = parseInt(prompt("How many do you want to add to cart?", "1"));
    if (!isNaN(quantity)) {
      cart[productIndex].quantity += quantity;
    } else {
      alert("Invalid quantity entered");
    }
  } else {
    const quantity = parseInt(prompt("How many do you want to add to cart?", "1"));
    if (!isNaN(quantity)) {
      cart.push({...product, quantity: quantity});
    } else {
      alert("Invalid quantity entered");
    }
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log(cart)
}


