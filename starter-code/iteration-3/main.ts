// Add the reference to the interface
import { TItem } from './interfaces'
import { TodoInterface } from './interfaces';
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TItem {
    done: boolean = false; 
    updateAt: Date;
    constructor(public title:string){}
    doneToggle():void{
        !this.done
    }
}
// Create class TodoList that implements the corresponding interface
class TodoList implements TodoInterface {
    array:Array<TodoItem>
    constructor(){
        this.array = []
    };
    addTask(message:TodoItem):void{
        this.array.push(message)
    };
    listAllTasks():void{
        console.log(this.array)
    };
    deleteTask(message:TodoItem):void{
        this.array.forEach((a,index,arr)=>{
            if (a.title == message.title) {
                arr.splice(index,1)
            }
        })
    };
    listUncomplete():void{
        this.array.forEach((a)=> {
            if (a.done == false ){
                console.log(a)
            }
        })
    }

}
// Execution
let task1 = new TodoItem('This is our first task');
let task2 = new TodoItem('Eat pizza 🍕 yummy!!!');
let task3 = new TodoItem('Finish this iteration 1!! 🤓');
let task4 = new TodoItem('Finish this iteration 2!! 🤓');
let task5 = new TodoItem('Finish this iteration 3!! 🤓');

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
myTodos.listUncomplete();
