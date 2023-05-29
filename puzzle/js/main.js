
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











//fetch
const displayResult = document.querySelector(".layerTwo");
const displayTitle = document.querySelector(".title h2");

let shuffledWords;
let currentIndex = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}



async function fetchData() {
  console.log("1");
  const words = ["late", "dog", "happy", "big", "leave"];
  shuffledWords = shuffleArray(words);
  displayTitle.textContent = shuffledWords[currentIndex];
  console.log("2");

  const antonyms = await getAntonyms(shuffledWords[currentIndex]);

  const matchingAntonyms = antonyms.find(
    item => item.word && item.word.toLowerCase() === shuffledWords[currentIndex].toLowerCase()
  );

  console.log("3");

  if (matchingAntonyms && matchingAntonyms.antonyms) {
    console.log(`Current Item: ${shuffledWords[currentIndex]}`);
    console.log(`Matching Antonyms for ${matchingAntonyms.word}:`, matchingAntonyms.antonyms);
    console.log("4");

    // Update HTML with antonyms
    const antonymsContainer = document.createElement('div');
    const wordTitle = document.createElement('h3');
    wordTitle.textContent = `${matchingAntonyms.word}:`;
    antonymsContainer.appendChild(wordTitle);

    const antonymsList = document.createElement('ul');
    antonymsList.setAttribute('id', 'antonyms-list');

    const antonyms = matchingAntonyms.antonyms;

    if (antonyms.length > 0) {
      const listItem = document.createElement('li');
      const letters = antonyms[0].split('');
      letters.forEach((letter) => {
        const span = document.createElement('span');
        span.classList.add('letter');
        listItem.appendChild(span);
      });
      antonymsList.appendChild(listItem);
    }

    // Append the antonyms list to the displayResult container
    displayResult.appendChild(antonymsContainer);
    displayResult.appendChild(antonymsList);

    const alphabetButtons = document.querySelectorAll('.alphabet-button');

alphabetButtons.forEach(button => {
  button.addEventListener('click', () => {
    const letter = button.dataset.letter;
    const listItem = document.querySelector('#antonyms-list li');
    const letters = listItem.querySelectorAll('.letter');

    const antWord = antonyms[0];
    const wordArray = antWord.split('');

    wordArray.forEach((wordLetter, index) => {
      if (wordLetter.toLowerCase() === letter.toLowerCase()) {
        letters[index].textContent = letter;
      }
    });

    const filledSpans = listItem.querySelectorAll('.letter:not(:empty)');

        if (filledSpans.length === letters.length) {
      letters.forEach((letter, index) => {
        letter.textContent = wordArray[index].toUpperCase();
      });
      setTimeout(passItem, 1500); // Delay the execution of passItem by 1 second
    }

  });
});



  }
}









function displayNextWord() {
  currentIndex++; // Increment the index to move to the next word
  if (currentIndex < shuffledWords.length) {
    displayTitle.textContent = shuffledWords[currentIndex];
    fetchData(); // Call fetchData again to populate the antonyms for the next word
  } else {
    console.log("No more words to display.");
  }
}



function passItem() {
  console.log("Word completed!");
  displayResult.innerHTML = ""; // Clear the current word's antonyms from the display
  displayNextWord(); // Call the function to display the next word
}





async function getAntonyms(word) {
  try {
    const response = await fetch(`https://api.datamuse.com/words?rel_ant=${word}`);
    const data = await response.json();
    const antonyms = [];

    if (data.length > 0) {
      const antonymWords = data.map(item => item.word);
      antonyms.push({
        word: word,
        antonyms: antonymWords
      });
    }

    console.log(`Antonyms for ${word}:`, antonyms);

    return antonyms;
  } catch (error) {
    console.error('Error retrieving antonyms:', error);
    return [];
  }
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

console.log("Calling fetchData");
fetchData();
