// Add the reference to the interface
import {TodoInterface, TodoItemInterface} from './interfaces';


// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  status: string;
  updatedAt: Date;

  constructor(
    public title: string,
  ) {
      this.updatedAt = Date.now() 
      this.status = false;
    }

  toggleStatus():void {
    this.status = !this.status;
    this.updatedAt = Date.now();
  }
}


// Create class TodoList that implements the corresponding interface
class TodoList implements TodoInterface {
  public doArray: Array<TodoItem> = [];

  addTask(task:TodoItem):number {
    this.doArray.push(task);
    console.log(`
    =========== NEW TASK ===========
    Task ${task.title} inserted in the list
    `)
    return this.doArray.length
  }

  listAllTasks():void {
    this.doArray.forEach(task => {
      console.log(task.title);
      console.log(task.updatedAt);
    })
  }

  deleteTask(task:TodoItem):number {
    this.doArray.forEach((item, index) => {
      if(task.title === item.title) {
        this.doArray.splice(index, 1)
      }
    });
    console.log(`
    =========== TASK REMOVED ===========
    Task ${task.title} removed from the list
    `)
    return this.doArray.length
  }
}



// Execution
// let task1 = new TodoItem('This is our first task');
// let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
// let task3 = new TodoItem('Finish this iteration 1!! 🤓');
// let task4 = new TodoItem('Finish this iteration 2!! 🤓');
// let task5 = new TodoItem('Finish this iteration 3!! 🤓');

// let myTodos = new TodoList();

// console.log("Number of items:", myTodos.addTask(task1));
// console.log("Number of items:", myTodos.addTask(task2));
// console.log("Number of items:", myTodos.addTask(task3));
// console.log("Number of items:", myTodos.addTask(task4));
// console.log("Number of items:", myTodos.addTask(task5));
// myTodos.listAllTasks();
// console.log("Number of items:", myTodos.deleteTask(task3));
// console.log("Number of items:", myTodos.deleteTask(task4));
// console.log("Number of items:", myTodos.deleteTask(task5));
// myTodos.listUncomplete();
