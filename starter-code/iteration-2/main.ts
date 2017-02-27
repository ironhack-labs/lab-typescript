// Add the reference to the "TodoInterface"
/* todoInterface.ts */

//Every Save Erase  this line from Js
//Object.defineProperty(exports, "__esModule", { value: true });
//

import {InterMain} from "./todoInterface" ;
// 1. Create a class Todo that implements the Interface created before.
class Todo implements InterMain{
    ArrString: Array<string>=[];

    // constructor() { }// No hace nada
      addTask(task) {
          this.ArrString.push(task);
          console.log("Added"+ task);
          return this.ArrString.length;
          // return "<h1>" + this.task + "</h1>";
      }
      listAllTasks() {
        this.ArrString.forEach((elem)=> { console.log(elem)});
        // this.ArrString.forEach((elem)=> { return "<li>" + elem + "</li>";});

      }
    deleteTask(task) {
      var index = this.ArrString.indexOf(task);
      if (index !== -1) { this.ArrString.splice(index, 1);
        console.log("Removed"+ task);
        return this.ArrString.length;
        // return "<h1>" + this.message + "</h1>";
    }
  }
}

// Execution
let myTodos = new Todo()
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
