"use strict"

const btn = document.getElementsByClassName("btn-dark")[0]
const body = document.getElementsByTagName("body")[0]
const sun = document.getElementsByClassName("size-6")[0]
const navbar = document.getElementById("navbar")
const navbarMenu = document.getElementById("navbarMenu")
const card = document.getElementsByClassName("skill-card")
const list = document.getElementsByClassName("accordion-collapse")
const accbtn = document.getElementsByClassName("accordion-button")
const accbdy = document.getElementsByClassName("accordion-body")
const accitem = document.getElementsByClassName("accordion-item")

for (let i = 0; i < accbtn.length; i++) {
  accbtn[i].disabled = true;
}
let acctheme = "dark"
let theme = localStorage.getItem("colore")

btn.addEventListener("click", CambiaColore)


if (!theme || theme.length == 0) {
  btn.style.backgroundColor = ""
  body.style.backgroundColor = ""
  body.style.color = ""
  navbar.style.backgroundColor = ""
  navbarMenu.style.backgroundColor = ""
  sun.setAttribute("stroke", "black")
  sun.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />`
  for (const item of card)   { item.style.backgroundColor = "" }
  for (const item of accbtn) { item.style.backgroundColor = ""; item.style.color = "" }
  for (const item of accbdy) { item.style.backgroundColor = ""; item.style.color = "" }
} else {
  acctheme = "light"
  btn.style.backgroundColor = "black"
  body.style.backgroundColor = "#dadada"
  body.style.color = "#1a1a2e"
  navbar.style.backgroundColor = "#5e548e"
  navbarMenu.style.backgroundColor = "#5e548e"
  sun.setAttribute("stroke", "white")
  sun.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />`
  for (const item of card)   { item.style.backgroundColor = "white" }
  for (const item of accbtn) { item.style.backgroundColor = "white"; item.style.color = "#540089" }
  for (const item of accbdy) { item.style.backgroundColor = "white"; item.style.color = "#1a1a2e" }
}

function CambiaColore() {
  if (this.style.backgroundColor == "") {
    acctheme = "light"
    localStorage.setItem("colore", "light")
    btn.style.backgroundColor = "black"
    body.style.backgroundColor = "#dadada"
    body.style.color = "#1a1a2e"
    navbar.style.backgroundColor = "#5e548e"
    navbarMenu.style.backgroundColor = "#5e548e"
    sun.setAttribute("stroke", "white")
    sun.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />`
    for (const item of card)   { item.style.backgroundColor = "white" }
    for (const item of accbtn) { item.style.backgroundColor = "white"; item.style.color = "#540089" }
    for (const item of accbdy) { item.style.backgroundColor = "white"; item.style.color = "#1a1a2e" }
  } else {
    localStorage.removeItem("colore")
    btn.style.backgroundColor = ""
    body.style.backgroundColor = ""
    body.style.color = ""
    navbar.style.backgroundColor = ""
    navbarMenu.style.backgroundColor = ""
    sun.setAttribute("stroke", "black")
    sun.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />`
    for (const item of card)   { item.style.backgroundColor = "" }
    for (const item of accbtn) { item.style.backgroundColor = ""; item.style.color = "" }
    for (const item of accbdy) { item.style.backgroundColor = ""; item.style.color = "" }
  }
}

