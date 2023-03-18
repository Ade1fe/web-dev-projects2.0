// have setting option you can change password and email 

const newNoteBtn = document.getElementById('new-note-btn');
const mainContent = document.getElementById('main-content');
// const div = document.getElementById('div');

function createNewNote() {
  const newNoteDiv = document.querySelector('.newNoteDiv');
  if (newNoteDiv) {
    return; // If the new note div is already open, do nothing
  }

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
  selectOption.className = 'select';

  // Create the default option "Select a Folder"
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = 'Select a Folder';
  defaultOption.disabled = true;
  defaultOption.selected = true;
  selectOption.appendChild(defaultOption);

  // Create an option for each folder
  for (const folderName in folders) {
    const option = document.createElement('option');
    option.value = folderName;
    // option.textContent = folderName;
      option.textContent = folderName.charAt(0).toUpperCase() + folderName.slice(1);
    selectOption.appendChild(option);
  }

  div.appendChild(title);
  div.appendChild(selectOption);
  div.appendChild(date);

  newNote.appendChild(div);

  const textArea = document.createElement('textarea');
  textArea.placeholder = "Write your thought(s) here..."
  textArea.className = 'textarea';
  newNote.appendChild(textArea);

  const saveFileBtn = document.createElement('button');
  saveFileBtn.textContent = 'Save file';
  saveFileBtn.id = 'saveFile';
  saveFileBtn.className = 'saveFile';
  saveFileBtn.addEventListener('click', saveFile);
  newNote.appendChild(saveFileBtn);

  mainContent.appendChild(newNote);

  const openFileDiv = document.querySelector('.open-file');
  if (openFileDiv) {
    openFileDiv.remove();
    newNoteBtn.disabled = false;
  }
}



newNoteBtn.addEventListener('click', createNewNote);
document.addEventListener('DOMContentLoaded', function() {
  createNewNote();
});

//  newNoteBtn.removeEventListener('click', createNewNote);

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
  const textToSave = document.querySelector('.newNoteDiv textarea').value;
  const textTitleToSave = document.querySelector('.newNoteDiv input.title').value;
  const textDateToSave = document.querySelector('.newNoteDiv h3.date').innerText;

  const fileNameRegex = /^[^<>:"/\\|?*\u0000-\u001F]+$/; // Regular expression to check for invalid characters in file name
  const fileNamePrompt = prompt('Please enter a file name:', textTitleToSave );
  if(textTitleToSave !== ""){

    if (fileNamePrompt !== undefined && fileNameRegex.test(fileNamePrompt &&textTitleToSave)) { // Check if file name is valid
    const fileName = fileNamePrompt.trim(); // Trim any leading/trailing spaces and add .txt extension

 const listItem = document.createElement('li');
listItem.className = 'sub-item';


// create star icon and add it to the listItem
const starIcon = document.createElement('i');
starIcon.className = 'bi bi-star'; // assuming you're using Bootstrap icons
listItem.appendChild(starIcon);

// add event listener to the star icon
starIcon.addEventListener('click', (event) => {
  event.preventDefault(); // prevent file from opening
  starIcon.classList.toggle('bi-star-fill'); // toggle full star icon
 starIcon.style.color = '#FFB703';
  starIcon.classList.toggle('bi-star'); // toggle empty star icon
  if (starIcon.classList.contains('bi-star-fill')) {
    const cloneItem = listItem.cloneNode(true); // create a clone of the listItem
    const iTags = cloneItem.querySelectorAll('i'); // select all i tags in the cloned list item
    iTags.forEach(tag => tag.remove()); // remove all i tags from the cloned list item
    moveToStar.appendChild(cloneItem); // add the clone to moveToStar
  } else {
    const cloneItem = moveToStar.querySelector('.sub-item:last-child'); // get the last added clone item
    if (cloneItem) {
      moveToStar.removeChild(cloneItem); // remove the clone item from moveToStar
    }
  }
});

// assuming moveToStar already exists in the DOM
const moveToStar = document.getElementById('starred');


    // Create a delete icon
  const deleteIcon = document.createElement('i');
deleteIcon.className = 'bi bi-trash-fill';
 deleteIcon.style.color = 'red';
deleteIcon.addEventListener('click', function(event) {
  event.stopPropagation(); // Prevent the click event from bubbling up to the list item
  
  // Remove the icon and `i` tag from the listItem
  const listItemIcon = listItem.querySelector('.bi-trash-fill');
  if (listItemIcon) {
    listItemIcon.parentNode.removeChild(listItemIcon);
  }

  listItem.remove();

   // Remove the cloned item from `moveToStar`
  const clonedItems = moveToStar.querySelectorAll('.sub-item');
  clonedItems.forEach((clonedItem) => {
    if (clonedItem.dataset.originalId === listItem.dataset.id) {
      clonedItem.remove();
    }
  });


const icon = listItem.querySelector('i');
if (icon) {
  icon.remove();
}

  const moveToTrash = document.getElementById("trash");
  moveToTrash.appendChild(listItem); 


  // Add a click event listener to the moved listItem in the trash folder
  listItem.addEventListener('click', function(event) {
    event.stopPropagation();
    listItem.remove(); 
  });

});




    const fileNameText = document.createElement('span');
    fileNameText.textContent = fileName;

    // Add the file name text to the list item
    listItem.appendChild(fileNameText);

    // Add the delete icon to the list item after the file name text
    fileNameText.insertAdjacentElement('afterend', deleteIcon);


    listItem.addEventListener('click', function() {
      openFile(fileName, textToSave,textTitleToSave);
    });
    
     const folderSelect = document.getElementById('folderSelect');
    const folderName = folderSelect.value;
   if(folderName !== ""){
    
    const folder = folders[folderName];
    folder.appendChild(listItem);
    alert(textTitleToSave +' saved to ' + folderName);
   }else{
    alert('Kindly pick a folder')
   }

    const fileContent = `${textTitleToSave}\n\n${textDateToSave}\n\n${textToSave}`; // Combine title, date, and content into a single string
    const blob = new Blob([fileContent], {type: "text/plain;charset=utf-8"});
    
    const note = {
      title: textTitleToSave,
      content: textToSave,
      date: textDateToSave
    };
    const files = JSON.parse(localStorage.getItem(folderName)) || [];
    files.push({ name: fileName, note: note });
    localStorage.setItem(folderName, JSON.stringify(files));

const folders2 = {
  personal: {
    span: document.getElementById('personal-span'),
    count: countListItems('personal')
  },
  label: {
    span: document.getElementById('label-span'),
    count: countListItems('label')
  },
  work: {
    span: document.getElementById('work-span'),
    count: countListItems('work')
  },
  design: {
    span: document.getElementById('design-span'),
    count: countListItems('design')
  },
  business: {
    span: document.getElementById('business-span'),
    count: countListItems('business')
  }
};

// Update the text content of each folder span to show the corresponding list item count
for (const folder in folders2) {
  folders2[folder].span.innerText = folders2[folder].count;
}

function updateFolderItemCount(folderName) {
  const folder = folders2[folderName];
  const listItemCount = countListItems(folderName);
  folder.count = listItemCount;
  folder.span.innerText = listItemCount;
}

// Call this function whenever a file is deleted from a folder
function onDeleteFile(folderName) {
  updateFolderItemCount(folderName);
}

// Call this function whenever a file is added to a folder
function onAddFile(folderName) {
  updateFolderItemCount(folderName);
}

// Log the folder name and corresponding list item count for each folder
for (const folder in folders2) {
  console.log(`The number of list items in ${folder} is: ${folders2[folder].count}`);
}






  } else {
    console.log('Invalid file name.');
  }

  }else{
    alert("Title must not be blank")
  }
  
}


