import El from "../../utils/El";
import Logo from "../logo/logo";
import Hr from "../hr/hr";
import ButtonWithIcon from "../buttons/buttonWithIcon";
import Search from "../search/search";
import MenuMain from "../menu/MenuMain";
import OpenMainMenu from "../menu/OpenMainMenu";

export default function Navbar() {
  return El({
    element: "nav",
    className: "flex py-2  px-8  border-b border-b-stone-200 shadow-sm sticky top-0 z-[1000] bg-white",
    child: [
      El({
        element: "div",
        className: "flex  items-center gap-2  ",
        child: [
          Logo(),
          Hr(),
          ButtonWithIcon({
            classIcon1: "fa fa-map-marker",
            title: "تهران",
            classIcon2: "",
            classMore: "hover:text-slate-800 hover:bg-stone-100 ",
            functionButton:''
          }),
        ],
      }),
      El({
        element:'div',
        className:"flex justify-between w-full ",
        child:[El({
            element: "div",
            className: "flex items-center  gap-2  relative",
            child:[
              ButtonWithIcon({
                
                classIcon1: "",
                title: "دسته ها",
                classIcon2: "fa fa-angle-down",
                classMore: "hover:text-slate-800 hover:bg-stone-100 ",
                id:'btnMainMenu',
                functionButton:OpenMainMenu
               
              }),
              Search(),
              MenuMain()
            ],
          }),
          El({
            element: "div",
            className: "flex gap-2 ",
            child: [
              ButtonWithIcon({
                classIcon1: "fa fa-user-o",
                title: "دیوار من",
                classIcon2: "",
                classMore: "hover:text-slate-800 hover:bg-stone-100 ",
                functionButton:''
              }),
              ButtonWithIcon({
                classIcon1: "fa fa-comment-o",
                title: "چت",
                classIcon2: "",
                classMore: "hover:text-slate-800 hover:bg-stone-100 ",
                functionButton:''
              }),
              ButtonWithIcon({
                classIcon1: "",
                title: "پشتیبانی",
                classIcon2: "",
                classMore: "hover:bg-stone-100 hover:text-slate-800 ",
                functionButton:''
              }),
              ButtonWithIcon({
                title: "ثبت آگهی",
                classMore: "bg-red-700  hover:bg-red-500 text-white ",
                functionButton:''
              }),
            ],
          }),
    ]
      })
      
      // child:[TitleMenu(),search(),buttonWithIcon(),buttonWithIcon(),buttonText(),buttonWithBg()]
    ],
  });
}
