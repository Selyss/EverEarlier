"use client";

import { Badge } from "@/components/ui/badge";
import { type ColumnDef } from "@tanstack/react-table";

import TaskDropdown from "./TaskDropdown";

export type Task = {
  name: string;
  id: string;
  priority: "High" | "Medium" | "Low";
  status: "To Do" | "In Progress" | "Completed";
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
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return <TaskDropdown {...row} />;
    },
  },
];
