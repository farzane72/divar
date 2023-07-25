import El from "../../utils/El";
import MenuAside from "../menu/MenuAside";
import linkMenu from "../menu/linkMenu";
import Input from "../input/input";
import InputToggle from "../input/inputToggle";
import { openItemLocation,openItemPrice, openItemSituation} from "../menu/OpenMainMenu";
export default function Aside(){
    return(
        El({
            element:"div",
            className:"grid col-span-3 pr-4  fixed",
            child:[
                El({
                    element:'div',
                    className:'flex flex-col ',
                    child:MenuAside()
                }),
                El({
                    element:'div',
                    className:'flex flex-col',
                    child:[
                        El({
                            element:'div',
                            className:' p-2 border-b  ',
                            id:"",
                            child:[
                                linkMenu({
                                    classIcon1:'fa fa-angle-down icon-downLocation',
                                    title:'محل',
                                    functionItem:openItemLocation
                                }),
                                El({
                                    element:'div',
                                    className:'hidden  ',
                                    id:"input-location",
                                    child:
                                        Input({
                                    title1:'تعیین محل',
                                    classNameIcon:'fa fa-angle-left ' ,
                                    id:'',
                                    classMore1:'w-[280px] '
                                    }), 
                                })                              
                            ]
                        }),
                        El({
                            element:'div',
                            className:' p-2 border-b  pb-4 ',
                            id:"",
                            child:[
                                linkMenu({
                                    classIcon1:'fa fa-angle-down icon-downPrice',
                                    title:'قیمت',
                                    functionItem:openItemPrice
                                }),
                                El({
                                    element:'div',
                                    className:' hidden relative',
                                    id:"input-price",
                                    child:[
                                        El({
                                            element:'div',
                                            className:'flex gap-4 mb-4 items-center ',
                                            id:"",
                                            child:[
                                                El({
                                                    element:'span',
                                                    className:'text-sm ',
                                                    id:"",
                                                    child:'حداقل'
                                                }),
                                                Input({
                                                    title1:'مثلا 70,000,000',
                                                    title2:'تومان',
                                                    classNameIcon:'fa fa-angle-down ' ,
                                                    id:'',
                                                    classMore1:'w-[250px]'
                                                })
                                            ]
                                        }),
                                        El({
                                            element:'div',
                                            className:'flex gap-4 items-center',
                                            id:"",
                                            child:[
                                                El({
                                                    element:'span',
                                                    className:'text-sm',
                                                    id:"",
                                                    child:'حداکثر'
                                                }),
                                                Input({
                                                    title1:'مثلا 70,000,000',
                                                    title2:'تومان',
                                                    classNameIcon:'fa fa-angle-down ' ,
                                                    classMore1:'w-[250px] '
                                                }),
                                               

                                            ]
                                        }),
                                        El({
                                            element:'div',
                                            className:'flex flex-col absolute top-6 right-4 text-slate-400',
                                            child:[
                                                El({
                                                    element:'span',
                                                    className:'',
                                                    child:'.'
                                                }),
                                                El({
                                                    element:'span',
                                                    className:'-mt-4',
                                                    child:'.'
                                                }),
                                                El({
                                                    element:'span',
                                                    className:'-mt-4',
                                                    child:'.'
                                                }),
                                            ]

                                        })
                                    ]
                                })
                               
                                                             
                            ]
                        }),
                        El({
                            element:'div',
                            className:'p-2 border-b',
                            id:"",
                            child:[
                                linkMenu({
                                    classIcon1:'fa fa-angle-down icon-downSituation',
                                    title:'وضعیت آگهی',
                                    functionItem:openItemSituation
                                }),
                                El({
                                    element:'div',
                                    className:'flex flex-col gap-2 hidden',
                                    id:'input-situation',
                                    child:[
                                        InputToggle({
                                            title:'فقط عکس دار'
                                        }),
                                        InputToggle({
                                            title:'فقط فوری ها'                                        }),
                                    ]
                                }),
                            ]
                        }),
                    ]
                }),
                El({
                    element:'div',
                    className:' ',
                    child:[
                        El({
                            element:'div',
                            className:' grid grid-cols-3  justify-start  text-sm text-slate-400',
                            id:"",
                            child:[
                                linkMenu({
                                    title:'درباره دیوار',
                                    classMore:'text-sm  '
                                }),
                                linkMenu({
                                    title:'دریافت برنامه',
                                    classMore:'text-sm '
                                }),
                                linkMenu({
                                    title:'بلاگ دیوار',
                                    classMore:'text-sm '
                                }),
                                linkMenu({
                                    title:'کسب و کاراها',
                                    classMore:'text-sm '
                                }),
                                linkMenu({
                                    title:'پشتیبانی و قوانین',
                                    classMore:'text-sm w-[36px]'
                                }),
                            ]
                        }),
                        El({
                            element:'div',
                            className:'flex justify-center gap-8 mt-4 text-slate-500 mt-8',
                            id:"",
                            child:[
                                El({
                                    element:'i',
                                    className:"fa fa-twitter"
                                }),
                                El({
                                    element:'i',
                                    className:"fa fa-facebook"
                                }),
                                El({
                                    element:'i',
                                    className:"fa fa-google-plus-square"
                                }),
                                El({
                                    element:'i',
                                    className:"fa fa-share-square-o skew-y-3"
                                }),
                            ]
                        }),
                        El({
                            element:'div',
                            className:'flex justify-center gap-6 mt-8',
                            id:"",
                            child:[
                                El({
                                    element:'img',
                                    className:'w-[84px] h-[84px]',
                                    src:'././././images/e-1.png'
                                }),
                                El({
                                    element:'img',
                                    className:'w-[84px] h-[84px]',
                                    src:'././././images/e-2.png'
                                }),
                                El({
                                    element:'img',
                                    className:'w-[84px] h-[84px]',
                                    src:'././././images/e-3.png'
                                }),
                            ]
                        }),
                    ]
                }),
                
            ]
        })
    )
}