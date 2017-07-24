// Iteration 1
// 1. Create an array of strings
let myArray: Array<string> = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task:string):void{
  myArray.push(task);
  console.log(`
  =========== NEW TASK ===========
  Task ${task} inserted in the list
  Number of Items: "+${myArray.length}
  `)
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks(array:Array<string>):void{
  array.forEach(function(task){
    console.log(task);
  });
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task:string) {
  const index = myArray.indexOf(task);
  if (index !=-1) {
    myArray.splice(index,1);
  }
  return myArray.length;
}
// Execution
addTask('This is our first task');
addTask('Eat pizza 🍕 yummy!!!');
addTask('Finish this iteration 1!! 🤓');
addTask('Finish this iteration 2!! 🤓');
addTask('Finish this iteration 3!! 🤓');
listAllTasks(myArray);
console.log("Number of Items left:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks(myArray);
