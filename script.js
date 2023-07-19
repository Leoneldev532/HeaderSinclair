const closephone  = document.querySelector("#closephone"); // le lien 
const aligntxt  = document.querySelector("#aligntxt"); // align justify 
const phone  = document.querySelector(".phone"); // blog entier
const closeicon  = document.querySelector("#closeicon"); // fermer icon

const descendre  = document.querySelector("#descendre"); 
const listeelem  = document.querySelector("#listeelem"); 

const descendre1  = document.querySelector("#descendre1"); 
const listeelem1  = document.querySelector("#listeelem1"); 

const linkCompa  = document.querySelector(".linkCompa"); 
const headerdesk  = document.querySelector(".headerdesk"); 
const getStarted  = document.querySelector("#getStarted"); 


closephone.addEventListener("click",()=>{
    if(!aligntxt.classList.contains("hidden")){ 

        phone.classList.add("flex")
        phone.classList.remove("hidden")

        aligntxt.classList.add("hidden")
        aligntxt.classList.remove("flex")
        
        closeicon.classList.add("flex")
        closeicon.classList.remove("hidden")
 
}else{
    phone.classList.remove("flex")
    phone.classList.add("hidden")

    aligntxt.classList.add("flex")
    aligntxt.classList.remove("hidden")
    
    closeicon.classList.add("hidden")
    closeicon.classList.remove("flex")
}
})


descendre.addEventListener("click",()=>{
    if(!listeelem.classList.contains("hidden")){
        listeelem.classList.add("hidden")
        listeelem.classList.remove("flex")
    }else{
        listeelem.classList.add("flex")
        listeelem.classList.remove("hidden")
    }

}, )

descendre1.addEventListener("click",()=>{
    if(!listeelem1.classList.contains("hidden")){
        listeelem1.classList.add("hidden")
        listeelem1.classList.remove("flex")
    }else{
        listeelem1.classList.add("flex")
        listeelem1.classList.remove("hidden")
    }

}, )

window.addEventListener("scroll",()=>{
    if(window.scrollY > 100 ){
        headerdesk.classList.add("border-gray-200","border","border-neutral-200/50","bg-white")
        getStarted.classList.remove("hidden","opacity-0")
        getStarted.classList.add("flex","opacity-1")
    }else{
        
        headerdesk.classList.remove("border-gray-200","border","border-neutral-200/50","bg-white")
        getStarted.classList.add("hidden","opacity-0")
        getStarted.classList.remove("flex","opacity-1")
    }
})