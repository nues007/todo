 const inpute = document.querySelector("input")
  inpute.addEventListener('keypress',() => {
  if(event.which===13){
      const newTodo = inpute.value.toUpperCase();
      const newLi= document.createElement('li');
      newLi.innerHTML = `<span class='fas fa-trash-alt'></span>${newTodo} </li>`
    document.querySelector('ul').appendChild(newLi);
}
  });

  
  document.querySelector('input').addEventListener('focus', (event) => {
    event.target.value = ''
  });

  document.querySelector('ul').addEventListener('click', (event) => {
   if (event.target.tagName.toLowerCase() === 'li') {
        event.target.classList.toggle('newli')
  
   };
});
  
  document.querySelector('body').addEventListener('click', (event) => {
     if (event.target.tagName.toLowerCase() === 'span') {
          event.target.parentNode.remove();
     
     };
 });


