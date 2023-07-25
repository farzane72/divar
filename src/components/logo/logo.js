
import El from "../../utils/El";

export default function Logo(){
    return(
        El({
            element:"a",
            className:"",
            href:"",
            child:El({
                element:'img',
                className:"w-20 h-12",
                src:'././././images/logo.svg'
            })
        })
    )
}