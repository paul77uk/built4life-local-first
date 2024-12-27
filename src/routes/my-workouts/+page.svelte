<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { export_to_json, onChange } from '$lib/stores/file-transfer-store.svelte';
	import { getAllWorkouts, workoutStore } from '$lib/stores/my-workouts-store.svelte';

	import WorkoutCard from '../../lib/components/workout-card.svelte';


	$effect(() => {
		getAllWorkouts();
	});
</script>

<div class="mt-5 flex items-center justify-center gap-3">
	<Button variant="outline" onclick={export_to_json}>Download all workouts</Button>
	<Button variant="outline"
		><Label for="input" class="cursor-pointer">Upload workouts</Label></Button
	>
	<Input id="input" class="hidden w-28" type="file" onchange={onChange} accept=".json" />

</div>

<div class="m-3">
	<div class="flex flex-wrap justify-center">
		{#each workoutStore().workouts as workout (workout.id)}
			{#if workout.id !== undefined}
				<WorkoutCard {workout} />
			{/if}
		{/each}
	</div>
</div>
