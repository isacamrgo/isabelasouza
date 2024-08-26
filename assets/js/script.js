//faz o menu aparecer apos clicar no hamburguer
document.querySelector('.menu-opener')
 .addEventListener('click', ()=>{
   let nav=document.querySelector('header nav');
   nav.classList.toggle('opened');
});
//faz o slider dos testemunhos
const toggleSlider = () =>{
  //pega os slides da tela
  let current = document.querySelectorAll('input[name=slider]');
  if (slides.length==0) return;
  //verifica qual esta marcado. Caso nenhum, marca primeiro
  let current = document.querySelector('input[name=slider]:checked');
  if (!current){
      current.querySelector('input[name=slider]');
      current.setAttribute('checked',true);
   }
   //pega o slider e muda o string para inteiro
   let id = parseInt(current.getAttribute('id').split('-')[1]);
   if(id+1 <=slides.length){
      id++;
   }else{
    id=1;
   }


//pega o slide atual marca e desmarca, alterando entre eles
  for(let slider of slides){
    slider.removeAttribute('checked');
  }
  document.querySelector(`#slider-${id}`).setAttribute('checked', true);
}
setInterval(toggleSlider, 5000);