// Add the reference to the interface
import { TodoItemInterface } from './interfaces';
import { TodoListInterface } from './interfaces';
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {

    constructor(public title:string, public status = false) {}
    completed() {
        status = !status;
        updatedAt = new Date;
    }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {

    constructor(public list:string[]) {}

    addTask(task: string):number {
        this.list.push(task);
        console.log(task);
        return this.list.length;
    };
    listAllTasks(): any {
        for (let task of this.list) {
            console.log(task);
        }
    };
    deleteTask(task: string): number {
        this.list.splice(this.list.indexOf(task), 1);
        return this.list.length;
    };
};



// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList([]);

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
//myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
//myTodos.listUncomplete();
