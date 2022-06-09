const d = document;

export default function calc_result(node1, node2) {
    let class1 = node1.children[0].classList[1],
        class2 = node2.children[0].classList[1];

    if ((class1 == 'wrapper--papper' && class2 == 'wrapper--rock') || (class1 == 'wrapper--rock' && class2 == 'wrapper--scissors') || (class1 == 'wrapper--scissors' && class2 == 'wrapper--papper')) {
       return 1;
    } else if ((class1 == 'wrapper--papper' && class2 == 'wrapper--scissors') || (class1 == 'wrapper--scissors' && class2 == 'wrapper--rock') || (class1 == 'wrapper--rock' && class2 == 'wrapper--papper')) {
        
       return -1
    } else {
        return 0;
    }
}