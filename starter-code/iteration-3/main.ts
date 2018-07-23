// Add the reference to the interface
import {todoItemInterface,todoListInterface} from "./interfaces"
// Create class TodoItem that implements the corresponding interface

export class TodoItem implements todoItemInterface{
    status:boolean;
    updatedAt:Date;
    constructor (public title:string){
        this.status = false
        this.updatedAt = new Date()
    }
    
    toggleStatus (){
        this.updatedAt = new Date()
        this.status = !this.status
    };
}
// Create class TodoList that implements the corresponding interface

export class TodoList implements todoListInterface {

    items:Array<TodoItem> = [];
    addTask(item:TodoItem){
        this.items.push(item);
        console.log(`Task ${item.title} inserted in the list`);
        console.log(`Number of items: ${this.items.length}`);
        return this.items.length;    
    }

    deleteTask(item:TodoItem){
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i] == item) {
                this.items.splice(i, 1);  
                console.log(`Task ${item.title} removed from the list`); 
                console.log(`Number of items: ${this.items.length}`);
                return this.items.length;
            } 
        };
    }
    listAllTasks  () {
        this.items.forEach(e => {
            console.log(e.title);
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
//myTodos.listUncomplete();
