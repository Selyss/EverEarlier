import { columns } from "@/components/Columns";
import { DataTable } from "@/components/DataTable";
import { getTasks, saveTasks } from "@/components/Task";
import { useEffect, useState } from "react";

export default function TodoList() {
  const [data, setData] = useState(getTasks());

  useEffect(() => {
    setData(getTasks());
  }, []);

  useEffect(() => {
    saveTasks(data);
  }, [data]);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
