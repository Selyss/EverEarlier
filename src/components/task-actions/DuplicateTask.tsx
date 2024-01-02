import { duplicateTask } from "@/components/Task";

export default function DuplicateTask({ taskId }) {
  const handleDuplicate = () => {
    duplicateTask(taskId);
  };
}
