const d = document;
let score = localStorage.getItem('score');

export default function showResults(result, node){
    
    setTimeout(()=>{
        node.insertAdjacentHTML('beforeEnd',
            `<div class="result-container">
                <span class="result"></span>
                <button class="reset">PLAY AGAIN</button>
            </div>`)

        if(result == 0){
            d.querySelector('.result').textContent = 'TIE';
        }else if(result == 1){
            
            localStorage.setItem('score', parseInt(parseInt(score) + 1));
            score = (localStorage.getItem('score'));
            d.querySelector('.result').textContent = 'YOU WIN';
            
            d.querySelector('.score-group__number').textContent = score;
            node.children[0].children[0].classList.add('winner');
        }else if(result == -1){
            if((score) - 1 < 0){
                localStorage.setItem('score', 0);
            }else{
            localStorage.setItem('score', parseInt(parseInt(score) - 1));
            }
            score = (localStorage.getItem('score'));
            d.querySelector('.result').textContent = 'YOU LOSE';
            d.querySelector('.score-group__number').textContent = score;
            node.children[1].children[0].classList.add('winner');
        }
    },500)
}