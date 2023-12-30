"use client";

import { Badge } from "@/components/ui/badge";
import { type ColumnDef } from "@tanstack/react-table";

export type Task = {
  name: string;
  id: string;
  priority: "High" | "Medium" | "Low";
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
    cell: ({ row }) => {
      const value = row.original.priority;
      return (
        <Badge
          variant={
            value === "High"
              ? "destructive"
              : value === "Medium"
              ? "secondary"
              : "outline"
          }
        >
          {value}
        </Badge>
      );
    },
  },
  {
    accessorKey: "completed",
    header: "Completed",
  },
];
