const store = [];
function addTask(task) {
    store.push(task);
    console.log(`There is ${task} adedd`);
    return store.length;
}
function listAllTasks() {
    for (let i = 0; i < store.length; i++) {
        console.log(store[i]);
    }
}
function deleteTask(task) {
    for (let i = 0; i < store.length; i++) {
        if (store[i] == task) {
            store.splice(i, 1);
        }
    }
    console.log(`There is ${task} deleted`);
    return store.length;
}
console.log('Number of items:', addTask('This is our first task'));
console.log('Number of items:', addTask('Eat pizza 🍕 yummy!!!'));
console.log('Number of items:', addTask('Finish this iteration 1!! 🤓'));
console.log('Number of items:', addTask('Finish this iteration 2!! 🤓'));
console.log('Number of items:', addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log('Number of items:', deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