//count li in list item

function countListItems(folderName) {
  const folder = folders[folderName];
  const listItems = folder.querySelectorAll('li.sub-item');
  return listItems.length;
}






//openfile
function openFile(fileName, fileContent, titleToSave, previousFolder) {
 
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
    titleToSave = textTitleToSave; // update the titleToSave variable
  }

  let content = document.createElement('div');
  content.innerText = fileContent;
  openFileDiv.appendChild(content);

 const newNoteButton = document.createElement('button');
newNoteButton.textContent = 'Create New Note';
  newNoteButton.className = 'saveFile';
newNoteButton.addEventListener('click', () => {
  createNewNote(titleToSave);
  

   const existingOpenFileDiv = document.querySelector('.open-file');
if (existingOpenFileDiv) {
  existingOpenFileDiv.remove(); // remove the current open file div after creating a new note
}

 
 
});
openFileDiv.appendChild(newNoteButton);


  mainContent.appendChild(openFileDiv);
}




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


// Get the profile
const inputValues = JSON.parse(localStorage.getItem("inputValues"));

if (inputValues && inputValues.length > 0) {
  const lastInput = inputValues[inputValues.length - 1];
  if (lastInput && lastInput.fullName && lastInput.email && lastInput.password) {
    const usersName = document.querySelector("#name");
    usersName.innerHTML = `${lastInput.fullName.charAt(0).toUpperCase() + lastInput.fullName.slice(1)}`;
    const userEmail = document.querySelector("#email");
    userEmail.innerHTML = `<i class="bi bi-envelope"></i> ${lastInput.email}`;
    const userPassword = document.querySelector("#password");
    userPassword.innerHTML = `<span class="material-symbols-outlined">key</span> ${lastInput.password}`;
  }
}

function isValidEmail(email) {
  // This regex matches most valid email addresses
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Hide changePassword
// $(".changePassword").hide();
const changePassword = document.querySelector("#changePassword");
changePassword.addEventListener("click", () => {
  console.log("changePassword");
  const changePasswordPrompt = prompt("Enter new Password?");
  console.log(changePasswordPrompt);
  if (changePasswordPrompt === "") {
    alert("Password is required");
  } else if (changePasswordPrompt.length < 8) {
    alert("Password must be at least 8 characters");
  } else {
    const userPassword = document.querySelector("#password");
    userPassword.innerHTML = `<span class="material-symbols-outlined">key</span> ${changePasswordPrompt}`;
    alert("Password Changed Successfully");
  }
});

const changeEmail = document.querySelector("#changeEmail");
changeEmail.addEventListener("click", () => {
  const changeEmailPrompt = prompt("Enter new Email?");
  if (changeEmailPrompt === "") {
    alert("Email is required");
  } else if (!isValidEmail(changeEmailPrompt)) {
    alert("Email is invalid");
  } else {
    const userEmail = document.querySelector("#email");
    userEmail.innerHTML = `<i class="bi bi-envelope"></i> ${changeEmailPrompt}`;
    alert("Email Changed Successfully");
  }
});
