import { TodoInterface } from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.

class Todo implements TodoInterface {
  allTodos: Array<string> = [];

  public addTask(task: string) {
    this.allTodos.push(task)
    console.log(`=========== NEW TASK ===========
    Task "${task}" inserted in the list`);
    return this.allTodos.length;
  }

  public listAllTasks() {
    console.log(`=========== ALL TASK ===========`);
    for (let item of this.allTodos) {
      console.log(item);
    }
  }

  public deleteTask(task: string) {
    let index: number = this.allTodos.indexOf(task);
    this.allTodos.splice(index, 1);
    console.log(`=========== TASK REMOVED ===========
      Task "${task}" removed from the list`);
    return this.allTodos.length;
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
