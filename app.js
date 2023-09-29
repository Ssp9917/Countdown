const endDate = "1 oct 2023 7:00 PM"
document.getElementById("endDate").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate);
    console.log(end) 
    const now = new Date();
    console.log(now)
    let diff = (end - now)/1000;
    console.log(diff)
    //value minus mai na jaye isliye
    if(diff<0 ) return;
    //convert into days
    let days = Math.floor(diff/3600/24);
    console.log(days)
    //days stor in the input days
    inputs[0].value = days
    //convert into hours 
    let hours = Math.floor((diff/3600)%24);
    console.log(hours)
    //hours store in the input hours
    inputs[1].value = hours;
    //convert into minuts
    let minuts = Math.floor((diff/60)%60)
    console.log(minuts)
    //minuts store in the input minuts
    inputs[2].value = minuts;
    //conver into seconds
    let seconds = Math.floor(diff%60);
    console.log(seconds)
    //seconds store in the input seconds
    inputs[3].value = seconds;
}

clock();

setInterval(()=>{
    clock();
},1000)