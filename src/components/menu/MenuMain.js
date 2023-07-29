import El from "../../utils/El";
import linkMenu from "./linkMenu";
import SubMenu from "./SubMenu";
import { testMenu } from ".";

export default function MenuMain() {
  return El({
    element: "div",
    id: "menuMain",
    className:
      "lg:w-[800px] xl:w-[1200px] min-h-[500px] max-h-[520px] bg-white rounded flex  p-4 absolute top-14 right-4 z-20 hidden  ",
    child: [
      El({
        element: "div",
        className: " flex flex-col pl-4 border-l ",
        child: [
          El({
            element: "div",
            className:
              " w-[200px]  text-slate-400 hover:bg-stone-100 rounded mb-2",
            onclick(e) {
              e.preventDefault();
              let menuMain = document.querySelector("#menuMain");
              let idBgMain = document.getElementById("BgBody");
              menuMain.classList.add("hidden");
              idBgMain.classList.add("hidden");
            },
            child: linkMenu({
              classIcon1: "fa fa-angle-right",
              title: "همه آگهی ها",
              classIcon2: "",
              classMore: "border rounded",
              // id:'btnMainMenu'
            }),
          }),

          El({
            element: "div",
            className:
              " w-[200px]  text-slate-400 hover:bg-stone-100 rounded mb-2",
            id: "active-item",
            onmouseover(e) {
              e.preventDefault();
              testMenu();
              document.getElementById("menuAmlak").classList.toggle("hidden");
              // console.log(e.target)
            },
            child: [
              linkMenu({
                classIcon1: "fa fa-home",
                title: "املاک",
                classIcon2: "fa fa-angle-left",
              }),
              // El({
              //     element:"div",
              //     className:'absolute top-0 right-[210px]',
              //     id:'',
              //     child:[
              //         SubMenu({
              //         title:'فروش مسکونی',
              //         li1:'آپارتمان',
              //         li2:'زمین و ویلا',
              //         li3:'خانه کلنگی',
              //     }),
              //     SubMenu({
              //         title:'اجاره مسکونی',
              //         li1:'آپارتمان',
              //         li2:'خانه و  ویلا',
              //     }),

              // ]

              // })
            ],
          }),
          El({
            element: "div",
            className:
              " w-[200px]  text-slate-400 hover:bg-stone-100 rounded mb-2 item-menu",
            onmouseover(e) {
              e.preventDefault();
              testMenu();
              document.getElementById("menuKhodro").classList.toggle("hidden");
              // console.log(e.target)
            },
            child: linkMenu({
              classIcon1: "fa fa-car",
              title: "وسایل نقلیه",
              classIcon2: "fa fa-angle-left",
            }),
          }),
          El({
            element: "div",
            className:
              " w-[200px]  text-slate-400 hover:bg-stone-100 rounded mb-2 item-menu",
            onmouseover(e) {
              testMenu();
              e.preventDefault();
              document
                .getElementById("kalayeDigital")
                .classList.toggle("hidden");
            },
            child: linkMenu({
              classIcon1: "fa fa-mobile",
              title: "کالای دیجیتال",
              classIcon2: "fa fa-angle-left",
            }),
          }),
          El({
            element: "div",
            className:
              " w-[200px]  text-slate-400 hover:bg-stone-100 rounded mb-2 item-menu",
            onmouseover(e) {
              e.preventDefault();
              testMenu();
              document.getElementById("Ashpazkhane").classList.toggle("hidden");
            },
            child: linkMenu({
              classIcon1: "fa fa-cutlery ",
              title: "خانه و آشپزخانه",
              classIcon2: "fa fa-angle-left",
            }),
          }),
          El({
            element: "div",
            className:
              " w-[200px]  text-slate-400 hover:bg-stone-100 rounded mb-2 item-menu",
            onmouseover(e) {
              e.preventDefault();
              testMenu();
              document.getElementById("khadamat").classList.toggle("hidden");
            },
            child: linkMenu({
              classIcon1: "fa fa-wrench ",
              title: "خدمات",
              classIcon2: "fa fa-angle-left",
            }),
          }),
          El({
            element: "div",
            className:
              " w-[200px]  text-slate-400 hover:bg-stone-100 rounded mb-2 item-menu",
            onmouseover(e) {
              e.preventDefault();
              testMenu();
              document.getElementById("Tafrih").classList.toggle("hidden");
            },
            child: linkMenu({
              classIcon1: "fa fa-futbol-o",
              title: "تفریحات و سرگرمی",
              classIcon2: "fa fa-angle-left",
            }),
          }),
          El({
            element: "div",
            className:
              " w-[200px]  text-slate-400 hover:bg-stone-100 rounded mb-2",
            onmouseover(e) {
              e.preventDefault();
              testMenu();
              document.getElementById("Ejtemaii").classList.toggle("hidden");
            },

            child: linkMenu({
              classIcon1: "fa fa-users",
              title: "اجتماعی",
              classIcon2: "fa fa-angle-left",
            }),
          }),
        ],
      }),

      El({
        element: "div",
        className: "mr-2 flex  w-full  item-subMenu",
        id: "menuAmlak",
        child: [
          El({
            element: "div",
            className: "flex flex-col flex-wrap  h-full w-full overflow-auto",
            id: "",
            child: [
              SubMenu({
                title: "فروش مسکونی",
                li1: "آپارتمان",
                li2: "زمین و ویلا",
                li3: "خانه کلنگی",
              }),
              SubMenu({
                title: "اجاره مسکونی",
                li1: "آپارتمان",
                li2: "خانه و  ویلا",
              }),
              SubMenu({
                title: "فروش اداری و تجاری",
                li1: "دفتر کار،اتاق اداری و مطب",
                li2: "مغازه و غرفه",
                li3: "صنعتی،کشاورزی و تجاری",
              }),
              SubMenu({
                title: "اجاره اداری و تجاری",
                li1: "دفتر کار،اتاق اداری و مطب",
                li2: "مغازه و غرفه",
                li3: "صنعتی،کشاورزی و تجاری",
              }),
              SubMenu({
                title: "اجاره کوتاه مدت",
                li1: "آپارتمان و سوییت",
                li2: "ویلا و باغ",
                li3: "دفتر کاروفضای آموزشی",
              }),
            ],
          }),

          El({
            element: "div",
            className: "flex content-end items-end  relative ",
            child: [
              El({
                element: "div",
                className: "w-[280px] h-[200px] mb-16 ",
                child: [
                  El({
                    element: "img",
                    className: "w-full ",
                    src: "././././images/2.png",
                  }),
                  //})
                ],
              }),
              El({
                element: "div",
                className: "absolute top-[430px] right-16",
                hover() {},
                child: linkMenu({
                  title: "همه آگهی های املاک",
                  classMore: "border rounded text-slate-400",
                }),
              }),
            ],
          }),

          // }),
        ],
      }),

      El({
        element: "div",
        className: "mr-2 flex  w-full hidden item-subMenu",
        id: "menuKhodro",
        child: [
          El({
            element: "div",
            className: "flex flex-col flex-wrap  h-full w-full overflow-auto ",
            id: "",
            child: [
              SubMenu({
                title: "خودرو",
                li1: "سواری و وانت",
                li2: "کلاسیک",
                li3: "اجاره ای",
                li4: "سنگین",
              }),
              SubMenu({
                title: "موتور سیکلت",
              }),
              SubMenu({
                title: "قطعات یدکی و لوازم جانبی",
              }),
              SubMenu({
                title: "قایق و سایر وسایل نقلیه",
              }),
            ],
          }),

          El({
            element: "div",
            className: "flex content-end items-end  relative ",
            child: [
              El({
                element: "div",
                className: "w-[280px] h-[200px] mb-16 ",
                child: [
                  El({
                    element: "img",
                    className: "w-full ",
                    src: "././././images/2.png",
                  }),
                  //})
                ],
              }),
              El({
                element: "div",
                className: "absolute top-[430px] right-16",
                hover() {},
                child: linkMenu({
                  title: "همه آگهی های املاک",
                  classMore: "border rounded text-slate-400",
                }),
              }),
            ],
          }),

          // }),
        ],
      }),

      El({
        element: "div",
        className: "mr-2 flex  w-full hidden item-subMenu",
        id: "kalayeDigital",
        child: [
          El({
            element: "div",
            className: "flex flex-col flex-wrap  h-full w-full overflow-auto ",
            id: "",
            child: [
              SubMenu({
                title: "موبایل و تبلت",
                li1: "گوشی موبایل",
                li2: "تبلت",
                li3: "سیم کارت",
              }),
              SubMenu({
                title: "رایانه",
                li1: "رایانه همراه",
                li2: "رایانه رو میزی",
              }),
              SubMenu({
                title: "صوتی و تصویری",
                li1: "فیلم و موسیقی",
                li2: " دوربین عکاسی",
              }),
              SubMenu({
                title: "تلفن رو میزی",
              }),
            ],
          }),

          El({
            element: "div",
            className: "flex content-end items-end  relative ",
            child: [
              El({
                element: "div",
                className: "w-[280px] h-[200px] mb-16 ",
                child: [
                  El({
                    element: "img",
                    className: "w-full ",
                    src: "././././images/2.png",
                  }),
                  //})
                ],
              }),
              El({
                element: "div",
                className: "absolute top-[430px] right-16",
                hover() {},
                child: linkMenu({
                  title: "همه آگهی های املاک",
                  classMore: "border rounded text-slate-400",
                }),
              }),
            ],
          }),

          // }),
        ],
      }),
      El({
        element: "div",
        className: "mr-2 flex  w-full hidden item-subMenu",
        id: "Ashpazkhane",
        child: [
          El({
            element: "div",
            className: "flex flex-col flex-wrap  h-full w-full overflow-auto ",
            id: "",
            child: [
              SubMenu({
                title: "لوازم خانگی برقی",
                li1: "یخچال و فریزر",
                li2: "هود",
              }),
              SubMenu({
                title: "ظروف و لوازم آشپزخانه",
                li1: "سفره",
                li2: "قوری و کتری",
              }),
              SubMenu({
                title: "خوردنی و آشامیدنی",
              }),
              SubMenu({
                title: "خیاطی",
                li1: "چرخ خیاطی",
              }),
            ],
          }),

          El({
            element: "div",
            className: "flex content-end items-end  relative ",
            child: [
              El({
                element: "div",
                className: "w-[280px] h-[200px] mb-16 ",
                child: [
                  El({
                    element: "img",
                    className: "w-full ",
                    src: "././././images/2.png",
                  }),
                  //})
                ],
              }),
              El({
                element: "div",
                className: "absolute top-[430px] right-16",
                hover() {},
                child: linkMenu({
                  title: "همه آگهی های املاک",
                  classMore: "border rounded text-slate-400",
                }),
              }),
            ],
          }),

          // }),
        ],
      }),
      El({
        element: "div",
        className: "mr-2 flex  w-full hidden item-subMenu",
        id: "khadamat",
        child: [
          El({
            element: "div",
            className: "flex flex-col flex-wrap  h-full w-full overflow-auto ",
            id: "",
            child: [
              SubMenu({
                title: "موتور وماشین",
              }),
              SubMenu({
                title: "پذیرایی مراسم",
              }),
              SubMenu({
                title: "حمل و نقل",
              }),
            ],
          }),

          El({
            element: "div",
            className: "flex content-end items-end  relative ",
            child: [
              El({
                element: "div",
                className: "w-[280px] h-[200px] mb-16 ",
                child: [
                  El({
                    element: "img",
                    className: "w-full ",
                    src: "././././images/2.png",
                  }),
                  //})
                ],
              }),
              El({
                element: "div",
                className: "absolute top-[430px] right-16",
                hover() {},
                child: linkMenu({
                  title: "همه آگهی های املاک",
                  classMore: "border rounded text-slate-400",
                }),
              }),
            ],
          }),

          // }),
        ],
      }),

      El({
        element: "div",
        className: "mr-2 flex  w-full hidden item-subMenu",
        id: "Tafrih",
        child: [
          El({
            element: "div",
            className: "flex flex-col flex-wrap  h-full w-full overflow-auto",
            id: "",
            child: [
              SubMenu({
                title: "بلیط",
              }),
              SubMenu({
                title: "تور و چارتز",
              }),
              SubMenu({
                title: "کتاب و مجله",
              }),
            ],
          }),

          El({
            element: "div",
            className: "flex content-end items-end  relative ",
            child: [
              El({
                element: "div",
                className: "w-[280px] h-[200px] mb-16 ",
                child: [
                  El({
                    element: "img",
                    className: "w-full ",
                    src: "././././images/2.png",
                  }),
                  //})
                ],
              }),
              El({
                element: "div",
                className: "absolute top-[430px] right-16",
                hover() {},
                child: linkMenu({
                  title: "همه آگهی های املاک",
                  classMore: "border rounded text-slate-400",
                }),
              }),
            ],
          }),

          // }),
        ],
      }),

      El({
        element: "div",
        className: "mr-2 flex  w-full hidden item-subMenu overflow-auto",
        id: "Ejtemaii",
        child: [
          El({
            element: "div",
            className: "flex flex-col flex-wrap  h-full w-full ",
            id: "",
            child: [
              SubMenu({
                title: "رویداد",
              }),
              SubMenu({
                title: "داوطلبانه",
              }),
            ],
          }),

          El({
            element: "div",
            className: "flex content-end items-end  relative ",
            child: [
              El({
                element: "div",
                className: "w-[280px] h-[200px] mb-16 ",
                child: [
                  El({
                    element: "img",
                    className: "w-full ",
                    src: "././././images/2.png",
                  }),
                  //})
                ],
              }),
              El({
                element: "div",
                className: "absolute top-[430px] right-16",
                hover() {},
                child: linkMenu({
                  title: "همه آگهی های املاک",
                  classMore: "border rounded text-slate-400",
                }),
              }),
            ],
          }),

          // }),
        ],
      }),
    ],
  });
}
