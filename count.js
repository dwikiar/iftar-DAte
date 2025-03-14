var target_mili_sec = new Date("March 27, 2025 16:00:00").getTime(); // Target date in milliseconds

function timer() {
    var now_mili_sec = new Date().getTime(); // Get the current time in milliseconds
    var remaining_sec = Math.floor((target_mili_sec - now_mili_sec) / 1000); 

    var day = Math.floor(remaining_sec / (3600 * 24)); 
    var hour = Math.floor((remaining_sec % (3600 * 24)) / 3600); 
    var min = Math.floor((remaining_sec % 3600) / 60); 
    var sec = Math.floor(remaining_sec % 60); 

    document.querySelector("#day").innerHTML = day; 
    document.querySelector("#hour").innerHTML = hour; 
    document.querySelector("#min").innerHTML = min; 
    document.querySelector("#sec").innerHTML = sec; 
}

setInterval(timer, 1000); // Call the timer function every second (1000 milliseconds)
