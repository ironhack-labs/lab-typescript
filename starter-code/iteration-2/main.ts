// Add the reference to the "TodoInterface"
import {taskInterface } from 'todoInterface';
// importing interface from todoInterface.ts

// 1. Create a class Todo that implements the Interface created before.





class Todo implements taskInterface {
  tasks:Array<string>;



  addTask(taskToBeAdded: string): number {
    tasks.push(taskToBeAdded);
    console.log(`${taskToBeAdded} has been added to the list!`);
    console.log(tasks.length);
    return tasks.length;
  }
  
  listAllTasks(): void{
  tasks.forEach(singleTask => {
		console.log(singleTask);
	});
  //returns nothing
}
  
  deleteTask(taskToBeDeleted: string): number {

    let blah = tasks.indexOf(taskToBeDeleted);
    tasks.splice(blah, 1);
    console.log(`${taskToBeDeleted} has been deleted from the list!`);
    return tasks.length;
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
