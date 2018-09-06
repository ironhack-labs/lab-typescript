// Iteration 1
// 1. Create an array of strings
let listItems: Array<string> = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
function addTask(item: string): number {
    listItems.push(item);
    console.log(`Task ${item} inserted in the list`);
    console.log(`Number of items: ${listItems.length}`);
    return listItems.length;
}

// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks(): void {
    listItems.forEach(function (item) {
        console.log(item)
    });
}


// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(item: string): number {
    const index: number = listItems.indexOf(item);
    if (index < 0) {
        console.log("the list item isn't there to delete");
    } else {    
        listItems.splice(index, 1);
        console.log(`${item}: another one bites the dust.. only ${listItems.length} left to go you efficient little chicken`);
        return listItems.length
    }

}


// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
