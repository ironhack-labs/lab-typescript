// Add the reference to the "TodoInterface"
import { todoInterface } from './todoInterface.js';
// 1. Create a class Todo that implements the Interface created before.
class Todo implements todoInterface{
  constructor(public array: Array<string>){

  }

   addTask( task: string ):number{
    this.array.push(task);
    console.log('=========== NEW TASK ===========');
    console.log(task);
    return this.array.length;
  }

  listAllTasks():void{
    console.log('=========== ALL TASKS: ===========');
    this.array.forEach(e=>{
      console.log(e);
    })
  }

  deleteTask(task: string){
    let index = this.array.indexOf(task);
    if (index > -1) {
      console.log('=========== TASK REMOVED ===========');
      console.log(task);
      this.array.splice(index, 1);
      return this.array.length;
    }else{
      console.log('=========== TASK NOT FOUND ===========');
    }
  }
}
// Execution
let myTodos = new Todo([]);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
