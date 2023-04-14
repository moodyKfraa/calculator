const preDisplay = document.querySelector(`[data-display-upper]`);
const curDisplay = document.querySelector(`[data-display-lower]`);
const operationBts = document.querySelectorAll(`[data-operation]`);
const numsBts = document.querySelectorAll(`[data-nums]`);
const clearBt = document.querySelector(`[data-clear]`);
const deleteBt = document.querySelector(`[data-delete]`);
const equalBt = document.querySelector(`[data-equal]`);

class calculator{
    constructor(preDisplay,curDisplay){
        this.preDisplay=preDisplay;
        this.curDisplay=curDisplay;
        this.clear();
    }
    clear(){
        this.curOperand = "";
        this.preOperand = "";
        this.operator = "";
    }
    appendNum(number){
        this.curOperand += number;
    }
    updateDisplay(){
        this.curDisplay.innerText=this.curOperand;
        this.preDisplay.innerText=this.preOperand + " " + this.operator;
    }
    operation(operation){
        this.operator = operation;
        this.curOperand !== "" ? this.preOperand = this.curOperand:"";
        this.curOperand ="";
    }
    delete(){
       this.curOperand = this.curOperand.slice(0,-1);
    }
    showResult(){
        switch (this.operator){
            case "+" : 
                this.curOperand =(Number(this.preOperand)+Number(this.curOperand)).toString();
                break;
            case "-" : 
                this.curOperand =(Number(this.preOperand)-Number(this.curOperand)).toString();
                break;
            case "÷" : 
                this.curOperand =(Number(this.preOperand)/Number(this.curOperand)).toString();
                break;
            case "*" : 
                this.curOperand =(Number(this.preOperand)*Number(this.curOperand)).toString();
                break;
        }
        this.preOperand = "";
        this.operator="";
    }
}
let calculater = new calculator(preDisplay,curDisplay);

numsBts.forEach((e)=> {
    e.addEventListener(`click` , (num)=>{
        calculater.appendNum(num.target.innerText);
        calculater.updateDisplay()
    })
})

operationBts.forEach((e)=> {
    e.addEventListener(`click` , (op)=>{
        calculater.operation(op.target.innerText);
        calculater.updateDisplay()
    })
})

clearBt.addEventListener(`click`,()=>{calculater.clear();calculater.updateDisplay()})
deleteBt.addEventListener(`click`,()=>{calculater.delete();calculater.updateDisplay()})
equalBt.addEventListener(`click`,()=>{calculater.showResult();calculater.updateDisplay()})