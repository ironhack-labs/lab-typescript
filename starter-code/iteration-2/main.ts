// Add the reference to the "TodoInterface"
interface ToDoInterface{
  array: string[];
  addTask(task:string);
  listAllTasks():void;
  deleteTask(task:string):number;
}

// 1. Create a class Todo that implements the Interface created before.

class Todo implements ToDoInterface{
  array: string[];

  constructor(){
    this.array = [];
  }

addTask(task:string){
  this.array.push(task);
  console.log(`${task} added to the tasklist`); 
  return this.array.length;
}

listAllTasks():void {
  this.array.forEach(task => {
    console.log(task);
     })
}

deleteTask(task:string){
  let index: number = this.array.indexOf(task);
  this.array.splice(index, 1);
  console.log(`${task} removed from the tasklist`);
  return this.array.length;
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
