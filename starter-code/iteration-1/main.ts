// Iteration 1
// 1. Create an array of strings
let myArray : Array <string> = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask (phrase : string){
   return myArray.push(phrase);
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks() : void {
    myArray.forEach((task)=>{
        console.log(task);
    })
} 
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task) : number {
    myArray.splice(myArray.indexOf(task), 1);
    return myArray.length
}

// Execution
console.log("Number of items: 1", addTask('This is our first task'));
console.log("Number of items: 2", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items: 3", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items: 4", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items: 5", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items: 6", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
