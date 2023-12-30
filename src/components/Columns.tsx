"use client"

import { type ColumnDef } from "@tanstack/react-table"

export type Task = {
  name: string
  id: string
  priority: number
  completed: boolean
}

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "priority",
    header: "Priority",
  },
  {
    accessorKey: "completed",
    header: "Completed",
  },
]
