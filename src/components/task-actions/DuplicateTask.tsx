import { duplicateTask } from "@/components/Task";
import { toast } from "sonner";

export default function DuplicateTask({ taskId }) {
  const handleDuplicate = () => {
    duplicateTask(taskId);
  };

  toast("Task: " + taskId + " has been duplicated");
}
