import El from "../../utils/El";
import linkMenu from "./linkMenu";

export default function SubMenu({title,classMore='', classMoreLi='',functionSubMenu,li1,li2,li3,li4,li5,li6,li7,li8,li9,li10 }){
    return(
        El({
            element:"ul",
            className:` ${classMore}`,
            
            child:[
                El({
                    element:'span',
                    className:'cursor-pointer  mb-2',
                    child: title,
                    onclick(e){
                        functionSubMenu(e)
                    }
                }),

             ((li1)?
                El({
                    element:'li',
                    className:"cursor-pointer ",
                    child:[
                        linkMenu({
                            title:li1,
                            classMore:`text-slate-400 hover:text-red-500 mt-2 ${classMoreLi}`
                        })
                    ]
                })
                :""),
                ((li2)?
                El({
                    element:'li',
                    className:"cursor-pointer ",
                    className:"",
                    child:[
                        linkMenu({
                            title:li2,
                            classMore:`text-slate-400 hover:text-red-500  ${classMoreLi}`
                        })
                    ]
                })
                :""),
                ((li3)?
                El({
                    element:'li',
                    className:"cursor-pointer",
                    className:"",
                    child:[
                        linkMenu({
                            title:li3,
                            classMore:`text-slate-400 hover:text-red-500  ${classMoreLi}`
                        })
                    ]
                })
                :""),
                ((li4)?
                El({
                    element:'li',
                    className:"cursor-pointer",
                    className:"",
                    child:[
                        linkMenu({
                            title:li4,
                            classMore:`text-slate-400 hover:text-red-500 ${classMoreLi}`
                        })
                    ]
                })
                :""),
                ((li5)?
                El({
                    element:'li',
                    className:"cursor-pointer",
                    className:"",
                    child:[
                        linkMenu({
                            title:li5,
                            classMore:`text-slate-400 hover:text-red-500 ${classMoreLi}`
                        })
                    ]
                })
                :""),
                ((li6)?
                El({
                    element:'li',
                    className:"cursor-pointer",
                    className:"",
                    child:[
                        linkMenu({
                            title:li6,
                            classMore:`text-slate-400 hover:text-red-500 ${classMoreLi}`
                        })
                    ]
                })
                :""),
                ((li7)?
                El({
                    element:'li',
                    className:"cursor-pointer",
                    className:"",
                    child:[
                        linkMenu({
                            title:li7,
                            classMore:`text-slate-400 hover:text-red-500 ${classMoreLi}`
                        })
                    ]
                })
                :""),
                ((li8)?
                El({
                    element:'li',
                    className:"cursor-pointer",
                    className:"",
                    child:[
                        linkMenu({
                            title:li8,
                            classMore:`text-slate-400 hover:text-red-500 ${classMoreLi}`
                        })
                    ]
                })
                :""),
                ((li9)?
                El({
                    element:'li',
                    className:"cursor-pointer",
                    className:"",
                    child:[
                        linkMenu({
                            title:li9,
                            classMore:`text-slate-400 hover:text-red-500 ${classMoreLi}`
                        })
                    ]
                })
                 :""),
                ((li10)?
                El({
                    element:'li',
                    className:"cursor-pointer",
                    className:"",
                    child:[
                        linkMenu({
                            title:li10,
                            classMore:`text-slate-400 hover:text-red-500 ${classMoreLi}`
                        })
                    ]
                })
                :""),
            ]


           
        })
    )
}