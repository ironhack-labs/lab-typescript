// Add the reference to the interface
import {TodoItemInterface, TodoListInterface} from './interfaces';

// Create class TodoItem that implements the corresponding interface

class TodoItem implements TodoItemInterface {
  title: string = " ";
  status: boolean = false;
  updatedAt: Date;

  constructor (title: string = "New task") {
    this.title = title;
    this.updatedAt = new Date();
  }

  toggleStatus(){
    if (this.status !== false){
      this.updatedAt = new Date();
    }
  };
}

// Create class TodoList that implements the corresponding interface

class TodoList implements TodoListInterface {
  todoList: Array<TodoItem> = [];

  addTask(task: TodoItem): number {
    this.todoList.push(task);

    return this.todoList.length;
  }

  listAllTasks(): void{
    this.todoList.forEach((task)=> {
      console.log(task);
    });
  }

  deleteTask(task: TodoItem): number {
    var index = this.todoList.indexOf(task);
    this.todoList.splice(index, 1);

    return this.todoList.length;
  }

  listUncompleted(): void {
    this.todoList.forEach((task)=> {
      if(task.status === false) {
        console.log(task.title, task.updatedAt + ' is uncompleted');
      }
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
myTodos.listUncompleted();
