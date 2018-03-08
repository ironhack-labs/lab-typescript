// Add the reference to the "TodoInterface"
import { TodoInterface } from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.

class Todo implements TodoInterface {

  allTodos: Array<string> = [];
  
  public addTask(task: string) {
  this.allTodos.push(task)
  console.log(task + " was added to the list.");
  let numberOfTask: number = this.allTodos.length;
  return numberOfTask;
  
}

  public listAllTasks() {
  console.log("all task:");
  for (let item of this.allTodos) {
    console.log(item);
  }
}
  
  public deleteTask(task: string) {
  let index: number = this.allTodos.indexOf(task);
  this.allTodos.splice(index, 1);
  let numberOfTask: number = this.allTodos.length;
  console.log(task + " was deleted from the list.");
  return numberOfTask;

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
