import { useEffect, useState } from "react";
import { columns, type Task } from "./Columns";
import { DataTable } from "./DataTable";

async function getData(): Promise<Task[] | undefined> {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    return JSON.parse(savedTasks);
  }
  // todo: no saved tasks
}

function saveData(tasks: Task[]) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export default function TodoList() {
  const [data, setData] = useState<Task[]>([]);

  useEffect(() => {
    getData().then((data) => setData(data || []));
  }, []);

  useEffect(() => {
    saveData(data);
  }, [data]);
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
