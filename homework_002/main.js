/////////////////////////////////////////////////////////////////
// Buton is change herself color red or green
// start section
butonChangeColor.style.setProperty(`background-color`, `#ff0000`);
butonChangeColor.style.setProperty(`color`, `#ffffff`);
let flagColor = 0; // button change color
butonChangeColor.addEventListener('click', chColor);
// This function use to change color of button
function chColor () { 
    if (flagColor === 1){
    butonChangeColor.style.setProperty(`background-color`, `#ff0000`);
    butonChangeColor.style.setProperty(`color`, `#ffffff`);
    flagColor = 0;
    butonChangeColor.value=`Change color to green`
    return;
    }
    if (flagColor === 0){
        butonChangeColor.style.setProperty(`background-color`, `#00ff00`);
        butonChangeColor.style.setProperty(`color`, `#000000`);
        flagColor = 1;
        butonChangeColor.value=`Change color to red`;

        return;
    }
}
// end section
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
// Calculator
// start section
// str is calculator monitor string 
let str = document.getElementById(`str`);
// calcState is calculator triger for first initial state
let calcState = 0;
// triggerOperation need for use result in multifunctional case: if use `plus` and again `plus` or `minus` 
let triggerOperation = 0;
// typeOfOperation use for segregete type of calc operation
let typeOfOperation;
// operation is calculate function
function operation(input) {
        if (input === `=`) { 
            switch (typeOfOperation){
            case `+`:
            str.textContent= +str.textContent.split('+')[0] + +str.textContent.split('+')[1];
            break;
            case `-`:
            str.textContent= +str.textContent.split('-')[0] - +str.textContent.split('-')[1];
            break;
            case `*`:
            str.textContent= +str.textContent.split('*')[0] * +str.textContent.split('*')[1];
            break;
            case `/`:
            str.textContent= +str.textContent.split('/')[0] / +str.textContent.split('/')[1];
            break;
            }
            return;
        } else {
            if (calcState === 0) {str.textContent = `${input}`; calcState = +1; } else {str.textContent = str.textContent + `${input}`; calcState = +1;}
        }
    }

function input01 () {operation(1);}
function input02 () {operation(2);}
function input03 () {operation(3);}
function input04 () {operation(4);}
function input05 () {operation(5);}
function input06 () {operation(6);}
function input07 () {operation(7);}
function input08 () {operation(8);}
function input09 () {operation(9);}
function input10 () {operation(0);}
function input11 () {operation(`.`);}
function input12 () {if (triggerOperation === 0) {typeOfOperation = `/`; triggerOperation = 1; operation(`/`);} else {triggerOperation = 0; operation(`=`);}}
function input13 () {if (triggerOperation === 0) {typeOfOperation = `+`; triggerOperation = 1; operation(`+`);} else {triggerOperation = 0; operation(`=`);}}
function input14 () {if (triggerOperation === 0) {typeOfOperation = `-`; triggerOperation = 1; operation(`-`);} else {triggerOperation = 0; operation(`=`);}}
function input15 () {if (triggerOperation === 0) {typeOfOperation = `*`; triggerOperation = 1; operation(`*`);} else {triggerOperation = 0; operation(`=`);}}
function input16 () {triggerOperation = 0; operation(`=`);}
function input17 () {typeOfOperation = 0; calcState = 0; str.textContent = `0`;}

calc01.addEventListener('click', input01);
calc02.addEventListener('click', input02);
calc03.addEventListener('click', input03);
calc04.addEventListener('click', input04);
calc05.addEventListener('click', input05);
calc06.addEventListener('click', input06);
calc07.addEventListener('click', input07);
calc08.addEventListener('click', input08);
calc09.addEventListener('click', input09);
calc10.addEventListener('click', input10);
calc11.addEventListener('click', input11);
calc12.addEventListener('click', input12);
calc13.addEventListener('click', input13);
calc14.addEventListener('click', input14);
calc15.addEventListener('click', input15);
calc16.addEventListener('click', input16);
calc17.addEventListener('click', input17);
