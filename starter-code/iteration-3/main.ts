// Write the interface for class TodoItem. It must have:
// - A title of the task as a property.
// - A boolean to mark if it's done.
// - A property updatedAt, obiously is a date.
// - Method for toogle if it's done or not, doesn't return anything.


interface TodoItem {
  title: string;
  status: boolean;
  updateAt: Date;

  toggleStatus();
}

// Write the interface for class Todo. It must have:
// - An array of TodoItem as a property.
// - Method for adding task where will receive an instance of TodoItem, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive an instance of TodoItem, doesn't return anything.
// - Method for show all tasks that are not yet done, doesn't return anything.

interface Todo {
  array: Array<TodoItem>;
  addTask(TodoItem);
  listAllTasks();
  deleteTask(TodoItem);
  showTasks();
  }

// Add the reference to the interface

// Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItem {
  title: string;
  status: boolean;
  updateAt: Date;

  constructor() {}

  addTask(task: string): Number {
    this.tasks.push(task);
    console.log(task + " added to database ");
    console.log(this.tasks.length);
    return this.tasks.length;
  };

  listAllTasks() {
    this.tasks.forEach((task) => {
      return console.log(task);
    });
  };

  deleteTask(task: string): Number {
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    console.log(task + " deleted from database ");
    console.log(this.tasks.length);
    return this.tasks.length
  };
}

// Create class TodoList that implements the corresponding interface

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
