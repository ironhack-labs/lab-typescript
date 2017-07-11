// Iteration 1
// 1. Create an array of strings
class ToDo {
  constructor(public items: Array<string>){}

  addTask (task :string) {
    this.items.push(task);
    console.log("Task " + task +" inserted in the list");
    console.log("Number of items: " + this.items.length);
  }
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
  listAllTasks (toDoList){
    toDoList.items.forEach((itemInList)=>{
      console.log(itemInList);
    })
  }
// 3. Create a function to list all tasks, it must show in the console de task.
    deleteTask (task :string) {
      this.items.forEach((itemList)=>{
        let index = this.items.indexOf(itemList);
        if (task === itemList) {
          this.items.splice(index,1);
        }
      })
      console.log("Task " + task +" was deleted from the list");
      console.log("Number of items: " + this.items.length);
    }
}

const myList = new ToDo (["first item"]);
myList.addTask("Eat pizza");
myList.addTask("go online shopping");
myList.addTask("but milk");
myList.listAllTasks(myList);
myList.deleteTask("Eat pizza");




// 4. Create a function to delete a task, you must find the task inside the array and delete it.

// Execution
// console.log("Number of items:", addTask('This is our first task'));
// console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
// console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
// console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
// console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
// listAllTasks();
// console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
// listAllTasks();
