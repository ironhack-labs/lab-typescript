// Add the reference to the "TodoInterface"
import { todoInterface } from "./todoInterface"
// 1. Create a class Todo that implements the Interface created before.
class Todo implements todoInterface {
    taskArray: Array<string>;
    

    constructor(public task: string) {}

    

    addTask(task) {
        this.taskArray.push(this.task);
        return this.task
    }

    listAllTasks() {
        for (let task of this.taskArray) {
            console.log(this.task);
        }
    }
    deleteTask(task) {
        let indexTask = this.taskArray.indexOf(this.task)
        this.taskArray.splice(indexTask, 1);
        return this.taskArray.length
    }
}


// Execution
let myTodos = new Todo('patatasllevonoes');
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
