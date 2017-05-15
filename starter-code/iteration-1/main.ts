// Iteration 1
// 1. Create an array of strings

class toDo{
  constructor(public toDoList: Array<string> = []){
  }

  addTask(task:string): number{
    this.toDoList.push(task);
    console.log(`Task ${task} inserted in the list`)
    return this.toDoList.length;
  }

  listAllTasks():void{
    this.toDoList.forEach((task, index)=>{
      console.log(`task ${index+1}: ${task}`);
    })
  }

  deleteTask(task:string): number{

    var index = this.toDoList.indexOf(task);
    if(index>-1){
      this.toDoList.slice(index,1);
      console.log(`Task ${task} deleted from the list`)
      return this.toDoList.length;
    }
    console.log(`The task ${task} isn't in the list`)
    return this.toDoList.length;

  }

}

let listOjbect = new toDo();

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

// 3. Create a function to list all tasks, it must show in the console de task.

// 4. Create a function to delete a task, you must find the task inside the array and delete it.

// Execution
console.log("Number of items:", listOjbect.addTask('This is our first task'));
console.log("Number of items:", listOjbect.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", listOjbect.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", listOjbect.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", listOjbect.addTask('Finish this iteration 3!! 🤓'));
listOjbect.listAllTasks();
console.log("Number of items:", listOjbect.deleteTask('Finish this iteration 1!! 🤓'));
listOjbect.listAllTasks();
