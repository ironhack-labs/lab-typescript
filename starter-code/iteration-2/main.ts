// Add the reference to the "TodoInterface"
import { TodoInterface } from './todoInterface';
// 1. Create a class Todo that implements the Interface created before.

class Todo implements TodoInterface{
tasksList = [];
constructor(){}
 addTask(task:string):number{
  this.tasksList.push(task);
  return this.tasksList.length;
}
listAllTasks(){
  this.tasksList.forEach((e)=>{
  console.log(e);
})
}
deleteTask(task:string):number{
  this.tasksList.splice(this.tasksList.indexOf(task),1);
  return this.tasksList.length;
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
