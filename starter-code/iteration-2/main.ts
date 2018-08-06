// Add the reference to the "TodoInterface"
interface TodoInterface {
  arrOfStrings: string[];
  addTask(task: string):number;
  listAllTasks():void;
  deleteTask(task:string):number;
}

// 1. Create a class Todo that implements the Interface created before.

class Todo implements TodoInterface {

  arrOfStrings: string[];

  constructor(){
    this.arrOfStrings = [];
  }

  addTask(task:string):number{
    this.arrOfStrings.push(task);
    console.log(`Task ${task} inserted to the list`);
    return this.arrOfStrings.length;
  }

  listAllTasks():void {
    this.arrOfStrings.forEach(task => {
      console.log(task);
    })
  }

  deleteTask(task:string):number {
    let position = this.arrOfStrings.indexOf(task);
    this.arrOfStrings.splice(position,1);
    console.log(`${task} removed from the list`);
    return this.arrOfStrings.length;
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
