/*$("ul").on("click", "li", function (){
  $(this).toggleClass("newli");
});
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(2000,function(){
      $( this ).remove();
      });
      event.stopPropagation();
  });
$("input[type = 'text']").keypress(function(event){
  if(event.which===13){
    var newTodo =$(this).val().toUpperCase();
    $(this).val("");
  $("ul").append("<li><span class='fas fa-trash-alt'></span>"+ newTodo +" </li>");
  }});
*/
 let v = document.querySelectorAll('li')
 for(var i = 0; i < v.length;i++ ){
v[i].addEventListener('click',  function(){
 this.classList.toggle('newli');
} );}


const fade = document.querySelectorAll('li span');
fade.forEach(function(fades) {
  fades.addEventListener('click', function(fades){
   this.parentElement.remove();
  }  )
});

  let ne = document.querySelector("input")
  ne.addEventListener('keypress',function(event){
  if(event.which===13){
    var newTodo =ne.value.toUpperCase();
    //ne.value("");
  const div = document.querySelector('li');



  div.innerHTML = `
  <li><span class='fas fa-trash-alt'></span> ${newTodo}  </li>
  `;

  document.querySelector('ul').appendChild(div);
}
  });
