// Add the reference to the "TodoInterface"
interface TodoInterface {
  array : Array<string>;
  addTask(parameter:string): number;
  listAllTasks(): void;
  deleteTask(parameter: string): number;
}

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface{
  array:Array<string> = [];

  addTask(task:string):number{
    this.array.push(task);
    console.log(`${task} has been added`)
    console.log(task.length)
    return task.length;
  }

  listAllTasks():void {
    console.log(this.array)
  }

  deleteTask(task:string):number {
    const index = this.array.indexOf(task)
    this.array.splice(index, 1);
    console.log (`the ${task} has been deleted`)
    return this.array.length;
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
