import { addWorkout, deleteWorkoutById, getWorkoutById, getWorkouts } from '$lib/db/repositories/workout-repository';

let workouts = $state(await getWorkouts());

export const saveWorkout = async (title: string) => {
	const workout = await addWorkout(title);
	getAllWorkouts();
	return workout;
};

export const getWorkout = async (id: number) => {
	const workout = await getWorkoutById(id);
	return workout;
};

export const getAllWorkouts = async () => {
	workouts = await getWorkouts();
};

export const deleteWorkout = async (id: number) => {
	await deleteWorkoutById(id);
	getAllWorkouts();
};

const workoutStore = () => {
	return {
		workouts
	};
};

export { workoutStore };
