function addItem() {
    let comboBox = document.getElementById("comboBox");
    let newItem = document.getElementById("newItem").value;

    if (newItem) {
        let option = document.createElement("option");
        option.text = newItem;
        comboBox.add(option);
        document.getElementById("newItem").value = ''; 
    } else {
        alert("Please enter an item to add.");
    }
}

function removeItem() {
    let comboBox = document.getElementById("comboBox");
    let selectedIndex = comboBox.selectedIndex;

    if (selectedIndex !== -1) {
        comboBox.remove(selectedIndex);
    } else {
        alert("Please select an item to remove.");
    }
}
function displaySelected() {
    let comboBox = document.getElementById("comboBox");
    let selectedItem = comboBox.options[comboBox.selectedIndex].text;
    document.getElementById("display").innerText = "Selected Item: " + selectedItem;
}
