<script lang="ts">
	import workoutData from '$lib/json-data/workouts.json';
	import WorkoutCard from '$lib/components/workout-card.svelte';

	let workouts = $state(workoutData);
</script>

<div class="m-3">
	<div class="flex flex-wrap justify-center">
		{#each workouts as workout (workout.title)}
			<WorkoutCard {workout} />
		{/each}
	</div>
</div>
