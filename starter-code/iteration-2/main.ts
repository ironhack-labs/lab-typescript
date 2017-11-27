// Add the reference to the "TodoInterface"
interface TodoInterface {
  tasks: Array<string>;
  addTask(task: string): number;
  listAllTasks();
  deleteTask(task: string): number;
};

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
  constructor(public tasks: Array<string>) {};
  
  addTask(task) {
    return tasks.push(task);
  }
  
  listAllTasks(){
    tasks.forEach(task => {
      console.log(task);
    });
  }
  deleteTask(task) {
    const i = this.tasks.indexOf(task);
    tasks.splice(i, 1);
    return i;
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
