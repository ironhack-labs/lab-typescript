// Iteration 1
// 1. Create an array of strings
let array: Array<string> = []
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(task:string):void{
    array.push(task);
}
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks(){
    document.body.innerHTML += "<ul>";
    array.forEach(t => {
        document.body.innerHTML += "<li>" + t + "</li>";
    })
    document.body.innerHTML += "</ul>";
}

// 4. Create a function to delete a task, you must find the task inside the array and delete it.

function deleteTask(task:string):void{
    array.splice(array.indexOf(task), 1);
}


// Execution
console.log("Number of items: " + array.length, addTask('This is our first task'));
console.log("Number of items: " + array.length, addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items: " + array.length, addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items: " + array.length, addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items: " + array.length, addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:"  + array.length, deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
