// Add the reference to the "TodoInterface"
import {TodoInterface} from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.


const taskArr =[];

class Todo implements TodoInterface{
  constructor(  
    public taskArr: string[]
  ){}

  addTask(task: string){
    this.taskArr.push(task)
  }

  listAllTasks(){
    // return `all tasks: ${this.taskArr}`;
    console.log(taskArr);
  }

  deleteTask(task: string){
    const taskIndex = this.taskArr.indexOf(task);
    this.taskArr.splice(taskIndex, 1);
  }

}

// Execution
let myTodos = new Todo(taskArr);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
