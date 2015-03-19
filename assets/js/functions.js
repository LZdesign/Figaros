





$( document ).ready(function() {

  
var height = '100vh'

$('header , .about-container').css('height', height);





$(".fancybox").fancybox({
    padding: 0 ,
    margin: 10,
     helpers : {
        title: {
            type: 'inside',
            position: 'top'
        }
    },

              beforeLoad: function() {
            this.title = $(this.element).attr('name');
        }
});

   
  $('.closemenu').css('display', 'none');


  //scrolling page

  $('a[href^="#"]').on('click', function() {

     if(this.hash){
       
       var hash =  this.hash.substr(1);
       var $toElement = $("a[name="+hash+"]");
       var $toPosition= $toElement.position().top;
       $('html , body ').animate({ scrollTop : $toPosition}, 1700);


       }

      });

      if(location.hash){
       
        var hash = location.hash;
       
        window.scroll(0,0);
       
        $("a[href="+hash+"]").click();

      }  

  
    


   //fadeIn blackline and menu icon
   
   function blackline () {


    $('.title').addClass('position-title');

   	 $('.starterbg').delay(3000).animate({opacity : '0', zIndex : '0'}, 1000).addClass('show').queue(function()
     
     {
       $('.wrapper').delay(3000).css('display', 'block');
       if($('.starterbg').hasClass('show')){
         
           $('.title').removeClass('position-title');

       }

    
     });

   	 $('.blackline , .menuicon').delay(3400).animate({opacity: '0.9' }, 2000);
      
     
    
   }
    

   //Navigation menu Container
   
   function navigation () {

      $('.svgmenu , .nav--items  ').click(function(){   
     
             $('.navmenu-container').toggleClass('active'); 
             $('.pagecover').toggleClass('coverup');
             
            
             if($('.navmenu-container').hasClass('active')){
              
              $('body').css('overflow', 'hidden');
              $('.wrapper').css('opacity', '.6');
              $('.closemenu').css('display', 'block');
              $('.menuicon').css('display', 'none');




            

             }else{


              $('body').css('overflow-Y', ' scroll');
              
              $('.wrapper').css('opacity', '1').delay(3000);

               $('.closemenu').css('display', 'none');
              $('.menuicon').delay(2000).css('display', 'block');
             }

      });
 
          }


//open Section Container

function open () {

$('.bg-wrapper').on('click', function() {
  event.preventDefault();
  
  $('.a-about').fadeIn(500);

});
  

}




  //close about container

  function movediv () {

    $('.info , .exit-about').click(function(){

       
      $('.info-container').toggleClass('animateLeft');



    });




    $('.gallery , .exit-portfolio').click(function(){

       
      $('.portfolio-container').toggleClass('animateRight');

    });

   
  }

  $('a[href=#portfolio]').on('click',  function() {
    
    $('.portfolio-container').toggleClass('animateRight');

    });



  // info commissions
  
  


  $('.more-info').on('click', function() {
    
    
    $('.commissions-info')
       .slideToggle(800);

      });


  // form label animation 

  function label () {

   $('.form .input-group input').focusout(function() {
     
     var text_val = $(this).val();

     if(text_val === ""){

     $(this).removeClass('has-value');

     }else{
     $(this).addClass('has-value');

     }



   });


  }






// calling the function

   navigation();
   
   blackline();
   movediv();
   label();
});