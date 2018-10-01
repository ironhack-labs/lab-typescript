// Add the reference to the interface
// Write the interface for class TodoItem. It must have:
// - A title of the task as a property.
// - A boolean to mark if it's done.
// - A property updatedAt, obiously is a date.
// - Method for toogle if it's done or not, doesn't return anything.
interface TodoItemInterface {
  title: string;
  status: boolean;
  updatedAt: Date;
  toggleStatus():any;
}

// Write the interface for class Todo. It must have:
// - An array of TodoItem as a property.
// - Method for adding task where will receive an instance of TodoItem, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive an instance of TodoItem, doesn't return anything.
// - Method for show all tasks that are not yet done, doesn't return anything.
interface TodoListInterface {
  TodoItems: Array<string>;
  addTask(TodoItem): number;
  listAllTasks(): any;
  deleteTask(TodoItem): number;
}

// Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItemInterface {
  status: boolean;

  constructor(public title: string, public updatedAt: Date) {}
  toggleStatus() {
    this.status = !status;
    this.updatedAt= new Date();
  };

}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  TodoItem = [];

  constructor() {
  }

  addTask(task: string) {
    this.TodoItem.push(task)
    return this.TodoItem.length;
  }

  listAllTasks() {
    this.TodoItem.forEach((item) => {
      console.log(item.title + item.updatedAt)
    })
  }

  deleteTask(task: string) {
    for (let i = this.TodoItem.length - 1; i >= 0; i--) {
      if (this.TodoItem[i] === task) this.TodoItem.splice(i, 1);
    }
    console.log('Deleted ' + task)
    return this.TodoItem.length
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
