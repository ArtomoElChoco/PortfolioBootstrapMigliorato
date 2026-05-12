"use strict"

// ── EmailJS setup ──────────────────────────────────
// ISTRUZIONI: vai su https://www.emailjs.com, crea un account gratuito,
// poi sostituisci i valori qui sotto con i tuoi dati reali:
//   1. PUBLIC_KEY  → Dashboard > Account > Public Key
//   2. SERVICE_ID  → Email Services > il tuo service ID (es. "service_xxxxxx")
//   3. TEMPLATE_ID → Email Templates > il tuo template ID (es. "template_xxxxxx")
// Nel template EmailJS usa queste variabili: {{from_name}}, {{from_email}}, {{message}}
// e imposta "To Email" come a.cojocaru.3950@vallauri.edu (o la tua mail personale)

const PUBLIC_KEY  = "IL_TUO_PUBLIC_KEY"
const SERVICE_ID  = "IL_TUO_SERVICE_ID"
const TEMPLATE_ID = "IL_TUO_TEMPLATE_ID"

emailjs.init(PUBLIC_KEY)

function inviaEmail() {
  const nome     = document.getElementById("nome").value.trim()
  const email    = document.getElementById("email").value.trim()
  const messaggio = document.getElementById("messaggio").value.trim()

  if (!nome || !email || !messaggio) {
    mostraToast("⚠️ Compila tutti i campi prima di inviare.", true)
    return
  }

  const sendBtn = document.getElementById("sendBtn")
  sendBtn.disabled = true
  sendBtn.textContent = "Invio in corso..."

  const params = {
    from_name:  nome,
    from_email: email,
    message:    messaggio
  }

  emailjs.send(SERVICE_ID, TEMPLATE_ID, params)
    .then(() => {
      mostraToast("✅ Messaggio inviato con successo!")
      document.getElementById("nome").value = ""
      document.getElementById("email").value = ""
      document.getElementById("messaggio").value = ""
    })
    .catch((err) => {
      console.error("Errore EmailJS:", err)
      mostraToast("❌ Errore nell'invio. Riprova più tardi.", true)
    })
    .finally(() => {
      sendBtn.disabled = false
      sendBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px">
          <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
        INVIA MESSAGGIO`
    })
}

function mostraToast(testo, errore = false) {
  const toastEl = document.getElementById("mailToast")
  const toastMsg = document.getElementById("toastMsg")
  toastMsg.textContent = testo
  toastEl.classList.toggle("error", errore)
  const toast = new bootstrap.Toast(toastEl, { delay: 4000 })
  toast.show()
}

// ── Tema chiaro/scuro ──────────────────────────────
const btn    = document.getElementsByClassName("btn-dark")[0]
const body   = document.getElementsByTagName("body")[0]
const sun    = document.getElementsByClassName("size-6")[0]
const navbar = document.getElementById("navbar")

btn.addEventListener("click", CambiaColore)

let theme = localStorage.getItem("colore")

if (!theme || theme.length === 0) {
  resetTema()
} else {
  applicaTemaChiaro()
}

function resetTema() {
  btn.style.backgroundColor = ""
  body.style.backgroundColor = ""
  body.classList.remove("light")
  navbar.style.backgroundColor = ""
  sun.setAttribute("stroke", "black")
  sun.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />`
}

function applicaTemaChiaro() {
  btn.style.backgroundColor = "black"
  body.style.backgroundColor = "#dadada"
  body.classList.add("light")
  navbar.style.backgroundColor = "#5e548e"
  sun.setAttribute("stroke", "white")
  sun.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />`
}

function CambiaColore() {
  if (this.style.backgroundColor === "") {
    localStorage.setItem("colore", "light")
    applicaTemaChiaro()
  } else {
    localStorage.removeItem("colore")
    resetTema()
  }
}
