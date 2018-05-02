// Add the reference to the "TodoInterface"
import {TodoInterface} from "./todoInterface";
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
  constructor(
    todoList: Array<string> = [],
  ) { }
    addTask(task: string): number {
      todoList.push(task);
      console.log("============== NEW TASK ==============");
      console.log(`Task "${task}" inseted in the list`);
      console.log(`${todoList.length}`);
  }
    listAllTasks() {
      todoList.forEach(oneTask => {
      console.log(oneTask);
    });
  }
    deleteTask(task): number {
      todoList.splice(0,1)
      console.log("========== TASK DELETED ===========")
      console.log(`Task "${task}" removed from the list`)
      console.log(`${todoList.length}`);
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
