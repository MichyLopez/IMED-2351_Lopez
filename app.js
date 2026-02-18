 function logger(){
    console.log("Hello and Welcome");
 }

 logger();

document.getElementById("welcome").innerHTML = `<h1> Hello, Welcome 
to my one-page project.</h1> 
<h2>What is your name?</h2>`

//Object with properties
let myClass = {
    course: "IMED-2351",
    teacher: "Rodolfo Macias",
    semester: "Spring 2026",

//Method
    excitmentSound: function() {
        return "Whoop Whoop!";
    }
};
//Functions pass parameters in & out
function getFullName(first, last) {
    return first + " " + last;
};

function getClassName() {
    return myClass.course + " in " + myClass.semester + " with " + myClass.teacher;
}

function createSentance(name, course) {
    return name + " is in " + course + ".";
};

//Event
document.getElementById("showBtn").addEventListener("click", function() {

    let rawFirst = document.getElementById("fName").value;
    let rawLast = document.getElementById("lName").value;

    let finalName =getFullName(rawFirst, rawLast);

    let finalCar = getClassName();

    let message = createSentance(finalName, finalCar);

    let sound = myClass.excitmentSound();

    document.getElementById("result").innerText = message + " " + sound;
});

function changeTitleColor(){
    let title = document.getElementById("mainTitle");
    title.style.color = "green";
    title.style.fontWeight = "bold";
}

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
    let formattedPower = power.toFixed(1);

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
    let heroBio = "The hero " + loudName + " is a " + species + " with " + ability + " at level  " + formattedPower + "!";
    display.innerText = heroBio;

    //For Loop
    let logHTML = "";
    for (let i = 1; i <= 3; i++){
        logHTML += "<li>Session " + i + ": Completed</li>";
    }

    //While Loop
    let currentLevel = 0;
    while (currentLevel < power){
        currentLevel++;
        console.log("Leveling up... Currently at: " + currentLevel);
    }

    //Output to page
    document.getElementById('trainingLog').innerHTML = logHTML;

    if (species ==="lizard") {
        document.body.style.backgroundColor = "#a0e8b4";
    } else {
        document.body.style.backgroundColor = "#f3f3f3";
    }
}



