// Add the reference to the interface
import { itemInterface, listInterface } from "./interfaces";
// Create class TodoItem that implements the corresponding interface
class TodoItem implements itemInterface {
  done: boolean = false;
  updatedAt: Date;
  titles: string = "";


toggle() {
  if (this.done == false ) {
    this.done = true;
  } else if (this.done == true ) {
    this.done = false;
  }
}

constructor(titles) {
let itemTitle = titles;
console.log(`Created Item --> ${ titles }`)
  }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements listInterface {
  itemList: any[] = [];

  addTask(task) {
    this.itemList.push(task);
    console.log(`Added + ${task.titles} to the list `);
  }

  listAllTasks() {
    console.log("--------------- Task List -------------")
    for (let listItem of this.itemList) {
      console.log(listItem.titles);
    }
  }

  deleteTask(task) {
    let findTask = this.itemList.indexOf(task.titles);
    console.log("Task # " + findTask);
    console.log(`Deleted ${findTask}`);
  }

  showPending() {
    for (let listItem of this.itemList) {
      if (listItem.done == false) {
        console.log(`${listItem.titles} is pending to do`);
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
