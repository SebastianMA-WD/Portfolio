$(document).ready(function(){

/*MENU SCROLL*/


const header = document.querySelector
('.main-header');

window.addEventListener('scroll',() =>{
    const scrollPos = window.scrollY;
    if(scrollPos >10){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
} );

/*CLOUDS HOVER */


$('#animation_start').hover(function(){
    $('#cloud1').addClass("hover1");
    $('#cloud2').addClass("hover2");
    $('#cloud3').addClass("hover3");

});

});

/*FULLPAGE*/

new fullpage('#fullpage',{

    autoScrolling:true,
    navigation: true,
    

});