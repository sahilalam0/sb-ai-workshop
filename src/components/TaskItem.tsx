import { Box, Heading } from "@adaptavant/eds-core";
import type { Task } from "./types";

interface TaskItemProps {
	task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
	return (
		<Box className="py-4 border-b border-secondary last:border-b-0 flex flex-col gap-3">
			<Heading as="h5">{task.text}</Heading>
		</Box>
	);
}
