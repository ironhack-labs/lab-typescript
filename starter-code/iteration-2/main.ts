// Add the reference to the "TodoInterface"
import {TodoInterface} from './todoInterface';
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface{
  stringArray: string[];
  constructor(){
    this.stringArray = [];
  }
  addTask(task:string):number{
    this.stringArray.push(task);
    console.log(`${task} inserted into list of tasks`);
    console.log('Number of tasks: ', this.stringArray.length);
    return this.stringArray.length;
  }
  listAllTasks():void{
    this.stringArray.forEach(task => {
      console.log(task);
    });
    return;
  }
  deleteTask(task:string):number{
    const taskIndex: number = this.stringArray.indexOf(task);
    this.stringArray.splice(taskIndex, 1);
    console.log(`Deleted ${task} at position ${taskIndex} in our task list.`);
    return this.stringArray.length;
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
