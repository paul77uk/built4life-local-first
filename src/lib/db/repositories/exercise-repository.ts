import type { Exercise } from '$lib/types';
import { db } from '..';

export const addExercise = async (
	name: string,
	reps: number,
	weight: number,
	workoutId: number
) => {
	await db.exercises.add({
		name,
		reps,
		weight,
		workoutId
	});
};

export const getExercisesByWorkoutId = async (workoutId: number) => {
	return await db.exercises.where('workoutId').equals(workoutId).toArray();
};

export const deleteExercise = async (id: number) => {
	await db.exercises.delete(id);
};

export const updateExercise = async (exercise: Exercise) => {
	await db.exercises.update(exercise.id, exercise);
};
