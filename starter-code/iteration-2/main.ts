// Add the reference to the "TodoInterface"
import {TodoInterface} from "./todoInterface"
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
  TodoList: Array<string> = [];
  addTask(arg: string): number {
    this.TodoList.push(arg)
    console.log("Task added!");
    return this.TodoList.length;
  }
  listAllTasks(){
    for (var i = 0; i < this.TodoList.length; i++) {
        console.log(this.TodoList[i]);
    }
  };
  deleteTask(arg: string): number {
    this.TodoList.splice(this.TodoList.indexOf(arg), 1);
    console.log("Item deleted!");
    return this.TodoList.length;
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
