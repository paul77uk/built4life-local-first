import {
	addExercise,
	deleteExercise,
	getExercisesByWorkoutId,
	updateExercise
} from '$lib/db/repositories/exercise-repository';
import type { Exercise } from '$lib/types';

let exercises: Exercise[] = $state([]);

export const saveExercise = async (
	name: string,
	reps: number,
	weight: number,
	workoutId: number
) => {
	await addExercise(name, reps, weight, workoutId);
	getExercises(workoutId);
};

export const saveExercises = async (exercises: Exercise[], workoutId: number) => {
	exercises.forEach(async (exercise) => {
		await saveExercise(exercise.name, exercise.reps, exercise.weight, workoutId);
	});
	getExercises(workoutId);
};

export const getExercises = async (workoutId: number) => {
	exercises = await getExercisesByWorkoutId(workoutId);
};

export const deleteExercises = async (workoutId: number) => {
	await getExercises(workoutId);
	exercises.forEach(async (exercise) => {
		if (exercise.id) await deleteExercise(exercise.id);
	});
};

export const editExercise = async (exercise: Exercise) => {
	await updateExercise(exercise);
	if (exercise.workoutId) getExercises(exercise.workoutId);
};

const exerciseStore = () => {
	return {
		get exercises() {
			return exercises;
		},
		set exercises(value: Exercise[]) {
			exercises = value;
		}
	};
};

export { exerciseStore };
