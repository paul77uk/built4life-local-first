import { V as ensure_array_like, W as store_get, X as attr, Y as escape_html, Z as unsubscribe_stores, T as pop, R as push } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
function Nav_bar($$payload) {
  $$payload.out += `<div class="flex items-center justify-center bg-black p-3"><a href="/" class="nav-logo text-2xl text-white sm:ms-0 sm:text-3xl lg:text-4xl">BUILT<span class="text-red-600">4</span>LIFE</a></div>`;
}
function Sub_nav($$payload, $$props) {
  push();
  var $$store_subs;
  const links = [
    { label: "Workouts", path: "/workouts" },
    { label: "My Workouts", path: "/my-workouts" },
    { label: "Programs", path: "/programs" },
    { label: "My Programs", path: "/my-programs" },
    { label: "History", path: "/history" }
  ];
  const each_array = ensure_array_like(links);
  $$payload.out += `<nav class="bg-[#333333]"><ul class="flex w-full flex-wrap justify-center px-2 text-xs font-semibold uppercase"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { label, path } = each_array[$$index];
    if (store_get($$store_subs ??= {}, "$page", page).url.pathname === path) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<a${attr("href", path)} class="h-full bg-[#DF0000] p-3 text-white">${escape_html(label)}</a>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<a${attr("href", path)} class="p-3 text-white hover:text-[#DF0000]">${escape_html(label)}</a>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></ul></nav>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  Nav_bar($$payload);
  $$payload.out += `<!----> `;
  Sub_nav($$payload);
  $$payload.out += `<!----> `;
  children($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _layout as default
};
