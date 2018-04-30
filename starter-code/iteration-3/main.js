"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoItem {
    constructor(title) {
        this.title = title;
        this.updatedAt = new Date();
        this.status = false;
    }
    toogleStatus(status) {
        this.status = true;
        this.updatedAt.getDate();
    }
}
class TodoList {
    constructor() {
        this.myArray = [];
    }
    addTask(task) {
        this.myArray.push(task);
        console.log("Task añadida");
        return this.myArray.length;
    }
    listAllTasks() {
        this.myArray.forEach(element => {
            console.log(element);
            console.log(element.title, element.updatedAt);
        });
    }
    deleteTask(task) {
        let index = this.myArray.indexOf(task);
        this.myArray.splice(index, 1);
        console.log("elemento borrado");
        console.log(this.myArray.length);
        return this.myArray.length;
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
