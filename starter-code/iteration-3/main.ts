// Add the reference to the interface
import { TodoItemInterface } from './interfaces'
import { TodoListInterface } from './interfaces'

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {

  status: Boolean = false;

  constructor(public title: string = "New title", public updatedAt: Date) { }

  toggleStatus() {
    if (status) {
      this.status = false
      this.updatedAt = new Date()
    } else {
      this.status = true
      this.updatedAt = new Date()
    }
  }

}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  TodoItems: Array<TodoItemInterface> = [];

  addTask(task: TodoItem) {
    this.TodoItems.push(task);
    console.log(`Task ${task} inserted in the list
    Number of items: ${this.TodoItems.length}`);
    return this.TodoItems.length;
  }

  listAllTasks(): void {
    this.TodoItems.forEach(function (e) {
      console.log(e.title);
      console.log(e.updatedAt);
    });
  }

  deleteTask(task: TodoItem):number {
    let indice = this.TodoItems.indexOf(task);

    this.TodoItems.splice(indice, 1);
    console.log(`Task ${task} removed from the list
    Number of items ${this.TodoItems.length}`);
    return this.TodoItems.length;
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
myTodos.listUncomplete();
