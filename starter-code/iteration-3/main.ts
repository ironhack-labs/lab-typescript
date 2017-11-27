// Add the reference to the interface
import { ListItem, TodoListInterface } from "./interfaces";

// Create class TodoItem that implements the corresponding interface
class TodoItem implements ListItem {
 constructor(public title:string) {}
   status: false;
   updatedAt = new Date();
   toggleStatus():void {
     status ? false : true;
     this.updatedAt = new Date();
   };
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  tasks: Array<TodoItem>= [];

  addTask(todoItem) {
    this.tasks.push(todoItem);
    return this.tasks.length;
  }
  listAllTasks():void {
    this.tasks.forEach(e => {
      console.log(`${e.title} & ${e.updatedAt}`);
    })
  }
  deleteTask(todoItem):number {
    this.tasks.forEach((e, i) => {
      if (e.title === todoItem.title) this.tasks.splice(i, 1);
    })
    console.log(`Task ${todoItem.title} removed from the list. Number of items: ${this.tasks.length}`)
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
//myTodos.listUncomplete();
