// Add the reference to the "TodoInterface"
import {TodoInterface} from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
    constructor(public listItems: Array<string>) {}

    addTask(item: string): number {
        listItems.push(item);
        console.log(`Task ${item} inserted in the list`);
        console.log(`Number of items: ${listItems.length}`);
        return listItems.length;
    }
    
    listAllTasks(): void {
        listItems.forEach(function (item) {
            console.log(item)
        });
    }
    
    deleteTask(item: string): number {
        const index: number = listItems.indexOf(item);
        if (index < 0) {
            console.log("the list item isn't there to delete");
        } else {    
            listItems.splice(index, 1);
            console.log(`${item}: another one bites the dust.. only ${listItems.length} left to go you efficient little chicken`);
            return listItems.length
        }
    
    }
}
// Execution
let myTodos = new Todo(["do this", "do that"]);
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
