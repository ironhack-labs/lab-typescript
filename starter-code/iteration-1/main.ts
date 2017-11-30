// Iteration 1
// 1. Create an array of strings
const myTasks: string[] = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask (task: string) {
  return myTasks.push(task);
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks(arrayOfTasks) {
console.log("These are our tasks: ")
  arrayOfTasks.forEach( oneTask => {
    console.log( oneTask);
  })
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask( taskToDelete ) {
  let itemIndex = myTasks.indexOf( taskToDelete );
  console.log( itemIndex )
  myTasks.splice( itemIndex, 1 );
  console.log( myTasks );

}
//
addTask("Go to school");
addTask("Do homework");
addTask("Buy Milk");
console.log( myTasks );
listAllTasks( myTasks );
deleteTask("Buy Milk")
// Execution
// console.log("Number of items:" + myTasks.length , addTask('This is our first task'));
// console.log("Number of items:" + myTasks.length , addTask('Eat pizza 🍕 yummy!!!'));
// console.log("Number of items:" + myTasks.length , addTask('Finish this iteration 1!! 🤓'));
// console.log("Number of items:" + myTasks.length , addTask('Finish this iteration 2!! 🤓'));
// console.log("Number of items:" + myTasks.length , addTask('Finish this iteration 3!! 🤓'));
// listAllTasks(myTasks);
// console.log("Number of items:" + myTasks.length , deleteTask('Finish this iteration 1!! 🤓'));
// listAllTasks(myTasks);
