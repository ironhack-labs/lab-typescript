// Add the reference to the "TodoInterface"
import { List } from "./todoInterface";
// 1. Create a class Todo that implements the Interface created before.
class Todo implements List {
  myList = [];
  constructor(){}
  // 1. Create an array of strings
  // 2. Create a function to add a task in to the array, call it `addTask`,
  // the function has to accept a string and don't have to return anything.
  addTask(task:string){
    this.myList.push(task);
    return this.myList.length;
  }
  // 3. Create a function to list all tasks, it must show in the console de task.
  listAllTasks():void{
    this.myList.forEach(e => console.log(e));
  }
  // 4. Create a function to delete a task, you must find the task inside the array and delete it.
  deleteTask(taskToDelete:string){
    this.myList.splice(this.myList.indexOf(taskToDelete),1);
    return this.myList.length;
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
