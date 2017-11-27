// Add the reference to the "TodoInterface"
import {TodoInterface} from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
    myTodos: Array <string>;

    constructor() {}

    addTask (task: string) :number {
        this.myTodos.push(task);
        console.log(`Task "${task}" interted to the list`);
        return this.myTodos.length;
    }

    listAllTasks() :void {
        this.myTodos.forEach((element) => {
            console.log(element)});
    } 

    deleteTask (task: string) :number {
        this.myTodos.splice((this.myTodos.indexOf(task)-1),1);
        console.log(`Task "${task}" removed from the list`);
        return (this.myTodos.length);
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
