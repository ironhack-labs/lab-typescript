// Add the reference to the interface
import { TodoItemInterface, TodoInterface } from './interfaces';
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {

  constructor(
    public title: string
  ) {}

  status: boolean = false;
  updatedAt: string = Date.now().toString();
  toogle() {
    this.status === false ? this.status = true : this.status = false;
  }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoInterface {

  tasks: any[] = [];

  addTask(task: any) {
    this.tasks.push(task);
    console.log('=========== NEW TASK ===========')
    console.log(`Task ${task.title} inserted in the list`);
    return this.tasks.length;
  }

  // 3. Create a function to list all tasks, it must show in the console de task.
  listAllTasks () {

    this.tasks.forEach(task => {
      console.log('task --> ', task.title)
      console.log('updated at ---> ', task.updatedAt);
    });
  }

  // 4. Create a function to delete a task, you must find the task inside the array and delete it.
  deleteTask (task: any) {
    let index: number;
    this.tasks.forEach((t, i) => {
      if (JSON.stringify(t) === JSON.stringify(task)) index = i;
    });
    this.tasks.splice(index,1);
    console.log('=========== TASK REMOVED ===========')
    console.log(`Task ${task.title} removed from the list`);
    return this.tasks.length;
  }

  listUncomplete () {
    this.tasks.forEach(task => console.log('Uncomplete --> ', task.title));
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
