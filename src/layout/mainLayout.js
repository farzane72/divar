import El from "../utils/El";
import Aside from "../components/aside/aside";
import Navbar from "../components/navbar/navbar";
import { closeMainMenu } from "../components/menu";
function MainLayout(child) {
  return El({
    element: "div",
    className: "",
    child: [
      Navbar(),

      El({
        element: "main",
        className: "relative grid grid-cols-12 z-10 ",
        child: [
          Aside(),
          child,
          El({
            element: "div",
            className:
              "absolute top-0 righ-0 bg-stone-300 z-10  w-full h-full opacity-50 hidden",
            id: "BgBody",
            onclick(e) {
              closeMainMenu(e);
            },
          }),
        ],
      }),
    ],
  });
}

export default MainLayout;
