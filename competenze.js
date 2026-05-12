"use strict"

const btn = document.getElementsByClassName("btn-dark")[0]
const body = document.getElementsByTagName("body")[0]
const sun = document.getElementsByClassName("size-6")[0]
const navbar = document.getElementById("navbar")
const card = document.getElementsByClassName("skill-card")
const list = document.getElementsByClassName("accordion-collapse")
const accbtn = document.getElementsByClassName("accordion-button")
const accbdy = document.getElementsByClassName("accordion-body")
const accitem = document.getElementsByClassName("accordion-item")

// Disabilita i bottoni accordion (non cliccabili direttamente)
for (let i = 0; i < accbtn.length; i++) {
  accbtn[i].disabled = true;
}

// Contenuto e colori per ogni card
const cardData = {
  "cs":      { colore: "rgba(104, 3, 219, 0.5)",   titolo: "C#",                    testo: "<strong>C#</strong> è un linguaggio orientato agli oggetti sviluppato da Microsoft. Lo uso per creare applicazioni desktop, script di automazione e piccoli programmi .NET." },
  "c":       { colore: "rgba(5, 164, 221, 0.5)",    titolo: "C",                     testo: "<strong>C</strong> è un linguaggio di basso livello, vicino all'hardware. Lo uso per capire come funziona la memoria, i puntatori e la gestione delle risorse." },
  "sh":      { colore: "rgba(32, 252, 143, 0.5)",   titolo: "Bash",                  testo: "<strong>Bash</strong> è il linguaggio degli script su Linux/Unix. Lo uso per automatizzare operazioni, gestire file e lavorare dal terminale." },
  "html":    { colore: "rgba(229, 88, 18, 0.5)",    titolo: "HTML",                  testo: "<strong>HTML5</strong> è la struttura di ogni pagina web. Lo uso per creare layout semantici, accessibili e ben organizzati." },
  "css":     { colore: "rgba(63, 167, 214, 0.5)",   titolo: "CSS",                   testo: "<strong>CSS3</strong> è lo stile delle pagine web. Lo uso per animazioni, Flexbox, Grid e per rendere i siti belli e responsivi." },
  "js":      { colore: "rgba(253, 231, 76, 0.5)",   titolo: "JavaScript",            testo: "<strong>JavaScript</strong> rende le pagine web interattive. Lo uso per manipolare il DOM, gestire eventi e costruire logica frontend." },
  "jv":      { colore: "rgba(221, 45, 74, 0.5)",    titolo: "Java",                  testo: "<strong>Java</strong> è un linguaggio orientato agli oggetti molto diffuso. Lo studio per capire l'OOP, le classi e la programmazione strutturata." },
  "ard":     { colore: "rgba(40, 175, 176, 0.5)",   titolo: "Arduino",               testo: "<strong>Arduino</strong> è una piattaforma per l'elettronica. La uso per programmare microcontrollori in C++ e creare progetti hardware reali." },
  "tink":    { colore: "rgba(97, 208, 149, 0.5)",   titolo: "Tinkercad",             testo: "<strong>Tinkercad</strong> è uno strumento online per modellazione 3D e simulazione circuiti. Lo uso per progettare prima di costruire fisicamente." },
  "vscode":  { colore: "rgba(0, 122, 204, 0.5)",    titolo: "Visual Studio Code",    testo: "<strong>Visual Studio Code</strong> è il mio editor principale. Lo uso ogni giorno per scrivere HTML, CSS, JavaScript e molto altro, con estensioni che lo rendono potentissimo." },
  "vs":      { colore: "rgba(104, 33, 122, 0.5)",   titolo: "Visual Studio",         testo: "<strong>Visual Studio Community</strong> è l'IDE completo di Microsoft. Lo uso per i progetti in C# e C++, dove ho bisogno di un ambiente più strutturato con debugger avanzato." },
  "davinci": { colore: "rgba(255, 90, 50, 0.5)",    titolo: "DaVinci Resolve",       testo: "<strong>DaVinci Resolve</strong> è un software professionale per il montaggio video. Lo uso per tagliare, colorare e mixare i miei video, sfruttando soprattutto la color correction." },
}

// Titoli di default per ogni accordion (uno per gruppo)
const titoliDefault = [
  "C# — C — Bash",
  "HTML — CSS — JavaScript",
  "Java — Arduino — Tinkercad",
  "VSCode — Visual Studio — DaVinci Resolve"
]

// Imposta i titoli di default all'avvio
for (let i = 0; i < accbtn.length; i++) {
  accbtn[i].textContent = titoliDefault[i];
}

// Tiene traccia di quale card è aperta
let cardAperta = null;

// Mappa card → indice accordion
function getAccordionIndex(id) {
  const gruppo1 = ["cs", "c", "sh"];
  const gruppo2 = ["html", "css", "js"];
  const gruppo3 = ["jv", "ard", "tink"];
  if (gruppo1.includes(id)) return 0;
  if (gruppo2.includes(id)) return 1;
  if (gruppo3.includes(id)) return 2;
  return 3;
}

// Resetta lo stile di tutti gli accordion
function resetAccordion() {
  for (let i = 0; i < accitem.length; i++) {
    accitem[i].style.boxShadow = "";
    accitem[i].style.borderTop = "";
  }
  for (let i = 0; i < accbtn.length; i++) {
    accbtn[i].style.color = "";
  }
}

// Click su una card
for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function() {
    const id = this.id;
    const dati = cardData[id];
    const accIndex = getAccordionIndex(id);
    const collapse = list[accIndex];
    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapse, { toggle: false });

    // Se la stessa card è già aperta → chiudi e ripristina titolo default
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
      accitem[accIndex].style.boxShadow = `0 0 18px 4px ${dati.colore}`;
      accitem[accIndex].style.borderTop = `2px solid ${dati.colore}`;
      accbtn[accIndex].style.color = "#c9c9f0";
      bsCollapse.show();
      cardAperta = id;
    }

    // Se un accordion era già aperto → chiudilo prima, poi riapri
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

// ── Tema chiaro/scuro ──────────────────────────────

btn.addEventListener("click", CambiaColore)

let theme = localStorage.getItem("colore")

if (!theme || theme.length == 0) {
  resetTema();
} else {
  applicaTemaChiaro();
}

function resetTema() {
  btn.style.backgroundColor = ""
  body.style.backgroundColor = ""
  body.style.color = ""
  navbar.style.backgroundColor = ""
  sun.setAttribute("stroke", "black")
  sun.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />`
  for (const item of card)   { item.style.backgroundColor = "" }
  for (const item of accbtn) { item.style.backgroundColor = ""; item.style.color = "" }
  for (const item of accbdy) { item.style.backgroundColor = ""; item.style.color = "" }
}

function applicaTemaChiaro() {
  btn.style.backgroundColor = "black"
  body.style.backgroundColor = "#dadada"
  body.style.color = "#1a1a2e"
  navbar.style.backgroundColor = "#5e548e"
  sun.setAttribute("stroke", "white")
  sun.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />`
  for (const item of card)   { item.style.backgroundColor = "white" }
  for (const item of accbtn) { item.style.backgroundColor = "white"; item.style.color = "#540089" }
  for (const item of accbdy) { item.style.backgroundColor = "white"; item.style.color = "#1a1a2e" }
}

function CambiaColore() {
  if (this.style.backgroundColor == "") {
    localStorage.setItem("colore", "light")
    applicaTemaChiaro()
  } else {
    localStorage.removeItem("colore")
    resetTema()
  }
}