import { useState } from "react";
import { Box, Button, Heading, TextInput, Field } from "@adaptavant/eds-core";

interface Task {
	id: string;
	text: string;
}

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
			{/* Header */}
			<Box className="w-full max-w-3xl p-6 border-b border-secondary flex justify-between items-center">
				<Heading as="h2">To-Do App</Heading>
			</Box>

			{/* Main Content */}
			<Box className="w-full max-w-3xl p-6 flex flex-col gap-6 flex-1 overflow-hidden">
				{/* Task Input */}
				<Box className="flex gap-4 shrink-0">
					<Box className="flex-1 flex flex-col gap-1">
						<Field label="New Task">
							<TextInput
								value={taskText}
								onChange={(
									e: React.ChangeEvent<HTMLInputElement>,
								) => setTaskText(e.target.value)}
								placeholder="What needs to be done?"
							/>
						</Field>
					</Box>
					<Box className="flex items-end pb-1">
						<Button variant="accentPrimary" onClick={handleAddTask}>
							Add Task
						</Button>
					</Box>
				</Box>

				{/* Task List */}
				<Box className="flex flex-col mt-6 flex-1 overflow-y-auto p-4 bg-neutral border border-secondary rounded-6px">
					{tasks.length === 0 ? (
						<Box className="p-12 text-center">
							<Heading as="h5" className="text-text-subtle">
								No tasks yet. Add one above!
							</Heading>
						</Box>
					) : (
						<Box className="flex flex-col">
							{tasks.map((task) => (
								<Box
									key={task.id}
									className="py-4 border-b border-secondary last:border-b-0 flex flex-col gap-3"
								>
									<Heading as="h5">{task.text}</Heading>
								</Box>
							))}
						</Box>
					)}
				</Box>
			</Box>
		</Box>
	);
}
