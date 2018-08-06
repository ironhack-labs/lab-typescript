


// Add the reference to the "TodoInterface"

interface TodoInterface {
  arr:Array<string>;
  addTask(task:string):number;
  listAllTasks();
  deleteTask(task:string):number;
}
// 1. Create a class Todo that implements the Interface created before.

class Todo implements TodoInterface {
  arr:Array<string> = [];

  addTask(task:string):number{
    this.arr.push(task);
    console.log(`${task} insert in the list`);
    console.log(`number of items:${this.arr.length}`);
    return this.arr.length;
  };
  listAllTasks(){
    this.arr.forEach(task => {console.log(task)});
  };
  deleteTask(task:string):number{
    let position = this.arr.indexOf(task);
    this.arr.splice(position, 1); 
    console.log(`${task} delete in the list`);
    console.log(`number of items:${this.arr.length}`);
    return this.arr.length;
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
