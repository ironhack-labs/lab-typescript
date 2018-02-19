// Iteration 1
// 1. Create an array of strings
let toDoArr: Array<string> = [];
let toDoListLength: number;
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task: string){
  toDoArr.push(task);
  toDoListLength = toDoArr.length;
  console.log('Task ' + task + ' inserted in the list');
  return toDoListLength;
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks(){
  toDoArr.forEach((task)=>{
    console.log(task);
  });
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task: string) {
  let index = toDoArr.indexOf(task);
  if (index > -1) {
    toDoArr.splice(index, 1);
  }
  console.log('Task ' + task + ' was deleted');
  toDoListLength = toDoArr.length;
  return toDoListLength;
}
// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();

