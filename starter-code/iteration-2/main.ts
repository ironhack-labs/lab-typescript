// Add the reference to the "TodoInterface"
import { ToDoInterface } from "./todoInterface.js";
// 1. Create a class Todo that implements the Interface created before.
class Todo implements ToDoInterface {
    
    constructor(public taskList: Array<string> = []) {
    }

    addTask(task: string):number {
        this.taskList.push(task);
        console.log(`Added ${task} task`);
        console.log("Number of tasks " + this.taskList.length);
        return this.taskList.length;
    }

    listAllTasks() {
        this.taskList.forEach((oneTask) => {
            console.log(oneTask);
        });
    }

    deleteTask(task: string):number {
        for(var i = 0; i < this.taskList.length; i++) {
            if(this.taskList[i] == task) {
                this.taskList.splice(i, 1);
            }
        }
        console.log(`Delete ${task} task`);
        console.log("Number of tasks " + this.taskList.length);
        return this.taskList.length;
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
