// Add the reference to the "TodoInterface"
import { TodoInterface } from "./todoInterface";
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface{
  public tasks: Array<string> = [];
  public addTask(task){
    this.tasks.push(task);
    console.log("Task succesfully added");
    return this.tasks.length;
  }
  public listAllTasks(){
    this.tasks.forEach(function(e){
      console.log(e);
    })
  }
  public deleteTask(task){
    let dtask = this.tasks.indexOf(task);
    this.tasks.splice(dtask, 1);
    console.log('Task deleted');
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
