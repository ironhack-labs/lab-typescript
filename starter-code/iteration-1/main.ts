// Iteration 1
// 1. Create an array of strings
const tasks = [String]

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
const addTask = (newTask) => {
tasks.push(newTask)
console.log(tasks)
}
// 3. Create a function to list all tasks, it must show in the console de task.
const listAllTasks = () => {
    console.log(tasks)
}

// 4. Create a function to delete a task, you must find the task inside the array and delete it.
const deleteTask = (searchTerm) => {
    
       for (var i = tasks.length -1; i >= 0; i--) {
           if (tasks[i] === searchTerm) {
            //    const position = Number(tasks.indexOf(tasks[i]))
               return tasks.splice(i, 1);
           }
       }

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
