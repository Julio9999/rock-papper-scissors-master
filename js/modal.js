const d = document,
w = window;

export default function modal(e, icon_close,icon_open, modal){
    let $modal = d.querySelector(modal);
    if(e.target.matches(icon_open)){
        $modal.classList.add('active');
        w.scrollTo(0,0);
        w.addEventListener('scroll',scrolloff);
    }else if(e.target.matches(icon_close) || e.target.matches(`${icon_close} *`) ){
        $modal.classList.remove('active');
        w.removeEventListener('scroll',scrolloff);
    }
}

function scrolloff(){
    w.scrollTo(0,0);
}
