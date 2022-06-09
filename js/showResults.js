const d = document;
let score = localStorage.getItem('score');

export default function showResults(result, node){
    
    setTimeout(()=>{
        node.insertAdjacentHTML('beforeEnd',
            `<div class="result-group">
                <span class="result-group__text"></span>
                <button class="result-group__button">PLAY AGAIN</button>
            </div>`)

        if(result == 0){
            d.querySelector('.result-group__text').textContent = 'TIE';
        }else if(result == 1){
            
            localStorage.setItem('score', parseInt(parseInt(score) + 1));
            score = (localStorage.getItem('score'));
            d.querySelector('.result-group__text').textContent = 'YOU WIN';
            
            d.querySelector('.score-group__number').textContent = score;
            node.children[0].children[0].classList.add('wrapper--winner');
        }else if(result == -1){
            if((score) - 1 < 0){
                localStorage.setItem('score', 0);
            }else{
            localStorage.setItem('score', parseInt(parseInt(score) - 1));
            }
            score = (localStorage.getItem('score'));
            d.querySelector('.result-group__text').textContent = 'YOU LOSE';
            d.querySelector('.score-group__number').textContent = score;
            node.children[1].children[0].classList.add('wrapper--winner');
        }
        d.querySelector('.options').classList.add('active2');
    },500)
}