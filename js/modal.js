const d = document,
w = window;

export default function modal(e, icon_close,icon_open, modal){
    let $modal = d.querySelector(modal);
    if(e.target.matches(icon_open)){
        $modal.classList.toggle('active');
        if(d.documentElement.clientWidth < 1000){
            w.scrollTo(0,0);
            w.addEventListener('scroll',scrolloff);
        }
    }else if(e.target.matches(icon_close) || e.target.matches(`${icon_close} *`) ){
        $modal.classList.remove('active');
        if(d.documentElement.clientWidth < 1000){
            w.removeEventListener('scroll',scrolloff);
        }
    }
}

function scrolloff(){
    w.scrollTo(0,0);
}
