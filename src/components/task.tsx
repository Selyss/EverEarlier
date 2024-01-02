export type Task = {
  name: string;
  id: string;
  priority: "High" | "Medium" | "Low";
  status: "To Do" | "In Progress" | "Completed";
};

const Tasks: Task[] = [];

function addTask(task: Task) {
  Tasks.push(task);
}

function deleteTask(taskName: string) {
  for (let i = 0; i < Tasks.length; i++) {
    if (Tasks[i].name === taskName) {
      Tasks.splice(i);
    }
  }
}

function dupeTask(task: Task) {
  // TODO: add new task id
  Tasks.push(task);
}
