import { exerciseStore, getExercises, saveExercise } from './my-exercises-store.svelte';
import { saveWorkout, workoutStore } from './my-workouts-store.svelte';

let json: Array<string> | undefined | null = $state();

export async function onChange(e: Event) {
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

	json = (await readJsonFile(file)) as Array<string> | null | undefined;
	// save json to workout db table
	json?.forEach(uploadJson);
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

const uploadJson = async (workout: any) => {
	const workoutData = await saveWorkout(workout.title);
	workout.exercises.forEach((exercise: any) => {
		if (workoutData) saveExercise(exercise.name, exercise.reps, exercise.weight, workoutData);
	});
};

export const export_to_json = async () => {
	const data = workoutStore().workouts.map((workout) => {
		if (workout.id) getExercises(workout.id);
		return {
			title: workout.title,
			exercises: exerciseStore().exercises
		};
	});

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
