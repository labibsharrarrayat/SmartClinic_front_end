var sum = 0;

$('td[class*="col-amount"]').each(function() {
    sum += Number($(this).text()) || 0;
});

$('.amount').text(sum);


//delete modal
var deleteModal = document.getElementById("deleteModal");

var deletebtn = document.getElementById("deletebtn");

deletebtn.onclick = function() {
    deleteModal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == deleteModal) {
        deleteModal.style.display = "none";
    }
}


//save modal

var saveModal = document.getElementById("saveModal");

var dlbtn = document.getElementById("dlbtn");

dlbtn.onclick = function() {
    saveModal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == saveModal) {
        saveModal.style.display = "none";
    }
}

// printbmodal
var patientModal = document.getElementById("printbmodal");

var printerbtn = document.getElementById("printerbtn");

printerbtn.onclick = function() {
    patientModal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == patientModal) {
        patientModal.style.display = "none";
    }
}