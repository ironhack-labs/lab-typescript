// Write the interface for class Todo. It must have:
// - An array of strings as a property.
// - Method for adding task where will receive a string, doesn't return anything.
// - Method for listing all task in the console, doesn't return anything.
// - Method for delete a task where will receive a string, doesn't return anything.

export interface Todo {
taskArrayTwo:               Array<string>;
addTask(task:string):       number;
listAllTasks():             void;
deleteTask(task:string):    number;
};

// 3. Create a function to list all tasks, it must show in the console de task.

// function listAllTasks():void {
//     taskArrayTwo.forEach(function(eachTask) {
//         console.log(eachTask);
//     }) 
// }

// 4. TwoCreate a function to delete a task, you must find the task inside the array and delete it.

// function deleteTask(task:string):number {
//     const theIndex = taskArrayTwo.indexOf(task);

//     taskArrayTwo.splice(theIndex, 1);

//     return taskArrayTwo.length;
// }

// };

// 2. TwoCreate a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

// addTask(task:string):number {
//     taskArrayTwo.push(task);
//     return taskArrayTwo.length;
// }