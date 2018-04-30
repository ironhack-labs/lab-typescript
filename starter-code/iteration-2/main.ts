// Add the reference to the "TodoInterface"

interface TodoInt {
  taskArray : Array<string>;
  addTask(task: string) :number;
  listAllTasks();
  deleteTask(task: string) :number;
}

// 1. Create a class Todo that implements the Interface created before.

class Todo implements TodoInt {

  taskArray: Array <string> =[];

  constructor(){ }
  
  addTask(task: string){
    this.taskArray.push(task);
    console.log(`Task "${task}" inserted in the list`);
    return this.taskArray.length;
  }

  listAllTasks(){
    for(let i=0; i< this.taskArray.length; i++){
      console.log(this.taskArray[i]);
    }
  }

  deleteTask(task: string){
    for(let i=0; i< this.taskArray.length; i++){
      if(this.taskArray[i]=== task){
        this.taskArray.splice(i,1);
      }
  }
  console.log(`Task "${task}" removed from the list`);
  return this.taskArray.length;
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
