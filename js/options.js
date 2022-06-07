import calc_result from "./calc_result.js";
import showResults from "./showResults.js";

const d = document;

export default function options(e, oldchild, score){

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
            let result = calc_result($newChild.children[0],$newChild.children[1]);
            showResults(result, $newChild, score);
        },500)
    }
}
