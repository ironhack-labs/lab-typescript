// Add the reference to the interface
import {TodoItemInterface, TodoListInterface} from './interfaces';
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  status: boolean;

  constructor(public title: string, public updatedAt: Date) {}
    toggleStatus(): boolean {
      this.updatedAt = new Date;
      return (this.status) ? false : true;
    }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoListInterface {
  tasks: Array<string> = [];
  constructor() {}
    addTask(task): number {
      this.tasks.push(task);
      console.log(`Task \"${task}\" inserted in the list`);
      return this.tasks.length;
    }
    listAllTasks(): void {
      this.tasks.forEach(listElement => console.log(listElement));
    }
    deleteTask(task): number {
      this.tasks.forEach((listElement, i) => {
        if(listElement == task) this.tasks.splice(i, 1);
      });
      console.log(`Task \"${task}\" removed from the list`);
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
myTodos.listUncomplete();
