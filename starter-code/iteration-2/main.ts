// Add the reference to the "TodoInterface"

import { Todo } from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.

class TodoList implements Todo {

  tasks: string[];

  addTask(task: string){
  this.tasks.push(task);
  console.log("=========== NEW TASK ===========");
  console.log("Task " + task + " added to the list.");
  return this.tasks.length;
}

  listAllTasks(){
    this.tasks.forEach((oneTask)=>{
      console.log(oneTask);
  })
}

  deleteTask(task: string){
    var index = this.tasks.indexOf(task);
      if (index > -1) {
          this.tasks.splice(index, 1);
      }
      console.log("=========== TASK REMOVED ===========")
      console.log("Task " + task + " deleted");
      return (this.tasks.length);
    }

}

// Execution
let myTodos = new TodoList();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
