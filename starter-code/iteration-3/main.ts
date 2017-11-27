// Add the reference to the interface
import { listItemInterface , toDoListInterface} from './interfaces';

class TodoItem implements listItemInterface {
  constructor(
    public title: String,
    public status: boolean = false,
    public updatedAt: Date = new Date()) { }

  toogle(): void {
    this.updatedAt = new Date();
    if (this.status === false) {
      this.status = true;
    }
    else this.status = false;
  };
}

// Create class TodoList that implements the corresponding interface
class TodoList implements toDoListInterface {
  constructor(public tasks: Array<TodoItem>, ) { }

  addTask(task: TodoItem): number {
    this.tasks.push(task);
    console.log("=========== NEW TASK ===========");
    console.log("Task " + task + " inserted in the list");
    console.log("Number of items:" + this.tasks.length);
    return this.tasks.length;
  };

  listAllTasks(): void {
    this.tasks.forEach(e => {
      console.log(e.title);
      console.log(e.updatedAt);
    });
  };

  deleteTask(task: listItemInterface): number {
    let pos: number = this.tasks.indexOf(task);
    this.tasks.splice(pos, 1);
    console.log("=========== TASK REMOVED ===========");
    console.log("Task " + task + " removed from the list");
    console.log("Number of items:" + this.tasks.length);
    return this.tasks.length;
  };
}

// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList([]);

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
//myTodos.listUncomplete();
