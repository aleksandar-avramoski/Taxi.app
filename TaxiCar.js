
let cars = 70;
let minutes = 20;
let totalMinutes;

let taxiCar = document.getElementById("carTime");

let pickedCar = Math.floor(Math.random() * cars + 1);
let randomMinutes = Math.floor(Math.random() * minutes + 1);

if (randomMinutes === 1) {
    totalMinutes = "minute"  
} else {
    totalMinutes = "minutes"  
}

taxiCar.innerText = "Car with number"+ " " + pickedCar + " " + "will come in" + " " + randomMinutes + " " + totalMinutes + "!";