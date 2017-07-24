// Add the reference to the interface
import {TodoItemInterface, TodoListInterface} from './interfaces';
// Create class TodoItem that implements the corresponding interface
export class TodoItem implements TodoItemInterface {
  status: boolean;
  updatedAt: Date;

  constructor(public title: string) {
    this.updatedAt = new Date();
    this.status = false;
  }

    toggleStatus(): boolean {
      this.updatedAt = new Date();
      return this.status = (this.status) ? false : true;
    }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  tasks: Array<TodoItem> = [];
  constructor() {}
    addTask(todoItem): number {
      this.tasks.push(todoItem);
      console.log(`Task \"${todoItem.title}\" inserted in the list`);
      return this.tasks.length;
    }
    listAllTasks(): void {
      this.tasks.forEach(todoItem => {
        console.log(`task ${todoItem.title} updated at: ${todoItem.updatedAt}`);
      });
    }
    deleteTask(task): number {
      this.tasks.forEach((todoItem, i) => {
        if(todoItem == task) this.tasks.splice(i, 1);
      });
      console.log(`Task \"${task.title}\" removed from the list`);
      return this.tasks.length;
    }
    listUncomplete(): void {
      this.tasks.forEach(todoItem => {
        if(todoItem.status == false) console.log(todoItem.title);
      });
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
