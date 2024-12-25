export type Workout = {
	id?: number;
	title: string;
};

export type Exercise = {
	id?: number;
	name: string;
	reps: number;
	weight: number;
	workoutId?: number;
};

export type WorkoutWithExercises = {
	id?: number;
	title: string;
	exercises: Exercise[];
};
