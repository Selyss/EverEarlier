import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import * as z from "zod";

export enum Priority {
  High = "High",
  Medium = "Medium",
  Low = "Low",
}

export enum Progress {
  Completed = "Completed",
  In_Progress = "In Progress",
  To_Do = "To Do",
}

// submission validation schema
export const TaskSchema = z.object({
  name: z.string().min(1, {
    message: "Title must not be empty.",
  }),
  description: z.string().optional(),
  priority: z.nativeEnum(Priority),
  progress: z.nativeEnum(Progress),
});

export type Task = {
  name: string;
  description: string;
  id: string;
  priority: Priority;
  progress: Progress;
};

/* generate unique task id */
function generateTaskId(): string {
  // its probably unique...
  return uuidv4();
}

/* retrieve tasks from local storage */
export function getTasks(): Task[] {
  /* INFO: retrieving tasks from local storage is synchronous */
  if (typeof window !== "undefined") {
    /* we are in the browser */
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  }
  return [];
}

/* save tasks to local storage */
export function saveTasks(tasks: Task[]): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

/* create a new task */
export function createTask(task: Task): void {
  task.id = generateTaskId();
  const tasks = getTasks();
  tasks.push(task);
  saveTasks(tasks);
  toast.success("Task created: " + task.name);
}

/* update a task */
export function updateTask(updatedTask: Task): void {
  const tasks = getTasks();
  const taskIndex = tasks.findIndex((task) => task.id === updatedTask.id);
  /* checking if the task index is found */
  if (taskIndex !== -1) {
    tasks[taskIndex] = updatedTask;
    saveTasks(tasks);
    toast.success("Task edited"); // FIXME: make it say the name
  }
}

/* delete a task */
function deleteTask(taskId: string): void {
  const tasks = getTasks();
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  saveTasks(updatedTasks);
  toast.warning("Deleted Task"); // TODO: make it say name
}
