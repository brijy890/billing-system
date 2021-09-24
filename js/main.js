async function addBill(data) {
    try {
        const response = await fetch('http://localhost:8080/bills',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(data)
        });
        const bills = await response.json();
        return bills;
    } catch (error) {
        console.error(error);
    }
}

 $('#addBill').click(function() {
    window.location.href = 'addBill.html';
    return false;
});

$('#addBillForm').click(function(e){
    var data = {
        "vehicle_name": $("#vehicle_name").val(),
        "from_address": $("#from_address").val(),
        "to_address": $("#to_address").val(),
        "trip_date": $("#trip_date").val(),
        "amount": $("#amount").val(),
    }
    addBill(data)
    $("#vehicle_name").val("")
    $("#from_address").val("")
    $("#to_address").val("")
    $("#trip_date").val("")
    $("#amount").val("")
    e.preventDefault();
});