// Add the reference to the "TodoInterface"
interface TodoInterface {
  tasks: Array<string>;
  addTask(task: string): void;
  listAllTasks(): void;
  deleteTask(task: string): void;
}
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface{
  constructor(public tasks: Array<string> = []){}
  addTask = (loquesea : string) : void=> {
    this.tasks.push(loquesea);
  }
  listAllTasks = () : void => {
    console.log(this.tasks);
  }
  deleteTask = (el: string) : void => {
    let pos = this.tasks.indexOf(el);
    this.tasks.splice(pos, 1);
  }
}
// Execution
let myTodo = new Todo();
console.log("Number of items:", myTodo.addTask('This is our first task'));
console.log("Number of items:", myTodo.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodo.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodo.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodo.addTask('Finish this iteration 3!! 🤓'));
myTodo.listAllTasks();
console.log("Number of items:", myTodo.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodo.deleteTask('Finish this iteration 2!! 🤓'));
myTodo.listAllTasks();
