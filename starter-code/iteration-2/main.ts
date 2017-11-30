// Add the reference to the "TodoInterface"
import {toDoInterface} from "./todointerface";
// 1. Create a class Todo that implements the Interface created before.

class Todo implements toDoInterface{

  constructor(
    public myTask: string[] = []
  )

  {}

    addTask(task){

      this.myTask.push(task);


    }
  listAllTasks(){
      console.log(this.myTask);

  }
 deleteTask(task){
    const index = this.myTask.indexOf(task);
    this.myTask.splice(index,1);

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
