


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
      slidesPerView: 3.0,
      spaceBetween: 5,
    },  
    640: {
      slidesPerView: 3.50,
      spaceBetween: 10,
    },

      768: {
      slidesPerView: 4.50,
      spaceBetween: 10,
    },
      900: {
      slidesPerView: 5,
      spaceBetween: 10,
    }
  },
});







    // -------------------------------------------------------------


function fetchMangaDetails(mangaIds, swiperId) {
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

        // Get the swiper wrapper element
        const swiperWrapper = document.querySelector(`#${swiperId} .swiper-wrapper`);

        // Create a new swiper slide
        const swiperSlide = document.createElement("div");
        swiperSlide.classList.add("swiper-slide");

        // Create and populate the elements
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
        h4.style.cursor = "pointer"; // Set the cursor to indicate it's clickable

        h4.addEventListener("click", () => {
          window.open(manga.url, "_blank"); // Open manga URL in a new tab
        });

        textBody.appendChild(h4);
        swiperSlide.appendChild(textBody);

        if (manga.chapters > 0) {
          const chapter = document.createElement("p");
          chapter.textContent = `Chapter ${manga.chapters}`;
          swiperSlide.appendChild(chapter);
        }

        // Append the swiper slide to the swiper wrapper
        swiperWrapper.appendChild(swiperSlide);

        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  });
}





const startId = 1;
const endId = 10;

// Check if mangaIds exist in localStorage
const storedMangaIds = localStorage.getItem('mangaIds');
let mangaIds;

if (storedMangaIds) {
  // Retrieve mangaIds from localStorage
  mangaIds = JSON.parse(storedMangaIds);
} else {
  // Generate mangaIds array
  mangaIds = [];
  for (let i = startId; i <= endId; i++) {
    mangaIds.push(i);
  }
  // Store mangaIds in localStorage
  localStorage.setItem('mangaIds', JSON.stringify(mangaIds));
}

const startIds = 10;
const endIds = 20;

// Check if mangaId exist in localStorage
const storedMangaId = localStorage.getItem('mangaId');
let mangaId;

if (storedMangaId) {
  // Retrieve mangaId from localStorage
  mangaId = JSON.parse(storedMangaId);
} else {
  // Generate mangaId array
  mangaId = [];
  for (let i = startIds; i <= endIds; i++) {
    mangaId.push(i);
  }
  // Store mangaId in localStorage
  localStorage.setItem('mangaId', JSON.stringify(mangaId));
}

fetchMangaDetails(mangaIds, 'swiperOne'); // Display in swiperOne container
fetchMangaDetails(mangaId, 'swiperTwo'); // Display in swiperTwo container





