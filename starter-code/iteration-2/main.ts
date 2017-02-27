
// Add the reference to the "TodoInterface"
import {ToDoInterface} from './todoInterface';
// 1. Create a class Todo that implements the Interface created before.

class Todo implements ToDoInterface {
     tasks: Array<string> = [];
    constructor() {}

   addTask(task) : void {
        this.tasks.push(task);
    }

   listAllTasks() : void {
        for (let item of this.tasks) {
            console.log(item);
        }
    }

   deleteTask(item) {
        let index = this.tasks.indexOf(item);
        this.tasks.splice(index, 1);
    }
}



// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza :pizza:  yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! :nerd_face:'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! :nerd_face:'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! :nerd_face:'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! :nerd_face:'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! :nerd_face:'));
myTodos.listAllTasks();
