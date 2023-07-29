import El from "../../utils/El";
import Svg from "../svg/svg";
import MenuMain from "../menu/MenuMain";

export default function ButtonWithIcon({classIcon1,title,classIcon2,classMore, functionButton,id,idButton}){
    return(
        El({
            element:"button",
            className:"px-2 py-2 flex items-center gap-2 text-slate-400   rounded "+ classMore ,
            id:idButton,
            onclick (e){
                functionButton(e)
               
               console.log("kar mikonam")
              },
           //onclick():functionButton(),
            //onclick() {
                // const drawer = document.getElementById("drawer")
                // drawer.classList.add("translate-x-full")
                // drawer.classList.remove("translate-x-0")
           // },
            child:[El({
                element:'i',
                className:classIcon1,
               
            }),
            El({
                element:'span',
                className:'',
                child:title
            }),
            El({
                element:'i',
                className:classIcon2,
                id:id
            }),
        ]
           
        })
    )
}



