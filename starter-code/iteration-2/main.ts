// Add the reference to the "TodoInterface"
// import { Pizza } from './todoInterface'

interface Pizza {
  tasks: string[];
  addTask(task:string): number;
  listAllTasks(): void;
  deleteTask (task: string): number;
}


// 1. Create a class Todo that implements the Interface created before.

var tasks: Array<string> = new Array<string>();

class Todo implements Pizza {
  tasks;

  constructor() { }

  addTask (task: string): number {
    tasks.push(task);
    return tasks.length;
  }

  listAllTasks (): void {
    for (let task of tasks){
      console.log(task)
    }
  }
  deleteTask (task: string): number {
    let taskIndex = tasks.indexOf(task);
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1)
    }
    return tasks.length
  }
}
// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
