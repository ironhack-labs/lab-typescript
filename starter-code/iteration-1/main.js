// Iteration 1
// 1. Create an array of strings
let myArray = [];
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
/*
interface Tasks {
  addTask(): string;
}

class ToDoList implements Tasks {
  constructor(public engines: number) {}
}
*/
function addTask(task) {
    myArray.push(task);
    console.log('=========== NEW INSERTION ===========');
    return myArray.length;
}
;
// 3. Create a function to list all tasks, it must show in the console de task.
function listAllTasks() {
    myArray.map(function (task) {
        console.log(task);
    });
}
;
// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task) {
    myArray.map(function (elem, index) {
        if (task === elem) {
            myArray.splice(index, 1);
            console.log("=========== NEW DELETION ===========");
        }
    });
    return myArray.length;
}
;
// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYztBQUNkLGdDQUFnQztBQUVoQyxJQUFJLE9BQU8sR0FBa0IsRUFBRSxDQUFDO0FBRWhDLGdKQUFnSjtBQUNoSjs7Ozs7Ozs7RUFRRTtBQUNGLGlCQUFpQixJQUFZO0lBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0lBQ3JELE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQ3hCLENBQUM7QUFBQSxDQUFDO0FBRUYsK0VBQStFO0FBRS9FO0lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQVc7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFBQSxDQUFDO0FBR0YsZ0dBQWdHO0FBRWhHLG9CQUFvQixJQUFXO0lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBUyxJQUFJLEVBQUUsS0FBSztRQUM5QixFQUFFLENBQUEsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUEsQ0FBQztZQUNoQixPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUE7UUFDckQsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7QUFDeEIsQ0FBQztBQUFBLENBQUM7QUFHRixZQUFZO0FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO0FBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztBQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7QUFDekUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO0FBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztBQUN6RSxZQUFZLEVBQUUsQ0FBQztBQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztBQUM1RSxZQUFZLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEl0ZXJhdGlvbiAxXG4vLyAxLiBDcmVhdGUgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuXG5sZXQgbXlBcnJheTogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4vLyAyLiBDcmVhdGUgYSBmdW5jdGlvbiB0byBhZGQgYSB0YXNrIGluIHRvIHRoZSBhcnJheSwgY2FsbCBpdCBgYWRkVGFza2AsIHRoZSBmdW5jdGlvbiBoYXMgdG8gYWNjZXB0IGEgc3RyaW5nIGFuZCBkb24ndCBoYXZlIHRvIHJldHVybiBhbnl0aGluZy5cbi8qXG5pbnRlcmZhY2UgVGFza3Mge1xuICBhZGRUYXNrKCk6IHN0cmluZztcbn1cblxuY2xhc3MgVG9Eb0xpc3QgaW1wbGVtZW50cyBUYXNrcyB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbmdpbmVzOiBudW1iZXIpIHt9XG59XG4qL1xuZnVuY3Rpb24gYWRkVGFzayh0YXNrOiBzdHJpbmcpOm51bWJlciB7XG4gIG15QXJyYXkucHVzaCh0YXNrKTtcbiAgY29uc29sZS5sb2coJz09PT09PT09PT09IE5FVyBJTlNFUlRJT04gPT09PT09PT09PT0nKTtcbiAgcmV0dXJuIG15QXJyYXkubGVuZ3RoO1xufTtcblxuLy8gMy4gQ3JlYXRlIGEgZnVuY3Rpb24gdG8gbGlzdCBhbGwgdGFza3MsIGl0IG11c3Qgc2hvdyBpbiB0aGUgY29uc29sZSBkZSB0YXNrLlxuXG5mdW5jdGlvbiBsaXN0QWxsVGFza3MgKCl7XG4gIG15QXJyYXkubWFwKGZ1bmN0aW9uICh0YXNrOnN0cmluZyk6dm9pZCB7XG4gICAgY29uc29sZS5sb2codGFzayk7XG4gIH0pO1xufTtcblxuXG4vLyA0LiBDcmVhdGUgYSBmdW5jdGlvbiB0byBkZWxldGUgYSB0YXNrLCB5b3UgbXVzdCBmaW5kIHRoZSB0YXNrIGluc2lkZSB0aGUgYXJyYXkgYW5kIGRlbGV0ZSBpdC5cblxuZnVuY3Rpb24gZGVsZXRlVGFzayh0YXNrOnN0cmluZyl7XG4gIG15QXJyYXkubWFwKGZ1bmN0aW9uKGVsZW0sIGluZGV4KXtcbiAgICBpZih0YXNrID09PSBlbGVtKXtcbiAgICAgIG15QXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT0gTkVXIERFTEVUSU9OID09PT09PT09PT09XCIpXG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG15QXJyYXkubGVuZ3RoO1xufTtcblxuXG4vLyBFeGVjdXRpb25cbmNvbnNvbGUubG9nKFwiTnVtYmVyIG9mIGl0ZW1zOlwiLCBhZGRUYXNrKCdUaGlzIGlzIG91ciBmaXJzdCB0YXNrJykpO1xuY29uc29sZS5sb2coXCJOdW1iZXIgb2YgaXRlbXM6XCIsIGFkZFRhc2soJ0VhdCBwaXp6YSDtoLztvZUgeXVtbXkhISEnKSk7XG5jb25zb2xlLmxvZyhcIk51bWJlciBvZiBpdGVtczpcIiwgYWRkVGFzaygnRmluaXNoIHRoaXMgaXRlcmF0aW9uIDEhISDtoL7ttJMnKSk7XG5jb25zb2xlLmxvZyhcIk51bWJlciBvZiBpdGVtczpcIiwgYWRkVGFzaygnRmluaXNoIHRoaXMgaXRlcmF0aW9uIDIhISDtoL7ttJMnKSk7XG5jb25zb2xlLmxvZyhcIk51bWJlciBvZiBpdGVtczpcIiwgYWRkVGFzaygnRmluaXNoIHRoaXMgaXRlcmF0aW9uIDMhISDtoL7ttJMnKSk7XG5saXN0QWxsVGFza3MoKTtcbmNvbnNvbGUubG9nKFwiTnVtYmVyIG9mIGl0ZW1zOlwiLCBkZWxldGVUYXNrKCdGaW5pc2ggdGhpcyBpdGVyYXRpb24gMSEhIO2gvu20kycpKTtcbmxpc3RBbGxUYXNrcygpO1xuIl19