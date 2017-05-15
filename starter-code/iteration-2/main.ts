// Add the reference to the "TodoInterface"

import {TodoListInterface} from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.


class Todo implements TodoListInterface { //
  constructor (public tasks : Array<string> = []){};

  addTask(task: string) {
    this.tasks.push(task);
    console.log("=========== NEW TASK ===========");
    console.log('Task "'  + task + '" inserted in the list');
    return this.tasks.length;
  };

  listAllTasks (){
    this.tasks.forEach( t => {
      console.log(t);
    });
  };

  deleteTask (task: string) {
    let i = this.tasks.indexOf(task);
    if (i != -1) {
      console.log("=========== TASK REMOVE ===========");
      console.log('Task "' + task + '" removed from the list');
      return this.tasks.splice(i, 1);
    }
  };
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
