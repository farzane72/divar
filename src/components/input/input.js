import El from "../../utils/El";

export default function Input({title1,title2="",classNameIcon,classMore1='',classMore2='',id=''}){
    return(
        El({
            element:'div',
            className:`border p-2 rounded  relative  ${classMore1} `,
            id:id,
            child:[
                El({
                    element:'input',
                    className:'placeholder:text-sm',
                    placeholder:title1,
                }),
                El({
                    element:'div',
                    className:`flex gap-2  items-center absolute left-2 top-3 text-slate-400 ${classMore2}`,
                    child:[
                        El({
                            element:'span',
                            className:'text-sm',
                            child:title2,

                        }),
                        El({
                            element:'i',
                            className:classNameIcon,
                        }),
                    ]
                })
            ]
        })
    )
}