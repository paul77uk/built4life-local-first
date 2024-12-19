<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { getAllWorkouts, saveWorkout, workoutStore } from '$lib/stores/my-workouts-store.svelte';

	import WorkoutCard from '../../lib/components/workout-card.svelte';

	let json: any = $state();

	async function onChange(e: Event) {
		const target = e.target as HTMLInputElement;
		if (target == null || target.files == null) {
			json = null;
			return;
		}
		const file = target.files[0];
		if (file == null) {
			json = null;
			return;
		}

		json = await readJsonFile(file);
		// save json to workout db table
		json.forEach((workout: any) => {
			saveWorkout(workout.title);
		});
	}

	function readJsonFile(file: File) {
		const reader = new FileReader();
		return new Promise((resolve, reject) => {
			reader.onload = () => {
				if (typeof reader.result === 'string') {
					resolve(JSON.parse(reader.result));
				} else {
					reject(new Error('File content is not a string'));
				}
			};
			reader.onerror = reject;
			reader.readAsText(file);
		});
	}

	const export_to_json = async () => {
		const data = workoutStore().workouts;
		const json = JSON.stringify(data);
		const blob = new Blob([json], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'workouts.json';
		document.body.appendChild(a);
		a.click();
		setTimeout(() => {
			document.body.removeChild(a);
			window.URL.revokeObjectURL(url);
		}, 0);
	};

	$effect(() => {
		getAllWorkouts();
	});
</script>

<div class="w-full text-center">
	<Button class="mt-5" variant="outline" onclick={export_to_json}>Export to JSON</Button>
	<input type="file" onchange={onChange} accept=".json" />
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
