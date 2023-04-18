
      const API_KEY = "34748321-56ec586673804760cca13f7f6";
      const searchQuery = "cat";
      const imageType = "photo";
      const perPage = 6;

      const sell = document.querySelector("#sell");

      const apiUrl = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=${imageType}&per_page=${perPage}&orientation=vertical&min_height=500&min_width=400`;


      fetch(apiUrl)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          data.hits.forEach((hit) => {
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
          });
        })
        .catch((error) => {
          console.log(error);
        });
  
