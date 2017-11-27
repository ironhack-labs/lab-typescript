var list = [];
function addTask(task) {
    list.push(task);
    console.log("=========== NEW TASK ===========\n    Task " + task + " inserted in the list\n    Number of items: " + list.length);
    return list.length;
}
function listAllTasks() {
    list.forEach(function (listItem) { return console.log(listItem); });
    function deleteTask(task) {
        var index = list.indexOf(task);
        if (index > -1) {
            list.splice(index, 1);
            console.log("=========== TASK REMOVED ===========\n    Task " + task + " removed in the list\n    Number of items: " + list.length);
        }
        return list.length;
    }
    console.log("Number of items:", addTask('This is our first task'));
    console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
    console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
    console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
    console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
    listAllTasks();
    console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
    listAllTasks();
}
