const el_videoList = $('#video-thumbnails');

function init() {
  $.getJSON('json/videos.json', function (data) {
    var videosArray = data.videos;
    displayVideos(videosArray);
  });
}


// DISPLAY VIDEOS ----------------------------------------------------------------
function displayVideos(videos) {
  var html = '';
  for (var i = 0; i < videos.length; i++) {
    html += makeVideoHTML(videos[i]);
  }
  el_videoList.html(html);
}

function makeVideoHTML(videoObject) {
  return `
    <div class="video">
      <img src="https://img.youtube.com/vi/${videoObject.id}/mqdefault.jpg" class="video__thumbnail" alt="${videoObject.title}">
      <h3 class="video__title">${videoObject.title}</h3>
      <p class="video__category">${videoObject.category}</p>
    </div>`

}


// RUN ----------------------------------------------------------------
init();