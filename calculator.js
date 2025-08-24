// let display = document.querySelector(".calculator-display"); 
 
// function appendToDisplay(value) { 
//     if (display.value === "0" && value !== ".") { 
//         display.value = value; // replace initial 0 
//     } else { 
//         display.value += value; 
//     } 
// } 
 
// function clearDisplay() { 
//     display.value = "0"; 
// } 
 
// function calculate() { 
//     try { 
//         display.value = eval(display.value.replace(/×/g, "*").replace(/÷/g, "/")); 
//     } catch (e) { 
//         display.value = "🙄"; 
//     } 
// }
let display = document.querySelector(".calculator-display"); 
 
function appendToDisplay(value) { 
    if (display.value === "0" && value !== ".") { 
        display.value = value; 
    } else { 
        display.value += value; 
    } 
} 
 
function clearDisplay() { 
    display.value = "Consultation cleared✨";
    setTimeout(() => display.value = "0", 1200); 
} 
 
function calculate() { 
    try { 
        let result = eval(display.value.replace(/×/g, "*").replace(/÷/g, "/")); 
 
        // Add Nigerian/Ifa style “oracle” responses 
        let responses = [ 
            "The gods have spoken: " + result, 
            "Ifa says the answer is " + result, 
            "Divine consultation reveals → " + result, 
            "As the kola nut falls, so it is: " + result, 
            "Ogun no dey lie! Result: " + result 
        ]; 
 
        // Pick a random response 
        let divineMessage = responses[Math.floor(Math.random() * responses.length)]; 
        display.value = divineMessage; 
    } catch (e) { 
        display.value = "The oracle is silent...❌"; 
    } 
}