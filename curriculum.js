"use strict"

const btn = document.getElementsByClassName("btn-dark")[0]
const body = document.getElementsByTagName("body")[0]
const sun = document.getElementsByClassName("size-6")[0]
const navbar = document.getElementById("navbar")
const title = document.getElementsByClassName("title")[0]

btn.addEventListener("click", CambiaColore)

let theme = localStorage.getItem("colore")

if(theme.length == 0){
    btn.style.backgroundColor = ""
    body.style.backgroundColor = ""
    navbar.style.backgroundColor = ""
    sun.setAttribute("stroke", "black")
    sun.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />`
    title.style.color = "white"
}
else{
    btn.style.backgroundColor = "black"
    body.style.backgroundColor = "#dadada"
    navbar.style.backgroundColor = "#5e548e"
    sun.setAttribute("stroke", "white")
    sun.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />`
    title.style.color = "black"
}

function CambiaColore(){
    if(this.style.backgroundColor == ""){
        localStorage.setItem("colore", "light")
        this.style.backgroundColor = "black"
        body.style.backgroundColor = "#dadada"
        navbar.style.backgroundColor = "#5e548e"
        sun.setAttribute("stroke", "white")
        sun.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />`
        title.style.color = "black"
    }
    else{
        localStorage.removeItem("colore")
        this.style.backgroundColor = ""
        body.style.backgroundColor = ""
        navbar.style.backgroundColor = ""
        sun.setAttribute("stroke", "black")
        sun.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />`
        title.style.color = ""
    }
}