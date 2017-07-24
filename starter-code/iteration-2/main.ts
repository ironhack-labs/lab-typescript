// Add the reference to the "TodoInterface"
import {toDoInterface} from "./todoInterface";
// 1. Create a class Todo that implements the Interface created before.
class Todo implements toDoInterface {
  constructor () {}
  tasks:Array<string>
  addTask(task):number {
      tasks.push(task);
      console.log(task);
      return tasks.length;
  }

  listAllTasks(tasks):void {
    return tasks.forEach(task => {
      console.log(task)
    })
  }

  deleteTask(task):number {
  tasks.splice(tasks.indexOf(task), 1)
  console.log("Task deleted: "+task);
  return tasks.length;
  }

}
// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks(tasks);
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks(tasks);
