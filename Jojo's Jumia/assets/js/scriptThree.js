// Pixabay API URL and key
		const apiURL = "https://pixabay.com/api/";
		const apiKey = "34748321-56ec586673804760cca13f7f6";

		// List of category keywords
		const categories = ["purse", "television", "pan", "table", "perfume", "cups","shirts","shoes","refrigerator","fan"];
        const myPrice = [" #2500", "#5000", "#3500", "#7500", "#2500", "#4000"]
        const myPriceTwo = [" #2700", "#9500", "#4500", "#7600", "#3900", "#4050"]

		// Loop through categories and fetch photos from Pixabay API
	// Loop through categories and fetch photos from Pixabay API
categories.forEach((category, index) => {
    const url = `${apiURL}?key=${apiKey}&q=${category}&image_type=photo`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // Create a card element for each photo
            const hit = data.hits[0]; // Use the first hit for simplicity
            const card = document.createElement("div");
            card.classList.add("myCard");

            // Create an image element and set its source to the image URL
            const img = document.createElement("img");
            img.src = hit.webformatURL;
            img.alt = hit.tags;

            // Create a paragraph element and set its text to the image tags
            const p = document.createElement("p");
            p.textContent = hit.tags;

            // Create an h4 element and set its text to the corresponding price from myPrice array
            const h4 = document.createElement("h4");
            h4.textContent = myPrice[index];

            // Create an h5 element and set its text to the original image size and price
            const h5 = document.createElement("h5");
            h5.innerHTML = `<s><span >${myPriceTwo[index]}</span> </s> `;

            // Append the image, paragraph, h4, and h5 elements to the card element
            card.appendChild(img);
            card.appendChild(p);
            card.appendChild(h4);
            card.appendChild(h5);

            // Append the card element to the sell container
            sell.appendChild(card);
        })
        .catch((error) => console.log(error));
});


// fast selling
// Define the categories and prices
const categoriesTwo = ["dog", "cat", "pig", "fish", "baby", "man"];
const fastSellPrice = [" #2500", "#5000", "#3500", "#7500", "#2500", "#4000"]
const fastSellTwo = [" #2700", "#9500", "#4500", "#7600", "#3900", "#4050"]

// Define the owl-carousel container and options
const owlContainer = document.querySelector(".fastt");
const owlOptions = {
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
};

// Shuffle the categories array
const shuffledCategories = categoriesTwo.sort(() => Math.random() - 0.5);

// Fetch photos for each category, create a card for each photo, and add the cards to the owl-carousel
shuffledCategories.slice(0, 15).forEach((category, index) => {
  const url = `${apiURL}?key=${apiKey}&q=${category}&image_type=photo`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Get a random hit from the data
      const randomHit = data.hits[Math.floor(Math.random() * data.hits.length)];

      // Create a card element for the hit
      const card = document.createElement("div");
      card.classList.add("myCard");

      // Create an image element and set its source to the hit's webformatURL
      const img = document.createElement("img");
      img.src = randomHit.webformatURL;
      img.alt = randomHit.tags;

      // Create a paragraph element and set its text to the hit's tags
      const p = document.createElement("p");
      p.textContent = randomHit.tags;

      // Create an h4 element and set its text to the corresponding price from fastSellPrice array
      const h4 = document.createElement("h4");
      h4.textContent = fastSellPrice[index % fastSellPrice.length];

      // Create an h5 element and set its text to the corresponding price from fastSellTwo array
      const h5 = document.createElement("h5");
      h5.innerHTML = `<s><span>${fastSellTwo[index % fastSellTwo.length]}</span> </s>`;

      // Append the image, paragraph, h4, and h5 elements to the card element
      card.appendChild(img);
      card.appendChild(p);
      card.appendChild(h4);
      card.appendChild(h5);

      // Append the card element to the owl-carousel
      owlContainer.appendChild(card);
    })
    .catch((error) => console.log(error));
});

// Initialize the owl-carousel with the options
$(document).ready(function() {
  $(".fastt").owlCarousel(owlOptions);
});



// ---------------------------------------
$(document).ready(function(){
  $('#carol').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2.3
        },
         500:{
            items:2.70
        },
        600:{
            items:4.3
        },
        1000:{
            items:6.22
        }
    }
  });
});









// --------


