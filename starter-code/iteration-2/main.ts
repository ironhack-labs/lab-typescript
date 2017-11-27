// Add the reference to the "TodoInterface"
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface{
  arrayTasks=[];
  task: string;

  addTask(task):number {
    arrayStrings.push(task);
    return this.arrayTasks.length;
  }

  listAllTasks():void {
    for(var i= 0; i < this.arrayTasks.length; i++){
      console.log(i);
    }
  }

  deleteTask(task):number {
    let taskIndex = this.arrayTasks.indexOf(task);
    this.arrayTasks.splice(taskIndex, 1);
    return this.arrayTasks.length;
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
