function addorder() {
    event.preventDefault();
    var table = document.querySelector(".uorder table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = document.forms["orders"]["count"].value;
    cell2.innerHTML = document.forms["orders"]["brand"].value;
    cell3.innerHTML = document.forms["orders"]["qty"].value;
    document.forms["orders"]["count"].value = "";
    document.forms["orders"]["brand"].value = "";
    document.forms["orders"]["qty"].value = "";
}