const d = document;

export default function modal(e, icon_close,icon_open, modal){
    let $modal = d.querySelector(modal);

    if(e.target.matches(icon_close) || e.target.matches(`${icon_close} *`) || e.target.matches(icon_open)){
        $modal.classList.toggle('modal-rules-active');
    }
}