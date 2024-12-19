import { db } from '..';

type Workout = {
	id?: number;
	title: string;
};

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
