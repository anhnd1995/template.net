var count;
var jewel, stone;
var jewelError = document.getElementById("jewel-error"), 
    stoneError = document.getElementById("stone-error");


// count the number of different jewels in stone
function countJewels(jewelTypes, stoneTypes){   
    
    for(let i = 0; i < jewelTypes.length; i++) {
        for (let j = 0; j < stoneTypes.length; j++) { 
            if (stoneTypes[j] === jewelTypes[i]) count ++;
        }
    }
}

function validateForm(){
    var jewelError = document.getElementById("jewel-error"); 
    var stoneError = document.getElementById("stone-error");

    this.jewel = document.getElementById("jewel").value;
    this.stone = document.getElementById("stone").value;

    var uniqueChars = /^(?:([A-Za-z])(?!.*\1))*$/;          // Validation for jewel type
    var charsOnly =  /^(?:([a-zA-Z]))*$/;                         // Validation for stone type

    // Show error messages for each input
    if(!this.jewel.match(uniqueChars) || !this.stone.match(charsOnly)) {
        // Remove previous values
        jewelError.innerHTML = "";
        stoneError.innerHTML = "";     

        if(!this.jewel.match(uniqueChars)){
            jewelError.innerHTML = "Jewel types must be distinct and contain only characters.";
        }
        if(!this.stone.match(charsOnly)){
            stoneError.innerHTML = "Stones must contain only characters.";
        }
    }
    else {
        // Remove previous values
        jewelError.innerHTML = "";
        stoneError.innerHTML = "";

        return true;
    }

}

function myFunction() {
    count = null                
    if(validateForm()){
        var jewelType = document.getElementById("jewel").value.split('');
        var stoneType = document.getElementById("stone").value.split('');  

        countJewels(jewelType, stoneType);
        document.getElementById("count").innerHTML = count;
    }
    else {
        document.getElementById("count").innerHTML = count;     // Reset count
    }
}