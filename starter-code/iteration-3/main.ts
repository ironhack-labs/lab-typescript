// Add the reference to the interface
import { TodoItemInterface, TodoInterface } from './interfaces';
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
    title: string;
    done: boolean;
    updatedAt: Date;

    constructor(title: string) {
        this.title = title;
    }

    toggleDone() {
        this.done = !this.done;
    }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoInterface {
    tasks: Array<TodoItem> = [];

    addTask(task: TodoItem): number {
        this.tasks.push(task);
        return this.tasks.length;
    }

    listAllTasks(): void {
        console.log(this.tasks);
    }

    deleteTask(task: TodoItem): number {
        this.tasks = this.tasks.filter((value) => value.title !== task.title);
        return this.tasks.length;
    }

    listUncomplete(): void {
        console.log(this.tasks.filter((value) => value.done));
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
myTodos.listUncomplete();
