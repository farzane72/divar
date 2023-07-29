
//import El from "../../utils/El";
import El from "../../utils/El";

export const TextField=({label,helperText,...inputProps})=>{
    return(
        El({
            element:'div',
            className:'flex text-grey-600 flex-col px-1',
            child:[
                El({
                    element:'label',
                    className:'text-sm mb-1 px-1',
                    child:label
                }),
                El({
                    element:'input',
                    className:'px-1 py-3 outline-none rounded-md border',
                    ...inputProps,
                }),
                El({
                    element:'p',
                    className:'text-xs flex gap-1 px-1',
                    child:helperText,
                }),
            ]
        })
    )
}