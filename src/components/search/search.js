import El from "../../utils/El";

export default function Search() {
  return El({
    element: "div",
    className: "relative flex-1 w-[400px] hidden md:block",
    child: [
      El({
        element: "input",
        className:" p-2 rounded w-full placeholder:text-slate-400 outline-0 placeholder:pr-6 bg-stone-100 placeholder:text-xs  ",
        placeholder: "جستجو در همه آگهی ها",
      }),
      El({
        element: "span",
        className: "text-slate-400  absolute top-2 right-0 pr-2   ",
        child: El({
          element: "i",
          className: "fa fa-search",
          // ariaHidden:"true"
        }),
      }),
    ],
  });
}
