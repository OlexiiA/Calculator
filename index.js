const display = document.getElementById("display");

function clearDisplay(){
display.value = "";
};


function appendToDisplay(input){
display.value += input;
}


function calculate(){
    try {
        display.value = eval(display.value)
        
    } catch (error) {
        window.alert("Error, press 'C' and try again")
    }
}