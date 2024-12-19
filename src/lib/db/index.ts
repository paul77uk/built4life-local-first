import Dexie, { type EntityTable } from 'dexie';
import { browser } from '$app/environment';

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

// Request persistent storage for site
export const persist = async () => {
  if(browser) {
    console.log('setting persistence...');
    return navigator.storage && navigator.storage.persist && navigator.storage.persist();
  }
  return {};
}

export const isStoragePersisted = async () => {
  if(browser) {
    console.log('checking persistence...');
    return navigator.storage && navigator.storage.persisted && navigator.storage.persisted();
  }
  return {};
}
