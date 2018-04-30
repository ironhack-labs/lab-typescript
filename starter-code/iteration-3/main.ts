// Add the reference to the interface
import { TodoItemInterface } from "./todoInterfaces";
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  constructor(
    public title: string,
    public verify: boolean,
    public updatedAt: Date
  ) {}
  toogle(arr: Array<string>, mark: boolean) {
    arr.forEach(function(item) {
      return this.verify;
    });
  }
}
// Create class TodoList that implements the corresponding interface

class ToDo implements TodoInterface {
  constructor(public item: Array<TodoItem>) {}
  listAllTasks() {
    this.item.forEach(function(x) {
      console.log(x);
    });
  }
  deleteTask(y: TodoItem) {
    this.item.splice(this.item.indexOf(y), 1);
  }
  showTasks(mark: boolean) {
    this.item.forEach(function(x) {
      if (x.verify === false) {
        console.log(x);
      }
    });
  }

  addTask(itemx: TodoItem) {
    this.item.push(itemx);
  }
}

// Execution
let task1 = new TodoItem("This is our first task");
let task2 = new TodoItem("Eat pizza 🍕 yummy!!!");
let task3 = new TodoItem("Finish this iteration 1!! 🤓");
let task4 = new TodoItem("Finish this iteration 2!! 🤓");
let task5 = new TodoItem("Finish this iteration 3!! 🤓");

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
