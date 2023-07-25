import El from "../../utils/El";
import linkMenu from "./linkMenu";
import SubMenu from "./SubMenu";
import {OpenMenuAside,OpenSubMenuAside,CloseMenuAside} from "./OpenMainMenu";

export default function MenuAside() {
  return El({
    element: "div",
    className: " pb-8 text-slate-400 border-b",
    id: "",
    child: [
      linkMenu({
        title: " دسته ها",
        classMore:'text-sm text-slate-700'
      }),
      linkMenu({
        classIcon1: "fa fa-long-arrow-right",
        title: " همه آگهی ها",
        classMore:'',
        functionItem:CloseMenuAside
      }),

      linkMenu({
        classIcon1: "fa fa-home",
        title: "املاک",
        id:'item-menuAside',
        functionItem:OpenMenuAside
      }),
      El({
        element: "div",
        className: "hidden",
        id: "",
        child: [
          SubMenu({
            title: "فروش مسکونی",
            functionSubMenu:OpenSubMenuAside,
            li1: "آپارتمان",
            li2: "زمین و ویلا",
            li3: "خانه کلنگی",
            classMore:' mr-8 mb-2 text-slate-400 hover:text-slate-700',
            classMoreLi:'border-r mr-8 text-sm'
          }),
          SubMenu({
            title: "اجاره مسکونی",
            functionSubMenu:OpenSubMenuAside,
            li1: "آپارتمان",
            li2: "خانه و  ویلا",
            classMore:' mr-8 mb-2 text-slate-400 hover:text-slate-700',
            classMoreLi:'border-r mr-8 text-sm'
          }),
          SubMenu({
            title: "فروش اداری و تجاری",
            functionSubMenu:OpenSubMenuAside,
            li1: "دفتر کار،اتاق اداری و مطب",
            li2: "مغازه و غرفه",
            li3: "صنعتی،کشاورزی و تجاری",
            classMore:' mr-8 mb-2 text-slate-400 hover:text-slate-700',
            classMoreLi:'border-r mr-8 text-sm'
          }),
          SubMenu({
            title: "اجاره اداری و تجاری",
            functionSubMenu:OpenSubMenuAside,
            li1: "دفتر کار،اتاق اداری و مطب",
            li2: "مغازه و غرفه",
            li3: "صنعتی،کشاورزی و تجاری",
            classMore:'  mr-8  mb-2 text-slate-400 hover:text-slate-700',
            classMoreLi:'border-r mr-8 text-sm'
          }),
          SubMenu({
            title: "اجاره کوتاه مدت",
            functionSubMenu:OpenSubMenuAside,
            li1: "آپارتمان و سوییت",
            li2: "ویلا و باغ",
            li3: "دفتر کاروفضای آموزشی",
            classMore:'  mr-8  mb-2 text-slate-400 hover:text-slate-700',
            classMoreLi:'border-r mr-8 text-sm'
          }),
        ],
      }),

      linkMenu({
        classIcon1: " fa fa-car",
        title: "وسایل نقلیه",
        id:'item-menuAside',
        functionItem:OpenMenuAside

      }),
      El({
        element: "div",
        className: "hidden",
        id: "",
        child: [
          SubMenu({
            title: "خودرو",
            functionSubMenu:OpenSubMenuAside,
            li1: "سواری و وانت",
            li2: "کلاسیک",
            li3: "اجاره ای",
            classMore:' mr-8 mb-2 text-slate-400 hover:text-slate-700',
            classMoreLi:'border-r mr-8 text-sm'
          }),
          SubMenu({
            title: "موتور سیکت",
            functionSubMenu:OpenSubMenuAside,
            li1: "موتور خارجی",
            
            classMore:' mr-8 mb-2 text-slate-400 hover:text-slate-700',
            classMoreLi:'border-r mr-8 text-sm'
          }),
          SubMenu({
            title: "قطعات یدکی",
            functionSubMenu:OpenSubMenuAside,
            classMore:' mr-8 mb-2 text-slate-400 hover:text-slate-700',
           // classMoreLi:'border-r mr-8'
          }),
          SubMenu({
            title: "قایق و سایر وسایل نقلیه",
            functionSubMenu:OpenSubMenuAside,
            classMore:' mr-8 mb-2 text-slate-400 hover:text-slate-700',
          //  classMoreLi:'border-r mr-8'
          }),
        ],
      }),

      linkMenu({
        classIcon1: "fa fa-mobile",
        title: "کالای دیجیتال",
        id:'item-menuAside',
        functionItem:OpenMenuAside
      }),
      El({
        element: "div",
        className: "hidden",
        id: "",
        child: [
          SubMenu({
            title: "موبایل و تبلت",
            functionSubMenu:OpenSubMenuAside,
            li1: "گوشی موبایل",
            li2: "تبلت",
            li3: "سیم کارت",
            classMore:' mr-8 mb-2 text-slate-400 hover:text-slate-700',
            classMoreLi:'border-r mr-8 text-sm'
          }),
          SubMenu({
            title: "رایانه",
            functionSubMenu:OpenSubMenuAside,
            li1: "رایانه همراه",
            li2: "رایانه رو میزی",
            classMore:' mr-8 mb-2 text-slate-400 hover:text-slate-700',
            classMoreLi:'border-r mr-8 text-sm'
          }),
          SubMenu({
            title: "صوتی و تصویری",
            functionSubMenu:OpenSubMenuAside,
            li1: "فیلم و موسیقی",
            li2: " دوربین عکاسی",
            classMore:' mr-8 mb-2 text-slate-400 hover:text-slate-700',
            classMoreLi:'border-r mr-8 text-sm'
          }),
          SubMenu({
           title:"تلفن رو میزی",
           functionSubMenu:OpenSubMenuAside,
           classMore:' mr-8 mb-2 text-slate-400 hover:text-slate-700',
           classMoreLi:'border-r mr-8 text-sm'
          }),
         
        ],
      }),

      linkMenu({
        classIcon1: "fa fa-cutlery ",
        title: "خانه و آشپزخانه",
        id:'item-menuAside',
        functionItem:OpenMenuAside
      }),
      El({
        element: "div",
        className: "hidden",
        id: "",
        child: [
          SubMenu({
            title: "لوازم خانگی برقی",
            functionSubMenu:OpenSubMenuAside,
            li1: "یخچال و فریزر",
            li2: "هود",
            classMore:' mr-8 mb-2 text-slate-400 hover:text-slate-700',
            classMoreLi:'border-r mr-8 text-sm'
          }),
          SubMenu({
            title: "ظروف و لوازم آشپزخانه",
            functionSubMenu:OpenSubMenuAside,
            li1: "سفره",
            li2: "قوری و کتری",
            classMore:' mr-8 mb-2 text-slate-400 hover:text-slate-700',
            classMoreLi:'border-r mr-8 text-sm'
          }),
          SubMenu({
            title: "خوردنی و آشامیدنی",
            functionSubMenu:OpenSubMenuAside,
            classMore:' mr-8 mb-2 text-slate-400 hover:text-slate-700',
            classMoreLi:'border-r mr-8 text-sm'
          }),
          SubMenu({
            title: "خیاطی",
            functionSubMenu:OpenSubMenuAside,
            li1:"چرخ خیاطی",
            classMore:' mr-8 mb-2 text-slate-400 hover:text-slate-700',
            classMoreLi:'border-r mr-8 text-sm'
          }),
        ],
      }),

      linkMenu({
        classIcon1: "fa fa-wrench ",
        title: "خدمات",
        id:'item-menuAside',
        functionItem:OpenMenuAside
      }),
      El({
        element: "div",
        className: "hidden",
        id: "",
        child: [
          SubMenu({
            title: "موتور وماشین",
            functionSubMenu:OpenSubMenuAside,
            classMore:' mr-8 mb-2 text-slate-400 hover:text-slate-700',
           // classMoreLi:'border-r mr-8'
          }),
          SubMenu({
            title: "پذیرایی مراسم",
            functionSubMenu:OpenSubMenuAside,
            classMore:' mr-8 mb-2 text-slate-400 hover:text-slate-700',
          //  classMoreLi:'border-r mr-8'
          }),
          SubMenu({
            title: "حمل و نقل",
            functionSubMenu:OpenSubMenuAside,
            classMore:' mr-8 mb-2 text-slate-400 hover:text-slate-700',
           // classMoreLi:'border-r mr-8'
           
          }),
        ],
      }),

      linkMenu({
        classIcon1: "fa fa-futbol-o",
        title: "تفریحات و سرگرمی",
        id:'item-menuAside',
        functionItem:OpenMenuAside,

      }),
      El({
        element: "div",
        className: "hidden",
        id: "",
        child: [
          SubMenu({
            title: "بلیط",
            functionSubMenu:OpenSubMenuAside,
            classMore:' mr-8 mb-2 text-slate-400 hover:text-slate-700',
           // classMoreLi:'border-r mr-8'
          }),
          SubMenu({
            title: "تور و چارتز",
            functionSubMenu:OpenSubMenuAside,
            classMore:' mr-8 mb-2 text-slate-400 hover:text-slate-700',
           // classMoreLi:'border-r mr-8'
          }),
          SubMenu({
            title: "کتاب و مجله",
            functionSubMenu:OpenSubMenuAside,
            classMore:' mr-8 mb-2 text-slate-400 hover:text-slate-700',
            //classMoreLi:'border-r mr-8'
           
          }),
        ],
      }),
    ],
  });
}
