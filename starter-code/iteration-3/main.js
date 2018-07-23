class TodoItem {
    constructor(title) {
        this.title = title;
        this.isDone = false;
        this.updatedAt = new Date();
    }
    done() {
        this.isDone = true;
        this.updatedAt = new Date();
    }
}
class TodoList {
    constructor() {
        this.todoList = [];
    }
    addTask(task) {
        this.todoList.push(task);
    }
    ;
    listAllTasks() {
        this.todoList.forEach(e => console.log(e));
    }
    ;
    deleteTask(task) {
        this.todoList.splice(this.todoList.indexOf(task), 1);
    }
    ;
    listUncomplete() {
        this.todoList.forEach(e => { if (!e.isDone)
            console.log(e); });
    }
    ;
}
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');
let myTodos = new TodoList();
console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
