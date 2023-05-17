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
  const closeBtn = document.querySelector('.close-btn');

  modalMessage.textContent = message;
  modal.style.display = 'flex'; // Show the modal

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide the modal when close button is clicked
  });
}


// Add click event listener to genre links
const genreLinks = document.querySelectorAll('.genre-link');
genreLinks.forEach(link => {
  link.addEventListener('click', handleGenreLinkClick);
});
