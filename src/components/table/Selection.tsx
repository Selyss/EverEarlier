import * as React from "react";

import { type Table } from "@tanstack/react-table";

interface DataTableSelectionProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  table: Table<TData>;
}

export function DataTableSelection<TData, TValue>({
  table,
}: DataTableSelectionProps<TData, TValue>) {
  return (
    <div>
      <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
    </div>
  );
}
