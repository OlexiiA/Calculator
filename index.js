const display = document.getElementById("display");

function clearDisplay(){
return display.value = "";
};


function appendToDisplay(input){
return display.value += input;
}


function calculate(){
    try {
        display.value = eval(display.value)
        
    } catch (error) {
        window.alert("Error, press 'C' and try again")
    }
}