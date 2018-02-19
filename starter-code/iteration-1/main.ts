// Iteration 1
// 1. Create an array of strings
let a: Array<string>;


// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task:string): number{
   console.log("SE HA AÑADIDO LA SIGUIENTE TAREA:",task);
   a.push(task);
   return a.length;

}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTask(){
    for(let i=0; i<a.length; i++){
        console.log(a[i]);
    }    
}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task:string): number{
   let index= a.indexOf(task);
   a.splice(index,1);
   return a.length;
}

//Execution
console.log("Number of items:" , addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
//listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
//listAllTasks();
