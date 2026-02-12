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


function generateHero(){
    //Inputs
    let name = document.getElementById('petName').value;
    let species = document.getElementById('animal').value.toLowerCase();
    let power = parseFloat(document.getElementById('petPower').value);

    //String method
    let loudName = name.toUpperCase();

    //Number Method
    let formattedPower = power.toFixed(1);

    //If/Else Conditional 
    let status = "";
    if (power >= 6) {
        status = "Legendery";
    } else {
        status = "Trainee";
    }

    //Switch statment
    let ability = "";
    switch (species) {
        case "dog":
            ability = "Super Growl";
            break;
        case "cat":
            ability = "Super Scratch";
            break;
        case "bird":
            ability = "Sonic Flight";
            break;
        case "lizard":
            ability = "Growth Manipulation";
            break;
        default:
            ability = "Mystery Power";  
    }

    //Concatenated String Variable
    let heroBio = "The " + status + " hero, " + loudName + " has a power level of " + formattedPower + " and uses " + ability + "!";

    //Output to page
    document.getElementById('output').innerHTML = heroBio;
}
