import React from "react";

interface DeleteTaskProps {
  taskId: string;
  onDelete: (taskId: string) => void;
}

const DeleteTask: React.FC<DeleteTaskProps> = ({ taskId, onDelete }) => {
  const handleDelete = () => {
    onDelete(taskId);
  };

  return <button onClick={handleDelete}>Delete Task</button>;
};

export default DeleteTask;
