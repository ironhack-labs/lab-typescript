// Add the reference to the interface
interface TodoItemInterface {
  title: String;
  status: Boolean;
  updatedAt: Date;
  toogleStatus()
}

interface TodoListInterface {
  TodoItem: Array<String>;
  addTask(TodoItem): Number;
  listAllTasks();
  deleteTask(TodoItem): Number;
 }

// Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItemInterface {
  status: Boolean;
  updatedAt: Date

  constructor (public title: String) {
    this.status = false;
    this.updatedAt = new Date();
  }
  toogleStatus(){
    this.status = !this.status;
    this.updatedAt = new Date();
  }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  TodoItem: Array<String>;
  constructor (){
    this.TodoItem = [];
  }
  addTask(TodoItem){
    this.TodoItem.push(TodoItem)
    console.log(`Number of items: ${this.TodoItem.length}`);
    return this.TodoItem.length;
  }
  listAllTasks() {
    for (let TodoItem of this.TodoItem) {
      console.log(TodoItem);
    }
  }
  deleteTask(x) {
    this.TodoItem.splice(this.TodoItem.indexOf(x), 1);
    console.log(`Number of items: ${this.TodoItem.length}`);
    return this.TodoItem.length;
  }
}


//Execution
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
// myTodos.listUncomplete();
