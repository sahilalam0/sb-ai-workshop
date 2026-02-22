import { useState } from "react";
import { Box } from "@adaptavant/eds-core";
import type { Task } from "./types";
import TodoHeader from "./TodoHeader";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

export default function TodoApp() {
	const [taskText, setTaskText] = useState("");
	const [tasks, setTasks] = useState<Task[]>([]);

	const handleAddTask = () => {
		if (!taskText.trim()) return;
		const newTask: Task = {
			id: Date.now().toString(),
			text: taskText,
		};
		setTasks([newTask, ...tasks]);
		setTaskText("");
	};

	return (
		<Box className="h-screen w-full bg-surface-base flex flex-col items-center relative">
			<TodoHeader />
			<Box className="w-full max-w-3xl p-6 flex flex-col gap-6 flex-1 overflow-hidden">
				<TaskInput
					value={taskText}
					onChange={(e) => setTaskText(e.target.value)}
					onAdd={handleAddTask}
				/>
				<TaskList tasks={tasks} />
			</Box>
		</Box>
	);
}
