// Add the reference to the "TodoInterface"
import { Todo } from './todoInterface';
// 1. Create a class Todo that implements the Interface created before.
class Tareas implements Todo{
  constructor(public array: string){}

  addTask(string):number{
    return array.length;
  }

  listAllTasks():void{
    array.forEach(e => console.log(e));
  }

  deleteTask(string):number{
    return array.length;
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
