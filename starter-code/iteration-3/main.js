class TodoItem {
    constructor(title) {
        this.title = title;
        this.status = false;
    }
    toggleStatus() {
        this.status == true ? this.status = false : this.status = true;
    }
}
class TodoList {
    constructor() {
        this.TodoItems = [];
    }
    addTask(task) {
        this.TodoItems.push(task);
    }
    listAllTasks() {
        for (let task of this.TodoItems) {
            console.log(task.title, task.status);
        }
    }
    deleteTask(task) {
        let index = this.TodoItems.indexOf(task);
        this.TodoItems[index].toggleStatus();
    }
    listUncomplete() {
        for (let task of this.TodoItems) {
            !task.status ? console.log(task.title) : null;
        }
    }
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
