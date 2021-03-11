var delmodal = document.getElementById('dlModal');
var tBtn = document.getElementById('dlbtn');
var printmodal = document.getElementById('printModal')
var printmodalopen = document.getElementById('printerbtn')



tBtn.addEventListener('click', openModalDel);
printmodalopen.addEventListener('click', openprintModal);


function openModalDel() {
    delmodal.style.display = 'block';
}

function openprintModal() {
    printmodal.style.display = 'block';
}