class TodoItem {
    constructor(title = "New title", updatedAt) {
        this.title = title;
        this.updatedAt = updatedAt;
        this.status = false;
    }
    toggleStatus() {
        if (status) {
            this.status = false;
            this.updatedAt = new Date();
        }
        else {
            this.status = true;
        }
    }
}
class TodoList {
    constructor() {
        this.TodoItems = [];
    }
    addTask(task) {
        this.TodoItems.push(task);
        console.log(`Task ${task} inserted in the list
    Number of items: ${this.TodoItems.length}`);
        return this.TodoItems.length;
    }
    listAllTasks() {
        this.TodoItems.forEach(function (e) {
            console.log(e.title);
            console.log(e.updatedAt);
        });
    }
    deleteTask(task) {
        let indice = this.TodoItems.indexOf(task);
        this.TodoItems.splice(indice, 1);
        console.log(`Task ${task} removed from the list
    Number of items ${this.TodoItems.length}`);
        return this.TodoItems.length;
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
