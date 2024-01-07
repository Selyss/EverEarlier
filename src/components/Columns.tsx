"use client";

import { type Task } from "@/components/Task";
import { Badge } from "@/components/ui/badge";
import { type ColumnDef } from "@tanstack/react-table";

import TaskDropdown from "@/components/TaskDropdown";
import { DataTableColumnHeader } from "@/components/table/ColumnHeader";
import {
  CheckCircledIcon,
  CircleIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "name",
    header: "Task",
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),

    cell: ({ row }) => {
      const priority = row.original.priority;
      return (
        <Badge
          className="text-xs py-0.5 px-2"
          variant={
            priority === "High"
              ? "destructive"
              : priority === "Medium"
              ? "warning"
              : "success"
          }
        >
          {priority}
        </Badge>
      );
    },
  },
  {
    accessorKey: "progress",
    header: "Progress",
    cell: ({ row }) => {
      const progress = row.original.progress;
      return progress === "Completed" ? (
        <CheckCircledIcon className="w-5 h-5 text-green-500" />
      ) : progress === "In Progress" ? (
        <StopwatchIcon className="w-5 h-5 text-yellow-500" />
      ) : (
        <CircleIcon className="w-5 h-5 text-gray-500" />
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return <TaskDropdown {...row} />;
    },
  },
];