const cardData = {
  "cs":      { colore: "rgba(104, 3, 219, 0.5)",   titolo: "C#",                     testo: "Ho competenze nel linguaggio C# che si usa spesso per sviluppo di videogiochi in editor di giochi come Unity.<br>Console: ho competenze nello sviluppo di programmi console e creazione di giochi e gestione di matrici e vettori.<br>Visuale: ho competenze nello sviluppo di programmi in visuale e con la barra degli strumenti. Ho anche competenze con la gestione dei file." },
  "c":       { colore: "rgba(5, 164, 221, 0.5)",    titolo: "C",                     testo: "Ho competenze nel linguaggio C che è un linguaggio di basso livello usato per sistemi operativi.<br>Sono competente nello sviluppo di programmi console, gestione matrici e vettori, gestione file e l'utilizzo dei puntatori con strutture." },
  "sh":      { colore: "rgba(32, 252, 143, 0.5)",   titolo: "Bash",                  testo: "Ho competenze nel linguaggio Bash che è un linguaggio terminal che si usa spesso su sistemi operativi di tipo Unix come Linux. Ho competenze nella creazione di cartelle, file e comandi base di Bash." },
  "html":    { colore: "rgba(229, 88, 18, 0.5)",    titolo: "HTML",                  testo: "Ho competenze in HTML e nella creazione di siti web con attributi HTML e utilizzo di Bootstrap. Sono capace di utilizzare maggior parte degli attributi HTML combinati con quelli di Bootstrap" },
  "css":     { colore: "rgba(63, 167, 214, 0.5)",   titolo: "CSS",                   testo: "Ho competenze in CSS con lo sviluppo della parte grafica di siti web che possono essere fatti in HTML ma sono meglio se fatti in CSS." },
  "js":      { colore: "rgba(253, 231, 76, 0.5)",   titolo: "JavaScript",            testo: "Ho competenze in Javascript con lo sviluppo della parte interattiva di pagine web come questo sito e tanti altri. Sono competente nella creazione dinamica di tag HTML con la modifica di stili CSS. Sono competente con la gestione di localstorage, matrici, vettori e funzioni di diversi tipi." },
  "jv":      { colore: "rgba(221, 45, 74, 0.5)",    titolo: "Java",                  testo: "Ho competenze in Java per lo sviluppo di applicazioni console basiche. Sono competente con le matrici, vettori, dati input e output e l'utilizzo di Java Virtual Machine, JDK e JRE." },
  "ard":     { colore: "rgba(40, 175, 176, 0.5)",   titolo: "Arduino",               testo: "Ho competenze nello sviluppo di circuiti e programmi con Arduino e il linguaggio C dedicato per Arduino. So creare circuiti semplice e far comunicare fra di loro due Arduino diversi." },
  "tink":    { colore: "rgba(97, 208, 149, 0.5)",   titolo: "Tinkercad",             testo: "Ho competneze nello sviluppo e creazione di circuiti 2D su applicazioni come Tinkercad per una simulazione di circuiti futuri prima della loro creazione fisica." },
  "vscode":  { colore: "rgba(0, 122, 204, 0.5)",    titolo: "Visual Studio Code",    testo: "Ho competenze nell'utilizzo di software IDE come Visual Studio Code che uso principalmente per sviluppo di pagine web come questa e tante altri." },
  "vs":      { colore: "rgba(104, 33, 122, 0.5)",   titolo: "Visual Studio",         testo: "Ho competenze nell'utilizzo di software IDE come Visual Studio Community che uso principalmente per sviliuppo di programmi in linguaggi come C# console e visuale siccome C# è sviluppato dalla Microsoft proprio come Visual Studio." },
  "davinci": { colore: "rgba(255, 90, 50, 0.5)",    titolo: "DaVinci Resolve",       testo: "Ho competenze nell'utilizzo di software editing come Davinci Resolve dove edito video per il mio canale youtube personale il cui link trovate in fondo alla pagina per visualizzare dei miei video." },
}

const titoliDefault = [
  "C# — C — Bash",
  "HTML — CSS — JavaScript",
  "Java — Arduino — Tinkercad",
  "VSCode — Visual Studio — DaVinci Resolve"
]

for (let i = 0; i < accbtn.length; i++) {
  accbtn[i].textContent = titoliDefault[i];
}

let cardAperta = null;

function getAccordionIndex(id) {
  const gruppo1 = ["cs", "c", "sh"];
  const gruppo2 = ["html", "css", "js"];
  const gruppo3 = ["jv", "ard", "tink"];
  if (gruppo1.includes(id)) return 0;
  if (gruppo2.includes(id)) return 1;
  if (gruppo3.includes(id)) return 2;
  return 3;
}

function resetAccordion() {
  for (let i = 0; i < accitem.length; i++) {
    accitem[i].style.boxShadow = "";
    accitem[i].style.borderTop = "";
  }
  for (let i = 0; i < accbtn.length; i++) {
    accitem[i].style.color = "c9c9f0"
  }
}

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function() {
    const id = this.id;
    const dati = cardData[id];
    const accIndex = getAccordionIndex(id);
    const collapse = list[accIndex];
    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapse, { toggle: false });
    if (cardAperta === id) {
      bsCollapse.hide();
      resetAccordion();
      accbtn[accIndex].textContent = titoliDefault[accIndex];
      cardAperta = null;
      return;
    }

    function apri() {
      accbtn[accIndex].textContent = dati.titolo;
      accbdy[accIndex].innerHTML = dati.testo;
      resetAccordion();
      accbtn[accIndex].style.color = acctheme == "light" ? "#540089" : "c9c9f0";
      bsCollapse.show();
      cardAperta = id;
    }
    if (cardAperta !== null) {
      const oldIndex = getAccordionIndex(cardAperta);
      const oldCollapse = bootstrap.Collapse.getOrCreateInstance(list[oldIndex], { toggle: false });
      oldCollapse.hide();
      resetAccordion();
      accbtn[oldIndex].textContent = titoliDefault[oldIndex];
      cardAperta = null;
      setTimeout(apri, 370);
    } else {
      apri();
    }
  });
}

