let myArray = [];
function addTask(task) {
    myArray.push(task);
    console.log(`=========== NEW TASK ===========
Task ${task} inserted in the list
Number of items: ${myArray.length}`);
    return myArray.length;
}
function listAllTasks() {
    myArray.forEach((e) => {
        console.log(e);
    });
}
function deleteTask(task) {
    let position = myArray.indexOf(task);
    myArray.splice(position, 1);
    console.log(`=========== TASK REMOVE ===========
Task ${task} remove in the list
Number of items: ${myArray.length}`);
    return myArray.length;
}
console.log('Number of items:', addTask('This is our first task'));
console.log('Number of items:', addTask('Eat pizza 🍕 yummy!!!'));
console.log('Number of items:', addTask('Finish this iteration 1!! 🤓'));
console.log('Number of items:', addTask('Finish this iteration 2!! 🤓'));
console.log('Number of items:', addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log('Number of items:', deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
