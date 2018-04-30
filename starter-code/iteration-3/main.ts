// Add the reference to the interface
import { TodoItemInterface } from "interfaces";
import { TodoListInterface } from "interfaces";
// Create class TodoItem that implements the corresponding interface

export class TodoItem implements TodoItemInterface {
  status = false;
  updatedAt = new Date();
  constructor(public title: string) {}
  toggleStatus() {
    if (this.status === true) {
      this.status = false;
    } else {
      this.status = true;
    }
  }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  public list: Array<TodoItem>;
  addTask(task: TodoItem): number {
    console.log(`Task ${task} inserted in the list`);
    console.log(`Number of items: ${this.list.length}`);
    return this.list.length;
  }
  listAllTasks() {
    this.list.forEach(elem => {
      console.log(elem);
    });
    console.log(this.list.length);
  }

  deleteTask(todoItem) {
    return listAllTasks.length;
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

