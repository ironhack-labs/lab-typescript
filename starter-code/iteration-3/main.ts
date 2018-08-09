// Add the reference to the interface
import { TodoItemInterface, TodoListInterface} from "./interfaces";
const l: any = console.log;

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface{
  constructor(public title:string, public updatedAt: Date = new Date()){} 
  status: boolean = false; 
  toggleStatus():void{
    this.status = !this.status;
    this.updatedAt = new Date();
  } 
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface{
  list: Array<TodoItemInterface> = [];
  addTask(task: TodoItemInterface): number {
    this.list.push(task);
    l(`=========== NEW TASK ===========
    Task ( ${task.title} ) inserted in the list
    Number of items: ${this.list.length}`);
    return this.list.length;
  }
  listAllTasks(): void{
    l(...this.list);
  }
  deleteTask(task: TodoItemInterface){
    let delIdex: number = this.list.indexOf(task);
    this.list.splice(delIdex,1);
    l(`=========== TASK REMOVED ===========
    Task ( ${task.title} ) inserted in the list
    Number of items: ${this.list.length}`);
    return this.list.length;

  }
  
}


// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');
task5.toggleStatus();

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
