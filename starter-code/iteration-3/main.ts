// Add the reference to the interface
import {TodoItemInterface} from "./interface";
import {TodoListInterface} from "./interface";

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  title: string;
  status: boolean;
  updatedAt: Date;
  constructor(title: string){
    this.title = title;
    this.status = false;
    this.updatedAt = Date();
  }
  toggleStatus(){
    if (this.status) {this.status = false}
    else {this.status = true}
    this.updatedAt = Date();
  }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  constructor (public tasks : Array<string> = []){};

  addTask(task) {
    this.tasks.push(task);
    console.log("=========== NEW TASK ===========");
    console.log('Task "'  + task.title + '" inserted in the list');
    return this.tasks.length;
  };

  listAllTasks (){
    this.tasks.forEach( t => {
      console.log(t.title);
    });
  };

  deleteTask (task: TodoItem) {
    //tasks.find( function (t) {return t});
    let i = this.tasks.indexOf(task);
    console.log("indice="+i)
    if (i != -1) {
      console.log("=========== TASK REMOVE ===========");
      console.log('Task "' + task.title + '" removed from the list');
      this.tasks.splice(i, 1);
      return this.tasks.length;
    }
  };

  listIncomplete () {
    this.tasks.forEach (t => {
      if (!t.status) {console.log("INCOMPLETA: "+t.title)}
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
myTodos.listIncomplete();
