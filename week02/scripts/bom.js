const input = document.querySelector('#favchap');
if (input.value !='') { }


const button = document.querySelector('button');
button.addEventListener('click', function() {  });
button.addEventListener('click', () => {  });


const list = document.querySelector('#list');

const li = document.createElement('li');
const deleteButton = createElement('button');

li.textContent = input.value;
deleteButton.textContent = 'X';

li.append(deleteButton);
list.append(li);

deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});

input.focus();
input.value = '';