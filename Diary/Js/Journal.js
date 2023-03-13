


const newNoteBtn = document.getElementById('new-note-btn');
const mainContent = document.getElementById('main-content');
// const div = document.getElementById('div');

function createNewNote() {
  const newNote = document.createElement('div');
  newNote.className = 'newNoteDiv';

    const div = document.createElement('div');
    div.className = 'div';

 const date = document.createElement('h3');
date.className = 'date';
date.innerHTML = dates;

  const title = document.createElement('input');
title.type = 'text';
title.className = 'title';
title.placeholder = 'Title start here...';


  const selectOption = document.createElement('select');
  selectOption.id = 'folderSelect';
  selectOption.className = 'select'

  // Create the default option "Select a Folder"
  const defaultOption = document.createElement('option');
  defaultOption.value = "";
  defaultOption.textContent = "Select a Folder";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  selectOption.appendChild(defaultOption);

  // Create an option for each folder
  for (const folderName in folders) {
    const option = document.createElement('option');
    option.value = folderName;
    option.textContent = folderName;
    selectOption.appendChild(option);
  }

  div.appendChild(title);
  div.appendChild(selectOption);
  div.appendChild(date);

  newNote.appendChild(div);

  const textArea = document.createElement('textarea');
  textArea.className ='textarea'
  newNote.appendChild(textArea);

  const saveFileBtn = document.createElement('button');
  saveFileBtn.textContent = 'Save file';
  saveFileBtn.id = 'saveFile';
  saveFileBtn.className = 'saveFile';
  saveFileBtn.addEventListener('click', saveFile);
  newNote.appendChild(saveFileBtn);

  mainContent.appendChild(newNote);
  newNoteBtn.removeEventListener('click', createNewNote);
}


newNoteBtn.addEventListener('click', createNewNote);

// Folders
const folders = {
  personal: document.getElementById('Personal'),
  label: document.getElementById('Label'),
  work: document.getElementById('Work'),
  design: document.getElementById('Design Insight'),
  business: document.getElementById('Business')
};


//get DAte
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const currentMonth = monthNames[currentDate.getMonth()];
const currentDay = currentDate.getDate();
const dates = `${currentMonth} ${currentDay}, ${currentYear} <i class="bi bi-calendar4-week"></i>`




//save file
function saveFile() {
  const textToSave = document.querySelector('.newNoteDiv textarea') ? document.querySelector('.newNoteDiv textarea').value : '';
  const textTitleToSave = document.querySelector('.newNoteDiv input.title') ? document.querySelector('.newNoteDiv input.title').value : '';
  const textDateToSave = document.querySelector('.newNoteDiv h3.date') ? document.querySelector('.newNoteDiv h3.date').innerText : '';

  const fileNameRegex = /^[^<>:"/\\|?*\u0000-\u001F]+$/; // Regular expression to check for invalid characters in file name
  const fileNamePrompt = prompt('Please enter a file name:', textTitleToSave + '.txt');
  if (fileNamePrompt !== undefined && fileNameRegex.test(fileNamePrompt)) { // Check if file name is valid
    const fileName = fileNamePrompt.trim(); // Trim any leading/trailing spaces and add .txt extension

    const folderSelect = document.getElementById('folderSelect');
    const folderName = folderSelect ? folderSelect.value : null;
    if (folderName === null) {
      console.log('Could not find folder.');
      return;
    }

    const listItem = document.createElement('li');
    listItem.className = 'sub-item';
    listItem.textContent = fileName;
    listItem.addEventListener('click', function() {
      openFile(fileName, textToSave);
    });

    const folder = folders[folderName];
    folder.appendChild(listItem);

    console.log('File saved to ' + folderName);

    const fileContent = `${textTitleToSave}\n\n${textDateToSave}\n\n${textToSave}`; // Combine title, date, and content into a single string
    const blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});

    if (textToSave.trim()) { // Check if textToSave is not empty or only whitespace
      // code to save file using the blob object here
    } else {
      console.log('Invalid file content.');
      return;
    }

    const note = {
      title: textTitleToSave,
      content: textToSave,
      date: textDateToSave
    };
    const files = JSON.parse(localStorage.getItem(folderName)) || [];
    files.push({ name: fileName, note: note });
    localStorage.setItem(folderName, JSON.stringify(files));
    updateFileCounts();
  } else {
    console.log('Invalid file name.');
  }
}










