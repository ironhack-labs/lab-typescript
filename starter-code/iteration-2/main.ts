// Add the reference to the "TodoInterface"
import { TodoInterface } from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
 constructor(public tasks: Array<string> = []){}

 addTask(task):number{
   this.tasks.push(task);
   console.log(`=========== NEW TASK ===========
     ${task}`);
     return this.tasks.length;
 }

 listAllTasks(){
   for(let task of this.tasks){
   console.log("list All Tasks: ",task);
   }
 }

   deleteTask(task):number{
      let index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
      console.log(`=========== TASK REMOVED ===========
        ${task}`);
      return this.tasks.length;
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
