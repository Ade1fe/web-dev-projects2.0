    

 $(document).ready(function() {
  $('.search-bar').hide();

  $('#icon-search').click(function() {
    $('.search-bar').toggle();
  });
});


    
    
    
    
    
    
    let themeButton = document.querySelector("#theme");
    themeButton.onclick = () => {
        if (themeButton.classList.contains('bx-moon')) {
            themeButton.classList.replace('bx-moon', 'bx-sun');
            document.body.classList.add('active');
        } else {
            themeButton.classList.replace('bx-sun', 'bx-moon');
            document.body.classList.remove('active');
        }
    }





    // -----------------
      // Get the header element
  const header = document.querySelector("header");

  // Create a new div element to copy the content
  let copyDiv = document.querySelector("#copyDiv");
  

  // Clone the header element and remove the .copy class from the cloned elements
  const clonedHeader = header.cloneNode(true);
  const clonedHeaderLiElements = clonedHeader.querySelectorAll("li.copy");
  clonedHeaderLiElements.forEach((element) => {
    element.classList.remove("copy");
  });

  // Copy the modified HTML content of the cloned header to the copyDiv
  copyDiv.innerHTML = clonedHeader.innerHTML;

  // Get the open and close buttons
  let openBtn = document.querySelector("#openBtn");

  openBtn.onclick = () => {
    if (openBtn.classList.contains("bx-menu")) {
      openBtn.classList.replace("bx-menu", "bx-x");
      copyDiv.classList.add("open");
    } else {
      openBtn.classList.replace("bx-x", "bx-menu");
      copyDiv.classList.remove("open");
    }
  };

  // Get the last li element within the ul in copyDiv
  const ul = copyDiv.querySelector("ul");
  const lastLi = ul.lastElementChild;
  lastLi.id = "menu-btn";
  lastLi.remove();

  console.log(lastLi);







const menuTwo = document.querySelector("#menuTwo");
menuTwo.addEventListener("click", () => {
  if (menuTwo.classList.contains("bx-dots-vertical-rounded")) {
    menuTwo.classList.replace("bx-dots-vertical-rounded", "bx-x");
  } else {
    menuTwo.classList.replace("bx-x", "bx-dots-vertical-rounded");
  }

  const smallHide = document.querySelectorAll(".small-hide");
  smallHide.forEach(item => item.classList.toggle("activeTwo"));
});






// my adverts
// const pixabayApiKey = '34748321-56ec586673804760cca13f7f6';
// const pixabayBaseUrl = 'https://pixabay.com/api';
// const pixabayEndpoint = `${pixabayBaseUrl}/?key=${pixabayApiKey}&q=job&image_type=photo&per_page=40`;

// const adzunaApiKey = '02786c33c3cf2d6b3ed4996c322f3e3f';
// const adzunaBaseUrl = 'https://api.adzuna.com/v1';
// const adzunaEndpoint = `${adzunaBaseUrl}/api/jobs/gb/search/1`;
// const adzunaQueryParams = {
//   app_id: '9f5cec5c',
//   app_key: adzunaApiKey,
//   results_per_page: 40, // Adjust the number of jobs per page as desired
// };

// const advertContainer = document.getElementById('advert-container');

// fetch(pixabayEndpoint)
//   .then((response) => response.json())
//   .then((pixabayData) => {
//     const imageList = pixabayData.hits;

//     fetchAdzunaJobs(imageList);
//   })
//   .catch((error) => {
//     console.error('Error occurred:', error);
//   });

// function fetchAdzunaJobs(imageList) {
//   const adzunaQueryString = Object.keys(adzunaQueryParams)
//     .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(adzunaQueryParams[key])}`)
//     .join('&');
//   const adzunaUrl = `${adzunaEndpoint}?${adzunaQueryString}`;

//   fetch(adzunaUrl)
//     .then((response) => response.json())
//     .then((adzunaData) => {
//       const jobList = adzunaData.results;
//       let currentIndex = 0;

//       function changeAdvert() {
//         const job = jobList[currentIndex];
//         const image = imageList[currentIndex];

//         const advertPost = document.createElement('div');
//         advertPost.classList.add('advert-post');

//         const advertImage = document.createElement('img');
//         advertImage.src = image.webformatURL;
//         advertImage.alt = 'Advert Image';

//         const advertDetails = document.createElement('div');
//         advertDetails.classList.add('advert-details');

//         const advertTitle = document.createElement('h2');
//         advertTitle.classList.add('advert-title');
//         advertTitle.textContent = job.title;

//         const jobDescription = document.createElement('p');
//         jobDescription.classList.add('advert-description');
//         jobDescription.textContent = job.description;

//         if (jobDescription.textContent.length > 60) {
//           jobDescription.textContent = jobDescription.textContent.slice(0, 60) + '...';
//         }

//         const readMoreLink = document.createElement('a');
//         readMoreLink.href = job.redirect_url;
//         readMoreLink.classList.add('btn');
//         readMoreLink.textContent = 'Read More';

//         advertDetails.appendChild(advertTitle);
//         advertDetails.appendChild(jobDescription);
//         advertDetails.appendChild(readMoreLink);

//         advertPost.appendChild(advertImage);
//         advertPost.appendChild(advertDetails);

//         advertContainer.innerHTML = ''; // Clear existing advertisement
//         advertContainer.appendChild(advertPost);

//         currentIndex = (currentIndex + 1) % jobList.length; // Update current index for the next advertisement

//         setTimeout(changeAdvert, 3000); // Schedule the next advertisement change after 3 seconds
//       }

//       setTimeout(changeAdvert, 3000); // Start the advertisement rotation after 3 seconds
//     })
//     .catch((error) => {
//       console.error('Error occurred:', error);
//     });
// }


// -----------------------------------------


