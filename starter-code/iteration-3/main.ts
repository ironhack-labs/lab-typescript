// Add the reference to the interface
import {TodoItemInterface, TodoListInterface} from './interfaces';

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  constructor (public title: string) {};
  status: boolean = false;
  updatedAt: Date;
  toggleStatus(){
    if (status) {
      this.status = false;
    } else {
      this.status = true;
    }
    this.updatedAt = new Date();
  }
}


// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  constructor (public tasks: Array<TodoItemInterface> = []) {};
  addTask(task){
    this.tasks.push(task);
    console.log('Added task');
    console.log(this.tasks.length);
    return this.tasks.length;
  }


  listAllTasks() {
    this.tasks.forEach(task => {
      task.updatedAt = new Date();
      console.log(task.title, task.updatedAt);
    });
  }

  deleteTask(task) {
    var index = this.tasks.indexOf(task, 0);
    if (index > -1) {
    this.tasks.splice(index, 1);
  }
  console.log('Task deleted');
  console.log(this.tasks.length);
  return this.tasks.length;
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
// myTodos.listUncomplete();
