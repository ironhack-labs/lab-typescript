// Iteration 1
// 1. Create an array of strings
 let task: Array<string> = [];

 function addTask(task: string): number {
    task.push(task);
    return task.length;
  };

   // 3. Create a function to list all tasks, it must show in the console de task.
  function listAllTasks(): number {
    console.log('all tasks');
    task.forEach( (oneTask) => {
      console.log(oneTask);
    });
    return task.length;
  };

   // 4. Create a function to delete a task, you must find the task inside the array and delete it.
  function deleteTask (task: string): number {
    console.log('delete this', task);
    for (let i = 0; i < task.length; i++) {
      if (task[i] === task) {
        task.splice(i, 1);
      }
    }
    return task.length;
  };

   // Execution

console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
