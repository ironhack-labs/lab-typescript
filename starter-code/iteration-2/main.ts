// Add the reference to the "TodoInterface"
import {TodoInterface} from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
    public tasks : Array<string>;

    constructor() {}

    public addTask(task:string):number {
        tasks.push(task);
        console.log(`
        =========== NEW TASK ===========    \m
        Task ${task} inserted in the list   \n
        Number of items: ${tasks.length}    \n
        `);
        return tasks.length;
    }

    public listAllTasks() {
        tasks.forEach((task, index) => {
            console.log(index + 1, ':', task);
        });
    }

    public deleteTask(task) {
        tasks.slice(tasks.indexOf(task), 1);
        console.log(`
        =========== TASK REMOVED ===========    \n
        Task "${task}" removed from the list    \n
        Number of items: ${tasks.length}        \n
        `);
        return tasks.length;
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

