function addClass(selList, selBurger){
    const list = document.querySelector(selList),
          burger = document.querySelector(selBurger)

    burger.addEventListener('click', function(){
        this.classList.toggle('active')
        list.classList.toggle('active')
    })
}
addClass('.header__nav', '.header__burger')

const icon = document.querySelector('.header__icon img')
icon.addEventListener('click',function(e){
    const list = document.querySelector('.header__list') 
    this.classList.toggle('active')
    if(this.classList.contains('active')){
        list.classList.add('active')
    } else {
        list.classList.remove('active')
    }
})
;
function ibg(){

        let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}

ibg();;