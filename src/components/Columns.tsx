"use client";

import { type Task } from "@/components/Task";
import { Badge } from "@/components/ui/badge";
import { type ColumnDef } from "@tanstack/react-table";

import TaskDropdown from "./TaskDropdown";

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
    accessorKey: "progress",
    header: "Progress",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return <TaskDropdown {...row} />;
    },
  },
];
