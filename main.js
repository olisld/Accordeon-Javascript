const accordions = Array.from(document.querySelectorAll(".accordion")); 
accordions.map((accordion) => {
  accordion.addEventListener('click',function(){
    accordion.classList.toggle('active');
    if(accordion.classList.contains('active')){
     accordion.nextElementSibling.style.display = 'block';
    }
    else{
      accordion.nextElementSibling.style.display = 'none';
    }
  })
  // Code
});
