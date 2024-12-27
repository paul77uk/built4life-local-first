<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import { getExercises, saveExercises } from '$lib/stores/my-exercises-store.svelte';
	import { deleteWorkout, editWorkout, saveWorkout } from '$lib/stores/my-workouts-store.svelte';
	import { exerciseStore } from '$lib/stores/my-exercises-store.svelte';
	import type { Exercise } from '$lib/types';
	import Icon from '@iconify/svelte';
	import EditWorkout from './edit-workout.svelte';
	import Input from './ui/input/input.svelte';
	import * as Table from '$lib/components/ui/table/index.js';

	type WorkoutData = {
		workout: {
			id?: number;
			title: string;
			exercises?: {
				name: string;
				reps: number;
				weight: number;
			}[];
		};
	};

	let { workout }: WorkoutData = $props();
	let exercises: Exercise[] = $state([]);

	const loadExercises = async () => {
		if (workout.id) await getExercises(workout.id);
		exercises = exerciseStore().exercises;
	};

	$effect(() => {
		loadExercises();
	});
</script>

<Card.Root class="m-3 flex w-[300px] flex-col px-5">
	<Card.Header>
		<Card.Title class="mx-auto text-center">{workout.title}</Card.Title>
	</Card.Header>

	<div class="flex h-full flex-col">
		<Card.Content class="mx-auto px-2">
			{#if workout.exercises && $page.url.pathname === '/workouts'}
				{#each workout.exercises as exercise}
					<p>{exercise.reps} {exercise.name} ({exercise.weight}kg)</p>
				{/each}
			{/if}
			{#if $page.url.pathname === '/my-workouts'}
				<div class="rounded-lg border-2">
					<Table.Root>
						<Table.Header>
							<Table.Row>
								<Table.Head>Reps</Table.Head>
								<Table.Head>Exercise</Table.Head>
								<Table.Head class="text-right">Weight</Table.Head>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{#each exercises as exercise}
								<Table.Row>
									<Table.Cell
										><Input
											value={exercise.reps}
											class="border-0 shadow-none focus-visible:ring-0 px-1"
										/></Table.Cell
									>
									<Table.Cell
										><Input
											value={exercise.name}
											class="border-0 shadow-none focus-visible:ring-0 px-1"
										/></Table.Cell
									>
									<Table.Cell class="text-right"
										><Input
											value={exercise.weight}
											class="border-0 shadow-none focus-visible:ring-0 pl-6"
										/></Table.Cell
									>
								</Table.Row>
							{/each}
						</Table.Body>
					</Table.Root>
				</div>
			{/if}
		</Card.Content>

		<Card.Footer class="mx-auto flex-grow items-end">
			{#if $page.url.pathname === '/workouts'}
				<Button
					onclick={async () => {
						const workoutId = await saveWorkout(workout.title);
						if (workout.exercises && workoutId) {
							saveExercises(workout.exercises, workoutId);
						}
						goto('/my-workouts');
					}}
					variant="outline">Add to my workouts</Button
				>
			{/if}
			{#if $page.url.pathname === '/my-workouts'}
				<div class="flex gap-1.5">
					<EditWorkout {workout} {exercises} />
					<Button
						class="size-8"
						onclick={() => {
							if (workout.id) {
								deleteWorkout(workout.id);
							}
						}}
						variant="outline"
						><Icon icon="ic:outline-delete" />
					</Button>
				</div>
			{/if}
		</Card.Footer>
	</div>
</Card.Root>
