


const appTitles = [
  "Download Official Mangaowl Android App",
  "Discover the Best Manga on Mangaowl",
  "Read Manga Anytime, Anywhere",
  "Explore a Vast Collection of Manga Titles",
];

const appTitleElement = document.getElementById("app-title");
let currentIndex = 0;

function changeAppTitle() {
  appTitleElement.innerText = appTitles[currentIndex];
  currentIndex = (currentIndex + 1) % appTitles.length;
}

// Change the app title every 3 seconds
setInterval(changeAppTitle, 3000);




// swiperOne
var mySwiperOne = new Swiper(".mySwiperOne", {
  slidesPerView: 7,
  spaceBetween: 20,
  pagination: {
    el: ".mySwiperOne .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
      0: {
      slidesPerView: 2.10,
      spaceBetween: 10,
    },
      320: {
      slidesPerView: 2.20,
      spaceBetween: 10,
    },
    
    420: {
      slidesPerView: 3.0,
      spaceBetween: 5,
    },  
    640: {
      slidesPerView: 3.50,
      spaceBetween: 10,
    },

      768: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
      900: {
      slidesPerView: 7,
      spaceBetween: 10,
    }
  },
});



// swiperOne
var mySwiperTwo = new Swiper(".mySwiperTwo", {
  slidesPerView: 5,
  spaceBetween: 20,
  pagination: {
    el: ".mySwiperOne .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
      0: {
      slidesPerView: 2.10,
      spaceBetween: 10,
    },
      320: {
      slidesPerView: 2.20,
      spaceBetween: 10,
    },
    
    420: {
      slidesPerView: 2.10,
      spaceBetween: 5,
    },  
    640: {
      slidesPerView: 3.10,
      spaceBetween: 10,
    },

      768: {
      slidesPerView: 4.10,
      spaceBetween: 10,
    },
      900: {
      slidesPerView: 5,
      spaceBetween: 10,
    }
  },
});


function generateMangaIds(start, end) {
  const mangaIds = [];
  for (let i = start; i <= end; i++) {
    mangaIds.push(i);
  }
  return mangaIds;
}







    // -------------------------------------------------------------

function fetchMangaDetails(mangaIds, swiperId) {
  const apiUrl = 'https://api.jikan.moe/v4/manga/';

  const genreMap = {};

  const delay = 1000; // Delay in milliseconds between each request

  mangaIds.forEach((mangaId, index) => {
    const mangaUrl = `${apiUrl}${mangaId}/full`;

    setTimeout(() => {
      fetch(mangaUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          const manga = data.data;

          const swiperWrapper = document.querySelector(`#${swiperId} .swiper-wrapper`);
          const swiperSlide = document.createElement("div");
          swiperSlide.classList.add("swiper-slide");

          const img = document.createElement("img");
          img.src = manga.images.jpg.large_image_url;
          img.alt = manga.title;
          swiperSlide.appendChild(img);

          const textBody = document.createElement("div");
          textBody.classList.add("text-body");

          const h4 = document.createElement("h4");
          let title = manga.title;

          if (title.length > 15) {
            title = title.slice(0, 15) + "...";
          }

          h4.textContent = title;
          h4.style.cursor = "pointer";
          h4.addEventListener("click", () => {
            window.open(manga.url, "_blank");
          });

          textBody.appendChild(h4);
          swiperSlide.appendChild(textBody);

          if (manga.chapters > 0) {
            const chapter = document.createElement("p");
            chapter.textContent = `Chapter ${manga.chapters}`;
            swiperSlide.appendChild(chapter);
          }

          swiperWrapper.appendChild(swiperSlide);

          // Update genreMap here if needed

        
        })
        .catch(error => {
          console.log(error);
          //  const swiperWrapper = document.querySelector(`#${swiperId} .swiper-wrapper`);
          // const errorSlide = document.createElement("div");
          // errorSlide.classList.add("swiper-slide");
          //  errorSlide.style.display = 'flex';
          //   errorSlide.style.justifyContent = 'center';
          //    errorSlide.style.alignItems = 'center'; 
          // errorSlide.style.textAlign ="center";
          // errorSlide.textContent = "Loading manga details ";
          // swiperWrapper.appendChild(errorSlide);
        });
    }, index * delay); // Delay each request by multiplying index with delay
  });
}

 







    // ------------------------------------------------












