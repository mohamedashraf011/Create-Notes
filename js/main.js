let notesList = localStorage.getItem('notesList');
if(notesList == null){
    notesList = [];
}
else{
    notesList = JSON.parse(notesList);
}


function addnote(){
    notesList.push("");
    localStorage.setItem('notesList', JSON.stringify(notesList));
    displaynote();
}

function displaynote(){
    let box = '';
    for(let i = 0; i < notesList.length; i++){
        box += `
            <div class="input-box">
                <p contenteditable="true" oninput="updatenote(${i}, this.innerText)">
                    ${notesList[i]}
                </p>
                <img onclick="deletenote(${i})" src="imgs/delete.png" alt="delete icon">
            </div>
        `;
    }

    document.querySelector('.notes').innerHTML = box;
}

function updatenote(index, value){
    notesList[index] = value;
    localStorage.setItem('notesList', JSON.stringify(notesList));
}

function deletenote(index){
    notesList.splice(index, 1);
    localStorage.setItem('notesList', JSON.stringify(notesList));
    displaynote();
}

displaynote();