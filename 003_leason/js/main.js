//mocup
const list  = [
    `item 1`,
    `item 2`,
    `item 4`,
    `item 5`,
    `item 6`,
    `item 7`,
    `item 8`,
    `item 9`,
    `item 10`
        
]

//mocup end

const $ul = document.querySelector(`ul#list`)

const removeItem = ($el) => {
    $ul.removeChild($el);
};


const addItem = item => {

    const $li = document.createElement(`li`);
    $li.innerText = item;
    $li.addEventListener(`click`, (event) => {
        removeItem(event.target)
        //console.log(event.target)
    })
    $ul.appendChild($li);


};



list.forEach ((el, index) => {

    //render
    addItem(el);
    addItem(`asdflksdflkjdfg`);    

});

const $form = document.querySelector(`form#form_001`)
const $input = $form.querySelector(`input[name="user_name"]`)

$form.addEventListener(`submit`, (event) => {
    
    event.preventDefault();
    addItem($input.value);
    $input.value = ``;

});

addItem(`ITEMMMM`);