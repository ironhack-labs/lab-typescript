// Add the reference to the "TodoInterface"

import {todoInterface} from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.
class Todo implements todoInterface {
    tasks:Array<string> = [];
    addTask(task: string):void{this.tasks.push(task)};
    listAllTasks():void{
        document.body.innerHTML += "<ul>";
        this.tasks.forEach(t => {
            document.body.innerHTML += "<li>" + t + "</li>";
        })
        document.body.innerHTML += "</ul>";
    };
    deleteTask(task: string):void{this.tasks.splice(this.tasks.indexOf(task), 1);}
    
}
// Execution
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

