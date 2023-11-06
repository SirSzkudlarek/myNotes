const addBtn = document.querySelector('.add');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const deleteAllBtn = document.querySelector('.delete-all');
const notePanel = document.querySelector('.note-panel');
const noteArea = document.querySelector('.note-area');
const noteTitleSelect = document.querySelector('#category');
const noteError = document.querySelector('.error');
const noteText = document.querySelector('#text');


const openPanel = () => {
  notePanel.style.display = 'flex';
}

const closePanel = () => {
  notePanel.style.display = 'none';
  noteError.style.visibility = 'hidden'
}

const checkNote = () => {
  const textTitle = noteTitleSelect.options[noteTitleSelect.selectedIndex].text;
  noteError.style.visibility = 'hidden'

  if(textTitle !== '- wybierz kategorię -' && noteText.value !== '') {
    createNote()
    noteText.value = '';
    noteTitleSelect.value = 0;
  } else {
    noteError.style.visibility = 'visible'
  }
}

const createNote = () => {
  const textTitle = noteTitleSelect.options[noteTitleSelect.selectedIndex].text;
  const note = document.createElement('div');
  note.classList.add('note');

  const noteHeader = document.createElement('div');
  noteHeader.classList.add('note-header');
  note.appendChild(noteHeader);

  const h3 = document.createElement('h3');
  h3.classList.add('note-title');
  h3.textContent = textTitle;
  noteHeader.appendChild(h3);

  const button = document.createElement('button');
  button.classList.add('delete-note');
  noteHeader.appendChild(button);

  const i = document.createElement('i');
  i.classList.add('fas', 'fa-times', 'icon');
  button.appendChild(i);

  const noteBody = document.createElement('div');
  noteBody.classList.add('note-body');
  noteBody.textContent = noteText.value;
  note.appendChild(noteBody);

  if(textTitle === 'Inne') {
    note.style.backgroundColor = 'rgb(rgb(255, 243, 0)';
  } else if(textTitle === 'Praca') {
    note.style.backgroundColor = 'rgb(2, 237, 205)';
  } else if(textTitle === 'Zakupy') {
    note.style.backgroundColor = 'rgb(170, 0, 255)';
  } else {
    note.style.backgroundColor = 'red';
  }

  noteArea.appendChild(note);
  closePanel();
}

const deleteAllNotes = () => {
  if(noteArea.innerHTML !== '') {
    noteArea.innerHTML = '';
  } else {
    alert('Twoja lista notatek już jest pusta!');
  }
}

addBtn.addEventListener('click', openPanel);
saveBtn.addEventListener('click', checkNote);
cancelBtn.addEventListener('click', closePanel);
deleteAllBtn.addEventListener('click', deleteAllNotes);

document.addEventListener("click", function(e){
  const target = e.target.closest('.delete-note');

  if(target){
    target.closest('.note').remove();
  }
});


