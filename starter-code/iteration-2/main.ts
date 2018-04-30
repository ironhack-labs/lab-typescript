// Write the interface for class Todo. It must have:
// - An array of strings as a property.
// - Method for adding task where will receive a string, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive a string, doesn't return anything.


interface Task {
  tasks: Array<string>;
  addTask(task: string): Number;
  listAllTasks();
  deleteTask(task: string): Number;
}


// 1. Create a class Todo that implements the Interface created before.

class Todo implements Task {
  tasks: Array<string> = [];

  constructor() {}

  addTask(task: string): Number {
    this.tasks.push(task);
    console.log(task + " added to database ");
    console.log(this.tasks.length);
    return this.tasks.length;
  };

  listAllTasks() {
    this.tasks.forEach((task) => {
      return console.log(task);
    });
  };

  deleteTask(task: string): Number {
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    console.log(task + " deleted from database ");
    console.log(this.tasks.length);
    return this.tasks.length
  };
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
