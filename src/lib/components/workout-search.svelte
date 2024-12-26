<script lang="ts">
	import { search, workoutWithExercisesStore } from '$lib/stores/workout-with-exercises.svelte';
	import Input from './ui/input/input.svelte';
	import Icon from '@iconify/svelte';

	let searchInput: string = $state('');

	$inspect('test', workoutWithExercisesStore().workoutWithExercises);
</script>

<div class="relative mx-auto mt-6 flex w-fit">
	<Icon
		icon="mingcute:search-line"
		class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
	/>
	<Input
		class="pl-8 text-sm"
		placeholder="Search for a workout"
		bind:value={searchInput}
		oninput={() => search(searchInput)}
	/>
</div>
