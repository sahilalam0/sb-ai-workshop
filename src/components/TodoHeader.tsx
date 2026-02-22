import { Box, Heading } from "@adaptavant/eds-core";

export default function TodoHeader() {
	return (
		<Box className="w-full max-w-3xl p-6 border-b border-secondary flex justify-between items-center">
			<Heading as="h2">To-Do App</Heading>
		</Box>
	);
}
