// Add the reference to the interface
import { TodoItemInterface, TodoListInterface } from "./interfaces";

// Create class TodoItem that implements the corresponding interface
export class TodoItem implements TodoItemInterface {
    constructor(
        public title: string,
        public status: boolean = false,
        public updatedAt: Date = new Date(),
    ) {}
    toggleStatus() {
        this.status = !this.status;
    }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
    constructor(
        public list: TodoItem[] = []
    ) {}
    addTask( task: TodoItem ) {
        this.list.push( task );
        console.log( `Taks ${task.title} has been added to the list` );
        console.log( `Number of items: ${this.list.length}` );
        return this.list.length;
    };
    listAllTasks() {
        this.list.forEach( task => {
            console.log( `
            ${task.title}
            ${task.updatedAt}
            ` );
        })
    };
    deleteTask( task: TodoItem ) {
        this.list.splice( this.list.indexOf( task ), 1);
        console.log( `Task ${task.title} has been removed from the list` );
        console.log( `Number of items: ${this.list.length}` );
        return this.list.length;
    };
    listUncomplete() {
        this.list.forEach( task => {
            if( task.status !== true ) {
                console.log( task.title );
            }
        })
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
