import "./src/styles/style.css"

import App from "./src/app"
import MainLayout from "./src/layout/mainlayout"

const root=document.getElementById("app")

root.append(MainLayout(App()))


// const root=document.getElementById("app")
//  root.innerHTML="hiiiiiiii"
// root.classList.add("bg-blue-500")
