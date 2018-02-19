// Iteration 1
// 1. Create an array of strings
let stringArray:Array<string>=[];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task:string):number{
  
  let itemNumer:number=0;
  stringArray.push(task);
  itemNumer = stringArray.length;
  console.log("=========== NEW TASK ===========");
  console.log("Task "+task+" inserted in the list");
  console.log("Number of items: "+ itemNumer);
  return itemNumer;

}

// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks():void{

  stringArray.forEach(x => console.log(x))

}


// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task:string):number{

  let taskAux = stringArray.indexOf(task);
  stringArray.slice(taskAux,1);
  let numElements = stringArray.length;
   console.log("=========== TASK REMOVED ===========");
   console.log(`Task  ${task} removed from the list`);
   console.log(`Number of items: ${numElements}`);

  return numElements;

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
