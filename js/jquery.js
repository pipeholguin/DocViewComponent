 $(document).ready(function(){

           

         $('#play-pause').click(cambiarClasepp);
          $('#video').click(cambiarClasepp);
           $('#mute').click(cambiarClasem);

         function cambiarClasepp(){
           
        if($('#play-pause').attr('class')== "icon-controller-play"){
             $('#play-pause').removeClass('icon-controller-play');
             $('#play-pause').addClass('icon-controller-paus');
           }
           else{
             $('#play-pause').removeClass('icon-controller-paus');
             $('#play-pause').addClass('icon-controller-play');
           }
         }
        // var cambio= $('#play-pause').attr('class','icon-controller-paus');
          function cambiarClasem(){
           
        if($('#mute').attr('class')== "icon-sound"){
             $('#mute').removeClass('icon-sound');
             $('#mute').addClass('icon-sound-mute');
           }
           else{
             $('#mute').removeClass('icon-sound-mute');
             $('#mute').addClass('icon-sound');
           }
         }
       });