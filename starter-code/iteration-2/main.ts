// Add the reference to the "TodoInterface"
import { TodoInterface} from './todoInterface.js';
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface{
  constructor(public List: Array<string> = []){}

  addTask(task):number{
    this.List.push(task)
    return this.List.length;
  }
  listAllTasks():void{
    console.log(this.List);
  }
  deleteTask(task):void{
    let toRemove = this.List.indexOf(task);
    this.List.splice(toRemove, 1);
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
