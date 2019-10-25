// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logTaskState: function() {
      console.log(`${this.title} has ${this.complete ? ' ' : ' not '}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask('Clean cat litter', 'Take all the poop out of the litter box');
const task2 = newTask('Do laundry', 'No');
const tasks = [task1, task2];

task1.logTaskState();
task1.markCompleted();
task1.logTaskState();

console.log(tasks);
