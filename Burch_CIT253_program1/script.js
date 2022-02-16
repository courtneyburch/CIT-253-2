// Assign calculate tax function to the button
const taxCalculate = document.getElementById("taxCalculator")
taxCalculate.addEventListener("click", calculate)

// function to calculate tax
function calculate(event){
    let inputAmt = document.getElementById("amt").value //get user input from text box
    let taxAmt = 0 //initializw tax amount

    //display warning and clear input if invalid input is detected
    if(isNaN(inputAmt)){ 
         alert("Please enter a valid number without commas or dollar signs."); 
         document.getElementById("amt").value = "" //clear text box
    }
    //if valid input is detected, calculate the tax amount
    else{
            if(inputAmt < 27050){
                taxAmt = inputAmt * 0.15;
            } else if(inputAmt < 65550){
                taxAmt = 4057.50 + (inputAmt - 27050) * 0.275;
            } else if(inputAmt <  136750){
                taxAmt = 14654.00 + (inputAmt - 65550) * .305;
            } else if(inputAmt < 297350){
                taxAmt = 36361.00 + (inputAmt - 136750) * 0.355;
            } else {
                taxAmt = 93374 + (inputAmt - 297350) * 0.391;
            }
    }   
    //if tax amount was calculated, display it below the input box
    if(taxAmt){
        taxAmt = taxAmt.toLocaleString('en-US', {style:"currency", currency:"USD"}); //format the number as currency with commas and two decimal places
        const displayTax = document.getElementById("results"); //display the amount
        displayTax.innerHTML = `Your tax owed is ${taxAmt}.`
    }
}

 
