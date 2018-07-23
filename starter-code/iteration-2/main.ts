// Add the reference to the "TodoInterface"

import {Todo} from "./todoInterface";

class MyTodos implements Todo {
    taskArrayTwo = [];
    addTask(task:string):number {
        this.taskArrayTwo.push(task);
        return this.taskArrayTwo.length;
    }
    listAllTasks():void {
        this.taskArrayTwo.forEach(function(eachTask) {
            console.log(eachTask);
            }) 
    }
    deleteTask(task:string):number {
            const theIndex = this.taskArrayTwo.indexOf(task);
            this.taskArrayTwo.splice(theIndex, 1);
            return this.taskArrayTwo.length;
        }
};



// Execution
let myTodos = new MyTodos();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
