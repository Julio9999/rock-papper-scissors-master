const d = document;

export default function replaceNodes(e, oldchild) {

    let $newChild = d.importNode(oldchild),
        $options = d.querySelectorAll('.option'),
        number = 0,
        $node1 = '',
        $node2 = '';

    $newChild.style.setProperty('background-image', 'none');

    if (e.target.matches('.wrapper')) {
        $node1 = d.importNode(e.target.parentElement, true);
    } else if (e.target.matches('.wrapper__item')) {
        $node1 = d.importNode(e.target.parentElement.parentElement, true);
    }

   
   $node1.classList.add('option--choosen')
   $node1.classList.add('option--choosen1')
   d.querySelector('.container').replaceChild($newChild, oldchild);
   $node1.querySelector('.picked').textContent = 'YOU PICKED'

   
   
   $newChild.appendChild($node1);

   $node2 = d.importNode($node1, true)
   $node2.classList.add('vacio');
   $node2.classList.add('option--choosen');
   $node2.classList.add('option--choosen2');
   $node2.querySelector('.picked').textContent = 'THE HOUSE PICKED'
   $newChild.appendChild($node2)
   
   
   
   
   $newChild.classList.add('active1');
   setTimeout(() => {
        number = Math.round(Math.random() * (2));
        let $node3 = d.importNode($options[number], true);
        $node3.classList.add('option--choosen');
        $node3.classList.add('option--choosen2');
        $node3.querySelector('.picked').textContent = 'THE HOUSE PICKED'
        $newChild.replaceChild($node3, $node2)
        //$newChild.appendChild($node3);
        //$node3.classList.remove('vacio');
    }, 500)
}

