import { V as ensure_array_like, T as pop, R as push } from "../../../chunks/index.js";
import { W as Workout_card, w as workoutStore } from "../../../chunks/workout-card.js";
function _page($$payload, $$props) {
  push();
  const each_array = ensure_array_like(workoutStore().workouts);
  $$payload.out += `<div class="m-3"><div class="flex flex-wrap justify-center"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let workout = each_array[$$index];
    if (workout.id !== void 0) {
      $$payload.out += "<!--[-->";
      Workout_card($$payload, { workout });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
export {
  _page as default
};
