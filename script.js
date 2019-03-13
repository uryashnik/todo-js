//{todoName: 'Задача', cheked: false, id: 1}
let store = [];
const inputItem = document.getElementById('inputItem');
const btn = document.getElementById('btn');
let id = store.length;


function renderTask(task) {
    const div = document.createElement('div');
    const span = document.createElement('span');
    div.className = 'div-todo-task';
    span.innerHTML = task;
    const btnDel = document.createElement('button');
    btnDel.innerText = 'Delete';
    btnDel.className = 'btn-delete';
    div.appendChild(span);
    div.appendChild(btnDel);
    let list = document.getElementById('list');
    list.appendChild(div);
}
//Добавление новой записи в хранилище.
function addTaskToStore() {
    const inputValue = inputItem.value;
    if (inputValue.length > 0) {
        const storeItem = { todoName: inputValue, cheked: false, id }
        const newArr = [...store, storeItem];
        store = newArr;
        id++;
        console.log(store);
        renderTask(inputValue);
        document.getElementById('inputItem').value = '';
    } else {
        alert('Укажите название задачи')
    };
};



btn.addEventListener('click', addTaskToStore);