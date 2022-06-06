const d = document;


export default function options(e, oldchild){

    let $newChild = d.importNode(oldchild),
    $options = d.querySelectorAll('.wrapper');
    $newChild.style.setProperty('background-image', 'none');

    if((e.target.matches('.wrapper, .wrapper *')) && (!d.querySelector('.choosen'))){
        let $node;
        if(e.target.matches('.wrapper')){
            $node = d.importNode(e.target.parentElement, true);
        }else if(e.target.matches('.options__item')){
            $node = d.importNode(e.target.parentElement.parentElement, true);
        }

        console.log($node);
        $node.style.setProperty('grid-column', '1/2');
        d.querySelector('.container').replaceChild($newChild, oldchild);

        $node.classList.add('choosen');
        $newChild.append($node)


        let numero = Math.round(Math.random() * (2));
        $newChild.appendChild($node);
        let node2 = d.importNode($node, true);
        node2.classList.add('vacio');
        node2.style.setProperty('grid-column', '2/3');

        node2.querySelector('.wrapper').classList.add('choosen');
        $newChild.appendChild(node2);


        let $node3 = d.importNode($options[numero], true);

        setTimeout(()=>{
            node2.classList.remove('vacio');
            node2.replaceChild($node3, node2.children[0]);
            $newChild.insertAdjacentHTML('beforeend',
            `<div class="result-container">
            <span class="result"></span>
            <button class="reset">Play Again</button>
            </div>`)
            d.querySelector('.result').textContent = calc_result($newChild.children[0].classList[1],$newChild.children[1].classList[1]);
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
