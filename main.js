$(document).ready(function(){
    console.log("Ready!");
function handleArrowKeys(evt){
  evt = (evt) ? evt : ((window.event) ? evt : null);
  if (evt){
      console.log("detected " + evt.keyCode);
      switch (evt.keyCode) {
      case 37:
          goPrevious();
          break;
      case 39:
          goNext();
          break;
      }
      
  }
}
  document.onkeyup = handleArrowKeys;
});
