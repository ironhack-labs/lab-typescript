// Add the reference to the "TodoInterface"
import {todo} from "./todoInterface";
// 1. Create a class Todo that implements the Interface created before.
class Todo implements todo {
  constructor(public myArray: Array<string>){}

  addTask(task:string):number{
    this.myArray.push(task);
    console.log(`
    =========== NEW TASK ===========
    Task ${task} inserted in the list
    `)
    return this.myArray.length;
  }

  listAllTasks():void{
    this.myArray.forEach(function(task){
      console.log(task);
    })
  }

  deleteTask(task:string):number{
    const index = this.myArray.indexOf(task);
    if (index !=-1) {
      this.myArray.splice(index,1);
    }
    return this.myArray.length;
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
