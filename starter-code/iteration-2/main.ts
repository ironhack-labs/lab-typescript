// Add the reference to the "TodoInterface"
interface TodoInterface {
  myArray: Array<string>;
  addTask(string: string):number;
  listAllTasks():void;
  deleteTask(string: string): number;
}
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
 
  constructor(public myArray: Array<string>){}
  
  function addTask(newTask: string): number {
    this.myArray.push(newTask);
    console.log( newTask  +  ' New length of array is: ' + myArray.length);
    return this.myArray.length;
  }

  function listAllTasks ():void {
    this.myArray.forEach(element => {
      console.log(element);
    });
  }
  
  function deleteTask(task: string): number {
    const index = this.myArray.indexOf[task];
    this.myArray.splice(index, 1);
    return this.myArray.length;
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
