function addNote() {
    const input = document.getElementById("noteInput");
    const list = document.getElementById("notesList");

    if (input.value.trim() === "") {
        alert("Please enter a note");
        return;
    }

    const li = document.createElement("li");
    li.textContent = input.value;

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.style.marginLeft = "10px";

    delBtn.onclick = function () {
        list.removeChild(li);
    };

    li.appendChild(delBtn);
    list.appendChild(li);

    input.value = "";
}