import AddTask from "@/components/AddTask";
import { columns } from "@/components/Columns";
import { DataTable } from "@/components/DataTable";
import { type Task } from "@/components/Task";
import { useEffect, useState } from "react";

export default function TodoList() {
  const [data, setData] = useState<Task[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("tasks");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-row gap-4 w-full">
        <AddTask
          addTask={(task) => {
            const newData = [...data, task];
            setData(newData);
          }}
        />
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
