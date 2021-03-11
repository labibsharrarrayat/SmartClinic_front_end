var patientdModal = document.getElementById("deletemodal");

var deletebtn = document.getElementById("deletebtn");

deletebtn.onclick = function() {
    patientdModal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == patientModal) {
        patientModal.style.display = "none";
    }
    if (event.target == patientdModal) {
        patientdModal.style.display = "none";
    }
}



// printbmodal
var printModal = document.getElementById("appmModal");

var printBtn = document.getElementById("printerbtn");

printBtn.onclick = function() {
    printModal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == printModal) {
        printModal.style.display = "none";
    }
}