var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

//digunakan untuk membaca form
function readFormData() {
    var formData = {};
    formData["namalengkap"] = document.getElementById("namalengkap").value;
    formData["judul"] = document.getElementById("judul").value;
    formData["jumlah"] = document.getElementById("jumlah").value;
    formData["nim"] = document.getElementById("nim").value;
    return formData;
}

//menuliskan hasil dari form
function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.namalengkap;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.judul;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.jumlah;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.nim;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("namalengkap").value = "";
    document.getElementById("judul").value = "";
    document.getElementById("jumlah").value = "";
    document.getElementById("nim").value = "";
    selectedRow = null;
}

//edit data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("namalengkap").value = selectedRow.cells[0].innerHTML;
    document.getElementById("judul").value = selectedRow.cells[1].innerHTML;
    document.getElementById("jumlah").value = selectedRow.cells[2].innerHTML;
    document.getElementById("nim").value = selectedRow.cells[3].innerHTML;
}

//update data
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.namalengkap;
    selectedRow.cells[1].innerHTML = formData.judul;
    selectedRow.cells[2].innerHTML = formData.jumlah;
    selectedRow.cells[3].innerHTML = formData.nim;
}

//hapus data
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

//validasi
function validate() {
    isValid = true;
    if (document.getElementById("namalengkap").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}