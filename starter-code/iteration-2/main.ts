// Add the reference to the "TodoInterface"
interface Todo {
  list: Array<String>;
  addTask(task: string): number;
  deleteTask(task: string): number;
  listAllTasks();
}
// 1. Create a class Todo that implements the Interface created before.

class List implements Todo{
  constructor(public list: Array <String>){}

  addTask(task) {
    this.list.push(task);
    console.log(task + " was added to the list of tasks.");
    console.log("Lenght of the list is: " + this.list.length);
    return this.list.length;
  }
  
  listAllTasks() {
    for (var i = 0; i < this.list.length; i++) {
      console.log("Task : " + this.list[i]);
    }
  }

  deleteTask(task) {
    var index = this.list.indexOf(task);
    this.list.splice(index, 1);
    console.log(task + " was deleted from the list of task.");
    console.log("Lenght of the list is: " + this.list.length);
    return this.list.length;
  }
}

// Execution
let myTodos = new List([]);

console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
