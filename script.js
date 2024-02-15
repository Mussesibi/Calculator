const buttons = document.querySelectorAll("button")
const display = document.querySelector(".display-portal")

let currentInput = ""
let currentOperator = ""
let storedValue = 0 

document.addEventListener('DOMContentLoaded',animateText)

function animateText(){
    const Text = "Hello..."
    let currentIndex = 0
    const intervalId = setInterval(()=>{
        if(currentIndex <= Text.length){    
        const dsiplayedText = Text.slice(0,currentIndex)
        display.style.cssText = "color: gray; font-family:'Courier New', Courier, monospace;"
        display.textContent = dsiplayedText
        currentIndex++
    }else{
        clearInterval(intervalId)
    }
        
    },300)
}
buttons.forEach(btn => {
    btn.addEventListener('click', ()=>{

        const value = btn.value
        // If C button is clicked will erase all data
        if(value === ""){
            display.textContent = ""
            storedValue = 0
            currentInput = ""
            currentOperator = ""

        } else if (value === "="){
            handleEqual();

        } else if(value === "+" ||value === "-"||value === "*"||value === "/"){
            if(currentInput !== "" && currentOperator){
                handleEqual();
                
            }
            handleOperator(value)
            
        }else if (value === "."){
            handleDecimal()
        }
        else{
            currentInput += value
            updateDisplay()            
        }
        applyBtnStyle(btn)
    })
})

// Functions for calculations
function add(a, b){return a+b}

function sub(a, b){return a-b}

function mul(a, b){
    let result = a * b
    result = result.toFixed(8)
    return result
}
function divide(a, b){
    if (b === 0) {
        return display.textContent = "You naughty boy ;)"
    }else{

        let result = a / b
        result = result.toFixed(8)
        return result
    }
}


// Will check the and update the operators and store values in a variable 
// Then it'll free currentInput to accept another input 
function handleOperator(operator){
    if(currentInput !==""){
        storedValue = parseFloat(currentInput)
        display.textContent = ""
        currentOperator = operator
        currentInput = ""
        updateDisplay();
        
    }else{
        currentOperator = operator
    }
}
// Will not allow adding decimal point if already exists one (1.2.3)NOTALLOWED
function handleDecimal(){
    if(!currentInput.includes(".")){
        currentInput += "."
        updateDisplay()
    }
}

// Will Do the calculations and handles some stuff
function handleEqual(){
    if(!currentOperator){
        display.textContent = "Fuck you "
    }
    else if(currentInput !== ""){
        const operand = parseFloat(currentInput)
        switch(currentOperator){
            case "+" : storedValue = add(storedValue,operand)
            break;
            case "-" : storedValue = sub(storedValue,operand)
            break;
            case "*" : storedValue = mul(storedValue,operand)
            break;
            case "/" : storedValue = divide(storedValue,operand)
            break;
        }
        currentInput = ""
        updateDisplay();
    }else{

    }
}

function applyBtnStyle(btn){
    btn.classList.add('active')
}
function updateDisplay(){
    display.textContent = currentInput !== "" ? currentInput : storedValue;

}