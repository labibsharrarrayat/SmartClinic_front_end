var saleBTN = document.getElementById('sale');
var saleModel = document.getElementById('sales');


saleBTN.addEventListener('click', openSaleModal);


function openSaleModal() {
    inventoryBTN.classList.remove("active");
    lossBTN.classList.remove("active");
    expensesBTN.classList.remove("active");
    saleBTN.className += " active";
    expensesModel.style.display = 'none';
    inventoryModal.style.display = 'none';
    lossModal.style.display = 'none';
    saleModel.style.display = 'block';
}

var expensesBTN = document.getElementById('expenses');
var expensesModel = document.getElementById('expensesModal');


expensesBTN.addEventListener('click', openexpensesModel);


function openexpensesModel() {
    saleBTN.classList.remove("active");
    inventoryBTN.classList.remove("active");
    lossBTN.classList.remove("active");
    expensesBTN.className += " active"
    saleModel.style.display = 'none';
    inventoryModal.style.display = 'none';
    lossModal.style.display = 'none';
    expensesModel.style.display = 'block';

}


var inventoryBTN = document.getElementById('inventory');
var inventoryModal = document.getElementById('inventoryModal');


inventoryBTN.addEventListener('click', openinventoryModal);


function openinventoryModal() {
    saleBTN.classList.remove("active");
    expensesBTN.classList.remove("active");
    lossBTN.classList.remove("active");
    inventoryBTN.className += " active"
    saleModel.style.display = 'none';
    expensesModel.style.display = 'none';
    lossModal.style.display = 'none';
    inventoryModal.style.display = 'block';

}



var lossBTN = document.getElementById('loss');
var lossModal = document.getElementById('lossModal');


lossBTN.addEventListener('click', openlossModal);


function openlossModal() {
    saleBTN.classList.remove("active");
    expensesBTN.classList.remove("active");
    inventoryBTN.classList.remove("active");
    lossBTN.className += " active"
    saleModel.style.display = 'none';
    expensesModel.style.display = 'none';
    inventoryModal.style.display = 'none';
    lossModal.style.display = 'block';

}