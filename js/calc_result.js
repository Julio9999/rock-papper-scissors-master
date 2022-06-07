const d = document;

export default function calc_result(node1, node2,parent) {
    let class1 = node1.children[0].classList[1],
        class2 = node2.children[0].classList[1];

    if ((class1 == 'papper-wrapper' && class2 == 'rock-wrapper') || (class1 == 'rock-wrapper' && class2 == 'scissors-wrapper') || (class1 == 'scissors-wrapper' && class2 == 'papper-wrapper')) {
       return 1;
    } else if ((class1 == 'papper-wrapper' && class2 == 'scissors-wrapper') || (class1 == 'scissors-wrapper' && class2 == 'rock-wrapper') || (class1 == 'rock-wrapper' && class2 == 'papper-wrapper')) {
        
       return -1
    } else {
        return 0;
    }
}