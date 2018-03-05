// Add the reference to the "TodoInterface"
import {TodoInterface} from "./todoInterface";
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
    tasksArray: Array<string> = [];
}

function addTask(task: string) {
    tasksArray.push(task)
}

function listAllTasks() {
    for (let string of tasksArray) {
        console.log(string);
    }
}

function deleteTask(task): void {
    var index = tasksArray.indexOf("string", 0);
    if(index > -1) {
        tasksArray.splice(index, 1);
    }
    return
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
