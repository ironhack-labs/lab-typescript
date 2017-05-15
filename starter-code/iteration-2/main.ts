// Add the reference to the "TodoInterface"

import { TodoInterface } from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.

class Todo implements TodoInterface {
    constructor(public strings:Array<string> = []){}

    addTask(task:string) {
        this.strings.push(task);
        console.log("Task \""+ task +"\" inserted in the list!");
        return this.strings.length;
    }

    listAllTasks() {
        this.strings.forEach((task)=>{
            console.log(task);
        });
    }

    deleteTask(task:string) {
        this.strings.splice(this.strings.indexOf(task), 1);
        console.log("Task \""+task+"\" removed from list");
        return this.strings.length;
    }
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
