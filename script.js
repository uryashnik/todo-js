//{todoName: 'Задача', cheked: false, id: 1}
let store = [];
const inputItem = document.getElementById('inputItem');
const btn = document.getElementById('btn');
let id = store.length;

//Добавление новой записи в хранилище.
function addTaskToStore(){
    const inputValue = document.getElementById('inputItem').value;
    if(inputValue.length > 0){
        const storeItem = {todoName: inputValue, cheked: false, id}
        const newArr = [...store, storeItem];
        store = newArr;
        id++;
        console.log(store);
        document.getElementById('inputItem').value = '';
    }else{
        alert('Укажите название задачи')
    }
};

function renderTask(){
    
}

btn.addEventListener('click', addTaskToStore);