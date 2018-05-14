// Add the reference to the interface
import { TodoListInterface, TodoItemInterface } from "./interfaces";

// import {TodoItem} from "./interfaces"
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
    status: boolean;
    updatedAt: number;

    constructor(public title: string) {
        this.updatedAt = Date.now();
        this.status = false;
    }

    toggleStatus(): void {
        this.status = !this.status;
        this.updatedAt = Date.now();
    }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
    array : Array<TodoItem> = [];

    addTask = (task: TodoItem): number => {
        this.array.push(task);
        console.log(`Task ${task.title} inserted in the list`)
        return this.array.length;
    }

    listAllTasks = (): void => {
        this.array.forEach((element) => {
            console.log(element);
        })
    }

    deleteTask = (task: TodoItem): number => {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === task) {
                this.array.splice(i, 1);
                break;
            }
        }
        console.log(`Task ${task.title} removed from the list`)

        return this.array.length;
    }
}

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
// myTodos.listUncomplete();
