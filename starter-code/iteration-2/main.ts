//Importamos la clase TodoInterface del path "./todoInterface". 
//Para ello utilizamos el mismo nombre de la variable en el file de la que la importamos
//En ese documento la tendremos por el mismo nombre, TodoInterface


import {TodoInterface} from "./todoInterface";
// 1. Create a class Todo that implements the Interface created before.

class Todo implements TodoInterface { //implementamos la interface para asegurarnos que las propiedades siguen ciertas reglas
    constructor (public tasks: Array<string>) {} //dentro de constructor se ponen las variables que necesitaremos luego para crear instancias de esta clase (new Todo (tasks))

    //Los métodos se ponen fuera del constructor
   addTask(task:string):number {
    this.tasks.push(task);
    console.log(`Task ${task} inserted in the list`);
    return this.tasks.length;
    }

    listAllTasks ():void {
    this.tasks.forEach((task)=> {
        console.log(task);
        })
    }


    deleteTask(task:string):number {
    let index= this.tasks.indexOf(task);
    this.tasks.splice(index,1);
    console.log(`Task ${task} removed in the list`);
    return this.tasks.length;
    }
}

// Execution
let myTodos = new Todo([]);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
