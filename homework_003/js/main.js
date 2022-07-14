const size = 10;
let id = 0;
let stringLine = 0;
let lives = 3;
const rules = (`In left cell you see the pointer, which line you must step first. If you jump over line - you die! `)

const table = document.createElement('table');
table.setAttribute('border','0');
table.setAttribute('width','600')
table.setAttribute('height','500')

document.getElementById("welcome").innerHTML = `Welcome to the Squid game, you have ${lives} lives to get up! <div class="small">${rules}</div>`;

function end(document) {
            document.getElementById("welcome").innerHTML = `Unfortunately you died, come in a new life!`;
            const endTable = table.querySelectorAll(`td`);
            endTable.forEach(item => item.removeEventListener(`click`, MouseEvent))
            }

function canNotJump(t) {
    const endTable = table.querySelectorAll(`td`);
    endTable.forEach(item => item.removeEventListener(`click`, MouseEvent))
    document.getElementById("welcome").innerHTML = `You cannot jump through lines or choose past line, you die!`;
    }

function Reload() {document.location.reload(); }

function winner() {
        
            const endTable = table.querySelectorAll(`td`);
            endTable.forEach(item => item.removeEventListener(`click`, MouseEvent))
            document.getElementById("welcome").innerHTML = `Congratulations! You just passed! Glory to Ukraine! Glory to heroes! Death to the damned Muscovites!`;
            for(i=0; i<size; i++)
                {
                    let pointer = 1001 + i;
                    document.getElementById(`${pointer}`).className = (`activeArrow`)
                }
    }

function MouseEventRow(event) 
        {
            stringLine++;
            if (event.path[1].id != stringLine) {canNotJump()};
            if (stringLine === 10 && lives>0) {winner()}

        }

function MouseEvent (event) {

    let $elementCell = document.getElementById(event.target.id)
    const childrens = this.parentNode.childNodes
    childrens.forEach(item => item.removeEventListener(`click`, MouseEvent))
    
    event.path[1].cells[0].className = (`voidArrow`) 
        let pointer = 1000 + stringLine + 2;
        if(document.getElementById(`${pointer}`)) {document.getElementById(`${pointer}`).className = (`activeArrow`)}


    for(i = 1; i < size+1; i++){
        
    if (event.path[1].cells[i].outerHTML.includes(`value="0"`)) {
        event.path[1].cells[i].className = (`pasedCellGray`)
    } else {   event.path[1].cells[i].className = (`pasedCellBlack`)}
        
    }

    document.getElementById(`welcome`).innerHTML = `Welcome to the Squid game, you still have ${lives} lives`;
    if (event.path[0].outerHTML.includes(`value="0"`)) {
       
        event.path[0].className = (`pasedCellGreen`);
         } else {
            lives--;
            document.getElementById(`welcome`).innerHTML = `Welcome to the Squid game, you still have ${lives} lives`;
             event.path[0].className = (`pasedCellRed`)
             if (lives == 0) 
                 {
                     end(document);
                 }
                 
        }

       
    }

for (a=1; a<=size; a++){
    let $row = table.insertRow(0);
    stringLine++;
    $row.addEventListener(`click`, MouseEventRow)
    $row.setAttribute('id', stringLine);
    $row.insertCell(0)
    let $text = document.createTextNode(` `);
    let $cell = $row.insertCell(0);
    $cell.setAttribute('id', 1000+a)
    if (a!==1) {$cell.className = (`voidArrow`)} else {$cell.className = (`activeArrow`)}
    
    
for(j=1; j<=size; j++){
    id++;
    let $value = Math.floor(Math.random() * 2)
    let $text = document.createTextNode(` `);
    let $cell = $row.insertCell(j);
    $cell.setAttribute('value', $value)
    $cell.setAttribute('id', id)
    $cell.className = (`unknownCell`)
    $cell.appendChild($text);
    $cell.addEventListener(`click`, MouseEvent)
}
}

document.getElementById("app").appendChild(table);
stringLine = 0;
document.getElementById(`bottom`).addEventListener(`click`, Reload)
