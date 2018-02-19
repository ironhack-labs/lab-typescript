// Add the reference to the interface

import {todoItemInterface} from "./interfaces";
import {todoListInterface} from "./interfaces";

// Create class TodoItem that implements the corresponding interface

class TodoItem implements todoItemInterface {
    constructor(public title:string){}
    status:boolean = true;
    updateAt:Date = new Date;
    toggleStatus():void{this.status ? this.status = true : this.status = false }
}


// Create class TodoList that implements the corresponding interface

class TodoList implements todoListInterface {
    tasks: Array<TodoItem> = [];
    addTask(task: any):void{this.tasks.push(task)};
    listAllTasks():void{
        document.body.innerHTML += "<ul>";
        this.tasks.forEach(t => {
            document.body.innerHTML += "<li>" + t.title + "</li>";
        })
        document.body.innerHTML += "</ul>";
    };
    deleteTask(task: any):void{this.tasks.splice(this.tasks.indexOf(task), 1);}
    listUncomplete():void{
        document.body.innerHTML += "<ul>";
        this.tasks.forEach(task =>{
            if(task.status){
                document.body.innerHTML += "<li>" + task.title + "</li>";
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
