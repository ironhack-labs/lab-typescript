// Add the reference to the "TodoInterface"
import {TodoInterface} from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.



class Todo implements TodoInterface{
  constructor(
    public taskArr: string[]
  ){}

  addTask(task: string){
    taskArr.push(task)
  }

  listAllTasks(){
    return this.taskArr;
  }

  deleteTask(task: string){
    const taskIndex = this.taskArr.indexOf(task);
    this.taskArr.splice(taskIndex, 1);
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