// ----------------
//main-container function
function fetchMangaDetail(mangaIds) {
  const apiUrl = 'https://api.jikan.moe/v4/manga/';

  mangaIds.forEach(mangaId => {
    const mangaUrl = `${apiUrl}${mangaId}/full`;

    fetch(mangaUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const manga = data.data;

        const recommendationContainer = document.querySelector('#recommendation');

        const picDiv = document.createElement('div');
        picDiv.classList.add('pic');

        const img = document.createElement('img');
        img.src = manga.images.jpg.large_image_url;
        img.alt = manga.title;
        picDiv.appendChild(img);

        const conDiv = document.createElement('div');
        conDiv.classList.add('con');

        const h4 = document.createElement('h4');
        let title = manga.title;
        if (title.length > 75) {
          title = title.slice(0, 75) + '...';
        }
        h4.textContent = title;
        conDiv.appendChild(h4);

        const p = document.createElement('p');
        p.textContent = `Chapter ${manga.chapters}`;
        conDiv.appendChild(p);

        picDiv.appendChild(conDiv);

        recommendationContainer.appendChild(picDiv);

        h4.addEventListener('click', () => {
          window.open(manga.url, '_blank');
        });
      })
      .catch(error => {
        console.log(error);
      });
  });
}

window.onload = () => {
  const start = 540;
  const end = 580;
  const manga = generateMangaIds(start, end);
  fetchMangaDetail(manga);



  // swipes
  
const startId1 = 1;
const endId1 = 30;
const mangaId1 = generateMangaIds(startId1, endId1);



const startId2 = 31;  
const endId2 = 50;
const mangaId2 = generateMangaIds(startId2, endId2);

const startId3 = 50;  
const endId3 = 80;
const mangaId3 = generateMangaIds(startId3, endId3);

const startId4 = 81;  
const endId4 = 120;
const mangaId4 = generateMangaIds(startId4, endId4);

const startId5 = 80;  
const endId5 = 100;
const mangaId5 = generateMangaIds(startId5, endId5);

const startId6 = 100;  
const endId6 = 120;
const mangaId6 = generateMangaIds(startId6, endId6);

const startId7 = 120;  
const endId7 = 140;
const mangaId7 = generateMangaIds(startId7, endId7);

const startId8 = 140;
const endId8 = 190;
const mangaId8 = generateMangaIds(startId8, endId8);

const startId9 = 180;
const endId9 = 220;
const mangaId9 = generateMangaIds(startId9, endId9);

const startId10 = 220;
const endId10 = 260;
const mangaId10 = generateMangaIds(startId10, endId10);

fetchMangaDetails(mangaId1, 'swiperOne');
fetchMangaDetails(mangaId2, 'swiperTwo');
fetchMangaDetails(mangaId3, 'swiperThree');
fetchMangaDetails(mangaId4, 'swiperFour');
fetchMangaDetails(mangaId5, 'swiperFive');
fetchMangaDetails(mangaId6, 'swiperSix');
fetchMangaDetails(mangaId7, 'swiperSeven');
fetchMangaDetails(mangaId8, 'swiperEight');
fetchMangaDetails(mangaId9, 'swiperNine');
fetchMangaDetails(mangaId10, 'swiperTen');


};




  // https://api.jikan.moe/v4/manga/{id}/recommendations


// review section
let displayedReviews = 15; // Number of reviews to display initially
const reviewsPerPage = 1; // Number of reviews to fetch per page

