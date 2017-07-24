// Add the reference to the "TodoInterface"
// import ToDoInterface from "./todoInterface.js";
// 1. Create a class Todo that implements the Interface created before.
interface ToDoInterface {
  tasks: Array<string>;
  addTask(task: string): number;
  listAllTasks(): void;
  deleteTask(task: string): number;
}

class Todo implements ToDoInterface {
  tasks: Array<string> = [];
  constructor () {}
  addTask(task):number {
      this.tasks.push(task);
      console.log(task);
      return this.tasks.length;
  }

  listAllTasks():void {
   this.tasks.forEach(task => {
      console.log(task)
    })
  }

  deleteTask(task):number {
  this.tasks.splice(this.tasks.indexOf(task), 1)
  console.log("Task deleted: "+task);
  return this.tasks.length;
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
