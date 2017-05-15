// Add the reference to the interface
import {TodoItemInterface} from './interfaces';
import {TodoInterface} from './interfaces';

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {

    done: boolean;
    updatedAt: Date;
    toogle() {
       this.done = !this.done;
       this.updatedAt = new Date (Date.now());
    }

    constructor(public title: string) {
    };
} 

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoInterface {    
todos: Array<TodoItem> = [];
    adding(task: TodoItem): void {
        this.todos.push(task);
    }
    listAllTasks(): void {
        this.todos.forEach(element => {
            console.log(element.title);
        })
    }

    deleteTask(task: TodoItemInterface) {
        const index = this.todos.indexOf(task);
        this.todos.splice(index,1);
    }

    showNotDone() {
        this.todos.forEach(element => {
            if(element.done == false)
            console.log(element.title);
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

console.log("Number of items:", myTodos.adding(task1));
console.log("Number of items:", myTodos.adding(task2));
console.log("Number of items:", myTodos.adding(task3));
console.log("Number of items:", myTodos.adding(task4));
console.log("Number of items:", myTodos.adding(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.showNotDone();
