const d = document;



export default function options(e, option){

    let $oldChild = d.querySelector(option),
    $newChild = d.importNode($oldChild),
    $options = d.querySelectorAll('.wrapper');
    $newChild.style.setProperty('background-image', 'none');

    console.log($options);

    if(e.target.matches(`${option} *`)){
        let $node;
        if(e.target.matches('.options__item')){
            $node = d.importNode(e.target.parentElement, true);
        }else{
            $node = d.importNode(e.target, true);
        }

        $node.style.setProperty('grid-column', '1/2')
        $newChild.appendChild($node);

        let numero = Math.round(Math.random() * (2));
        d.querySelector('.container').replaceChild($newChild, $oldChild);
        $node = d.importNode($options[numero], true)
        $node.style.setProperty('grid-column', '2/-1')
        setTimeout(()=>{
            $newChild.appendChild($node)
        },1000)
    }

}