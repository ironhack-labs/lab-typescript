// Add the reference to the "TodoInterface"

// 1. Create a class Todo that implements the Interface created before.

class Todo implements Paco {
  tasks: Array<string>;
  constructor(tasks: Array<string>) {
    this.tasks = tasks;
  }
  addTasks(new_task: string): number{
   console.log("Task" + new_task + " inserted in the list")
   console.log("Number of items: " + todoTasks.length)
   return todoTasks.length;
  };
  listAllTasks(): void{
    console.log("Number of items: " + todoTasks.length)
  }
  deleteTasks(old_task: string): number{
    console.log("Task" + old_task + " inserted in the list")
    console.log("Number of items: " + todoTasks.length)
    return todoTasks.length;
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
