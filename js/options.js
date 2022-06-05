const d = document;


export default function options(e, oldchild, option, handler){

    let $newChild = d.importNode(oldchild),
    $options = d.querySelectorAll('.options-container__item');
    $newChild.style.setProperty('background-image', 'none');

    if((e.target.matches(`${option} *`))){
        let $node;
        if(e.target.matches('.wrapper')){
            $node = d.importNode(e.target.parentElement, true);
        }else if(e.target.matches('.options__item')){
            $node = d.importNode(e.target.parentElement.parentElement, true);
        }

        $node.removeEventListener('click', handler);
        $node.querySelector('.options__picked').style.setProperty('display', 'inline')
        $node.style.setProperty('grid-column', '1/2')
        let numero = Math.round(Math.random() * (2));
        d.querySelector('.container').replaceChild($newChild, oldchild);
        $newChild.appendChild($node);

        $node = d.importNode($options[numero], true)
        $node.style.setProperty('grid-column', '2/-1')
        $node.querySelector('.options__house').style.setProperty('display', 'inline')
        setTimeout(()=>{
            $newChild.appendChild($node)
            $newChild.insertAdjacentHTML('beforeend',
            `<div class="result-container">
            <span class="result"></span>
            <button class="reset">Play Again</button>
            </div>`)
            d.querySelector('.result').textContent = calc_result($newChild.childNodes[0].classList[1],$newChild.childNodes[1].classList[1]);
        },1000)

        function calc_result(class1,class2){
            if((class1 == 'item1' && class2 == 'item3') ||(class1 == 'item3' && class2 == 'item2') || (class1 == 'item2' && class2 == 'item1')){
                return "YOU WIN"
            }else if((class1 == 'item1' && class2 == 'item2') ||(class1 == 'item2' && class2 == 'item3') || (class1 == 'item3' && class2 == 'item1')){
                return "YOU LOSE"
            }else{
                return "TIE"
            }
        }
    }
}
