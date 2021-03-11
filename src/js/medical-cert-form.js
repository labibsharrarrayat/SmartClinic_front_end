var delmodal = document.getElementById('dlModal');
var tBtn = document.getElementById('delbtn');
var savemodal = document.getElementById("saveModal");
var cancelModal = document.getElementById("cl-button");

tBtn.addEventListener('click', openModalDel);

function openModalDel() {
    delmodal.style.display = 'block';
}

cancelModal.onclick = function() {
    savemodal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == savemodal) {
        savemodal.style.display = "none";
    }

}