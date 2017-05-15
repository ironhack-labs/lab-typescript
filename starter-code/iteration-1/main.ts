// Iteration 1

// 1. Create an array of strings
let myArray: Array<string> = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task:string){
  myArray.push(task);
}


// 3. Create a function to list all tasks, it must show in the console the task.
  function listAllTasks(){
    myArray.forEach((element)=>{
      console.log(element)
    })

  }



// 4. Create a function to delete a task, you must find the task inside the array and delete it.

function deleteTask(task:string){
  const index = myArray.indexOf(task)
    myArray.splice(index,1);
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
