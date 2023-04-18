const API_KEY = "34748321-56ec586673804760cca13f7f6";
const searchQuery = "fashion+creams+bag+watch+sneakers";
const imageType = "photo";
const perPage = 6;

const sell = document.querySelector("#sell");

const apiUrl = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=${imageType}&per_page=${perPage}&orientation=vertical&min_height=500&min_width=400`;

fetch(apiUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let count = { fashion: 0, creams: 0, bag: 0, watch: 0, sneakers: 0 };
    data.hits.forEach((hit) => {
      if (hit.tags.includes("fashion") && count.fashion < 2) {
        // Show only 2 images for fashion
        count.fashion++;
        createCard(hit);
      } else if (hit.tags.includes("creams") && count.creams < 1) {
        // Show only 1 image for creams
        count.creams++;
        createCard(hit);
      } else if (hit.tags.includes("bag") && count.bag < 1) {
        // Show only 1 image for bag
        count.bag++;
        createCard(hit);
      } else if (hit.tags.includes("watch") && count.watch < 1) {
        // Show only 1 image for watch
        count.watch++;
        createCard(hit);
      } else if (hit.tags.includes("sneakers") && count.sneakers < 1) {
        // Show only 1 image for sneakers
        count.sneakers++;
        createCard(hit);
      }
    });
  })
  .catch((error) => {
    console.log(error);
  });

function createCard(hit) {
  // Create a new card element for each image
  const card = document.createElement("div");
  card.classList.add("myCard");

  // Create an image element and set its source to the image URL
  const img = document.createElement("img");
  img.src = hit.webformatURL;
  img.alt = hit.tags;

  // Create a paragraph element and set its text to the image tags
  const p = document.createElement("p");
  p.textContent = hit.tags;

  // Create an h4 element and set its text to the image preview width and height
  const h4 = document.createElement("h4");
  h4.textContent = `Preview Size: ${hit.previewWidth} x ${hit.previewHeight}`;

  // Append the image, paragraph, and h4 elements to the card element
  card.appendChild(img);
  card.appendChild(p);
  card.appendChild(h4);

  // Append the card element to the sell container
  sell.appendChild(card);
}



console.log("connected")