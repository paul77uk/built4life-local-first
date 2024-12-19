import { _ as spread_attributes, $ as bind_props, T as pop, R as push, Y as escape_html, W as store_get, V as ensure_array_like, Z as unsubscribe_stores } from "./index.js";
import { g as goto } from "./client.js";
import { p as page } from "./stores.js";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import Dexie from "dexie";
const db = new Dexie("built4lifedb");
db.version(1).stores({
  workouts: "++id, title",
  exercises: "++id, name, reps, weight, workoutId"
});
navigator.storage.persist();
const isPersisted = async () => {
  if (navigator.storage && navigator.storage.persist) {
    const isPersisted2 = await navigator.storage.persist();
    console.log(`Persisted storage granted: ${isPersisted2}`);
  }
};
isPersisted();
const addWorkout = async (title) => {
  const workoutId = await db.workouts.add({
    title
  });
  return workoutId;
};
const getWorkouts = async () => {
  return await db.workouts.toArray();
};
const deleteWorkoutById = async (id) => {
  await db.workouts.delete(id);
};
let workouts = [];
const saveWorkout = async (title) => {
  const workout = await addWorkout(title);
  getAllWorkouts();
  return workout;
};
const getAllWorkouts = async () => {
  workouts = await getWorkouts();
};
const deleteWorkout = async (id) => {
  await deleteWorkoutById(id);
  getAllWorkouts();
};
const workoutStore = () => {
  return { workouts };
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = tv({
  base: "focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
      outline: "border-input bg-background hover:bg-accent hover:text-accent-foreground border shadow-sm",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9"
    }
  },
  defaultVariants: { variant: "default", size: "default" }
});
function Button($$payload, $$props) {
  push();
  let {
    class: className,
    variant = "default",
    size = "default",
    ref = null,
    href = void 0,
    type = "button",
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({
      class: cn(buttonVariants({ variant, size, className })),
      href,
      ...restProps
    })}>`;
    children?.($$payload);
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button${spread_attributes({
      class: cn(buttonVariants({ variant, size, className })),
      type,
      ...restProps
    })}>`;
    children?.($$payload);
    $$payload.out += `<!----></button>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { ref });
  pop();
}
function Card($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<div${spread_attributes({
    class: cn("bg-card text-card-foreground rounded-xl border shadow", className),
    ...restProps
  })}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ref });
  pop();
}
function Card_content($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<div${spread_attributes({ class: cn("p-6", className), ...restProps })}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ref });
  pop();
}
function Card_footer($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<div${spread_attributes({
    class: cn("flex items-center p-6 pt-0", className),
    ...restProps
  })}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ref });
  pop();
}
function Card_header($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<div${spread_attributes({
    class: cn("flex flex-col space-y-1.5 p-6 pb-0", className),
    ...restProps
  })}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ref });
  pop();
}
function Card_title($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    level = 3,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<div${spread_attributes({
    role: "heading",
    "aria-level": level,
    class: cn("font-semibold leading-none tracking-tight", className),
    ...restProps
  })}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ref });
  pop();
}
const addExercise = async (name, reps, weight, workoutId) => {
  await db.exercises.add({
    name,
    reps,
    weight,
    workoutId
  });
};
const getExercisesByWorkoutId = async (workoutId) => {
  return await db.exercises.where("workoutId").equals(workoutId).toArray();
};
const saveExercise = async (name, reps, weight, workoutId) => {
  await addExercise(name, reps, weight, workoutId);
  getExercises(workoutId);
};
const saveExercises = async (exercises2, workoutId) => {
  exercises2.forEach(async (exercise) => {
    await saveExercise(exercise.name, exercise.reps, exercise.weight, workoutId);
  });
  getExercises(workoutId);
};
const getExercises = async (workoutId) => {
  await getExercisesByWorkoutId(workoutId);
};
function Workout_card($$payload, $$props) {
  push();
  var $$store_subs;
  let { workout } = $$props;
  let exercises = [];
  $$payload.out += `<!---->`;
  Card($$payload, {
    class: "m-3 flex w-[300px] flex-col px-5",
    children: ($$payload2) => {
      $$payload2.out += `<!---->`;
      Card_header($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          Card_title($$payload3, {
            class: "mx-auto text-center",
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(workout.title)}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <div class="flex h-full flex-col"><!---->`;
      Card_content($$payload2, {
        class: "mx-auto",
        children: ($$payload3) => {
          if (workout.exercises && store_get($$store_subs ??= {}, "$page", page).url.pathname === "/workouts") {
            $$payload3.out += "<!--[-->";
            const each_array = ensure_array_like(workout.exercises);
            $$payload3.out += `<!--[-->`;
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let exercise = each_array[$$index];
              $$payload3.out += `<p>${escape_html(exercise.reps)} ${escape_html(exercise.name)} (${escape_html(exercise.weight)}kg)</p>`;
            }
            $$payload3.out += `<!--]-->`;
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]--> `;
          if (store_get($$store_subs ??= {}, "$page", page).url.pathname === "/my-workouts") {
            $$payload3.out += "<!--[-->";
            const each_array_1 = ensure_array_like(exercises);
            $$payload3.out += `<!--[-->`;
            for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
              let exercise = each_array_1[$$index_1];
              $$payload3.out += `<p>${escape_html(exercise.reps)} ${escape_html(exercise.name)} (${escape_html(exercise.weight)}kg)</p>`;
            }
            $$payload3.out += `<!--]-->`;
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <!---->`;
      Card_footer($$payload2, {
        class: "mx-auto flex-grow items-end",
        children: ($$payload3) => {
          if (store_get($$store_subs ??= {}, "$page", page).url.pathname === "/workouts") {
            $$payload3.out += "<!--[-->";
            Button($$payload3, {
              onclick: async () => {
                const workoutId = await saveWorkout(workout.title);
                if (workout.exercises && workoutId) {
                  saveExercises(workout.exercises, workoutId);
                }
                goto();
              },
              variant: "outline",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Add to my workouts`;
              },
              $$slots: { default: true }
            });
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]--> `;
          if (store_get($$store_subs ??= {}, "$page", page).url.pathname === "/my-workouts") {
            $$payload3.out += "<!--[-->";
            Button($$payload3, {
              onclick: () => {
                if (workout.id) {
                  deleteWorkout(workout.id);
                }
              },
              variant: "outline",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Delete workout`;
              },
              $$slots: { default: true }
            });
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  Workout_card as W,
  workoutStore as w
};
