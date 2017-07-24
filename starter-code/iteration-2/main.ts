import {TaskInterface} from './todoInterface';

var arrToDo: Array<string> = ['laundry', 'dishes', 'ironing clothes'];

class ToDo implements TaskInterface{

    // task: string;

    constructor(){ }


    addTask(task):number {
        // this.task = task;        
        arrToDo.push(task);
        console.log(`=========== NEW TASK =========== 
        Task "` + task + `" inserted in the list `);
        console.log("Number of items: " + arrToDo.length);
        
        return arrToDo.length;
    }
    
    listAllTasks():void{
        arrToDo.forEach(function(element,index){ 
            console.log(element) 
        })  
    }

    
    deleteTask(task):number {
        arrToDo.forEach(function(element,index){ 
            if (element === task){
                arrToDo.splice(index,1);
                console.log(`=========== NEW REMOVED =========== 
                Task "` + task + `" removed in the list `);
                console.log("Number of items: " + arrToDo.length);
            }
        })   
        return arrToDo.length;     
    }
}


// Add the reference to the "TodoInterface"

// 1. Create a class Todo that implements the Interface created before.

// Execution
let myTodos = new ToDo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
