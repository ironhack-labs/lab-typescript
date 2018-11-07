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
  toggleStatus();
}

// Write the interface for class Todo. It must have:
// - An array of TodoItem as a property.
// - Method for adding task where will receive an instance of TodoItem, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive an instance of TodoItem, doesn't return anything.
// - Method for show all tasks that are not yet done, doesn't return anything.
interface TodoListInterface {
  todoItems: Array<TodoItemInterface>;
  addTask(task: TodoItem): number;
  listAllTasks();
  deleteTask(task: TodoItem): number;
  listUncomplete():void;
}

// Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItemInterface {
  status: boolean = false;
  title: string;
  updatedAt: Date;

  constructor(title: string, updatedAt: Date = new Date()) {
    this.title = title;
    this.updatedAt = updatedAt;
  }
  toggleStatus() {
    this.status = !this.status;
    this.updatedAt= new Date();
  };

}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  todoItems: Array<TodoItem> = [];

  addTask(task: TodoItem): number {
    this.todoItems.push(task)
    return this.todoItems.length;
  }

  listAllTasks() {
    this.todoItems.forEach((item) => {
      console.log(item.title + item.updatedAt)
    })
  }

  deleteTask(task: TodoItem): number {
    for (let i = this.todoItems.length - 1; i >= 0; i--) {
      if (this.todoItems[i] === task) this.todoItems.splice(i, 1);
    }
    console.log('Deleted ' + task)
    return this.todoItems.length;
  }

  listUncomplete() {
    this.todoItems.filter((item) => item.status).forEach(item => console.log(item));
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