//openfile
// i want this function allow textarea editable and allow change to be save and update save file with the current value in thisteaxtarea
function openFile(fileName, fileContent, previousFolder) {
 
  const existingOpenFileDiv = document.querySelector('.open-file');
  if (existingOpenFileDiv) {
    existingOpenFileDiv.remove();
  }

  const newNoteDiv = document.querySelector('.newNoteDiv');
  if (newNoteDiv) {
    newNoteDiv.remove();
  }

  const openFileDiv = document.createElement('div');
  openFileDiv.classList.add('open-file');

  const title = document.createElement('h2');
  title.textContent = fileName;
  openFileDiv.appendChild(title);

  // const newNoteDiv = document.querySelector('.newNoteDiv');
  if (newNoteDiv) {
    const textDateToSave = newNoteDiv.querySelector('h3.date').innerText;
    const textTitleToSave = newNoteDiv.querySelector('input.title').value;
   
    const fileContentToSave = `${textDateToSave}\n\nTitle: ${textTitleToSave}\n\n${fileContent}`
    //  textDateToSave + " " + textTitleToSave + " " + fileContent;
    fileContent = fileContentToSave; // update the fileContent variable
  }

  let content = document.createElement('textarea');
  content.value = fileContent;
  openFileDiv.appendChild(content);

  const saveButton = document.createElement('button');
  saveButton.textContent = 'SaveSecond';
  saveButton.addEventListener('click', () => {
    saveFile(previousFolder, fileName, content.value);
    displayFolder(previousFolder);
  });
  openFileDiv.appendChild(saveButton);

  mainContent.appendChild(openFileDiv);
}


function displayFolder(folderName) {
  const folder = getFolder(folderName);
  const mainContent = document.querySelector('#main-content');

  if (!mainContent) {
    console.error('Could not find .main-content element.');
 const mainContent = document.createElement('div');
  mainContent.classList.add('main-content');
    return;
  }

  // Remove any existing content
  mainContent.innerHTML = '';

  // Add the folder name as a title
  const title = document.createElement('h2');
  title.textContent = folderName;
  mainContent.appendChild(title);

  // Add a button to create a new note
  const newNoteButton = document.createElement('button');
  newNoteButton.textContent = 'New Note';
  newNoteButton.addEventListener('click', () => {
    displayNewNoteForm(folderName);
  });
  mainContent.appendChild(newNoteButton);

  // Add a list of files in the folder
  const fileList = document.createElement('ul');
  for (const fileName of folder.files) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = fileName;
    link.addEventListener('click', () => {
      const fileContent = getFileContent(folderName, fileName);
      openFile(fileName, fileContent, folderName);
    });
    listItem.appendChild(link);
    fileList.appendChild(listItem);
  }
  mainContent.appendChild(fileList);
}



//
function getFolder(folderName) {
  const folder = folders[folderName];
  if (folder) {
    return folder;
  } else {
    // If the folder doesn't exist, create a new empty one
    const newFolder = { files: [] };
    folders[folderName] = newFolder;
    localStorage.setItem(folderName, JSON.stringify(newFolder));
    return newFolder;
  }
}





//  file count
function updateFileCounts() {
  for (const folderName in folders) {
    const files = JSON.parse(localStorage.getItem(folderName)) || [];
    // const files = folderName || [];
    const count = files.length;
    console.log(`Folder "${folderName}" has ${count} files.`);
    console.log(files);
  }
}


// Call the function to update file counts on page load
updateFileCounts();

// Toggle nested list items
const itemsWithNestedLists = document.querySelectorAll('li > ul');
itemsWithNestedLists.forEach(item => {
  item.parentElement.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});



// toggle sidebar
 $(document).ready(function(){
      //jquery for toggle sub menus
      $('.sub-btn').click(function(){
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
      });

      //jquery for expand and collapse the sidebar
      $('.menu-btn').click(function(){
        $('.side-bar').addClass('active');
        $('.menu-btn').css("visibility", "hidden");
      });

      $('.close-btn').click(function(){
        $('.side-bar').removeClass('active');
        $('.menu-btn').css("visibility", "visible");
      });
    });

    // localStorage.clear();


//Get the profile
 const inputValues = JSON.parse(localStorage.getItem("inputValues"));

if (inputValues && inputValues.length > 0) {
  const lastInput = inputValues[inputValues.length - 1];
  if (lastInput && lastInput.fullName && lastInput.email && lastInput.password) {
    const usersName = document.getElementById("name");
    usersName.innerHTML = `${lastInput.fullName.charAt(0).toUpperCase() + lastInput.fullName.slice(1)}`;
    const userEmail = document.getElementById("email");
    userEmail.innerHTML = `<i class="bi bi-envelope"></i> ${lastInput.email}`;
    const userPassword = document.getElementById("password");
    userPassword.innerHTML = `<span class="material-symbols-outlined">key</span> ${lastInput.password}`;
  }
}






