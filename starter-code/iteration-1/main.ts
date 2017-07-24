
class Task{

    task: string;

    constructor(){
        
    }

    // 2. Create a function to add a task in to the array, call it `addTask`, 
    //the function has to accept a string and don't have to return anything.
    addTask(task):void {
        // this.task = task;        
        arrToDo.push(task);
        console.log(`=========== NEW TASK =========== 
        Task "` + task + `" inserted in the list `);
        console.log("Number of items: " + arrToDo.length);
    }

    // 3. Create a function to list all tasks, it must show in the console de task.
    listAllTasks():void{
        arrToDo.forEach(function(element,index){ 
            console.log(element) 
        })  
    }


    // 4. Create a function to delete a task, you must find the task inside the array and delete it.
    deleteTask(task):void {
        arrToDo.forEach(function(element,index){ 
            if (element === task){
                arrToDo.splice(index,1);
                console.log(`=========== NEW REMOVED =========== 
                Task "` + task + `" removed in the list `);
                console.log("Number of items: " + arrToDo.length);
            }
        })        
    }

}


// Iteration 1
// 1. Create an array of strings
var arrToDo: Array<string> = ['laundry', 'dishes', 'ironing clothes'];

let task = new Task();

// Execution
console.log("Number of items:", task.addTask('This is our first task'));
console.log("Number of items:", task.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", task.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", task.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", task.addTask('Finish this iteration 3!! 🤓'));
task.listAllTasks();
console.log("Number of items:", task.deleteTask('Finish this iteration 1!! 🤓'));
task.listAllTasks();
