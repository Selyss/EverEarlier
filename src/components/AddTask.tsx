"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { cn, useMediaQuery } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  name: z.string({
    required_error: "Please select a name for the task.",
  }),
  priority: z.string({
    required_error: "Please select a priority for the task.",
  }),
  progress: z.string({
    required_error: "Please select your current progress.",
  }),
});
export function AddTodoTask() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Task</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add task</DialogTitle>
            <DialogDescription>
              Add a new task to your list. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Task</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add task</DrawerTitle>
          <DrawerDescription>
            Add a new task to your list. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="title">Name</Label>
        <Input type="text" id="title" defaultValue="Clean Room" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <Label htmlFor="priority">Priority</Label>
          <Select name="priority">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Task Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Low</SelectItem>
              <SelectItem value="dark">Medium</SelectItem>
              <SelectItem value="system">High</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="progress">Progress</Label>
          <Select name="progress">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Current Progress" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">To Do</SelectItem>
              <SelectItem value="dark">In Progress</SelectItem>
              <SelectItem value="system">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  );
}
