// Add the reference to the interface
import { TodoItemInterface, TodoListInterface } from "./interfaces";
class TodoItem implements TodoItemInterface {
    //title:string;
    status: boolean;
    updateAt: number;
    constructor(public title: string) { }
    toggleStatus() {
        if (this.status === true) {
            this.status = false;
            let day = new Date();
            this.updateAt = day.getDate();
        } else {
            this.status = true;
        }
    }
}

// Create class TodoItem that implements the corresponding interface

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
    Arr: Array<TodoItem> = [];
    addTask(task: TodoItem) {
        this.Arr.push(task);
        document.body.innerHTML = "Insertion done";
        console.log(this.Arr.length);
        return this.Arr.length;
    }
    listAllTasks() {
        this.Arr.forEach(e => {
            console.log(e.title, e.updateAt);

        });
    }
    deleteTask(deleteTask: TodoItem) {
        this.Arr.splice(this.Arr.indexOf(deleteTask), 1);
        document.body.innerHTML = "Delete done";
        console.log(this.Arr.length);
        return this.Arr.length;
    }
    listUncomplete() {
        this.Arr.forEach(e => {
            if (e.status === false) {
                console.log(e);
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
