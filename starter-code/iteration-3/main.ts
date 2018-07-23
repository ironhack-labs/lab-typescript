// Add the reference to the interface

// Create class TodoItem that implements the corresponding interface

// Create class TodoList that implements the corresponding interface

import {TodoItemInterface} from './interfaces';
import {TodoListInterface} from './interfaces';

class TodoItem implements TodoItemInterface {
    title: string;
    status: boolean;
    updateAt: Date;

    constructor(title: string) {
        this.title = title;
        this.status = false;
        this.updateAt = new Date();
    }

    toggleStatus() {
        this.status = !this.status;
        this.updateAt = new Date();
    }
}

class TodoList implements TodoListInterface {
    items: Array<TodoItem>;

    addTask(task: TodoItem):number {
        this.items.push(task);
        return this.items.length;
    }

    listAllTasks():void {
        this.items.forEach(item => {
            console.log(item);
        });
    }

    deleteTask(task: TodoItem):number {
        this.items.forEach((item, index) => {
            if(item === task) {
                this.items.splice(index, 1);
            }
        });
        return this.items.length;
    }

    listUncomplete():void {
        this.items.forEach(item => {
            if(item.status === false) {
                console.log(item);
            }
        });
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