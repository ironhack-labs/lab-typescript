// Iteration 1
// 1. Create an array of strings

class toDoList{
  public name :string;
  constructor(nam:string){
    this.name = nam;
  }
  public list:  Array<string>=[];

  // 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
  public addTask(newTask):void{

    this.list.push(newTask);
    console.log("=========== TASK ADDED ===========");
    console.log('Task "'+newTask+'" added to the list')
  }
  // 3. Create a function to list all tasks, it must show in the console de task.
  public listAllTasks():void{
    this.list.forEach((oneItem)=>{
      console.log((this.list.indexOf(oneItem)+1)+oneItem);
    });
  }
  // 4. Create a function to delete a task, you must find the task inside the array and delete it.
public deleteTask(task):void{
  if(this.list.indexOf(task) > -1 ){
    this.list.splice(task);
    console.log("=========== TASK Remove ===========");
    console.log('Task "'+task+'" remove from the list')
  }

}

}



// Execution

let newlist = new toDoList('My to Do list');
console.log("Number of items:", newlist.addTask('This is our first task'));
console.log("Number of items:", newlist.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", newlist.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", newlist.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", newlist.addTask('Finish this iteration 3!! 🤓'));
newlist.listAllTasks();
console.log("Number of items:", newlist.deleteTask('Finish this iteration 1!! 🤓'));
newlist.listAllTasks();
