import { V as ensure_array_like } from "../../../chunks/index.js";
import { W as Workout_card } from "../../../chunks/workout-card.js";
const workoutData = [
  {
    title: "Squat 3x5",
    exercises: [
      {
        name: "Squat",
        reps: 5,
        weight: 0
      },
      {
        name: "Squat",
        reps: 5,
        weight: 0
      },
      {
        name: "Squat",
        reps: 5,
        weight: 0
      }
    ]
  },
  {
    title: "Squat 5x5",
    exercises: [
      {
        name: "Squat",
        reps: 5,
        weight: 0
      },
      {
        name: "Squat",
        reps: 5,
        weight: 0
      },
      {
        name: "Squat",
        reps: 5,
        weight: 0
      },
      {
        name: "Squat",
        reps: 5,
        weight: 0
      },
      {
        name: "Squat",
        reps: 5,
        weight: 0
      }
    ]
  },
  {
    title: "Press 3x5",
    exercises: [
      {
        name: "Press",
        reps: 5,
        weight: 0
      },
      {
        name: "Press",
        reps: 5,
        weight: 0
      },
      {
        name: "Press",
        reps: 5,
        weight: 0
      }
    ]
  },
  {
    title: "Press AMRAP",
    exercises: [
      {
        name: "Press",
        reps: 0,
        weight: 0
      }
    ]
  }
];
function _page($$payload) {
  let workouts = workoutData;
  const each_array = ensure_array_like(workouts);
  $$payload.out += `<div class="m-3"><div class="flex flex-wrap justify-center"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let workout = each_array[$$index];
    Workout_card($$payload, { workout });
  }
  $$payload.out += `<!--]--></div></div>`;
}
export {
  _page as default
};
