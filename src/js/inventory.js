
//delete modal
var deleteModal = document.getElementById("dlModal");

var deletebtn = document.getElementById("dlbtn");

deletebtn.onclick = function() {
    deleteModal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == deleteModal) {
        deleteModal.style.display = "none";
    }
}

//print Modal

var printModal = document.getElementById("printModal");

var printBTN = document.getElementById("printBTN");

printBTN.onclick = function() {
    printModal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == printModal) {
        printModal.style.display = "none";
    }
}