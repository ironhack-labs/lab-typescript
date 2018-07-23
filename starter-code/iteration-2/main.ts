// Add the reference to the "TodoInterface"
import {pong} from "./todoInterface";
class Todo implements pong{
    add: Array<string> = []
    constructor(){}
    addTask(task):void{
        this.add.push(task)
    }

    listAllTasks():void{
        this.add.forEach(e => {
            console.log(e);
        });
    }
    deleteTask(task):number{
    this.add.splice(this.add.indexOf(task),1);
    document.body.innerHTML = "Delete done";
    console.log(this.add.length);
    return this.add.length;
    }
}



// 1. Create a class Todo that implements the Interface created before.

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
