<script lang="ts">
	import workoutData from '$lib/json-data/workouts.json';
	import WorkoutCard from '$lib/components/workout-card.svelte';
	import WorkoutSearch from '$lib/components/workout-search.svelte';
	import { workoutWithExercisesStore } from '$lib/stores/workout-with-exercises.svelte';

	workoutWithExercisesStore().workoutWithExercises = workoutData;
</script>

<WorkoutSearch />

<div class="m-3">
	<div class="flex flex-wrap justify-center">
		{#each workoutWithExercisesStore().workoutWithExercises as workout (workout.title)}
			<WorkoutCard {workout} />
		{/each}
	</div>
</div>
