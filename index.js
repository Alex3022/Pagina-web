(function(){
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburguer');

    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{

                
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu__item--active');


                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;

            });
        });
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{

            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu__item--active');
            }

        });
    }

    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800){
            deleteStyleHeight();
            if(list.classList.contains('menu__links--show'))
                list.classList.remove('menu__links--show');

        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 800){
        addClick();
    }

    menu.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));

})();


function login() {
    const username = document.querySelector('#login-form input[type="text"]').value;
    const password = document.querySelector('#login-form input[type="password"]').value;
  
 
    if (username === 'usuario' && password === 'contraseña') {
      window.open('perfil.html', '_self');
    } else {
      alert('Su usuario o contraseña son incorrectos');
    }
  }
  
  function abrirModal() {
    var modal = document.getElementById('myModal'); 
    modal.style.display = 'inline-block';                                                                                                                        
  }
  
  
  var modal = document.getElementById("myModal");
  
  
  var onclick = document.getElementById("perfil");
  

  var span = document.getElementsByClassName("close")[0];
  
  
  

  span.onclick = function() {
    modal.style.display = "none";
  }
  
 
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  function cambiarColorFondo () {
    body = document.getElementsByTagName('body')[0];
    if( body.style.backgroundColor == 'orange'){
      body.style.backgroundColor = 'white';
    }else {
      body.style.backgroundColor = 'orange';
    }
  }  
  

