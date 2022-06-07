import modal from "./modal.js";
import options from "./options.js";
import replaceChild from "./replaceNode.js";

const d = document,
$oldchild = d.querySelector('.options-container');
let score = 0;

d.addEventListener('click', clickHandler);

function clickHandler(e){
    modal(e, '.modal-rules__icon', '.show-modal', '.modal-rules');
    options(e, d.querySelector('.options-container'), score);


    if(e.target.matches('.reset')){
        replaceChild(d.querySelector('.container'), $oldchild, d.querySelector('.container').children[1]);
    }
}

d.addEventListener('DOMContentLoaded', ()=>{
    if(localStorage.getItem('score') > 0) {
        console.log(score);
        score = (localStorage.getItem('score'));
        console.log(score);
        d.querySelector('.score-group__number').textContent = score;
    }
})