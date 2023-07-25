
import El from "../../utils/El";


export default function InputToggle({title}) {
    return(
        El({
            element:'div',
            className:'flex justify-between items-center',
            child:[
                El({
                    element:'label',
                    className:"text-sm",
                    child:title

                }),
                El({
                    element:'div',
                    className:'w-8 h-4 rounded-full bg-slate-500 ',
                    child:El({
                    element:'div',
                    className:'w-4 h-4 bg-white rounded-full',
                    })
                })

            ]
        })
       
    )
}