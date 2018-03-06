// Add the reference to the "TodoInterface"
import {MyTasks} from './todoInterface';
// 1. Create a class Todo that implements the Interface created before.
class Todo implements MyTasks{
  myTasks: Array<string> = [];

  addTask(task: string){
    this.myTasks.push(task);
    console.log("\n=========== NEW TASK ===========\ntask " +'"'+ task +'"'+ " inserted in the list");
    return (this.myTasks.length);
  }

  listAllTasks(){
    console.log("\n=========== LIST TASKS ===========")    
    this.myTasks.forEach(element => {
      console.log(element)
    });
  }

  deleteTask(task: string){
    this.myTasks.splice(this.myTasks.indexOf(task),1)
    console.log("\n=========== TASK REMOVED ===========\ntask " +'"'+ task +'"'+ " removed from the list");
    return this.myTasks.length;
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
