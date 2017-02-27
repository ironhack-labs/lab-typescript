// Add the reference to the interface
/* interfaces.ts */
import {TodoItemInterface,TodoListInterface} from "./interfaces" ;
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface{
  updatedAt:Date;
  status:boolean = false;

  constructor(public title: string ) { }
  toggleStatus(){
    this.status ? this.status = false : this.status = true ;
    this.updatedAt= new Date();
  }
}

// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface{
    ArrString: Array<string>=[];

    // constructor() { }// No hace nada
      addTask(task) {
          this.ArrString.push(task);
          console.log("Added"+ task);
          return this.ArrString.length;
      }
      listAllTasks() {
        this.ArrString.forEach((elem)=> { console.log(elem)});

      }
    deleteTask(task) {
      var index = this.ArrString.indexOf(task);
      if (index !== -1) { this.ArrString.splice(index, 1);
        console.log("Removed"+ task);
        return this.ArrString.length;
    }
  }
  listUncomplete(){
    
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
