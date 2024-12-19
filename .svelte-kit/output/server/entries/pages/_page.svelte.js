import { X as ensure_array_like, S as pop, Q as push } from "../../chunks/index.js";
import Dexie from "dexie";
import { e as escape_html } from "../../chunks/escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (is_boolean || name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
const db = new Dexie("built4lifedb");
db.version(1).stores({
  workouts: "++id, title, description",
  exercises: "++id, title, workoutId"
});
function ExercisesByWorkoutId($$payload, $$props) {
  push();
  let exercisesbyWorkoutId = [];
  let exerciseName = "";
  const each_array = ensure_array_like(exercisesbyWorkoutId);
  $$payload.out += `<input type="text" placeholder="Enter exercise name"${attr("value", exerciseName)}> <button class="rounded border p-1 hover:bg-gray-50">Submit</button> <ul><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let exercise = each_array[$$index];
    $$payload.out += `<div class="flex gap-2 items-center my-3"><li>${escape_html(exercise.title)}</li> <li>${escape_html(exercise.workoutId)}</li> <button class="rounded border p-1 hover:bg-gray-50">delete</button></div>`;
  }
  $$payload.out += `<!--]--></ul>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let workoutName = "";
  let workoutDescription = "";
  let workouts = [];
  const each_array = ensure_array_like(workouts);
  $$payload.out += `<h1>Workout</h1> <input type="text" placeholder="Enter workout name"${attr("value", workoutName)}> <input type="text" placeholder="Enter workout description"${attr("value", workoutDescription)}> <button class="rounded border p-1 hover:bg-gray-50">Submit</button> <div>${escape_html(workoutName)}</div> <div>${escape_html(workoutDescription)}</div> <ul><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let workout = each_array[$$index];
    $$payload.out += `<li class="my-2 flex items-center gap-2">${escape_html(workout.title)}
			${escape_html(workout.description)}
			${escape_html(workout.id)} <button class="rounded border p-1 hover:bg-gray-50">delete</button></li> <div>Exercises</div> `;
    ExercisesByWorkoutId($$payload, { workoutId: workout.id });
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--></ul>`;
  pop();
}
export {
  _page as default
};
