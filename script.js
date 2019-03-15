//{todoName: 'Задача', cheked: false, id: 1}
let store = [];
const inputItem = document.getElementById('inputItem');
const btn = document.getElementById('btn');
let id = store.length;


//добавление новой записи
function addNewTask({ todoName: task, cheked, id }) {
    const span = document.createElement('span');
    if (cheked){
        span.className = "checked";
    };
    span.innerHTML = task;
    span.addEventListener('click', () => changeStatusCheked(id));
    const btnDel = document.createElement('button');
    btnDel.innerText = 'Delete';
    btnDel.className = 'btn-delete';
    btnDel.addEventListener('click', () => deleteTask(id));
    const div = document.createElement('div');
    div.className = 'div-todo-task';
    div.appendChild(span);
    div.appendChild(btnDel);
    return div;
};


//Обновление данных в списке задач.
function addTasksTolist() {
    let list = document.getElementById('list');
    list.innerHTML = '';
    store.forEach(element => {
        list.appendChild((addNewTask(element)));
    });
};

function changeStatusCheked(id){
    const idx = store.findIndex((el) => +el.id === +id);
    store[idx].cheked = !store[idx].cheked;   // проверить!!!
    console.log(store[idx].cheked);
    addTasksTolist();
};

//Удаление задачи.
function deleteTask(id) {
    const idx = store.findIndex((el) => +el.id === +id);
    console.log(idx);
    const newArr = [
        ...store.slice(0, idx),
        ...store.slice(idx + 1)
    ];
    store = [...newArr];
    console.log(store);
    addTasksTolist();

};

//Добавление новой записи в хранилище.
function addTaskToStore() {
    const inputValue = inputItem.value.charAt(0).toUpperCase() + inputItem.value.slice(1);
    if (inputValue.length > 0) {
        const storeItem = { todoName: inputValue, cheked: false, id }
        const newArr = [...store, storeItem];
        store = [...newArr];
        id++;
        console.log(store);
        addTasksTolist();
        document.getElementById('inputItem').value = '';
    } else {
        alert('Укажите название задачи');
    };
};

btn.addEventListener('click', addTaskToStore);
