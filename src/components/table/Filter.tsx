import * as React from "react";

import { Input } from "@/components/ui/input";
import { type Table } from "@tanstack/react-table";

interface DataTableFilterProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  table: Table<TData>;
}

export function DataTableFilter<TData, TValue>({
  table,
}: DataTableFilterProps<TData, TValue>) {
  return (
    <div>
      <Input
        placeholder="Filter by name"
        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("name")?.setFilterValue(event.target.value)
        }
        className="max-w-sm"
        name="filter"
      />
    </div>
  );
}
