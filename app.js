let container = document.querySelector(".container");
container.style.width = "50%";
container.style.margin = "0 auto";
;

let button = document.querySelector("button");
button.style.display = "block"
button.style.margin = "20px auto";

function changeTitleColor(){
    let title = document.getElementById("mainTitle");
    title.style.color = "green";
    title.style.fontWeight = "bold";
}

//Object 
const academyData = {
    name: "Legend Academy",
//object method
    getWelcome: function(){
        return "Welcome to " + this.name + "!";
    }
};

//array
const gearPacks = {
    dog: ["Golden Bone", "Steel Leash"],
    cat: ["Night Goggles", "Silent Paws"],
    bird: ["Wing Spikes", "Sonic Whistle"],
    lizard: ["Camo Cloak", "Heat Shield"]
};

function startTraining(){
    //Inputs
    let name = document.getElementById('petName').value;
    let species = document.getElementById('animal').value.toLowerCase();
    let power = parseFloat(document.getElementById('petPower').value);
    let display= document.getElementById('bioOutput');
    let card = document.getElementById('heroCard');

     //Change CSS
    if (power >= 8){
        card.style.borderColor = "gold"
        card.style.backgroundColor = "#fff9c4";
    } else if (power >= 4){
        card.style.borderColor = "#2196F3"
        card.style.backgroundColor = "#e3f2fd"
    } else {
        card.style.borderColor = "#9e9e9e"
        card.style.backgroundColor = "#f5f5f5"
    }
    //String & Number method
    let loudName = name.toUpperCase();
    if (isNaN(power)){
        alert("Please enter a valid power level! :)");
        return;
    };

    let status = power >= 8 ? "Elite" : "Trainee";
    

    //Switch statment
    let ability = "";
    switch (species) {
        case "dog": ability = "Super Growl"; break;
        case "cat": ability = "Super Scratch"; break;
        case "bird": ability = "Sonic Flight"; break;
        case "lizard": ability = "Growth Manipulation"; break;
        default: ability = "Mystery Power";  
    }
    //Concatenated String Variable
    let heroBio = "The " + status + " " + loudName + " has an ability of " + ability + " at power " + power;
            display.innerText = heroBio;

    //For Loop
    let logHTML = "";
    for (let i = 1; i <= 3; i++){
        logHTML += "<li>Session " + i + ": Completed</li>";
    }
    document.getElementById('trainingLog').innerHTML = logHTML;

    //While Loop
    let count = 0;
    while (count < power){
        count++;
        console.log("Charging..." + count);
    }

    document.getElementById('mottoDisplay').innerText = academyData.getWelcome();
    
    //array method
    let inventoryArray = gearPacks[species] || ["Basic Cape"];
    inventoryArray.push("Power Gem");
    document.getElementById('itemsList').innerText = inventoryArray.join(", ");

    if (species ==="lizard") {
        document.body.style.backgroundColor = "#a0e8b4";
    } else {
        document.body.style.backgroundColor = "#f3f3f3";
    }
}


