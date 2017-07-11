// Add the reference to the "TodoInterface"

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {

  constructor (
  public myList: Array<string> = [] // property 1
  ){}

   addTask (task: string) {  // method 1
    return myList.push(task);
  }

   listAllTasks () {
    return myList.forEach((oneTask) => { // method 2
      console.log(oneTask);
    });
  }

   deleteTask (task: string) { // method 3
    myList.forEach((oneTask) => {
      myList.indexOf(oneTask);

      if (myList.indexOf(oneTask) === myList.indexOf(task)) {
        myList.splice(myList.indexOf(task), 1); // splice works only with Numbers use index of
        console.log('Task deleted: ' + task + 'great.')
    }
  });
    return myList.length
  }
}

// Execution
let myTodoList = new Todo();
console.log("Number of items:", myTodoList.addTask('This is our first task'));
console.log("Number of items:", myTodoList.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodoList.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodoList.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodoList.addTask('Finish this iteration 3!! 🤓'));
myTodoList.listAllTasks();
console.log("Number of items:", myTodoList.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodoList.deleteTask('Finish this iteration 2!! 🤓'));
myTodoList.listAllTasks();
