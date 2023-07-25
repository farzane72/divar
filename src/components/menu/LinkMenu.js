
import El from "../../utils/El";

export default function linkMenu({classIcon1='',title,classIcon2='',href='',classMore='',functionItem='',id=''}){
    return(
        El({
            element:"a",
            href:href,
            id:id,
            onclick(e){
            functionItem(e)
            },
            className:`flex justify-between   w-full items-center p-2 ${classMore}`,
            child:[
                El({
                    element:'div',
                    className:`flex items-center gap-2  `,
                    
                    child:[
                        El({
                            element:'i',
                            className:classIcon1,
                        }),
                        El({
                            element:'span',
                            className:"",
                            child:title
                        }),
                    ]
                }),
                El({
                    element:'i',
                    className:classIcon2,
                    
                    
                })
            ]
        })
    )
}