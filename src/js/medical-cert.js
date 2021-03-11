var delmodal = document.getElementById('dlmodal');
var delbutton = document.getElementById('delbtn');

var printingmodal = document.getElementById('appmModal');
var printmodalbutton = document.getElementById('printerbtn')

delbutton.addEventListener('click', openModalDel);
printmodalbutton.addEventListener('click', openPrintModal);

function openModalDel() {
    delmodal.style.display = 'block';
}

function openPrintModal() {
    printingmodal.style.display = 'block';
}