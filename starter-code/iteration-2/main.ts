// Add the reference to the "TodoInterface"
import { TodoInterface } from "./todoInterface"
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface{
  tasks:Array<string>=[];

  addTask(task:string):number {
    this.tasks.push(task);
    return this.tasks.length;
  }

  listAllTasks():void{
    this.tasks.forEach((task)=> {
      console.log(task);
    });
  }

  deleteTask(task: string):number{
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
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
