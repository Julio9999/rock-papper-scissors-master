const d = document;

export default function replaceNodes(e, oldchild) {

    let $newChild = d.importNode(oldchild),
        $options = d.querySelectorAll('.wrapper'),
        number = 0,
        $node1 = '',
        $node2 = '',
        $node3 = '';

    $newChild.style.setProperty('background-image', 'none');

    if (e.target.matches('.wrapper')) {
        $node1 = d.importNode(e.target.parentElement, true);
    } else if (e.target.matches('.wrapper__item')) {
        $node1 = d.importNode(e.target.parentElement.parentElement, true);
    }

    $node2 = d.importNode($node1, true);
    $node2.classList.add('vacio');
    $node2.classList.add('option--choosen');
    $node2.classList.add('option--choosen2');
    $node2.querySelector('.wrapper').classList.add('option--choosen');
    $node2.querySelector('.picked').textContent = 'THE HOUSE PICKED'
    $node2.classList.add('option--choosen');


    $node1.classList.add('option--choosen')
    $node1.classList.add('option--choosen1')
    d.querySelector('.container').replaceChild($newChild, oldchild);
    $node1.querySelector('.picked').textContent = 'YOU PICKED'

    $node1.classList.add('option--choosen');
    $newChild.append($node1)

    number = Math.round(Math.random() * (2));
    $newChild.appendChild($node1);
    
    $newChild.appendChild($node2);

    $node3 = d.importNode($options[number], true);
    $newChild.classList.add('active1');
    setTimeout(() => {
        $node2.classList.remove('vacio');
        $node2.replaceChild($node3, $node2.children[0]);
    }, 500)
}

