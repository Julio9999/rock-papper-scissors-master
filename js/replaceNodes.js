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
   
   //$newChild.append($node1)
   $newChild.appendChild($node1);

   number = Math.round(Math.random() * (2));
   $node2 = d.importNode($options[number], true);
   console.log($node2)

   $node2.classList.add('vacio');
   $node2.classList.add('option--choosen');
   $node2.classList.add('option--choosen2');
   //$node2.querySelector('.wrapper').classList.add('option--choosen');
   $node2.querySelector('.picked').textContent = 'THE HOUSE PICKED'

    

    $newChild.classList.add('active1');
    setTimeout(() => {
        $newChild.appendChild($node2);
        $node2.classList.remove('vacio');
        //$node2.classList.remove($node2.classList[1])
        //$node2.replaceChild($node3, $node2.children[0]);
    }, 500)
}

