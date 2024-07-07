const input = document.querySelector('#favchap');
if (input.value !='') { }


const button = document.querySelector('button');
button.addEventListener('click', function() {  });
button.addEventListener('click', () => {  });


const list = document.querySelector('#list');

const li = document.createElement('li');
const deleteButton = createElement('button');

li.textContent = input.value;

li.append(deleteButton);
list.append(li);

deleteButton.addEventListener('click', function () {
    list.removeChild(li);

});

input.focus();
input.value = '';
chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

  function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);

    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
  }

  function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
  }

  function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
  }

  function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
  }
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);