const prompt = require("prompt-sync")();
console.log(
  "WELCOME TO TODO-APP HERE IS THE LIST OF OPERATIONS YOU CAN PERFORM"
);
console.log("HERE ARE THE OPERATIONS YOU CAN PERFORM");
console.log(
  "1. CREATE\n2. DISPLAY TASKS\n3. UPDATE\n4. DELETE\n5. CHANGE TASK STATUS\n6. EXIT"
);
var i = 1;
var toDo = [];

while (true) {    
  const option = prompt("Select an option:");
  if (option >= 1 && option <= 6) {
    if (option === "1") {
      const myRemainder = prompt("Enter your Remainder to put in todo list:");
      if (myRemainder === "") {
        console.log("Remainder cannot be empty!");
      } else {
          const existingTask=toDo.find(todo=>todo.task===myRemainder)
          if(existingTask)
          {
            console.log("Task already exists ! Add a new Task")
          }
          else
          {
          toDo.push({ key: i , task: myRemainder, status: "Not Completed" });
          i=i+1
          console.log("Task has been added successfully ! you can view them!");
          }
      }
    } else if (option === "2") {
      console.log("Total Tasks Present:" + toDo.length);
      if (toDo.length === 0) {
        console.log(
          "There are no tasks currently available to display add a task first"
        );
      } else {
        console.log("key" + "   " + "Name of the Task");
        for (var i = 0; i < toDo.length; i++) {
          console.log(toDo[i]);
        }
      }
    } else if (option === "3") {
      var updateId = prompt(
        "Enter the id number to proceed with the updation of the task:"
      );
      var id = Number(updateId);
      if (id > toDo.length && id > 0) {
        console.log("Enter the id within range");
      } else {
        id = id - 1;
        var values = toDo[id];
        console.log(values);
        var updatedTask = prompt("Enter the task that you need to update:");
        const checkUpdatedTaskPresent=toDo.find(todo=>todo.task===updatedTask)
        if(checkUpdatedTaskPresent)
        {
            console.log("Please provide a new name the task already exists!")
        }
        else{
        toDo[id].task = updatedTask;
        console.log("Task has been updated in a successful manner!!!");
      }}
    } else if (option === "4") {
      {
        console.log(toDo[0].task);
        if (toDo.length === 0) {
          console.log("No tasks are there to delete!!!");
        } else {
          const delId = prompt(
            "Enter the key number inorder to delete the task:"
          );
        toDo = toDo.filter(v=>v.key!==+delId)
          console.log("Tasks has been deleted successfully!")
        }
        var k=1;
       toDo.forEach((todo=>todo.key=k++))
      }
    } else if (option === "5") {
      if (toDo.length == 0) {
        console.log("There are no tasks,that are currently present!");
      } else {
        var toggleId = prompt(
          "Enter the id to change the visibility of the task:"
        );
        var toggleIdNumber = Number(toggleId);
        toggleIdNumber = toggleIdNumber - 1;
        var myStatus = prompt(
          "change the status of the task:(For completed c and for not completed n:"
        );
        if (myStatus === "c") {
          if (toDo[toggleIdNumber].status === "completed") {
            console.log(
              "you have entered the same status ! please enter a different one,inorder to change the visibility that is present"
            );
          } else {
            toDo[toggleIdNumber].status = "completed";
            console.log(
              "The status has been updated to completed successfully"
            );
          }
        } else if (myStatus === "n") {
          if (toDo[toggleIdNumber].status === "Not completed") {
            console.log(
              "you have entered the same status ! please enter a differebt one,inorder to change the visibility that is present"
            );
          } else {
            toDo[toggleIdNumber].status = "Not completed";
            console.log(
              "The status has been updated to not completed successfully"
            );
          }
        } else {
          console.log(
            "Please presss either n or c ! dont press other options ! then the status wont change!"
          );
        }
      }
    } else {
      console.log("Application has been exited in a successful manner!");
      break;
    }
  } else {
    console.log("Enter the correct range from 1 to 6");
  }
}
