// Add the reference to the "TodoInterface"
import {TodoList} from './todoInterface'
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoList {
  tasks: Array<string> = [];
  constructor () {}
  addTask(task: string): number {
    this.tasks.push(task);
    console.log("=========== NEW TASK ===========");
    console.log(`Task ${task} inserted in the list`);
    return this.tasks.length;
  }
  
  listAllTasks(): void {
    this.tasks.forEach(element => {console.log(element)});
  }
  
  deleteTask(task: string): number {
  if (this.tasks.indexOf(task) != -1) {
    this.tasks.splice(this.tasks.indexOf(task), 1); 
    console.log("=========== TASK REMOVED ===========");
    console.log(`Task ${task} removed from the list`);
   }
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
