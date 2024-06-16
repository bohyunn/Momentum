const age = parseInt( prompt("Enter your age : ") );

const calculator = {
    plus : function (a){
        return 2025-a;
    }
}

if (isNaN(age)){
    alert("Error!\nPlease Write a number!");
} else if (age < 18){
    console.log ("You cannot Drink!");
} else if (age >= 18 && age <=50){
    console.log("You can Drink!");
} else {
    console.log("You can drink but.. How about less Drink? ");
}