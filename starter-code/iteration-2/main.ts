// Add the reference to the "TodoInterface"
import { todoInterface } from "./todoInterface";
// 1. Create a class Todo that implements the Interface created before.

class Todo implements todoInterface {
  constructor(public task: Array<string>) {}

  addTask(task: string): number {
    this.task.push(task);
    let numElements = this.task.length;
    console.log("=========== TASK REMOVED ===========");
    console.log(`Task  ${task} removed from the list`);
    console.log(`Number of items: ${numElements}`);

    return numElements;
  }

  listAllTasks():void{

    this.task.forEach(x => console.log(x))
  
  }

  
}

// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask("This is our first task"));
console.log("Number of items:", myTodos.addTask("Eat pizza 🍕 yummy!!!"));
console.log(
  "Number of items:",
  myTodos.addTask("Finish this iteration 1!! 🤓")
);
console.log(
  "Number of items:",
  myTodos.addTask("Finish this iteration 2!! 🤓")
);
console.log(
  "Number of items:",
  myTodos.addTask("Finish this iteration 3!! 🤓")
);
myTodos.listAllTasks();
console.log(
  "Number of items:",
  myTodos.deleteTask("Finish this iteration 1!! 🤓")
);
console.log(
  "Number of items:",
  myTodos.deleteTask("Finish this iteration 2!! 🤓")
);
myTodos.listAllTasks();
