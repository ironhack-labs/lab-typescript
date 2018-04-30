// Add the reference to the interface
import { TodoItemInterface, TodoListInterface} from './interfaces'
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  status: boolean = false;
  updatedAt: Date;

  constructor(public title: string){
    this.updatedAt = new Date();
  }

  toggleStatus(): void {
    this.updatedAt = new Date();
    this.status = !this.status;
  }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  tasks: Array<TodoItemInterface> = [];

  constructor() {
  }

  addTask(task: TodoItemInterface): number {
    this.tasks.push(task);
    console.log(`==== NEW TASK ====
    Task ${task.title} inserted in the list`);
    return this.tasks.length;
  }

  listAllTasks(): void {
    console.log(`==== TASKS ====`)
    this.tasks.forEach((item: TodoItemInterface) => {
      console.log(item.title);
    })
  }

  deleteTask(task: TodoItemInterface): number {
    this.tasks.splice(this.tasks.indexOf(task), 1);
    console.log(`==== TASK REMOVED ====
    Task ${task.title} removed from the list`);
    return this.tasks.length;
  }

  listUncomplete(): void {
    this.tasks.forEach((item: TodoItemInterface)=> {
      if (!item.status){
        console.log(item.title);
      }
    })
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
