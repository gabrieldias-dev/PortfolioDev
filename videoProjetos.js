let videos = document.querySelectorAll(".videoProjetos");
let camadaSobrepostas = document.querySelectorAll(".camadaSobreposta");



videos.forEach(function (video, index) {

    var camadaSobreposta = camadaSobrepostas[index];
  
   video.addEventListener("mouseover", function() {
    
    
    video.play();
     camadaSobreposta.style.opacity = "0";
  });

  video.addEventListener("mouseout", function() {
   
    video.currentTime = 0;
    video.pause();
    camadaSobreposta.style.opacity = "1";
  });
});

