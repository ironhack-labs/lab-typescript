// Add the reference to the "TodoInterface"
import { TodoInterface } from './todoInterface'
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface{
  todoList: Array<string> = [];
  
  addTask(task: string): void {
    this.todoList.push(task);
  }
  // 3. Create a function to list all tasks, it must show in the console de task.
  listAllTasks(): void {
    this.todoList.forEach(e=>console.log(e));
  }
  // 4. Create a function to delete a task, you must find the task inside the this.todoListay and delete it.
  deleteTask(task: string): void{
    this.todoList.splice(this.todoList.indexOf(task),1);
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
