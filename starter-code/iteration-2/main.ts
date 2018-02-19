// Add the reference to the "TodoInterface"
import { TodoInterface } from "./todoInterface";
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
    myList: Array<string>=[''];

    addTask(task:string) {
    this.myList.push(task);
    console.log('Item inserted')
    return this.myList.length;
    };

    listAllTasks() {
        for(var i=0;i < this.myList.length;i++){
        console.log(this.myList[i]);
        }
    };

    deleteTask(task:string) {
        var index= this.myList.indexOf(task);

    while(index !==-1){
        this.myList.splice(index,1);
        index = this.myList.indexOf(task)
    }
    console.log('Item deleted')
    return this.myList.length;
}
}

// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