function getReviews(mangaId, page) {
  fetch(`https://api.jikan.moe/v4/manga/${mangaId}/reviews?page=${page}&limit=${reviewsPerPage}`)
    .then(response => response.json())
    .then(data => {
      const reviewContainer = document.getElementById('review-container');

      if (data.data && data.data.length > 0) {
        // Iterate over the reviews and create the HTML structure for each review
        data.data.forEach(review => {
          if (displayedReviews > 0) {
            const reviewPost = document.createElement('div');
            reviewPost.className = 'review-post';

            const reviewImage = document.createElement('img');
            reviewImage.src = review.user.images.jpg.image_url;
            reviewImage.alt = review.user.username;

            const reviewText = document.createElement('div');
            reviewText.className = 'review-text';

            const reviewTitle = document.createElement('h4');
            reviewTitle.textContent = review.user.username;
            reviewText.appendChild(reviewTitle);

            const reviewContent = document.createElement('p');
            reviewContent.textContent = review.review;

            const maxLength = 120; // Maximum number of characters to display
            const ellipsis = "...";

            if (reviewContent.textContent.length > maxLength) {
              const truncatedText = reviewContent.textContent.slice(0, maxLength) + ellipsis;
              reviewContent.textContent = truncatedText;

              const readMoreButton = document.createElement('button');
              readMoreButton.textContent = 'Read More';

              let isExpanded = false; // Track whether the full content is expanded or not

              readMoreButton.addEventListener('click', () => {
                if (isExpanded) {
                  // If already expanded, truncate the content again
                  reviewContent.textContent = truncatedText;
                  readMoreButton.textContent = 'Read More';
                } else {
                  // If not expanded, show the full content
                  reviewContent.textContent = review.review;
                  readMoreButton.textContent = 'Read Less';
                }

                isExpanded = !isExpanded; // Toggle the expanded state
              });

              reviewText.appendChild(reviewContent);
              reviewText.appendChild(document.createElement('br'));
              reviewText.appendChild(readMoreButton);
            } else {
              reviewText.appendChild(reviewContent);
            }

            // Append the elements to the review container
          
            reviewPost.appendChild(reviewImage);
            reviewPost.appendChild(reviewText);
            reviewContainer.appendChild(reviewPost);

            displayedReviews--; // Decrement the number of displayed reviews
          }
        });

        if (displayedReviews <= 0) {
          // If all reviews are displayed, hide the "Show More" button
          const showMoreButton = document.getElementById('show-more-button');
          showMoreButton.style.display = 'block';
        }
      } else {
        console.log(`No reviews found for manga ID: ${mangaId}.`);
      }
    })
    .catch(error => console.log(error));
}

function showMoreReviews() {
  const showMoreButton = document.getElementById('show-more-button');
  showMoreButton.style.display = 'none'; // Hide the "Show More" button temporarily

  const mangaIds = [1, 2]; // Replace with the actual manga IDs you want to fetch reviews for

  mangaIds.forEach(mangaId => {
    const pagesToFetch = Math.ceil(displayedReviews / reviewsPerPage);
    for (let page = 1; page <= pagesToFetch; page++) {
      getReviews(mangaId, page);
    }
  });

  displayedReviews += reviewsPerPage;
}

// Call the getReviews function for the initial set of reviews
const mangaIDs = [33, 45]; // Replace with the actual manga IDs you want to fetch reviews for

mangaIDs.forEach(mangaIDs => {
  const pagesToFetch = Math.ceil(displayedReviews / reviewsPerPage);
  for (let page = 1; page <= pagesToFetch; page++) {
    getReviews(mangaIDs, page);
  }
});

// Add event listener to the "Show More" button
const showMoreButton = document.getElementById('show-more-button');
showMoreButton.addEventListener('click', showMoreReviews);



// localStorage.clear();



// links

