// Add the reference to the "TodoInterface"
import { TodoInterface } from './todoInterface'
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
    constructor(public arrayTasks: Array<string> = []) { }

    addTask = (task: string) => {
        console.log(`=========== NEW TASK ===========`);
        this.arrayTasks.push(task);
        console.log(`Insertion done!!!!`);
        return this.arrayTasks.length
    }

    listAllTasks = () => {
        this.arrayTasks.forEach((task: string, i: number) => {
            console.log(`Task ${i}: ${task}`);
        });
    }

    deleteTask = (task: string) => {
        console.log(`=========== DELETE TASK ===========`);
        this.arrayTasks.splice(this.arrayTasks.indexOf(task), 1);
        console.log(`Deletion done!!!!`);
        return this.arrayTasks.length
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
