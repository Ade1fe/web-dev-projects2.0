const newNoteBtn = document.getElementById('new-note-btn');
const mainContent = document.getElementById('main-content');

function createNewNote() {
  const newNote = document.createElement('div');
  newNote.className = 'newNoteDiv';
  const textArea = document.createElement('textarea');
  newNote.append(textArea);
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

// Save file button
const saveFileBtn = document.getElementById('saveFile');
saveFileBtn.addEventListener('click', saveFile);

function saveFile() {
  const textToSave = document.querySelector('.newNoteDiv textarea').value;
  const blob = new Blob([textToSave], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const fileName = prompt('Please enter a file name:', 'note.txt');
  if (fileName !== null) {
    const foldersList = Object.keys(folders);
    const folderName = prompt('Please choose a folder to save the file to:\n\n' + foldersList.join('\n').toLocaleUpperCase() + '\n\n', 'Personal');
    const folder = folders[folderName.toLowerCase()];
    if (folder !== undefined) {
      const link = document.createElement('a');
      link.download = fileName;
      link.href = url;
      link.textContent = fileName;
      const listItem = document.createElement('li');
      listItem.appendChild(link);
      folder.appendChild(listItem);
      console.log('File saved to ' + folderName);

      // Save file to local storage
      const files = JSON.parse(localStorage.getItem(folderName)) || [];
      files.push({ name: fileName, content: textToSave });
      localStorage.setItem(folderName, JSON.stringify(files));
      updateFileCounts();
    } else {
      console.log('Folder does not exist.');
    }
  }
}


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
