import El from "../../utils/El";
import { handleSubmitForm } from "./handleSubmitForms";
export const Form =({child, handleSubmit,handleErrors,...rest})=>{
    return(
        El({
            element:'form',
            child:child,
            onsubmit: (e) => handleSubmitForm({ e, handleSubmit, handleErrors }),
            ...rest,
            

        })
    )
}
