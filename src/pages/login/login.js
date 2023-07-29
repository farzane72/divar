//import AuthForm from "../../components/authForm/authForm";
import El from "../../utils/El";
import { AuthForm } from "../../components/authForm/authForm";


const LoginPage=()=>{
    return(
        El({
            element:'div',
            className:'w-[500px] mx-auto mt-[100px]  p-4 shadow rounded-md  ',
            child:AuthForm()

        })
    )

}


export default LoginPage;