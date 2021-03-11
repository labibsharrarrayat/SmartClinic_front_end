var savedmodal = document.getElementById('saveModal');
var clBtn = document.getElementById('cl-button');


var delModal = document.getElementById('dlModal');
var delButton = document.getElementById('dlbtn');


var prModal = document.getElementById('prModal');
var prButton = document.getElementById('printBTN');


var dateSlc = document.getElementById('dateSlc');
var vendorSlc = document.getElementById('vendorSlc');
var dateSection = document.getElementById('dateSection');
var vendorSection = document.getElementById('vendorSection');



clBtn.addEventListener('click', openModalSave);
delButton.addEventListener('click', openDelModal)
prButton.addEventListener('click', openPrintModal);

function openModalSave() {
    savedmodal.style.display = 'block';
}

function openDelModal() {
    delModal.style.display = 'block';
}


function openPrintModal() {
    prModal.style.display = 'block';
    
if(dateSlc.checked == true){
    dateSection.style.display = 'block';
    vendorSection.style.display = 'none';
}
vendorSlc.addEventListener('click', showVendor);
}

function showVendor(){
    dateSection.style.display = 'none';
    vendorSection.style.display = 'block';

    dateSlc.addEventListener('click', showDate);
}

function showDate(){
    dateSection.style.display = 'block';
    vendorSection.style.display = 'none';
}