import modal from "./modal.js";
import options from "./options.js";
import replaceChild from "./replaceNode.js";

const d = document,
$oldchild = d.querySelector('.options-container');

d.addEventListener('click', clickHandler);

function clickHandler(e){
    modal(e, '.modal-rules__icon', '.show-modal', '.modal-rules');    
    options(e, d.querySelector('.options-container'), '.options-container__item');

    if(e.target.matches('.reset')){
        replaceChild(d.querySelector('.container'), $oldchild, d.querySelector('.container').children[1]);
    }
}