// Add the reference to the "TodoInterface"
import { ToDoInterface } from './todoInterface';



class Todo implements ToDoInterface {

    constructor(
      public taskList: string[],
    ) { }

    addTask(task: string) {
        console.log("Task has been added.");
        return taskList.push(task);
    }

    listAllTasks(taskList: string[]) {
        console.log(taskList);
    }

    deleteTask(task: string) {
        taskList.forEach( (oneTask: string, index) => {
            if (task === oneTask) {
                taskList.splice(index, 1);
            }
        })
    }
}

// Execution
let myTodos = new TodoInterface();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
