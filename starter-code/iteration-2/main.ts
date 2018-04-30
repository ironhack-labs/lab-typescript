// Add the reference to the "TodoInterface"
import { todoInterface } from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.
class Todo implements todoInterface {
  
  taskList : Array <string> = [];
  
  addTask(task) : number {
    this.taskList.push(task);
    return this.taskList.length;
  }

  listAllTasks() : void {
    this.taskList.forEach(function (e){
      console.log(e)
    })
  }

  deleteTask(task) : number {
    this.taskList.splice(this.taskList.indexOf(task),1);
    return this.taskList.length;
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
