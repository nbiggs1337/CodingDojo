const numberButtons = document.querySelectorAll("[data-num]")
const opButtons = document.querySelectorAll("[data-op]")
const equalsButton = document.querySelector("[data-equals]")
const delButton = document.querySelector("[data-del]")
const clearButton = document.querySelector("[data-AC]")
const prevOpText = document.querySelector("[data-prevOp]")
const currentOpText = document.querySelector("[data-currentOp]")



class Calculator {
    constructor(prevOpText, currentOpText) {
        this.prevOpText = prevOpText
        this.currentOpText = currentOpText
        this.clear()
    }
    clear () {
        this.currentOp = " "
        this.prevOp = " "
        this.operation = undefined
    }
    
    delete (){
        this.currentOp = this.currentOp.toString().slice(0, -1)    //go from index [0] to the 2nd to last [-1], chop off last, thusly deleting 1 at a time
    }
                                                                                //all computation functions :::
    appendNum(number){
        if (number === "." && this.currentOp.includes(".")) return      //if type . and . exists, stop/ do not append
        this.currentOp = this.currentOp.toString() + number.toString()  //converts to string
    }
    chooseOp(operation){                    //checker section 
        if (this.currentOp === "") return  //if op  empty, does not let any else execute 
        if (this.prevOp !== ""){            //if value is not empty, allow compute execute
            this.compute()
        }
        this.operation = operation //sets op to op passed in by user
        this.prevOp = this.currentOp //==done typing current, move to next        
        this.currentOp = " " //clear out OG value, ready for next value
    }
    compute (){
        let computation                         //result of compute function
        const prev = parseFloat(this.prevOp)        //convert prev string to number 
        const current = parseFloat(this.currentOp)  //convert current string to number
        if (isNaN(prev) || isNaN(current)) return   //if prev AND current are not numbers, cancel function 
        switch (this.operation) {                   
            case '+':                               //actual compute logic to take current & prev values
                computation = prev + current        // to come up with computation
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:                                //if none of above values are executed, cancel/return
                return
        }
        this.currentOp = computation            // gives answer in current place [main section]
        this.operation = undefined              //clears current op
        this.prevOp = ''                        //clears prev op
    }
    
    getDisplayNumber(number){                   //
        const floatNumber = parseFloat(number)  //converts number string to number
        if (isNaN(floatNumber)) return ''
        return floatNumber.toLocaleString('en')

    }
    
    
    update(){
        this.currentOpText.innerText = 
        this.getDisplayNumber(this.currentOp)               //moves current op to prev sec
        if (this.operation != null) {                   //if current opp is not null
            this.prevOpText.innerText =                 //take prev op text
            `${this.getDisplayNumber(this.prevOp)} ${this.operation}`          //concat with operation symbol
        }
    }
}

const calculator = new Calculator(prevOpText, currentOpText)


numberButtons.forEach(button => {               //chooses num value for compute
    button.addEventListener('click', () => {
        calculator.appendNum(button.innerText)
        calculator.update()
    })
})

opButtons.forEach(button => {                   //chooses operation for compute
    button.addEventListener('click', () => {
        calculator.chooseOp(button.innerText)
        calculator.update()
    })
})

equalsButton.addEventListener("click", button =>{      // computes and updates display
    calculator.compute()
    calculator.update();
})

clearButton.addEventListener("click", button =>{      // clears and updates display
    calculator.clear()
    calculator.update();
})




delButton.addEventListener("click", button =>{      // deletes 1 at a time and updates display
    calculator.delete()
    calculator.update();
})