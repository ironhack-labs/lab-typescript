// Add the reference to the interface
import { TodoItemInterface } from './interfaces';
import { TodoListInterface } from './interfaces';
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
    status: Boolean;
    updatedAt: Date;
    constructor(public title: String) {
        this.updatedAt = new Date();
    }

    toogleStatus():void {
        this.status === true ? this.status = false : this.status = true;
    }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
    items: Array<TodoItem> = [];
    constructor(){}
    addTask(task:TodoItem):number {
        this.items.push(task);
        return this.items.length;
    }
    listAllTasks():void {
        this.items.forEach(item => {
            console.log(item.title);
        })
    }
    deleteTask(task:TodoItem):number {
        this.items = this.items.filter(item => {
            return item === task;
        });
        return this.items.length;
    }
    listUncomplete():void {
        this.items.forEach(item => {
            if(item.status === false) {
                console.log(item.title);
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
