
import El from "./utils/El"
import Home from "./pages/home/home"




function App(){
    return (
        El({
            element:"div",
            className:"grid col-start-4 col-end-12 mt-8 pl-8 ",
            child:[Home(),

            ]
        })
    )
}


 export default App



