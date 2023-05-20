
const numSelectors = document.querySelectorAll('.num');
const resultOut = document.querySelector('.current');
const clearC = document.querySelector('.clear');
const resultOperation = document.querySelector('.result');
const operation = document.querySelectorAll('.operation');
const section = document.querySelector('.section');
let firstOperand = "";
let secondOperand = "";
let operationSymbol = '';
let totalResult;

function clear (){
    totalResult = '';
    firstOperand = ''
    secondOperand = '';
    resultOut.textContent ='';
}
clearC.addEventListener('click',clear);


const numberSelects = numSelectors.forEach((item)=>{
    item.addEventListener('click',handleClickNum);
});



function handleClickNum(item){
    const {target}=item;
    resultOut.textContent += target.textContent;
    firstOperand += target.textContent;
    
};

const operationCalculate = operation.forEach((item)=>{
    item.addEventListener('click',handleClickOperation);
})

function handleClickOperation(item){
    const {target} = item;
    operationSymbol = target.textContent;
    secondOperand = firstOperand;
    resultOut.textContent = '';
    firstOperand = 0;
};


function resultCalculate(item){
    
    const {target} = item;
   if(target.textContent == "="){

       switch(operationSymbol){
        case "+":
            totalResult = (+secondOperand)+(+firstOperand);
            break;
        case "-":
                totalResult = (secondOperand - firstOperand);
            break;
        case "X":
                totalResult = (secondOperand)*(firstOperand);
            break;
        case "/":
                totalResult = (secondOperand/firstOperand);
                console.log(`1- ${firstOperand}  2-${secondOperand}`)
            break;
                    

       }
        resultOut.textContent = totalResult;
        
   }
    
};

section.addEventListener('click',resultCalculate);



