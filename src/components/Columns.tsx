"use client";

import { type Task } from "@/components/Task";
import { Badge } from "@/components/ui/badge";
import { type ColumnDef } from "@tanstack/react-table";

import TaskDropdown from "@/components/TaskDropdown";
import { DataTableColumnHeader } from "@/components/table/ColumnHeader";
import { Progress } from "@/components/ui/progress";

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
                ? "secondary"
                : "outline"
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
      return (
        <Badge
          className="text-xs py-0.5 px-2"
          variant={
            progress === "Completed"
              ? "destructive"
              : progress === "In Progress"
                ? "secondary"
                : "outline"
          }
        >
          {progress}
        </Badge>
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
