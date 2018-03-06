// Add the reference to the interface
import {TodoItemInterface, TodoListInterface} from './interfaces.js'

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
    //model: string; No me queda claro lo del modelo
    status: boolean;
    updatedAt: Date;
    toggleStatus(): void{
        if (this.status){
            this.status = false
        } else {
            this.status=true;
        }
          
    };
    constructor(public title: string) {} 
  }

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
    //model: string; No me queda claro lo del modelo
    tasks: Array <TodoItem> = [];
    addTask(task : TodoItem){
        task.updatedAt = new Date;
        return this.tasks.push(task);
    };
    listAllTasks() : void{
        this.tasks.forEach((task)=>{ 
            console.log(`Task: ${task.title} was created at ${task.updatedAt}`);    
        })
    };
    deleteTask(task : TodoItem): number{
        this.tasks.splice(this.tasks.indexOf(task), 1);
        return this.tasks.length;
    };
    constructor() {}
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
myTodos.listAllTasks();
