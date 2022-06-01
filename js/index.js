import modal from "./modal.js";
import options from "./options.js";

const d = document;

d.addEventListener('click', (e)=>{
    modal(e, '.modal-rules__icon', '.show-modal', '.modal-rules');
    options(e, '.options-container', '.options-container__item')
})