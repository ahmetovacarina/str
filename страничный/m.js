// document.addEventListener('DOMContentLoaded', function() {
//     var button = document.createElement('button');
//     button.innerHTML = 'Добавить файл';
//     button.addEventListener('click', function() {
//         var files = document.getElementById('fileInput').files;
//         for (var i = 0; i < files.length; i++) {
//             var file = files[i];
//             if (file.type.indexOf('video') !== -1 || file.type.indexOf('image') !== -1) {
//                 var reader = new FileReader();
//                 reader.onload = function(event) {
//                     if (file.type.indexOf('video') !== -1) {
//                         var video = document.createElement('video');
//                         video.src = event.target.result;
//                         video.addEventListener('ended', function() {
//                             video.pause();
//                         });
//                         video.play();
//                     } else if (file.type.indexOf('image') !== -1) {
//                         var img = document.createElement('img');
//                         img.src = event.target.result;
//                         img.style.display = 'block';
//                         img.style.margin = 'auto';
//                         img.style.width = '50%';
//                         img.style.height = 'auto';
//                         img.style.maxWidth = '500px';
//                         img.style.maxHeight = '300px';
//                         img.style.objectFit = 'cover';
//                         img.style.objectPosition = 'center';
//                         img.style.opacity = 0.8;
//                         img.style.transition = 'opacity 1s ease-in-out';
//                         img.addEventListener('transitionend', function() {
//                             img.style.opacity = 1;
//                         });
//                         img.addEventListener('transitionend', function() {
//                             img.style.opacity = 0.8;
//                             img.style.transition = 'opacity 1s ease-in-out';
//                             img.src = event.target.result;
//                         });
//                     }
//                 };
//                 reader.readAsDataURL(file);
//             }
//         }
//     });
//     document.getElementById('fileInput').addEventListener('change', function() {
//         var files = this.files;
//         for (var i = 0; i < files.length; i++) {
//             var file = files[i];
//             if (file.type.indexOf('video') !== -1 || file.type.indexOf('image') !== -1) {
//                 var reader = new FileReader();
//                 reader.onload = function(event) {
//                     if (file.type.indexOf('video') !== -1) {
//                         var video = document.createElement('video');
//                         video.src = event.target.result;
//                         video.addEventListener('ended', function() {
//                             video.pause();
//                         });
//                         video.play();
//                     } else if (file.type.indexOf('image') !== -1) {
//                         var img = document.createElement('img');
//                         img.src = event.target.result;
//                         img.style.display = 'block';
//                         img.style.margin = 'auto';
//                         img.style.width = '50%';
//                         img.style.height = 'auto';
//                         img.style.maxWidth = '500px';
//                         img.style.maxHeight = '300px';
//                         img.style.objectFit = 'cover';
//                         img.style.objectPosition = 'center';
//                         img.style.opacity = 0.8;
//                         img.style.transition = 'opacity 1s ease-in-out';
//                         img.addEventListener('transitionend', function() {
//                             img.style.opacity = 1;
//                         });
//                         img.addEventListener('transitionend', function() {
//                             img.style.opacity = 0.8;
//                             img.style.transition = 'opacity 1s ease-in-out';
//                             img.src = event.target.result;
//                         });
//                     }
//                 };
//                 reader.read
//             };
//         };
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const player = document.getElementById('player');
    const fileData = localStorage.getItem('tv1');
    
    if (fileData) {
      player.src = fileData;
      player.play();
    }
  });

// Смена положения контента и плеера
  function swapWidgets() {
    var contentContainer = document.querySelector(".content-container");
    var playerContainer = document.querySelector(".player-container");

    if (contentContainer && playerContainer) {
        var contentWidth = contentContainer.style.width;
        var playerWidth = playerContainer.style.width;

        contentContainer.style.width = playerWidth;
        playerContainer.style.width = contentWidth;

        var temp = contentContainer.innerHTML;
        contentContainer.innerHTML = playerContainer.innerHTML;
        playerContainer.innerHTML = temp;
    }
}
setInterval(swapWidgets, 60000); // вызов функции каждую минуту