const numberOfManga = 500; // Number of manga IDs to retrieve
const mangaIds = []; // Array to store manga IDs

// Generate an array of manga IDs
for (let i = 1; i <= numberOfManga; i++) {
  mangaIds.push(i);
}

const mangaData = {}; // Object to store manga data by manga ID

// Fetch manga data for each ID and store the desired data
Promise.all(
  mangaIds.map(mangaId => {
    const url = `https://api.jikan.moe/v4/manga/${mangaId}/full`;
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.data) {
          const manga = data.data;

           const mangaInfo = {
            title: manga.title,
            imageTitle: manga.images.jpg.large_image_url,
            chapters: manga.chapters,
            genres: manga.genres.map(genre => genre.name)
          };

          mangaData[mangaId] = mangaInfo;
        }
      })
      .catch(error => {
        console.log(`Error fetching data for manga ID ${mangaId}:`, error);
      });
  })
)
  .then(() => {
    // Store mangaData in local storage
    localStorage.setItem('mangaData', JSON.stringify(mangaData));

    const storedMangaData = localStorage.getItem('mangaData');
    console.log('Stored manga data:', storedMangaData);

    console.log('Manga data stored in local storage.');

    // Call the function to update genre elements
    updateGenreElements();
  })
  .catch(error => {
    console.log('Error:', error);
  });


  // Retrieve stored manga data from local storage
const storedMangaData = localStorage.getItem('mangaData');

// Check if a genre exists in the mangaData object (case-insensitive)
function checkGenreExists(genre) {
  return mangaData && Object.values(mangaData).some(manga =>
    manga.genres.some(g => g.toLowerCase() === genre.toLowerCase())
  );
}

// Update HTML elements based on genre existence
function updateGenreElements() {
  const genreLinks = document.querySelectorAll('.genre-link');

  genreLinks.forEach(link => {
    const genre = link.dataset.genre;

    if (checkGenreExists(genre)) {
      link.classList.add('genre-exists');
    } else {
      link.classList.remove('genre-exists');
    }
  });
}

// Call the function to update genre elements
updateGenreElements();

// Update genre link click handlers
// Assuming you have retrieved and stored the mangaData in localStorage as follows:
// const storedMangaData = localStorage.getItem('mangaData');

// Convert the stored mangaData from a string to an object
// const mangaData = JSON.parse(storedMangaData);

// Function to handle genre link click
function handleGenreLinkClick(event) {
  event.preventDefault();

  const clickedLink = event.target;
  const genre = clickedLink.dataset.genre;

  const matchingManga = Object.values(mangaData).filter(manga =>
    manga.genres.some(g => g.toLowerCase() === genre.toLowerCase())
  );

  if (matchingManga.length > 0) {
    console.log(`Manga with genre "${genre}":`);
    matchingManga.forEach(manga => {
      console.log(`- Manga Title: ${manga.title}`);
      console.log(`- Manga image: ${manga.imageTitle}`);
      console.log(`  Chapters: ${manga.chapters}`);
      console.log(`  Genres: ${manga.genres.join(', ')}`);
    });

    // Redirect to single.html page with genre parameter
    window.location.href = `../pages/single.html?genre=${encodeURIComponent(genre)}&mangaData=${encodeURIComponent(JSON.stringify(mangaData))}`;
  } else {
    console.log(`No manga found with genre "${genre}".`);
    showModal(`No manga found with genre "${genre}".`);
  }
}



function showModal(message) {
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');

  modalMessage.textContent = message;
  modal.style.display = 'flex'; // Show the modal

  // Hide the modal after a certain time
  setTimeout(() => {
    modal.style.display = 'none'; // Hide the modal
  }, 3000); // Hide after 3 seconds (adjust as needed)
}


// Add click event listener to genre links
const genreLinks = document.querySelectorAll('.genre-link');
genreLinks.forEach(link => {
  link.addEventListener('click', handleGenreLinkClick);
});

