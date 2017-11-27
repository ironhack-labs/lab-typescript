// Iteration 1
// 1. Create an array of strings
let arr:Array<string> = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
let addTask = (e:string) :number => {
    arr.push(e);
    console.log(e);
    return arr.length;
}
// 3. Create a function to list all tasks, it must show in the console de task.
let listAllTasks = () =>{
  for(let i:number = 0; i < arr.length; i++){
  console.log( arr[i] );
  }

}
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
let deleteTask = (a:string):number =>{
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == a){
      delete arr[i];
      console.log("arr ",i + "--> delete")
      return i;
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
console.log(arr);
