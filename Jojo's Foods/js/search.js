 
 
 
 
 
 
//  <h1>MealDB Search</h1>
//     <form>
//       <label for="countryInput">Country:</label>
//       <select id="countryInput" name="country"></select><br />
//       <label for="nameInput">Name:</label>
//       <input type="text" id="nameInput" name="name" /><br />
//       <button type="button" onclick="searchMeal()">Search</button>
//     </form>
//     <div id="results"></div>

 
 
 
 // Populate the country dropdown with data from the API
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

        
//----------------------------------------
const drinksPrices = [500, 700, 1000, 1200, 1500, 1800, 2000, 2200, 2500];

function generateRandomPrice() {
  return drinksPrices[Math.floor(Math.random() * drinksPrices.length)];
}

function searchMeal() {
  const name = document.getElementById("nameInput").value;
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const container = document.querySelector(".myContainn");
      let html = "";
      if (data.meals) {
        for (let i = 0; i < Math.min(data.meals.length, 40); i++) {
          const meal = data.meals[i];
          const price = generateRandomPrice();
          html += `
            <div class="cardd">
              <div class="card-immg">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <i class="fa fa-cart-plus"></i>
              </div>
              <div class="card-texxt">
                <h4>${meal.strMeal}</h4>
                <p>#${price}</p>
              </div>
            </div>
          `;
        }
      } else {
        html = "<p>No results found.</p>";
      }
      container.innerHTML = html;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}