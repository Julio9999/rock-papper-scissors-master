import modal from "./modal.js";
import replaceNodes from "./replaceNodes.js";
import reset from "./reset.js";
import calc_result from "./calc_result.js";
import showResults from "./showResults.js";

const d = document,
$oldchild = d.querySelector('.options');

d.addEventListener('click', clickHandler);

function clickHandler(e){
    modal(e, '.modal-group__icon', '.show-modal', '.modal-group');
    if((e.target.matches('.wrapper, .wrapper *')) && (!d.querySelector('.option--choosen'))){
        replaceNodes(e, d.querySelector('.options'));
        setTimeout(()=>{
            let result = calc_result(d.querySelector('.options').children[0], d.querySelector('.options').children[1]);
            showResults(result, d.querySelector('.options'));
        },600)
    }


    if(e.target.matches('.result-group__button')){
        reset(d.querySelector('.container'), $oldchild, d.querySelector('.container').children[1]);
    }
}

d.addEventListener('DOMContentLoaded', ()=>{
    scroll();
    console.log(d.documentElement.clientWidth)
    if(localStorage.getItem('score') == null){
        localStorage.setItem('score', 0);
    }else{
        d.querySelector('.score-group__number').textContent = localStorage.getItem('score');
    }
})

