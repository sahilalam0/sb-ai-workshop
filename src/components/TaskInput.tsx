import { Box, Button, Field, TextInput } from "@adaptavant/eds-core";

interface TaskInputProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onAdd: () => void;
}

export default function TaskInput({ value, onChange, onAdd }: TaskInputProps) {
	return (
		<Box className="flex gap-4 shrink-0">
			<Box className="flex-1 flex flex-col gap-1">
				<Field label="New Task">
					<TextInput
						value={value}
						onChange={onChange}
						placeholder="What needs to be done?"
					/>
				</Field>
			</Box>
			<Box className="flex items-end pb-1">
				<Button variant="accentPrimary" onClick={onAdd}>
					Add Task
				</Button>
			</Box>
		</Box>
	);
}
