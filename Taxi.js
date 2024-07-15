let feedback = document.getElementById("ongoingProcess");
let pickUpLocation = document.getElementById("location");
let destination = document.getElementById("destination");

 function handleClick() {
    let moveOn;
    
    if (pickUpLocation.value.length > 1 && destination.value.length > 1)  {
        moveOn = true;
    } else {
        moveOn = false;
        window.alert("Please enter the fields!");
    }

    if (moveOn === true) {
        feedback.innerText = "Just a moment...";
        setTimeout(function() {
            location.replace("TaxiCar.html");
        }, 3000);
    }
} 

document.getElementById("submit").onclick = handleClick;





