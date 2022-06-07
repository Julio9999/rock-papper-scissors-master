import modal from "./modal.js";
import replaceNodes from "./replaceNodes.js";
import reset from "./reset.js";
import calc_result from "./calc_result.js";
import showResults from "./showResults.js";

const d = document,
$oldchild = d.querySelector('.options-container');

d.addEventListener('click', clickHandler);

function clickHandler(e){
    modal(e, '.modal-rules__icon', '.show-modal', '.modal-rules');
    if((e.target.matches('.wrapper, .wrapper *')) && (!d.querySelector('.choosen'))){
        replaceNodes(e, d.querySelector('.options-container'));
        setTimeout(()=>{
            let result = calc_result(d.querySelector('.options-container').children[0], d.querySelector('.options-container').children[1]);
            showResults(result, d.querySelector('.options-container'));
        },600)
    }


    if(e.target.matches('.reset')){
        reset(d.querySelector('.container'), $oldchild, d.querySelector('.container').children[1]);
    }
}

d.addEventListener('DOMContentLoaded', ()=>{
    if(localStorage.getItem('score') == null){
        localStorage.setItem('score', 0);
    }else{
        d.querySelector('.score-group__number').textContent = localStorage.getItem('score');
    }
})