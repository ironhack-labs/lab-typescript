// Add the reference to the interface
import {TodoListInterface, TodoItemInterface} from "./interfaces";

// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  status = false;
  updatedAt = "";

  constructor(public title: string) {}
  toggleStatus(){
   return this.status
  }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface{
  todoItems;

  constructor(todoItems: Array<{TodoItemInterface}> = []) {
    this.todoItems = todoItems
  }

  addTask(item:TodoItem):number{
    this.todoItems.push(item);
    console.log("=========== NEW TASK ===========");
    console.log(`Task ${item.title} inserted in the list`);
   return this.todoItems.length
  }

  listAllTasks():void{
    for (let i of this.todoItems) {
       console.log(i);
    }
  }

  deleteTask(item:TodoItem):number{
    for (let i in this.todoItems) {
       if(this.todoItems[i] === item) {
        this.todoItems.splice(i, 1);
        console.log("=========== TASK REMOVED ===========");
        console.log(`Task ${item.title} removed from the list`);
      }
    }
   return this.todoItems.length
  }

  listUncomplete():boolean{
    return this.todoItems.length===0;
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
