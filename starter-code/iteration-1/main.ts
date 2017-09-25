// Iteration 1
// 1. Create an array of strings
let testArray:Array<string>=[];
let number=0;

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask (task:string){
    testArray.push(task);
    number++;
    console.log (task+"was added");
} 

// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks (task:string){
    for (var i=0;i<testArray.length;i++) {
        console.log (testArray[i]);
    }
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task:string){
   var index= testArray.indexOf(task,0);
   if (index>-1){
       testArray.splice(index,1);
   }

}
// Execution
console.log("Number of items:"+number, addTask('This is our first task'));
console.log("Number of items:"+number, addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:"+number, addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:"+number, addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:"+number, addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
