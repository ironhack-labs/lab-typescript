// Add the reference to the "TodoInterface"
import I2 from '../iteration-2/todoInterface'
// 1. Create a class Todo that implements the Interface created before.
class Todo implements I2 {
    arr: Array<string>=[];
    
    addTask(str: string): number  {
        this.arr.push(str)
        return this.arr.length
    }
    listAllTasks() {
        console.log(this.arr)
    }
    deleteTask(str: string): number {
        this.arr = this.arr.filter((element) => element !== str)
        console.log(this.arr.length)
        return this.arr.length
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
