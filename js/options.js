const d = document;



export default function options(e, option_container, option){

    let $oldChild = d.querySelector(option_container),
    $newChild = d.importNode($oldChild),
    $options = d.querySelectorAll('.options-container__item');
    $newChild.style.setProperty('background-image', 'none');
    
    console.log($options);

    if(e.target.matches(`${option} *`)){
        let $node;
        if(e.target.matches('.wrapper')){
            $node = d.importNode(e.target.parentElement, true);
        }else if(e.target.matches('.options__item')){
            $node = d.importNode(e.target.parentElement.parentElement, true);
        }
    
        $node.querySelector('.options__picked').style.setProperty('display', 'inline')
        $node.style.setProperty('grid-column', '1/2')
            
    
        let numero = Math.round(Math.random() * (2));
        d.querySelector('.container').replaceChild($newChild, $oldChild);
        $newChild.appendChild($node);
        
            
        $node = d.importNode($options[numero], true)
        $node.style.setProperty('grid-column', '2/-1')
        $node.querySelector('.options__house').style.setProperty('display', 'inline')
        setTimeout(()=>{
            $newChild.appendChild($node)
        },1000)

        

        $newChild.insertAdjacentHTML('afterend', '<span>Hola</span>')
    }
}