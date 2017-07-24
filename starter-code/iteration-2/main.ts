// Add the reference to the "TodoInterface"
import { ToDoList } from './todoInterface'
// 1. Create a class Todo that implements the Interface created before.
class NuevaToDoList implements ToDoList {

    constructor(public list:Array<string>) {}

    addTask(task: string):number {
        this.list.push(task);
        console.log(task);
        return this.list.length;
    };


    listAllTasks():any {
        for (let task of this.list) {
            console.log(task);
        }
    };


    deleteTask(task: string):number {
        this.list.splice(this.list.indexOf(task), 1);
        return this.list.length;
    };
}


// Execution
let myTodos = new NuevaToDoList([]);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
