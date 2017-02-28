class Todo {
    constructor() {
        this.myArray = [];
    }
    addTask(task) {
        this.myArray.push(task);
        console.log('=========== NEW INSERTION ===========');
        return this.myArray.length;
    }
    ;
    listAllTasks() {
        this.myArray.map((task) => {
            console.log(task);
        });
    }
    ;
    deleteTask(task) {
        this.myArray.map((elem, index) => {
            if (task === elem) {
                this.myArray.splice(index, 1);
                console.log("=========== NEW DELETION ===========");
            }
        });
        return this.myArray.length;
    }
    ;
}
;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7SUFBQTtRQUVFLFlBQU8sR0FBa0IsRUFBRSxDQUFDO0lBd0I5QixDQUFDO0lBdEJDLE9BQU8sQ0FBQyxJQUFXO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUFBLENBQUM7SUFFRixZQUFZO1FBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFXO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQUEsQ0FBQztJQUVGLFVBQVUsQ0FBQyxJQUFXO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUs7WUFDM0IsRUFBRSxDQUFBLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFBO1lBQ3JELENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDO0lBQUEsQ0FBQztDQUVIO0FBQUEsQ0FBQztBQUVGLElBQUksT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztBQUMzRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO0FBQzFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7QUFDakYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztBQUNqRixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO0FBQ2pGLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO0FBQ3BGLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7QUFDcEYsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQWRkIHRoZSByZWZlcmVuY2UgdG8gdGhlIFwiVG9kb0ludGVyZmFjZVwiXG5pbXBvcnQge1RvZG9JbnRlcmZhY2V9IGZyb20gXCIuL3RvZG9JbnRlcmZhY2VcIjtcblxuY2xhc3MgVG9kbyBpbXBsZW1lbnRzIFRvZG9JbnRlcmZhY2Uge1xuXG4gIG15QXJyYXk6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICBhZGRUYXNrKHRhc2s6c3RyaW5nKTpudW1iZXIge1xuICAgIHRoaXMubXlBcnJheS5wdXNoKHRhc2spO1xuICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PSBORVcgSU5TRVJUSU9OID09PT09PT09PT09Jyk7XG4gICAgcmV0dXJuIHRoaXMubXlBcnJheS5sZW5ndGg7XG4gIH07XG5cbiAgbGlzdEFsbFRhc2tzICgpOnZvaWR7XG4gICAgdGhpcy5teUFycmF5Lm1hcCgodGFzazpzdHJpbmcpOnZvaWQgPT4ge1xuICAgICAgY29uc29sZS5sb2codGFzayk7XG4gICAgfSk7XG4gIH07XG5cbiAgZGVsZXRlVGFzayh0YXNrOnN0cmluZyl7XG4gICAgdGhpcy5teUFycmF5Lm1hcCgoZWxlbSwgaW5kZXgpPT57XG4gICAgICBpZih0YXNrID09PSBlbGVtKXtcbiAgICAgICAgdGhpcy5teUFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT0gTkVXIERFTEVUSU9OID09PT09PT09PT09XCIpXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMubXlBcnJheS5sZW5ndGg7XG4gIH07XG5cbn07XG5cbmxldCBteVRvZG9zID0gbmV3IFRvZG8oKTtcbmNvbnNvbGUubG9nKFwiTnVtYmVyIG9mIGl0ZW1zOlwiLCBteVRvZG9zLmFkZFRhc2soJ1RoaXMgaXMgb3VyIGZpcnN0IHRhc2snKSk7XG5jb25zb2xlLmxvZyhcIk51bWJlciBvZiBpdGVtczpcIiwgbXlUb2Rvcy5hZGRUYXNrKCdFYXQgcGl6emEg7aC87b2VIHl1bW15ISEhJykpO1xuY29uc29sZS5sb2coXCJOdW1iZXIgb2YgaXRlbXM6XCIsIG15VG9kb3MuYWRkVGFzaygnRmluaXNoIHRoaXMgaXRlcmF0aW9uIDEhISDtoL7ttJMnKSk7XG5jb25zb2xlLmxvZyhcIk51bWJlciBvZiBpdGVtczpcIiwgbXlUb2Rvcy5hZGRUYXNrKCdGaW5pc2ggdGhpcyBpdGVyYXRpb24gMiEhIO2gvu20kycpKTtcbmNvbnNvbGUubG9nKFwiTnVtYmVyIG9mIGl0ZW1zOlwiLCBteVRvZG9zLmFkZFRhc2soJ0ZpbmlzaCB0aGlzIGl0ZXJhdGlvbiAzISEg7aC+7bSTJykpO1xubXlUb2Rvcy5saXN0QWxsVGFza3MoKTtcbmNvbnNvbGUubG9nKFwiTnVtYmVyIG9mIGl0ZW1zOlwiLCBteVRvZG9zLmRlbGV0ZVRhc2soJ0ZpbmlzaCB0aGlzIGl0ZXJhdGlvbiAxISEg7aC+7bSTJykpO1xuY29uc29sZS5sb2coXCJOdW1iZXIgb2YgaXRlbXM6XCIsIG15VG9kb3MuZGVsZXRlVGFzaygnRmluaXNoIHRoaXMgaXRlcmF0aW9uIDIhISDtoL7ttJMnKSk7XG5teVRvZG9zLmxpc3RBbGxUYXNrcygpO1xuIl19