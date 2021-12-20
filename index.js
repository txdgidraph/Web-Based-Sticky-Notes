function createNote() {
  designEmptyNote();
}

function designEmptyNote(){
    let div = document.createElement("div");
    div.setAttribute('class','noteID')
    let textArea = document.createElement("textArea")
    textArea.style.width="100%";
    textArea.style.height="100%";
    textArea.style.backgroundColor="yellow";
    div.appendChild(textArea)
    document.getElementById("notesBody").appendChild(div)
}