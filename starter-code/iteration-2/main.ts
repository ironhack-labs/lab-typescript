// Add the reference to the "TodoInterface"

interface todoInterface {
    arrayOfStrings: string[];

    addTask(task: string);
    listOfAllTasks();
    deleteTask(task: string)
}

// 1. Create a class Todo that implements the Interface created before.

class Todo implements todoInterface {
    constructor ( public arrayOfStrings: string[], public task: string ) { }

    addTask(task: string) {
        arrayOfStrings.push(task);
        console.log(`Task  ${task} +  inserted in the list`)
        console.log(`Number of items: ${arrayOfStrings.length}` )
        return arrayOfStrings.length;
    }

    listOfAllTasks(task: string) {
        arrayOfStrings.forEach( function (oneTask) {
            console.log(`all tasks:  + ${oneTask}`)
        })   
    }

    deleteTask(task: string) {
        if (arrayOfStrings.indexOf(task) !== -1) {
        arrayOfStrings.splice(arrayOfStrings.indexOf(task), 1);
        console.log(`Task  ${task} +  deleted from the list`)
        console.log(`Number of items: ${arrayOfStrings.length}` )
        return arrayOfStrings.length;
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
