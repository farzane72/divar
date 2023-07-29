import El from "../utils/El"
import Home from "../pages/home/home"
import LoginPage from "../pages/login/login"
import NotFound from "../pages/notFound/NotFound"


export const Routes = () => {
    const routesEl = document.getElementById('routes') || El({element: 'div'})
    routesEl.innerHTML = ''
    console.log(routesEl)
    switch (location.pathname) {
        case '/':
            return routesEl.appendChild(Home())
        case '/login':
            return routesEl.appendChild(LoginPage())
        
        default:
            return routesEl.appendChild(NotFound())
    }
}