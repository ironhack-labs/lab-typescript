// Add the reference to the interface
import { itemInterface, listInterface } from "./interfaces";
// Create class TodoItem that implements the corresponding interface
export class TodoItem implements itemInterface {
  done:       boolean = false;
  updatedAt:  Date = new Date;
  taskTitle:  string = "";


toggle() {
  if (this.done == false ) {
    console.log("Task completed");
    this.done = true;
  } else if (this.done == true ) {
    console.log("Task pending");
    this.done = false;
  }
}

constructor(title) {
this.taskTitle = title;
console.log(`Created Item --> ${ title }`)
  }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements listInterface {
  itemList: TodoItem[] = [];

  addTask(task: TodoItem) {
    this.itemList.push(task);
    console.log(`Added --> ${task.taskTitle} to the list `);
    return this.itemList.length;
  }

  listAllTasks() {
    console.log("--------------- Task List -------------");
    for (let listItem of this.itemList) {
      console.log(listItem.taskTitle);
    }
    return this.itemList.length;
  }

  deleteTask(task: TodoItem) {
    let findTask = this.itemList.indexOf(task);
    console.log(`Deleted ${findTask}`);
    this.itemList.splice(findTask, 1);
    return this.itemList.length;
  }

  showPending() {
    console.log("-------------- Pending Items -------------")
    for (let listItem of this.itemList) {
      if (listItem.done == false) {
        console.log(`${listItem.taskTitle} is pending to do`);
      }
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
myTodos.showPending();
