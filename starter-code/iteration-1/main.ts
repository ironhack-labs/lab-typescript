// Iteration 1
// 1. Create an array of strings
let list: Array<string> =[]
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask (e:string){
  list.push(e)
}

// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks(){
  console.log(list)
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.

function deleteTask (task:string){
  list.forEach(e => {if (e===task){
    list.splice(list.indexOf(e),1)
    return list
  }
    return list
  });
}



// Execution
console.log("Number of items:"+ list.length, addTask('This is our first task'));
console.log("Number of items:"+ list.length, addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:"+ list.length, addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:"+ list.length, addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:"+ list.length, addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:"+ list.length, deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
