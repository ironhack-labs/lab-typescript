// Add the reference to the "TodoInterface"

// 1. Create a class Todo that implements the Interface created before.
import { todoInterface } from './todoInterface';

class Todo implements todoInterface {

    constructor(public taskList: Array<String> = []) { }
    addTask(task): Number {
        this.taskList.push(task);
        console.log("Is inside!!");
        console.log(this.taskList.length);
        return this.taskList.length;

    }
    listAllTasks(): void {
        for (var i = 0; i < this.taskList.length; i++) {
            console.log(this.taskList[i]);
        }
    }
    deleteTask(taskToDelete): Number {
        this.taskList.forEach((oneTask) => {
            if (oneTask === taskToDelete) {
                var indexToDelete = this.taskList.indexOf(oneTask);
                this.taskList.splice(indexToDelete, 1);
                console.log(oneTask + " removed");
            }
        })

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
