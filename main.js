function calculate() {
    const choice = parseInt(document.getElementById("choice").value);
    const quantity = parseInt(document.getElementById("quantity").value);
    let itemName = "";
    let price = 0;

    switch (choice) {
        case 1:
            itemName = "Pepperoni";
            price = 400;
            break;
        case 2:
            itemName = "4 Cheese";
            price = 400;
            break;
        case 3:
            itemName = "Ham and Cheese";
            price = 360;
            break;
        case 4:
            itemName = "Mushroom";
            price = 360;
            break;
        default:
            document.getElementById("result").textContent = 
                "Invalid choice. Please enter a number between 1 and 4.";
            return;
    }

    if (isNaN(quantity) || quantity < 1) {
        document.getElementById("result").textContent = 
            "Please enter a valid quantity.";
        return;
    }

    const total = quantity * price;
    document.getElementById("result").innerHTML =
        `You have selected <strong>${itemName}</strong><br>Total amount: <strong>Php ${total}</strong>`;
}