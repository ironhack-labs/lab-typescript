// Add the reference to the "TodoInterface"

import {List} from "./todoInterface"


// 1. Create a class Todo that implements the Interface created before.

class Todo implements List{
  constructor(public tasks: Array<string> = []){this.tasks = tasks}
   
    
  addTask(task): any{
   this.tasks.push(task);
   let taskNum: number = this.tasks.length;
   console.log("Task" + task + "inserted in the list \n Number of items:" + taskNum);
   return taskNum
 }

 listAllTasks(): void {
   this.tasks.forEach(function(eachTask) {
     console.log(eachTask);
   })
 }
  
 deleteTask(task: string): any {
   let index = this.tasks.indexOf(task);
   this.tasks.splice(index,1);
   let taskNum: number = this.tasks.length;
   console.log('Task' + task + 'removed from list \n Number of items:' + taskNum)
   return taskNum;
 }
}


// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
