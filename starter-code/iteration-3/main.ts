// Add the reference to the interface
interface TodoItem {
  title: string;
  status: boolean;
  updatedAt: Date;
  toggleStatus(): void;
}

type task = {
  title: string;
  status: boolean;
  updatedAt: Date;
  toggleStatus(): void;
}

interface Todo {
  tasks: task[];
  addTask(task): number;
  listAllTasks(): void;
  deleteTask (task): number;
}
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItem {
  status: boolean = false;
  updateAt: Date = new Date;

  constructor(public title: string) { }
  toggleStatus(){
    if (this.status === false){
      this.status = true;
      this.updateAt = new Date;
    } else {
      this.status = false;
      this.updateAt = new Date;
    }
  }
}
// Create class TodoList that implements the corresponding interface
var tasks: Array<task> = new Array<task>();

class TodoList implements Todo {
  tasks;
  constructor() { }

  addTask (task): number {
    tasks.push(task);
    return tasks.length;
  }

  listAllTasks (): void {
    for (let task of tasks){
      console.log(task)
    }
  }
  deleteTask (task): number {
    let taskIndex = tasks.indexOf(task);
    if (taskIndex !== -1) {
      tasks[taskIndex].toggleStatus()
    }
    return tasks.length
  }
  listUncomplete(){
    for (let task of tasks){
      if (task.status === false) {
        console.log(task);
      }
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
