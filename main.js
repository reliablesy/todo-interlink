// [X] Toggle
// [X] Remove
// [X] Edit text
// [X] Clean text in input
// [X] CheckBox instead button
// [X] Save task in localStorage
// [X] Delete task in localStorage
// [] Edit task in localStorage
// [] Load tasks from localStorage on page load
// [] Persist between loads (Local storage)

const LIST_SAVE_KEY = 'key';
const list = {
    todos: []
};

function save(list) {
    const listString = JSON.stringify(list);
    localStorage.setItem(LIST_SAVE_KEY, listString);
}
let localAdd = document.getElementById('localAdd');

function f() {

    const i = localStorage.getItem(LIST_SAVE_KEY);
    const parseTodo = JSON.parse(i);
    for (let todoItem of parseTodo.todos) {

        const input = document.getElementById(`input-txt`);
        const root = document.getElementById(`todo-txt`);
        const wrapper = document.createElement(`div`);
        wrapper.className = "wrapper";

        const toggle = document.createElement(`input`);
        toggle.className = "toggleClass";

        const clean = document.createElement(`button`);
        clean.className = "cleanClass";

        const completeText = document.createElement(`span`);
        completeText.className = "completeTextClass";

        const todoText = document.createElement(`input`);
        todoText.className = "todoTextClass";

        // const tagImportant = document.createElement(`button`);
        // tagImportant.className = "tagImportantClass";

        todoText.value = todoItem.title;
        toggle.type = 'checkbox';
        clean.innerHTML = `Удалить`;
        input.value = '';
        completeText.innerText = `Выполнено!`;
        // tagImportant.innerText = `☑`;
        // tagImportant.className = "importantButton";

        root.appendChild(wrapper);
        wrapper.appendChild(todoText);
        wrapper.appendChild(toggle);
        wrapper.appendChild(clean);
        // wrapper.appendChild(tagImportant);

        // tagImportant.addEventListener(`click`, function () {
        //     if (todoItem.buttonImportantCheck == false) {
        //         tagImportant.innerText = `❌`;
        //     } else {
        //         tagImportant.innerText = `☑`;
        //     }
        //     todoItem.buttonImporatntCheck = !todoItem.buttonImportantCheck;
        //     console.log(todoItem.buttonImportantCheck);
        // });

        clean.addEventListener(`click`, function () {
            wrapper.remove();
            list.todos = list.todos.filter(value => todoItem !== value);
            save(list);

        });

        function mark() {
            todoText.style.textDecoration = `line-through`;
            completeText.style.display = `block`;
            todoText.before(completeText);
            todoText.style.transition = "2s";
            completeText.style.background = "rgba(0,0,0,.3)";
            todoText.style.background = "rgba(0,0,0,.3)";
            wrapper.style.transition = "2s";
            wrapper.style.background = "rgba(0,0,0,.3)";
            todoText.style.display = "none";
            // tagImportant.style.display = "none";
            todoText.style.display = "none";
        }

        function unmark() {
            completeText.style.display = `none`;
            todoText.style.textDecoration = `none`;
            wrapper.style.transition = "2s";
            wrapper.style.background = "url(\"assets/list-picture.jpg\")";
            todoText.style.display = "block";
            clean.style.display = "inline-block";
            // tagImportant.style.display = "inline-block";
        }

        toggle.addEventListener('click', () => {
            if (todoItem.checked === true) {
                unmark();
            } else {
                mark();
            }
            todoItem.checked = !todoItem.checked;
        });
    }

}
f();
function add() {

    const input = document.getElementById(`input-txt`);
    const root = document.getElementById(`todo-txt`);

    const wrapper = document.createElement(`div`);
    wrapper.className = "wrapper";

    const toggle = document.createElement(`input`);
    toggle.className = "toggleClass";

    const clean = document.createElement(`button`);
    clean.className = "cleanClass";

    const completeText = document.createElement(`span`);
    completeText.className = "completeTextClass";

    const todoText = document.createElement(`input`);
    todoText.className = "todoTextClass";

    // const tagImportant = document.createElement(`button`);
    // tagImportant.className = "tagImportantClass";

    let todo = {
        title: input.value,
        checked: false,
        buttonImportantCheck: false
    };

    todoText.value = todo.title;
    toggle.type = 'checkbox';
    clean.innerHTML = `Удалить`;
    input.value = '';
    completeText.innerText = `Выполнено!`;
    // tagImportant.innerText = `☑`;
    // tagImportant.className = "importantButton";

    root.appendChild(wrapper);
    wrapper.appendChild(todoText);
    wrapper.appendChild(toggle);
    wrapper.appendChild(clean);
    // wrapper.appendChild(tagImportant);


    // tagImportant.addEventListener(`click`, function () {
    //     if (todo.buttonImportantCheck === false) {
    //         tagImportant.innerText = `❌`;
    //     } else {
    //         tagImportant.innerText = `☑`;
    //     }
    //     todo.buttonImporatntCheck = !todo.buttonImportantCheck;
    // });

    clean.addEventListener(`click`, function () {
        wrapper.remove();
        list.todos = list.todos.filter(value => todo !== value);
        save(list);
    });

    function mark() {
        todoText.style.textDecoration = `line-through`;
        completeText.style.display = `block`;
        todoText.before(completeText);
        todoText.style.transition = "2s";
        todoText.style.background = "rgba(0,0,0,.3)";
        completeText.style.background = "rgba(0,0,0,.3)";
        wrapper.style.transition = "2s";
        wrapper.style.background = "rgba(0,0,0,.3)";
        todoText.style.display = "none";
        // tagImportant.style.display = "none";
        todoText.style.display = "none";
    }

    function unmark() {
        completeText.style.display = `none`;
        todoText.style.textDecoration = `none`;
        wrapper.style.transition = "2s";
        wrapper.style.background = "url(\"assets/list-picture.jpg\")";
        todoText.style.display = "block";
        clean.style.display = "inline-block";
        // tagImportant.style.display = "inline-block";
    }

    list.todos.push(todo);
    save(list);


    toggle.addEventListener('click', () => {
        if (todo.checked === true) {
            unmark();
        } else {
            mark();
        }
        todo.checked = !todo.checked;
    });

}

document.querySelector(`#create`).addEventListener(`click`, add);
