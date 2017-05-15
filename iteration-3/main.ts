// Add the reference to the interface
import { TodoItemInterface, TodoListInterface } from "./interfaces";
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  updatedAt = new Date();
  status = false;
  constructor(public title: String) {}
  toggleStatus() {
    if(this.status) {
      this.status = false;
    } else {
      this.status = true;
    }
  }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  todoItems = [];
  addTask(todo: Object) {
    this.todoItems.push(todo);
    console.log(`${todo} was added to the array`);
    return this.todoItems.length;
  }
  listAllTasks() {
    this.todoItems.forEach((todo) => {
      console.log(todo.title, todo.updatedAt);
    })
  }
  deleteTask(todo: TodoItem) {
    console.log(`${todo.title} has been deleted`);
    const index = this.todoItems.indexOf(todo);
    this.todoItems.splice(index, 1);

    return this.todoItems.length;
  }
}

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

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