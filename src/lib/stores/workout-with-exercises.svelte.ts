import { getWorkout } from './my-workouts-store.svelte';
import type { WorkoutWithExercises } from '$lib/types';

let workoutWithExercises: WorkoutWithExercises[] = $state([]);

export const search = async (search: string) => {
	workoutWithExercises = workoutWithExercises.filter((workout) =>
		workout.title.toLowerCase().includes(search.toLowerCase())
	);
};

export const workoutWithExercisesStore = () => {
	return {
		get workoutWithExercises() {
			return workoutWithExercises;
		},
		set workoutWithExercises(value: WorkoutWithExercises[]) {
			workoutWithExercises = value;
		}
	};
};
