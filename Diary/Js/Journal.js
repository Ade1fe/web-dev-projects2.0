


const newNoteBtn = document.getElementById('new-note-btn');
const mainContent = document.getElementById('main-content');
// const div = document.getElementById('div');

function createNewNote() {
  const newNote = document.createElement('div');
  newNote.className = 'newNoteDiv';

    const div = document.createElement('div');
    div.className = 'div';

  const date = document.createElement('input');
  date.type = 'date';
  date.className = 'date';

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



//save file
function saveFile() {
  const textToSave = document.querySelector('.newNoteDiv textarea').value;
  const fileName = prompt('Please enter a file name:', 'note.txt');

  if (fileName !== null) {
    const folderSelect = document.getElementById('folderSelect');
    const folderName = folderSelect.value;

    const folder = folders[folderName];
    if (folder !== undefined) {
      const listItem = document.createElement('li');
      listItem.className = 'sub-item'
      listItem.textContent = fileName;
      listItem.addEventListener('click', function() {
        openFile(fileName, textToSave);
        console.log("here")
      });
      folder.appendChild(listItem);
      console.log('File saved to ' + folderName);

   
      const files = JSON.parse(localStorage.getItem(folderName)) || [];
      files.push({ name: fileName, content: textToSave });
      localStorage.setItem(folderName, JSON.stringify(files));
      updateFileCounts();
    } else {
      console.log('Folder does not exist.');
    }
  }
}



//openfile
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


  let content = document.createElement('textarea');
  content.value = fileContent;
  openFileDiv.appendChild(content);

  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save';
  saveButton.addEventListener('click', () => {
   
    saveFile(previousFolder, fileName, content.value);
    displayFolder(previousFolder);
  });
  openFileDiv.appendChild(saveButton);

  mainContent.appendChild(openFileDiv);
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