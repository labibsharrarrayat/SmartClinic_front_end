var savemodal = document.getElementById("saveModal");

var cancelModal = document.getElementById("cl-button");

var deleteModal = document.getElementById("dlModal");

var deletebtn = document.getElementById("dlbtn");


cancelModal.onclick = function() {
    savemodal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == savemodal) {
        savemodal.style.display = "none";
    }

}

deletebtn.onclick = function() {
    deleteModal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == deleteModal) {
        deleteModal.style.display = "none";
    }
}