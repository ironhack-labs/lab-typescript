"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Todo {
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
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
