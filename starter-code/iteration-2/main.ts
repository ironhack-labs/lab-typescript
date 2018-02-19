// Add the reference to the "TodoInterface"
import { TodoTask } from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.
  class Todo implements TodoTask {
    
    myTask : Array<string> = [];
    constructor() {

    }
    addTask (task:string) {
      this.myTask.push(task)
      console.log("Task added!")
      return this.myTask.length;
    }
    listAllTasks(){
      this.myTask.forEach(t =>{
        console.log(t)
      })
    }
    deleteTask (task:string){
      for (let i = 0; i < this.myTask.length; i++){
        if (this.myTask[i] == task) {
          this.myTask.splice(i, 1);
          console.log("Task deleted!")
        }
      }
      return this.myTask.length;
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
