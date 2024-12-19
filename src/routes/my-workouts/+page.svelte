<script lang="ts">
	import { exerciseStore, getExercises } from '$lib/stores/my-exercises-store.svelte';
	import { workoutStore } from '$lib/stores/my-workouts-store.svelte';
	import WorkoutCard from '../../lib/components/workout-card.svelte';
</script>

<div class="m-3">
	<div class="flex flex-wrap justify-center">
		{#each workoutStore().workouts as workout (workout.id)}
			{#if workout.id !== undefined}
				<WorkoutCard {workout} />
			{/if}
		{/each}
	</div>
</div>
