<script lang="ts">
	import { search, workoutWithExercisesStore } from '$lib/stores/workout-with-exercises.svelte';
	import Input from './ui/input/input.svelte';

	let searchInput: string = $state('');

	$inspect('test', workoutWithExercisesStore().workoutWithExercises);
</script>

<Input
	placeholder="Search for a workout"
	bind:value={searchInput}
	oninput={() => search(searchInput)}
/>
