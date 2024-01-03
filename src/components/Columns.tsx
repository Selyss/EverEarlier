"use client";

import { type Task } from "@/components/Task";
import { Badge } from "@/components/ui/badge";
import { type ColumnDef } from "@tanstack/react-table";

import TaskDropdown from "@/components/TaskDropdown";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Task",
  },
  {
    accessorKey: "priority",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} // FIXME: this doesnt work, it needs to sort by priority
        >
          Priority
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const priority = row.original.priority;
      return (
        <Badge
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
        <Progress
          value={
            progress === "To Do" ? 0 : progress === "In Progress" ? 50 : 100
          }
        />
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
