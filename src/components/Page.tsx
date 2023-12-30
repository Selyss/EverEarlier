import { useEffect, useState } from "react";
import { columns, type Task } from "./Columns";
import { DataTable } from "./DataTable";

async function getData(): Promise<Task[]> {
  // fetch data from API here.
  return [
    {
      name: "Clean Room",
      id: "728ed52f",
      priority: 1,
      completed: false,
    },
    {
      name: "Make Bed",
      id: "528ed52f",
      priority: 2,
      completed: true,
    },
    // ...
  ];
}

export default function DemoPage() {
  const [data, setData] = useState<Task[]>([]);

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
