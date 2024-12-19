<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import { getExercises, saveExercises } from '$lib/stores/my-exercises-store.svelte';
	import { deleteWorkout, saveWorkout } from '$lib/stores/my-workouts-store.svelte';
	import { exerciseStore } from '$lib/stores/my-exercises-store.svelte';

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

	type Exercise = {
		id?: number;
		name: string;
		reps: number;
		weight: number;
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
		<Card.Content class="mx-auto">
			{#if workout.exercises && $page.url.pathname === '/workouts'}
				{#each workout.exercises as exercise}
					<p>{exercise.reps} {exercise.name} ({exercise.weight}kg)</p>
				{/each}
			{/if}
			{#if $page.url.pathname === '/my-workouts'}
				<!-- <ExerciseByWorkoutId {workout} /> -->
				{#each exercises as exercise}
					<p>{exercise.reps} {exercise.name} ({exercise.weight}kg)</p>
				{/each}
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
				<Button
					onclick={() => {
						if (workout.id) {
							deleteWorkout(workout.id);
						}
					}}
					variant="outline">Delete workout</Button
				>
			{/if}
		</Card.Footer>
	</div>
</Card.Root>
