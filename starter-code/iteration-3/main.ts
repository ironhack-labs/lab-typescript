// Add the reference to the interface
interface toDoItemInterface {
  title: string;
  isDone: boolean;
  updatedAt: Date;
  checkDone(): void;
}
// Create class TodoItem that implements the corresponding interface
class TodoItem implements toDoItemInterface{
  constructor(public title:string, public isDone:boolean = false, public updatedAt: Date = new Date()) {}
  checkDone() {
    if(this.isDone){
      this.isDone = false;
    } else {
      this.isDone = true;
    }
  }
}


// Create class TodoList that implements the corresponding interface
interface TodoInterface {
  tasks: Array<toDoItemInterface>;
  addTask(task): void;
  listAllTasks(): void;
  deleteTask(task): void;
}
// 1. Create a class Todo that implements the Interface created before.
class TodoList implements TodoInterface{
  constructor(public tasks: Array<TodoItem> = []){}
  addTask = (loquesea) : void=> {
    this.tasks.push(loquesea);
  }
  listAllTasks = () : void => {
    console.log(this.tasks);
  }
  deleteTask = (el) : void => {
    let pos = this.tasks.indexOf(el);
    this.tasks.splice(pos, 1);
  }
  listUncomplete = () : void => {
    this.tasks.forEach(e => {
      if(!e.isDone){
        console.log(e)
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
