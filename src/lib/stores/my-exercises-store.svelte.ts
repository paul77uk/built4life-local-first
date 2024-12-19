import {
	addExercise,
	deleteExercise,
	getExercisesByWorkoutId
} from '$lib/db/repositories/exercise-repository';

type Exercise = {
	id?: number;
	name: string;
	reps: number;
	weight: number;
	workoutId?: number;
};

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

const exerciseStore = () => {
	return {
		get exercises() {
			return exercises;
		}
	};
};

export { exerciseStore };
