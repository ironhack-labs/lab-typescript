// Add the reference to the "TodoInterface"

import { todoInterface }  from './todoInterface'; 

// 1. Create a class Todo that implements the Interface created before.
class Todo implements todoInterface {
    tasks: Array<string> = [];

    constructor(){}

    addTask(task):number {
        this.tasks.push(task);
        console.log(task + " added to tasks");
        var taskNumber = this.tasks.length;
        console.log("Number of tasks: " + taskNumber);
        return taskNumber;
    }

    listAllTasks() {
        this.tasks.forEach(function (task) {
            console.log("" + task);
        });
    }

    deleteTask(task):number {
        this.tasks = this.tasks.filter(function (t) {
            return t !== task;
        });
        console.log(task + " deleted");
        return this.tasks.length;
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
