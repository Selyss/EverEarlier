"use client";

import { Badge } from "@/components/ui/badge";
import { type ColumnDef } from "@tanstack/react-table";

export type Task = {
  name: string;
  id: string;
  priority: number;
  completed: boolean;
};

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "name",
    header: "Task",
  },
  {
    accessorKey: "priority",
    header: "Priority",
  },
  {
    accessorKey: "completed",
    header: "Completed",
    cell: ({ row }) => {
      const value = row.original.completed;
      return (
        <Badge variant={value ? "default" : "destructive"}>
          {value ? "Yes" : "No"}
        </Badge>
      );
    },
  },
];
