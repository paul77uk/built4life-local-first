import type { Workout } from '$lib/types';
import { db } from '..';

export const addWorkout = async (title: string) => {
	const workoutId = await db.workouts.add({
		title
	});
	return workoutId;
};

export const getWorkoutById = async (id: number) => {
	return await db.workouts.get(id);
};

export const getWorkouts = async (): Promise<Array<Workout>> => {
	return await db.workouts.toArray();
};

export const deleteWorkoutById = async (id: number) => {
	await db.workouts.delete(id);
};

export const updateWorkout = async (workout: Workout) => {
	await db.workouts.update(workout.id, workout);
};
