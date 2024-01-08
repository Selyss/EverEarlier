"use client";

import { Priority, Progress, type Task } from "@/components/Task";
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
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Task" />
    ),
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
            priority === Priority.High
              ? "destructive"
              : priority === Priority.Medium
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
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Progress" />
    ),
    cell: ({ row }) => {
      const progress = row.original.progress;
      return progress === Progress.Completed ? (
        <div className="flex align-center gap-2 items-center">
          <CheckCircledIcon className="w-5 h-5 text-green-500" />
          <span>Completed</span>
        </div>
      ) : progress === Progress.In_Progress ? (
        <div className="flex align-center gap-2 items-center">
          <StopwatchIcon className="w-5 h-5 text-yellow-500" />
          <span>In Progress</span>
        </div>
      ) : (
        <div className="flex align-center gap-2 items-center">
          <CircleIcon className="w-5 h-5 text-gray-500" />
          <span>To Do</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <TaskDropdown {...row} />;
    },
  },
];
