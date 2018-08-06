// <------------------------------------INTERFACE-------------------------------------->
interface toDoList{
    list: Array<string>;
    addTask(task:string):number;
    listAllTasks():void;
    deleteTask(task:string):number;
}
// <-------------------------------------MAIN------------------------------------------>

// 1. Create a class Todo that implements the Interface created before.
class Todo implements toDoList {

    list: Array<string> = [];

    addTask(task:string):number{
        this.list.push(task);
        return this.list.length;
    };

    listAllTasks():void{
        this.list.forEach(element => {
            console.log(element);
        });
    };

    deleteTask(task:string):number{
        this.list.splice(this.list.findIndex(element => {
            return element === task;
        }), 1);
        return this.list.length;
    };
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
