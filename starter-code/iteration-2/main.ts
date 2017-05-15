// Add the reference to the "TodoInterface"
import {TodoInterface} from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface{
  myTask;
  constructor(myTask: Array<string> = []) {
    this.myTask = myTask
  }

  addTask(task:string):number{
    this.myTask.push(task);
    console.log("=========== NEW TASK ===========");
    console.log(`Task ${task} inserted in the list`);
   return this.myTask.length
  }

  listAllTasks():void{
    for (let i of this.myTask) {
       console.log(i);
    }
  }

  deleteTask(task:string):number{
    for (let i in this.myTask) {
       if(this.myTask[i] === task) {
        this.myTask.splice(i, 1);
        console.log("=========== TASK REMOVED ===========");
        console.log(`Task ${task} removed from the list`);
      }
    }
   return this.myTask.length
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
