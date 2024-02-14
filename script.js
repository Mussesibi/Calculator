const buttons = document.querySelectorAll("button")
const display = document.querySelector(".display-portal")
buttons.forEach(btn => {
    btn.addEventListener('click', ()=>{
        if(btn.value === ""){
            display.textContent = ""
        } else{

            const value = btn.value
            display.textContent += value
        }
        btn.style.cssText = "-webkit-box-shadow: inset -8px -7px 5px -9px rgba(255,255,255,1);"
        "-moz-box-shadow: inset -8px -7px 5px -9px rgba(255,255,255,1);"
        "box-shadow: inset -8px -7px 5px -9px rgba(255,255,255,1);"
    })
})