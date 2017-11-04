// Add the reference to the interface

import { TodoItemInterface, Todo } from "./interfaces";

// Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItemInterface {
   constructor(public title: string){}
   updatedAt: Date; 
   done: boolean = false;
   toggleUpdate(): boolean{
     return !this.done;
   }
 }

// Create class TodoList that implements the corresponding interface

class TodoList implements Todo{
   tasks: Array<TodoItem>;

   addTask(task): number{
     console.log("Adding " + task.taskTitle)
     this.tasks.push(task)
     return this.tasks.length;
 }
   listAllTasks(): void{
     this.tasks.forEach((oneTask) => {
       console.log(oneTask.title);
     })
 }
   deleteTask(taskToDelete): number{
     this.tasks.forEach((oneTask) =>{
       if(oneTask === taskToDelete){
         var indexToDelete = this.tasks.indexOf(oneTask);
         this.tasks.splice(indexToDelete, 1);
         console.log(oneTask.title + " removed");
       }
     })
     return this.tasks.length;
 }
   listUncomplete(): void{
       this.tasks.forEach((oneTask) => {
         if(oneTask.done === false){
           console.log("Not Completed: " + oneTask.title);
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
