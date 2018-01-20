import { TodoInterface } from "./todoInterface";

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
  todoList: Array<string> = [];

  addTask(task: string): number {
    this.todoList.push(task);

    console.log("=========== NEW INSERTION ===========");
    console.log(`Task "${task}" inserted in the list`);

    return this.todoList.length;
  }

  listAllTasks(): void {
    console.log("=========== TASKS ===========");

    this.todoList.forEach((task) => {
      console.log(task);
    });
  }

  deleteTask(task: string): number {
    var index = this.todoList.indexOf(task);
    this.todoList.splice(index, 1);

    console.log("=========== NEW DELETION ===========");
    console.log(`Task "${task}" removed from the list`);

    return this.todoList.length;
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
