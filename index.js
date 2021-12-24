function createNote() {
  designEmptyNote();
}

function designEmptyNote() {
  let div = document.createElement("div");
  div.setAttribute("class", "noteID");
  let a = "id123"
  div.setAttribute("id",a)
  div.setAttribute("draggable", "true");
  div.setAttribute("ondragstart", "drag(event)");

  let textArea = document.createElement("textArea");
  textArea.setAttribute("class", "textAreaNote");
  textArea.style.width = "100%";
  textArea.style.height = "100%";
  textArea.style.backgroundColor = "yellow";
  div.appendChild(textArea);

  let saveBtn = document.createElement("div");
  saveBtn.setAttribute("class", "saveBtn");
  let saveMes = document.createTextNode("SAVE");
  saveBtn.appendChild(saveMes);
  div.appendChild(saveBtn);

  let moveBtn = document.createElement("div");
  moveBtn.setAttribute("class", "moveBtn");
  let moveMess = document.createTextNode("Move");
  moveBtn.appendChild(moveMess);
  div.appendChild(moveBtn);

  let delBtn = document.createElement("div");
  delBtn.setAttribute("class", "delBtn");
  let delMes = document.createTextNode("DELETE");
  delBtn.appendChild(delMes);
  div.appendChild(delBtn);

  document.getElementById("notesBody").appendChild(div);
}

function designAlignBox() {
  let div = document.createElement("div");
  div.setAttribute("class", "alignBox col-2");
  div.setAttribute("ondragover", "allowDrop(event)");
  div.setAttribute("ondrop", "drop(event)");
  console.log(document.querySelector(".alignBox"));
  document.getElementById("rowBody").appendChild(div);
}

function layoutAlignBoxes() {
  for (let a = 0; a < 204; a++) {
    designAlignBox();
  }
}
layoutAlignBoxes();

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  let data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}
