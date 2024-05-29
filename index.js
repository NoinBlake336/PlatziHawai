var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

const item__one=document.querySelector('#item-one');
const item__two=document.querySelector('#item-two');
const item__three=document.querySelector('#item-three');
const item__four=document.querySelector('#item-four');
const item__five=document.querySelector('#item-four');

function item__oneHover(){
  item__one.onmouseover.addClasslistener('Selected');
}