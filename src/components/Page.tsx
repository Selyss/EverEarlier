import { DataTable } from "@/components/DataTable";
import { type Task } from "@/components/Task";
import AddTask from "@/components/AddTask";
import { useState } from "react";
import { columns } from "@/components/Columns";

export default function TodoList() {
  const [data, setData] = useState<Task[]>([]);
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
