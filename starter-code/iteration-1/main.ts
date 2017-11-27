// Iteration 1
// 1. Create an array of strings
const tasksInTheList = [""]

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

const addTask = ((task : string) => {
   tasksInTheList.push(task);
    console.log("=========== NEW TASK ===========" + '\n' + "Task "+ task +"  inserted in the list" + '\n' +  "Number of items:" + tasksInTheList.length)
})

// 3. Create a function to list all tasks, it must show in the console de task.

const listAllTasks = (() => {
   for (let item of tasksInTheList){
       console.log(item);
}});

// 4. Create a function to delete a task, you must find the task inside the array and delete it.
const deleteTask = ((task : string)=>{
    const index = tasksInTheList.indexOf(task, 0);
    tasksInTheList.splice(index);
   const finalNumber = tasksInTheList.length;
   console.log("=========== TASK REMOVED ===========" + '\n' + "Task " + task + " removed from the list" + '\n' +  "Number of items:" +  finalNumber);
    return finalNumber;

})


// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
