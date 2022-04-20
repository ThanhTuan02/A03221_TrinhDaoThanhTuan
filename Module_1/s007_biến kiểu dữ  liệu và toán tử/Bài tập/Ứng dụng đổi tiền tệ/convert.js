function covert() {
    let Amount = document.getElementById("Amount").value;
    let From = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Result;

    if (From == 'VN' && To == 'USD') {
        Result = "ket qua : " + (Amount / 23000) + "USD";
        document.getElementById("Result").innerHTML = Result;

    } else if (From == 'USD' && To == 'VN') {
        Result = "ket qua : " + (Amount * 23000) + "VND";
        document.getElementById("Result").innerHTML = Result;

    } else {
        Result = " Khong Hop Le"
        document.getElementById("Result").innerHTML = Result;
    }
}

