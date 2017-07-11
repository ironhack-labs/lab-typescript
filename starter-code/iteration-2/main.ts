
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
  constructor(public items: Array<string>){}

  addTask (task :string) {
    this.items.push(task);
    console.log("Task " + task +" inserted in the list");
    return this.items.length;
  }

  listAllTasks (this){
    this.items.forEach((itemInList)=>{
      console.log(itemInList);
    })
  }

  deleteTask (task :string) {
    this.items.forEach((itemList)=>{
      let index = this.items.indexOf(itemList);
      if (task === itemList) {
        this.items.splice(index,1);
      }
    })
    console.log("Task " + task +" was deleted from the list");
    return this.items.length;
  }
}



// Execution
let mySecondList = new Todo([]);
mySecondList.addTask('This is our first task');
mySecondList.addTask('Eat pizza 🍕 yummy!!!');
mySecondList.addTask('Finish this iteration 1!! 🤓');
mySecondList.listAllTasks();
mySecondList.deleteTask('Finish this iteration 1!! 🤓');
// console.log("Number of items:", mySecondList.deleteTask('Finish this iteration 2!! 🤓'));
mySecondList.listAllTasks();
