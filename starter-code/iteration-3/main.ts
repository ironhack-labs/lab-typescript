// Add the reference to the interface

// Create class TodoItem that implements the corresponding interface
class TodoItem implements ToItem {

  public tittle:string;

  public status:boolean = true;


  public  updatedAt:number;
constructor(tite:string,updat:number = Date.now()){
  this.tittle = tite;
  this.updatedAt = updat;
};

public onORoff():void{
  if(this.status === true){
    this.status = false;
    this.updatedAt = Date.now();
  }

};

}
// Create class TodoList that implements the corresponding interface
class TodoList implements To{

  public lists:Array<string>=[];

  public addTask(name):void{
    console.log(this.lists)
    this.lists.push(name);
    console.log(`Item ${this.lists.indexOf(name)} --> ${name.tittle}`)
  };

  public listAllTasks():void{
this.lists.forEach((one)=>{
  console.log(`Item ${this.lists.indexOf(one)} --> ${one.tittle}`);

});

  };

  public deleteTask(name):void{

    console.log(`Item ${this.lists.indexOf(name)} --> ${name.tittle}`)
    if(this.lists.indexOf(name) > -1 ){
      name.onORoff();


    }

  };

  public listUncomplete():void{

this.lists.forEach((one)=>{
if(one.status){
  console.log(`Item ${this.lists.indexOf(one)} --> ${one.tittle}`);
}

});
  };
}




// Execution
let task1 = new TodoItem('This is our first task');
console.log(task1)
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodo = new TodoList();

console.log("Number of items:", myTodo.addTask(task1));
console.log("Number of items:", myTodo.addTask(task2));
console.log("Number of items:", myTodo.addTask(task3));
console.log("Number of items:", myTodo.addTask(task4));
console.log("Number of items:", myTodo.addTask(task5));
myTodo.listAllTasks();
console.log("Number of items:", myTodo.deleteTask(task3));
console.log("Number of items:", myTodo.deleteTask(task4));
console.log("Number of items:", myTodo.deleteTask(task5));
myTodo.listUncomplete();
