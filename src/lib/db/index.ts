import Dexie, { type EntityTable } from 'dexie';

export type Workout = {
	id?: number;
	title: string;
};

export type Exercise = {
	id?: number;
	name: string;
	reps: number;
	weight: number;
	workoutId: number;
};

const db = new Dexie('built4lifedb') as Dexie & {
	workouts: EntityTable<Workout, 'id'>;
	exercises: EntityTable<Exercise, 'id'>;
};

db.version(1).stores({
	workouts: '++id, title',
	exercises: '++id, name, reps, weight, workoutId'
});

export { db };

navigator.storage.persist();
// Request persistent storage for site
if (navigator.storage && navigator.storage.persist) {
	const isPersisted = await navigator.storage.persist();
	console.log(`Persisted storage granted: ${isPersisted}`);
}
