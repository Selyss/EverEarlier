import { MoreHorizontal } from "lucide-react";

import { EditTask } from "@/components/task-actions/EditTask";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import * as React from "react";

import { type Task } from "@/components/Task";
import { type Row } from "@tanstack/react-table";

export default function TaskDropdown(row: Row<Task>): JSX.Element {
  const [editingTask, setEditingTask] = React.useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false);

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
          onClick={() => {
            // setEditingTask(row.original);
            setIsEditDialogOpen(true);
          }}
        >
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => true}>Duplicate</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => row.original.id}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
      {editingTask && (
        <EditTask
          task={editingTask}
          onTaskUpdated={(updatedTask) => {
            setIsEditDialogOpen(false);
          }}
        />
      )}
    </DropdownMenu>
  );
}
