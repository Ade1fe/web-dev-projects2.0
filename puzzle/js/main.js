


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
  
    setTimeout(removeLoader, 5000);
  
    const playButton = $(".logo button");
    playButton.click(function() {
      logo.hide();
      containerOne.show();
    });
  });
  






async function fetchData() {
    const words = ["late", "dog", "happy", "big" , "leave"]; 
    const antonyms = await getAntonyms(words);
    console.log(antonyms);
  }

//   setTimeout(fetchData, 2000);
  
  async function getAntonyms(words) {
    const antonymsPromises = words.map(async word => {
      const url = `https://api.datamuse.com/words?rel_ant=${word}`;
      const response = await fetch(url);
      const data = await response.json();
  
      const antonyms = await Promise.all(
        data.map(async entry => {
          const definition = await getDefinition(entry.word);
          return {
            word: entry.word,
            definition: definition
          };
        })
      );
  
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
  
  