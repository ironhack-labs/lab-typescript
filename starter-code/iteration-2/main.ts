// Add the reference to the "TodoInterface"
import {toDoInterface} from './todoInterface';
// 1. Create a class Todo that implements the Interface created before.
class Todo implements toDoInterface {

  constructor(myArray: Array<string>) {}

  addTask (task): any  {
    myArray.push(task);
    console.log ("Colocamos el elemento " + task );
    return myArray.length;
  }

  listAllTasks (){
    for (let counter of myArray) {
      console.log(counter);
    }
  }

  deleteTask(task): any{
     let i:number = myArray.indexOf(task);
     myArray.splice(i,1);
    return myArray.length;
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
