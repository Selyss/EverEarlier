import { v4 as uuidv4 } from "uuid";
import * as z from "zod";

// submission validation schema
export const TaskSchema = z.object({
  name: z.string().min(1, {
    message: "Title must not be empty.",
  }),
  description: z.string().min(1, {
    message: "Description must not be empty.",
  }),
  id: z.string().uuid(),
  priority: z.enum(["High", "Medium", "Low"]),
  progress: z.enum(["To Do", "In Progress", "Completed"]),
});

export type Task = {
  name: string;
  description: string;
  id: string;
  priority: "High" | "Medium" | "Low";
  status: "To Do" | "In Progress" | "Completed";
};

/* generate unique task id */
function generateTaskId(): string {
  return uuidv4();
}

/* retrieve tasks from local storage */
function getTasks(): Task[] {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
}

/* save tasks to local storage */
function saveTasks(tasks: Task[]): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

/* create a new task */
export function createTask(task: Task): void {
  const tasks = getTasks();
  tasks.push(task);
  saveTasks(tasks);
}

/* update a task */
function updateTask(updatedTask: Task): void {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex((task) => task.id === updatedTask.id);
  /* checking if the task index is found*/
  if (taskIndex !== -1) {
    tasks[taskIndex] = updatedTask;
    saveTasks(tasks);
  }
}

/* duplicate a task */
function duplicateTask(taskId: string): void {
  const tasks = getTasks();
  const taskToDuplicate = tasks.find((task) => task.id === taskId);
  if (taskToDuplicate) {
    const duplicatedTask = { ...taskToDuplicate, id: generateTaskId() };
    tasks.push(duplicatedTask);
    saveTasks(tasks);
  }
}

/* delete a task */
function deleteTask(taskId: string): void {
  const tasks = getTasks();
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  saveTasks(updatedTasks);
}
