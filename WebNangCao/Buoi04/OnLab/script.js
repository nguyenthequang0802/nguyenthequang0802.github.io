const saveData = () => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
};

const getData = () => {
    const value = localStorage.getItem("todoList");
    console.log(JSON.parse(value))
    if (value) {
        return JSON.parse(value);
    }
    return [];
};
let todoList = getData();

const btnAdd = document.getElementById("btn-add");
const inputEl = document.getElementById("input-todo");
const todoListEl = document.getElementById("todolist");

const renderTodoList = () => {
    todoListEl.innerHTML = ""; 

    if (todoList.length === 0) {
        todoListEl.insertAdjacentHTML(
            "afterbegin",
            "<li>Danh sách công việc trống</li>"
        );
        return;
    }

    let html = "";
    todoList.forEach((t) => {
        html += `
            <li>
                <input type="checkbox" ${
                    t.status ? "checked" : ""
                } onclick="toggleStatus(${t.id})">
                <span class="${t.status ? "active" : ""}">${t.title}</span>
                <button onclick="editTodo(${t.id})">Edit</button>
                <button onclick="deleteTodo(${t.id})">Delete</button>
            </li>
        `;
    });
    todoListEl.innerHTML = html;
};

const getId = () => {
    // return Math.floor(Math.random() * (max - min) + 1) + min
    // return todoList.sort((t1, t2) => t2.id - t1.id)[0].id + 1;
    if (todoList.length === 0) return 1;
    return Math.max(...todoList.map((t) => t.id)) + 1;
};

const addTodo = () => {
    const title = inputEl.value;

    if (title.trim().length === 0) {
        alert("Tiêu đề không được để trống");
        return;
    }

    const newTodo = {
        id: getId(),
        title: title,
        status: false,
    };

    todoList.push(newTodo);
    inputEl.value = "";

    saveData();
    renderTodoList();
};
btnAdd.addEventListener("click", addTodo);


const deleteTodo = (id) => {
    console.log(id);
    const isConfirm = window.confirm("Bạn có muốn xóa không");
    if (!isConfirm) return;
    // let index = todoList.findIndex(t => t.id === id);
    // todoList.splice(index, 1);

    todoList = todoList.filter((t) => t.id !== id);

    saveData();
    renderTodoList();
};

// CV4 : Edit Todo
const editTodo = (id) => {
    const todoCheck = todoList.find((t) => t.id === id);
    if(!todoCheck) return;

    const titleEdit = window.prompt("Nhập tiêu đề mới:", todoCheck.title);
    if(titleEdit !== null && titleEdit.trim() !== ""){
        todoCheck.title = titleEdit.trim();
        saveData();
        renderTodoList();
    }
};

// CV5 : Toggle status
const toggleStatus = (id) => {
    const todoCheck = todoList.find((t) => t.id === id);
    if(!todoCheck) return;

    todoCheck.status = !todoCheck.status;
    saveData();
    renderTodoList();
};

renderTodoList();