var savemodal = document.getElementById("saveModal");

var cancelModal = document.getElementById("cl-button");

var dlbtn = document.getElementById("dlbtn");


cancelModal.onclick = function () {
    savemodal.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == savemodal) {
        savemodal.style.display = "none";
    }

}


var paymodal = document.getElementById("payModal");

var cnlModal = document.getElementById("payNow");

var deleteModal = document.getElementById("deleteModal");

cnlModal.onclick = function () {
    paymodal.style.display = "block";
}

dlbtn.onclick = function () {
    deleteModal.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == paymodal) {
        paymodal.style.display = "none";
    }

}