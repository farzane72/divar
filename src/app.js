
import El from "./utils/El"
import Home from "./pages/home/home"
import { Routes } from "./routes/routes"



function App(){
    return (
        El({
            element:"div",
            className:"grid col-span-12 lg:col-start-4 lg:col-end-12  mt-8 px-4  ",
            child:[
                El({
                    element:'div',
                    className:'',
                    id:'routes',
                    child:[Routes()]
                })

            ]
        })
    )
}


 export default App



