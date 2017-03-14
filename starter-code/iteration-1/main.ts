// Iteration 1
// 1. Create an array of strings
    const myTask: Array<string> = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
  function addTask(task) {
    myTask.push(task);
  }
// 3. Create a function to list all tasks, it must show in the console de task.
  function listAllTasks() {
    myTask.forEach((task) => {
      console.log(`${task}`);
    });
  }
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
  function deleteTask(task: string){
    console.log('--------------------')
    let index = myTask.indexOf(task);
    myTask.splice(index,1);
    console.log(task + ' has been deleted');
  }
// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!!'));
console.log("Number of items:", addTask('Finish this iteration 2!!'));
console.log("Number of items:", addTask('Finish this iteration 3!!'));
listAllTasks();

console.log("Number of items:", deleteTask('Finish this iteration 1!!'));
console.log('=====AFTER DELETION========')
listAllTasks();
