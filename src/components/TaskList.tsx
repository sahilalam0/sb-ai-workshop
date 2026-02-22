import { Box, Heading } from "@adaptavant/eds-core";
import type { Task } from "./types";
import TaskItem from "./TaskItem";

interface TaskListProps {
	tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
	return (
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
						<TaskItem key={task.id} task={task} />
					))}
				</Box>
			)}
		</Box>
	);
}
