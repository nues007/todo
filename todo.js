
const v = document.querySelectorAll('li')
 v.forEach((vs) => {
   vs[i].addEventListener('click',  () =>{
    this.classList.toggle('newli');
} );} )


const delet = document.querySelectorAll('li span');
delet.forEach((delets) => {
  delets.addEventListener('click', (delets) => {
   this.parentElement.remove();
  }  )
});

  let ne = document.querySelector("input")
  ne.addEventListener('keypress',() => {
  if(event.which===13){
    const newTodo = ne.value.toUpperCase();
    const div = document.createElement('li');
    div.innerHTML = `<span class='fas fa-trash-alt'></span>${newTodo} </li>`
  document.querySelector('ul').appendChild(div);
}
  });
  


