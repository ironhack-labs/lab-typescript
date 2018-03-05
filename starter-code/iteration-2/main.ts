// Add the reference to the "TodoInterface"
import { ToDo } from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.
class Todo implements ToDo{
  tasks: Array<string> = [];

  addTask(task): number{
        // It adds the task to the array.
        this.tasks.push(task);
        // It prints a message indicating the insertion.
        console.log('===== New Task ====+');
        console.log("Task \"" + task + "\" inserted into the list");
        // It returns the number of elements in the list and prints that number in the console as well.
        return this.tasks.length;
  } 

  listAllTasks(): void {
    console.log('_______Task List_______');
    this.tasks.forEach(function (task) {
        console.log("" + task);
    });
};
  // - Method for delete a task where will receive a string, doesn't return anything.
  deleteTask(task): number {
    this.tasks.splice(this.tasks.indexOf(task), 1);
    console.log('====== TASK REMOVED ======');
    console.log("Task \"" + task + "\" removed from the list");
    return this.tasks.length;
}}

// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
// myTodos.listAllTasks();
// console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
// console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
// myTodos.listAllTasks();
