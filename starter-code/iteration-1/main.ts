// Iteration 1
// 1. Create an array of strings

// Iteration 1
// 1. Create an array of strings
let tasks: string[] = [];

// 2. Create a function to add a tasks in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

function addTask(taskToBeAdded: string) {
	tasks.push(taskToBeAdded);
	console.log(`${taskToBeAdded} has been added to the list!`);
	console.log(tasks.length);
	return tasks.length;
}

// 3. Create a function to list all tasks, it must show in the console each tasks.

function listAllTasks() {
	tasks.forEach(singleTask => {
		console.log(singleTask);
	});
};

// 4. Create a function to delete a tasks, you must find the tasks inside the array and delete it.

function deleteTask(taskToBeDeleted: string) {
	let blah = tasks.indexOf(taskToBeDeleted);
	tasks.splice(blah, 1);
	console.log(`${taskToBeDeleted} has been deleted from the list!`);
	return tasks.length;
};

// Execution
console.log("Number of items:", addTask('This is our first tasks'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();


// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

// 3. Create a function to list all tasks, it must show in the console de task.

// 4. Create a function to delete a task, you must find the task inside the array and delete it.

// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
