import { TodoInterface } from './todoInterface';
// Add the reference to the "TodoInterface"

// 1. Create a class Todo that implements the Interface created before.

class Todo implements TodoInterface {

    tasks: Array<string>

    addTask(task: string): number {
        console.info(` Task ${task} inserted in the list`);
        this.tasks.push(task);
        return this.tasks.length;
    }

    listAllTasks(): void {
        this.tasks.forEach(element => console.info(element));
        }
    

    deleteTask(task: string): number {
        this.tasks.splice(tasks.indexOf(task), 1);
        console.info(`Task ${task} removed from the list`);
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
