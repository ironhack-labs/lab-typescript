import { TodoItemInterface } from './interfaces'
import { Todointerface } from './interfaces'
 
 // Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItemInterface {
    constructor(public Title:string){}
    Status: boolean
    updateAt: Date
    toggleStatus(): void {
        if(this.Status === true){
            this.Status = false
            this.updateAt = new Date()
        }else{
            this.Status = true
        }
    }
}
 // Create class TodoList that implements the corresponding interface
class TodoList implements Todointerface {
  tasks: Array <TodoItem> = [];
  constructor() {}
  addTask(task: TodoItem): number {
    this.tasks.push(task);
    console.log("Inserted new"  task);
    return this.tasks.length;
  }
  listAllTasks(): void {
    this.tasks.forEach(e => {
      console.log(e);
    });
  }
  deleteTask(task: TodoItem): number {
    let indexVar = this.tasks.indexOf(task);
    this.tasks.splice(indexVar, 1);
    console.log(indexVar);
    return this.tasks.length;
  }
  listUncomplete(): void {
      this.tasks
  }
} 
 
 // Execution
 let task1 = new TodoItem('This is our first task');
// Create class TodoItem that implements the corresponding interface

// Create class TodoList that implements the corresponding interface

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
