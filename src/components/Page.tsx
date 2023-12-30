import { columns, type Task } from "./Columns"
import { DataTable } from "./DataTable"

async function getData(): Promise<Task[]> {
  return [
    {
      name: "Clean Room",
      id: "728ed52f",
      priority: 1,
      completed: false,
    },
    {
      name: "Clean Room",
      id: "728ed52f",
      priority: 1,
      completed: false,
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
