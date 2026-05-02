#!/bin/bash

if [ ! -d ".git" ]; then
echo "Errore: questa cartella non è una repository git"
exit 1
fi

echo "Inserisci il messaggio del commit:"
read msg

if [ -z "$msg" ]; then
echo "Errore: il messaggio non può essere vuoto"
exit 1
fi

git add .

if git diff --cached --quiet; then
echo "Nessuna modifica da committare"
exit 0
fi

git commit -m "$msg"

read -p "Vuoi fare il push? Premi Invio per confermare, oppure Ctrl+C per annullare: " risposta
 
if [[ "$risposta" == "" ]]; then
    echo "Eseguo il push..."
    git push
else
    echo "Push annullato."
fi

echo "Commit completato con successo!"