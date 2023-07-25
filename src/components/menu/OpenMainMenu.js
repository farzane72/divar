import El from "../../utils/El";
import MenuMain from "./MenuMain";

export default function OpenMainMenu(e){
    
   // e.preventDefault()
   // e.stopPropagation()

    let menuMain = document.getElementById('menuMain')
    let idBgMain=document.getElementById('BgBody')
    let activeItem=document.getElementById('active-item')
    let btnMainMenu=document.getElementById('btnMainMenu')

        menuMain.classList.toggle("hidden");
        idBgMain.classList.toggle("hidden");  
        activeItem.classList.add('bg-stone-100')
        btnMainMenu.classList.add('duration-700')
        btnMainMenu.classList.toggle('rotate-180')
}
export function closeMainMenu(e){
    e.preventDefault()
    let menuMain = document.getElementById('menuMain')
    let idBgMain=document.getElementById('BgBody')
    menuMain.classList.add("hidden");
    idBgMain.classList.add("hidden");  
}

 export  function testMenu(){

    let liMenu=document.querySelectorAll('.item-subMenu')
    let activeItem=document.getElementById('active-item')
    activeItem.classList.remove('bg-stone-100')
    //console.log(liMenu)
    for(let i=0;i<liMenu.length;i++){
        liMenu[i].classList.add('hidden')
    }
}


export function OpenMenuAside(e){
    e.preventDefault()
    e.stopPropagation()
//console.log(e.target)
//id:'item-menuAside',
let liMenuAside=document.querySelectorAll('#item-menuAside')
let test=e.target.parentElement.parentElement
let test2=test.nextElementSibling
//-test 3 baraye menu sath 2
let test3=test.nextElementSibling.children
//console.log(liMenuAside)
//----------hide menu sath 1------item haye menu asli amlak o khodro ... 
for(let j=0;j<liMenuAside.length;j++){
    liMenuAside[j].classList.add('hidden')

}
//----------hide menu sath 2- & sath 3-- ul o li ha ------------------
for(let i=0;i<test3.length;i++){
    test3[i].classList.add('hidden')
    for(let k=0;k<test3[i].children.length;k++){
        test3[i].children[k].classList.add('hidden')
    }

}

//----------------------------------------------
test.classList.remove('hidden')
test.classList.add('text-slate-700')

test2.classList.remove('hidden')
for(let i=0;i<test3.length;i++){
    test3[i].classList.remove('hidden')
    test3[i].firstElementChild.classList.remove('hidden')

}
test3[0].firstElementChild.classList.add('text-slate-700')
}
export function OpenSubMenuAside(e){
    e.preventDefault()
   
    let test=e.target.parentElement
    console.log(test)
    test.classList.add('text-slate-700')
    //-----------------------------------------------------------------
    for(let j=0;j<test.parentElement.children.length;j++){
        test.parentElement.children[j].classList.add('hidden')
    
    }

    test.classList.remove('hidden')
    for(let k=0;k<test.children.length;k++){
        test.children[k].classList.remove('hidden')
    }
    test.children[0].classList.add('text-slate-700')
   

}

export function CloseMenuAside(e){
    let liMenuAside=document.querySelectorAll('#item-menuAside')
    for(let j=0;j<liMenuAside.length;j++){
        liMenuAside[j].classList.remove('hidden')
    
    }
}
export function openItemLocation(e){
    e.preventDefault()
    let itemMahal=document.getElementById('input-location')
    let iconMahal=document.querySelector('.icon-downLocation')
    itemMahal.classList.toggle('hidden')
    iconMahal.classList.add('duration500')
    iconMahal.classList.toggle('rotate-180')
}
export function openItemPrice(e){
    e.preventDefault()
    let itemPrice=document.getElementById('input-price')
    let iconPrice=document.querySelector('.icon-downPrice')
    itemPrice.classList.toggle('hidden')
    iconPrice.classList.add('duration500')
    iconPrice.classList.toggle('rotate-180')
}
export function openItemSituation(e){
    e.preventDefault()
    let itemSituation=document.getElementById('input-situation')
    let iconSituation=document.querySelector('.icon-downSituation')
    itemSituation.classList.toggle('hidden')
    iconSituation.classList.add('duration500')
    iconSituation.classList.toggle('rotate-180')
}
