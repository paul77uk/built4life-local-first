<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { editExercise } from '$lib/stores/my-exercises-store.svelte';
	import { editWorkout } from '$lib/stores/my-workouts-store.svelte';
	import type { Exercise } from '$lib/types';

	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';

	type Workout = {
		workout: {
			id?: number;
			title: string;
		};
		exercises: {
			id?: number;
			name: string;
			reps: number;
			weight: number;
		}[];
	};

	let { workout, exercises }: Workout = $props();
	let title = $state(workout.title);
	let exerciseState: Exercise = $state({} as Exercise);
</script>

<Dialog.Root>
	<Dialog.Trigger class={cn(buttonVariants({ variant: 'outline' }), 'size-8')}
		><Icon icon="lucide-edit" />
	</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title>Edit workout</Dialog.Title>
			<Dialog.Description>
				Make changes to your workout here. Click save when you're done.
			</Dialog.Description>
		</Dialog.Header>
		<div class="grid gap-4 py-4">
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="name" class="text-right">Workout title</Label>
				<Input id="name" bind:value={title} class="col-span-3" />
			</div>

			{#each exercises as exercise (exercise.id)}
				<div class="grid grid-cols-4 items-center gap-4">
					<Label for="name" class="text-right">Exercise name</Label>
					<Input
						id="name"
						value={exercise.name}
						onchange={(e) => {
							exerciseState.name = e.currentTarget.value;
							exerciseState.id = exercise.id;
						}}
						class="col-span-3"
					/>
					<Label for="reps" class="text-right">Reps</Label>
					<Input
						id="reps"
						value={exercise.reps}
						onchange={(e) => {
							exerciseState.reps = parseInt(e.currentTarget.value);
							exerciseState.id = exercise.id;
						}}
						class="col-span-3"
					/>
					<Label for="weight" class="text-right">Weight</Label>
					<Input
						id="weight"
						value={exercise.weight}
						onchange={(e) => {
							exerciseState.weight = parseInt(e.currentTarget.value);
							exerciseState.id = exercise.id;
						}}
						class="col-span-3"
					/>
				</div>
			{/each}
		</div>
		<Dialog.Footer>
			<Button
				onclick={async () => {
					workout.title = title;
					await editWorkout(workout);
					await editExercise(exerciseState);
				}}>Save changes</Button
			>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
