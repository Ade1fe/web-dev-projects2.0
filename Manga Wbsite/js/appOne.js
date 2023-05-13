


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
      })
      .catch(error => {
        console.error(error);
      });
  });
}

function generateMangaIds(start, end, storageKey) {
  const storedMangaIds = localStorage.getItem(storageKey);
  if (storedMangaIds) {
    return JSON.parse(storedMangaIds);
  } else {
    const mangaIds = [];
    for (let i = start; i <= end; i++) {
      mangaIds.push(i);
    }
    localStorage.setItem(storageKey, JSON.stringify(mangaIds));
    return mangaIds;
  }
}

const startId = 1;
const endId = 10;
const mangaIds = generateMangaIds(startId, endId, 'mangaIds');

const startIds = 10;
const endIds = 20;
const mangaId = generateMangaIds(startIds, endIds, 'mangaId');

fetchMangaDetails(mangaIds, 'swiperOne');
fetchMangaDetails(mangaId, 'swiperTwo');


// ----------------

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

        const p = document.createElement('p');
        p.textContent = `Chapter ${manga.chapters}`;
        conDiv.appendChild(p);

        const h4 = document.createElement('h4');
        let title = manga.title;
        if (title.length > 15) {
          title = title.slice(0, 15) + '...';
        }
        h4.textContent = title;
        conDiv.appendChild(h4);

        picDiv.appendChild(conDiv);

        recommendationContainer.appendChild(picDiv);

        h4.addEventListener('click', () => {
          window.open(manga.url, '_blank');
        });

      })
      .catch(error => {
        console.error(error);
      });
  });
}

const start = 30;
const end = 40;

const storedManga = localStorage.getItem('mangaId');
let manga;

if (storedManga) {
  manga = JSON.parse(storedManga);
} else {
  manga = Array.from({ length: end - start + 1 }, (_, index) => start + index);
  localStorage.setItem('mangaId', JSON.stringify(manga));
}

fetchMangaDetail(manga);


  // https://api.jikan.moe/v4/manga/{id}/recommendations


