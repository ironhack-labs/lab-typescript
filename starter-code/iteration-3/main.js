class TodoItem {
    constructor(title) {
        this.status = false;
        this.updatedAt = new Date();
        this.toogleStatus();
    }
    toogleStatus() {
        if (this.status === false) {
            this.status = true;
        }
        else {
            this.status = false;
        }
    }
}
class TodoList {
    constructor() {
        this.TodoItem = [];
    }
    addTask(value) {
        this.TodoItem.push(value);
        console.log("Element inserted", this.TodoItem.length);
        return this.TodoItem.length;
    }
    listAllTask() {
        console.log(this.TodoItem);
    }
    ;
    delete(value) {
        this.TodoItem.splice(this.TodoItem.indexOf(value), 1);
        console.log("Element deleted", this.TodoItem.length);
        return this.TodoItem.length;
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
myTodos.listAllTask();
console.log("Number of items:", myTodos.delete(task3));
console.log("Number of items:", myTodos.delete(task4));
console.log("Number of items:", myTodos.delete(task5));
