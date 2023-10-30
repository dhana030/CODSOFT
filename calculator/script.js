function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay(value){
    document.getElementById('display').value = '';
}

function clearLastInput(value){
    var display = document.getElementById('display');
    var currentValue = display.value;
    display.value = currentValue.slice(0,-1); 

}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
