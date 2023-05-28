


$(document).ready(function() {
    const loader = $('.loader');
    const logo = $('.logo');
    const containerOne = $(".containerOne");
  
    logo.hide();
    containerOne.hide();
  
    function removeLoader() {
      loader.hide();
      logo.show();
    }
  
    setTimeout(removeLoader, 1000);
  
    const playButton = $(".logo button");
    playButton.click(function() {
      logo.hide();
      containerOne.show();
    });
  });
  




  // Get the parent container A-Z
  var alphabetContainer = document.getElementById('alphabet-container');

  // Add event listener to the parent container
  alphabetContainer.addEventListener('click', function(event) {
    // Check if the clicked element has the 'alphabet-button' class
    if (event.target.classList.contains('alphabet-button')) {
      var letter = event.target.getAttribute('data-letter');
      showAlert(letter);
    }
  });

  function showAlert(letter) {
    alert(letter);
  }





  // Get the modal element
var modal = document.getElementById('modal');

// Get the button that opens the modal
var openBtn = document.getElementById('openBtn');

// Get the close button
var closeBtn = document.getElementById('closeBtn');

// Function to open the modal
function openModal() {
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// Event listener for open button click
openBtn.addEventListener('click', openModal);

// Event listener for close button click
closeBtn.addEventListener('click', closeModal);














const displayResult = document.querySelector(".layerTwo");
const displayTitle = document.querySelector(".title h2");

let shuffledWords;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

async function fetchData() {
  const words = ["late", "dog", "happy", "big", "leave"];

  const antonyms = await getAntonyms(words);
  // console.log(antonyms);

  shuffledWords = shuffleArray(words).map(word => word.toUpperCase());

  shuffledWords.forEach(async (word) => {
    displayTitle.innerHTML += ` ${word}`;

    const matchingAntonyms = antonyms.find(item => item.word.toLowerCase() === word.toLowerCase());
    if (matchingAntonyms) {
      console.log(`Matching Antonyms for ${matchingAntonyms.word}:`, matchingAntonyms.antonyms);

      // // Update HTML with antonyms
      const antonymsContainer = document.createElement('div');
      const wordTitle = document.createElement('h3');
      wordTitle.textContent = `${matchingAntonyms.word}:`;
      antonymsContainer.appendChild(wordTitle);

      const antonymsList = document.createElement('ul');
      matchingAntonyms.antonyms.forEach(antonym => {
        const listItem = document.createElement('li');
        listItem.textContent = antonym.word;
        antonymsList.appendChild(listItem);

        const letters = antonym.word.split('');

   
        letters.forEach((letter) => {
          const p = document.createElement('p');
          p.classList.add('letter');
          // p.textContent = letter;
          displayResult.appendChild(p);
        });


      });

      // antonymsContainer.appendChild(antonymsList);
      // displayResult.appendChild(antonymsContainer);




    }
  });
}

async function getAntonyms(words) {
  const antonymsPromises = words.map(async (word, index) => {
    const url = `https://api.datamuse.com/words?rel_ant=${word}`;
    const response = await fetch(url);
    const data = await response.json();

    const antonyms = [];

    if (data.length > 0) {
      const definition = await getDefinition(data[0].word);
      antonyms.push({
        word: data[0].word,
        definition: definition
      });
    }

    // console.log(`${index}:`, antonyms[0]);

    return {
      word,
      antonyms
    };
  });

  const antonymsData = await Promise.all(antonymsPromises);
  return antonymsData;
}








async function getDefinition(word) {
  const url = `https://api.datamuse.com/words?sp=${word}&md=d`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.length > 0 && "defs" in data[0]) {
      return data[0].defs[0];
    } else {
      return "No definition available";
    }
  } catch (error) {
    console.error(error);
    return "No definition available";
  }
}

fetchData();

