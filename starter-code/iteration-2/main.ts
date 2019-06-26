// Add the reference to the "TodoInterface"
import {TodoInterface} from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
    taskList = [];

    addTask(task: string): number {
        this.taskList.push(task);
        return this.taskList.length;
    }

    listAllTasks(): void {
        console.log(this.taskList.join());
    }

    deleteTask(task: string): number {
        this.taskList = this.taskList.filter((value) => value !== task);
        return this.taskList.length;
    }
}

// Execution
let myTodos1 = new Todo();
console.log("Number of items:", myTodos1.addTask('This is our first task'));
console.log("Number of items:", myTodos1.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos1.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos1.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos1.addTask('Finish this iteration 3!! 🤓'));
myTodos1.listAllTasks();
console.log("Number of items:", myTodos1.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos1.deleteTask('Finish this iteration 2!! 🤓'));
myTodos1.listAllTasks();
