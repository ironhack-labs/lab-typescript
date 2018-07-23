// Add the reference to the "TodoInterface"
import { TodoInterface } from "./todoInterface";
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
  taskList: Array<string> = [];

  constructor() {}
  //2. Adds a task
  addTask(task: string): number {
    this.taskList.push(task);
    console.log(`
    =========== NEW TASK ===========
    ${task}
    Number of items: ${this.taskList.length}`);
    return this.taskList.length;
  }

  //3. List all Tasks
  listAllTasks(){
    let tasks = this.taskList.forEach(function (tasks){
      console.log(`
    =========== ALL TASKS ===========
    ${tasks}
    `);
    })
  }


  //4. Deletes a task
  deleteTask(task:string): number{
    let n = this.taskList.indexOf(task);
    this.taskList.splice(n, 1);
    console.log(`
    =========== DELETED TASK ===========
    ${task}
    Number of items: ${this.taskList.length}
    `);
    return this.taskList.length;
  }

}

//Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask("This is our first task"));
console.log("Number of items:", myTodos.addTask("Eat pizza 🍕 yummy!!!"));
console.log("Number of items:", myTodos.addTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", myTodos.addTask("Finish this iteration 2!! 🤓"));
console.log("Number of items:", myTodos.addTask("Finish this iteration 3!! 🤓"));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", myTodos.deleteTask("Finish this iteration 2!! 🤓"));
myTodos.listAllTasks();
