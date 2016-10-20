
        var videoPlayer = document.getElementById("video");
        var source = document.createElement('source');
        var tipo = document.createElement('type');
        source.setAttribute('src', "video/video1.mp4");
        tipo.setAttribute('type', "video/mp4");
        video.appendChild(source);
        video.appendChild(tipo);
        videoPlayer.loop=true;
        videoPlayer.volume = 0.5;
        videoPlayer.ontimeupdate= function(){ eje()};
        
        // contador
        var tiempoActual;
        var m= document.getElementById("minutos");
        var s= document.getElementById("segundos");
        var h= document.getElementById("horas");
        var segundos=0;
        var minutos=0;
        var horas=0;

        function eje(){
            tiempoActual= videoPlayer.currentTime;
                      
            segundos= parseInt(tiempoActual%60);
            minutos= parseInt(Math.floor((tiempoActual/60)%60));
            horas= parseInt(Math.floor((tiempoActual/60)/60));
            
            if (segundos < 10) { segundos = "0"+segundos }
            if (minutos < 10) { minutos = "0"+ minutos }
            if ((horas < 10) && (horas <0) ){ horas = "0"+horas }

           s.innerHTML= segundos;
           m.innerHTML= minutos;
           h.innerHTML= horas+":";
        }
         
     

        videoPlayer.addEventListener('click', function(){
            if(videoPlayer.paused == false){
                videoPlayer.pause();
               
                videoPlayer.firstChild.nodeValue= 'Play';
            }
            else{
                videoPlayer.play();
                       
                videoPlayer.firstChild.nodeValue= 'Pause';
            }
        });

        // Buttons
        var playButton = document.getElementById("play-pause");
        var muteButton = document.getElementById("mute");
        var smallButton = document.getElementById("small");
        var mediumButton = document.getElementById("medium");
        var fullScreenButton = document.getElementById("full-screen");
        var fast= document.getElementById("fast");
        var slow= document.getElementById("slow");
        var normal= document.getElementById("normal");
        var mbaja= document.getElementById("mbaja");
        var baja= document.getElementById("baja");
        var buena= document.getElementById("buena");
        var exc= document.getElementById("excelente");
        var exca= document.getElementById("excelentea");
        var excb= document.getElementById("excelenteb");
        var excc= document.getElementById("excelentec");
        var trans= document.getElementById("trans")
        var texto= document.getElementById("texto");
        var adela= document.getElementById("adela");
        var atras= document.getElementById("atras");
        var repetir= document.getElementById("repetir");
        var cadela= document.getElementById("cadela");
        // Sliders
        var seekBar = document.getElementById("seek-bar");
        var volumeBar = document.getElementById("volume-bar");
        // label
        var conteo= document.getElementById("conteo");
        // cuadro de texto
        var transcripcion = document.getElementById("transcripcion")
        
        // selector
        var sadela= document.getElementById("sadela");
       
        // Event listener for the play/pause button
        playButton.addEventListener("click", function() {
        if (video.paused == true) {
            video.play();
                    
        } else {
            // Pause the video
            video.pause();
                       
        }
        });
       

        // Event listener for the mute button
        muteButton.addEventListener("click", function() {
        if (video.muted == false) {
            // Mute the video
            video.muted = true;

            // Update the button text
            //muteButton.innerHTML = "Unmute";
        } else {
            // Unmute the video
            video.muted = false;

            // Update the button text
           // muteButton.innerHTML = "Mute";
        }
        });

        // Event listener for the full-screen button
        fullScreenButton.addEventListener("click", function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen(); // Firefox
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen(); // Chrome and Safari
        }
        });
        // Event istener for the small button
        smallButton.addEventListener("click", function(){
            video.height="190";
            video.width="180"
        });
         // Event istener for the medium button
         mediumButton.addEventListener("click", function(){
            video.height="380";
            video.width="650";
         });
        // Event listener for the seek bar
        seekBar.addEventListener("change", function() {
        // Calculate the new time
        
        var time = video.duration * (seekBar.value / 100);
        
        // Update the video time
        video.currentTime = time;

        //tiempo
        
        });

        // Update the seek bar as the video plays
        video.addEventListener("timeupdate", function() {
        // Calculate the slider value
        var value = (100 / video.duration) * video.currentTime;
        //tiempo
       
         
        // Update the slider value
        seekBar.value = value;
        });

        // Event listener for the volume bar
        volumeBar.addEventListener("change", function() {
        // Update the video volume
        video.volume = volumeBar.value;
        });

        //Event listener for the video quality

        //Evemt listener for the video speed
        normal.addEventListener("click", function(){
            video.playbackRate= 1;
        });

        slow.addEventListener("click", function(){
          video.playbackRate=0.5;
          });

        fast.addEventListener("click", function(){
           video.playbackRate= 1.5;
        });

        //Event for the quality
        
      
        mbaja.addEventListener("click", function(){
               source.setAttribute('src',"video/144.mp4");
               videoPlayer.appendChild(source);
               video.load();
               video.play();
               return(source);
        });

        baja.addEventListener("click", function(){
                source.setAttribute('src',"video/244.mp4");
               videoPlayer.appendChild(source);
               video.load();
               video.play();
               return(source);
        });
        buena.addEventListener("click", function(){
               source.setAttribute('src',"video/360.mp4");
               videoPlayer.appendChild(source);
               video.load();
               video.play();
               return(source);
        });
        exc.addEventListener("click", function(){
               source.setAttribute('src',"video/480.mp4");
               videoPlayer.appendChild(source);
               video.load();
               video.play();
               return(source);
        });
        exca.addEventListener("click", function(){
               source.setAttribute('src',"video/720.mp4");
               videoPlayer.appendChild(source);
               video.load();
               video.play();
               return(source);
        });
        excb.addEventListener("click", function(){
               source.setAttribute('src',"video/1080.mp4");
               videoPlayer.appendChild(source);
               video.load();
               video.play();
               return(source);
        });
        excc.addEventListener("click", function(){
               source.setAttribute('src',"video/1440.mp4");
               videoPlayer.appendChild(source);
               video.load();
               video.play();
               return(source);
        });
           
        
        // Event for transcription
        
        trans.addEventListener("click", function(){
           var valor= texto.value;
           transcripcion.value= valor;
        });
        
        //Repetir la reproduccion

          repetir.addEventListener("click", function() {
        if (videoPlayer.loop == true) {
            // Play the video
            videoPlayer.loop= false;

            // Update the button text to 'Pause'
            repetir.innerHTML = "Repetir";
        } else {
            // Pause the video
            videoPlayer.loop= true;
            
            // Update the button text to 'Play'
            repetir.innerHTML = "No Repetir";
        }
        });
        
        // Evento para adelantar 
        function setTime(tvalue){
            if(tvalue== 0){
                videoPlayer.currentTime= tvalue;
            }
            else{
                videoPlayer.currentTime += tvalue;
            }

        }
        //configuración adelantar
    
       cadela.addEventListener("click", function(){
           tvalue= sadela.value;
           adela.innerHTML="+" + tvalue;
           atras.innerHTML="-" + tvalue;
       });
        
        adela.addEventListener("click", function(){
            
          setTime(+tvalue);
          
        },false);

        atras.addEventListener("click", function(){
           
          setTime(-tvalue);
        },false);

        // funcion contador
        var minutos2= document.getElementById("minutos2");
        var segundos2= document.getElementById("segundos2");
        var minutes;
        var seconds;
        var i = setInterval(function() {
        	if(videoPlayer.readyState > 0) {
	        	 minutes = parseInt(videoPlayer.duration / 60, 10);
		         seconds = parseInt(videoPlayer.duration % 60);
		        clearInterval(i);
	        }
            if (seconds < 10) { seconds = "0"+seconds }
            if (minutes < 10) { minutes = "0"+minutes }
            minutos2.innerHTML= minutes;
            segundos2.innerHTML= seconds;
            }, 200);
        // subtitulos
        var captions = document.getElementById('captions');
        var off= document.getElementById("off");
        var es= document.getElementById("es");
        off.addEventListener("click", function(){
              for (var j = 0; j < video.textTracks.length; j++) {
         video.textTracks[j].mode = 'hidden';
           }
        });
        es.addEventListener("click", function(){
            for (var i = 0; i < video.textTracks.length; i++) {
             if (video.textTracks[i].id == "subtes") {
            video.textTracks[i].mode = 'showing';
            this.setAttribute('data-state', 'active');
         }
          else {
            video.textTracks[i].mode = 'hidden';
         }
      }
        });
       en.addEventListener("click", function(){
            for (var i = 0; i < video.textTracks.length; i++) {
             if (video.textTracks[i].id == "subten") {
            video.textTracks[i].mode = 'showing';
            this.setAttribute('data-state', 'active');
         }
          else {
            video.textTracks[i].mode = 'hidden';
         }
      }
        });
        
       
            //ooxml

            if(window.XMLHttpRequest){
                xmlhttp= new XMLHttpRequest();
            }

            else{
                xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
            }
            
            xmlhttp.open("GET","subt/word/document.xml", false);
            xmlhttp.send();
            xmlDoc= xmlhttp.responseXML;
            
            var tex;
            for(i=0; i<xmlDoc.getElementsByTagName("w:t").length; i++){
                 
                 var renglonf= xmlDoc.getElementsByTagName("w:t")[i].childNodes[0].nodeValue;
                 tex= tex + renglonf;
                 transcripcion.value= tex;
                 
            }
               
                
            
            

        
    
               
        
   