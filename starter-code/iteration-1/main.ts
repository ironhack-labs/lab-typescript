// Iteration 1
// 1. Create an array of strings
let task: string[] =[];
let counter =0;


// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(tasked){
    //console.log(tasked)
    task.push(tasked);
    //console.log(task)
    console.log('=========== NEW TASK ===========');
    console.log(task[counter] + ': inserted in the list');
    console.log('Number of item: ',task.length);
    counter++
}
 


// 3. Create a function to list all tasks, it must show in the console de task.

 function listAllTasks(all){
        //  console.log('inside all',all)

    for (let i = 0; i < all.length; i++) {
        let element = all[i];
        //console.log('element',element);
    //console.log(typeof i)
        console.log('task '+ (i+1),':'+ element)
     }};


// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(deletingTask){
//console.log(deleteTask)
task.forEach( (element,index )=> {
    if (element===deletingTask){
        task.splice(index,1)
    }
});
    console.log('Task: '+deletingTask+" has been removed");
    console.log ('elements in the list: '+ task.length)

 }

// Execution
//console.log("Number of items:", addTask('Code'));
console.log(addTask('Code'));
console.log(addTask('Eat pizza 🍕 yummy!!!'));
console.log(addTask('Finish this iteration 1!! 🤓'));
console.log( addTask('Finish this iteration 2!! 🤓'));
console.log( addTask('Finish this iteration 3!! 🤓'));
console.log("Deleting", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks(task);

