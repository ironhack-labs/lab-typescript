// Add the reference to the "TodoInterface"
import { Todo } from './todoInterface'
// 1. Create a class Todo that implements the Interface created before.


class List implements Todo{

  public myArray: string[];

  addTask(task: string){
    console.log('=======NEW TASK======');
    console.log('Task: ' + myArray);
    console.log('Number of items: ' + myArray.length);
    return myArray.length;
  } 
  listAllTasks(){};
  // deleteTask(task: string){};

};


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
