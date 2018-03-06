// Add the reference to the "TodoInterface"

import TodoInterface from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.

class Todo implements TodoInterface {
  tasks : Array<string>=[]

  addTask(task: string) {
    this.tasks.push(task);
    console.log (`=========== NEW TASK =========== /n Task ${task} inserted in the list /n
    Number of items: ${this.tasks.length}`);
  }

  listAllTasks() {
    this.tasks.forEach((task)=>{
      console.log(task);
    })
  }

  deleteTask(task : string) {
    for(var i = 0; i < this.tasks.length; i++){
      if (task === this.tasks[i]){
        this.tasks.splice(i, 1);
      }
    }
  console.log (`=========== TASK REMOVED =========== /n Task ${task} removed the list /n
  Number of items: ${this.tasks.length}`);
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
