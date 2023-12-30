"use client";

import { Badge } from "@/components/ui/badge";
import { type ColumnDef } from "@tanstack/react-table";

import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => true} // todo: open modal
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => true}>Duplicate</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => row.original.id}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
