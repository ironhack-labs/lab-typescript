// 1. Create an array of strings
  let tasks: Array<string> =[]; //Array of strings

let myArray: Array<string> = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
<<<<<<< HEAD
function addTask(task: string): number {
  console.log('**added a task**')
  this.tasks.push(task);
  return (task.length);
}
=======

let addTask = function(myTask: string): number {
  this.myArray.push(myTask);
  return myTask.length;
}

>>>>>>> accded598e1e09f0de7f6ed0771ce1a266bea0dd
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks(){
  console.log('*** All Tasks ***')
  this.tasks.forEach((thisTask)=> {
    console.log(thisTask);
    return this.tasks.length;

<<<<<<< HEAD
  });
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
let deleteTask = function(task:string):number{
  var index = this.tasks.indexOf(task);
  this.tasks.splice(index,1);
  return this.tasks.length;
}
=======
let listAllTasks = function (): void{
  this.myArray.forEach((myTask)=> {
    console.log(myTask);
  });
}

// 4. Create a function to delete a task, you must find the task inside the array and delete it.

let deleteTask = function(myTask: string): number {
  var index = this.myArray.indexOf(myTask);
  this.myArray.splice(index, 1);
  return this.myArray.length;
}


>>>>>>> accded598e1e09f0de7f6ed0771ce1a266bea0dd
// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
