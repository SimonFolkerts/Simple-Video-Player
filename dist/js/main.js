const el_videoList = $('#video-thumbnails');

// INITIALISE ----------------------------------------------------------------
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
  addThumbnailClickListener();
}

function makeVideoHTML(videoObject) {
  return `
    <div class="video" data-id="${videoObject.id}">
      <img src="https://img.youtube.com/vi/${videoObject.id}/mqdefault.jpg" class="video__thumbnail" alt="${videoObject.title}">
      <h3 class="video__title">${videoObject.title}</h3>
      <p class="video__category">${videoObject.category}</p>
    </div>`

}

function addThumbnailClickListener() {
  $('.video').click(function () {
    var videoId = $(this).data('id');
    playVideo(videoId);
  });
}

// VIEW VIDEO ----------------------------------------------------------------

function playVideo(videoId) {
  var videoUrl = "https://www.youtube.com/embed/" + videoId;
  $('#player__frame').attr('src', videoUrl);
  $('#player').show();
}


// RUN ----------------------------------------------------------------
init();
$('#player').hide();
$('#player').click(function() {
  $('#player__frame').attr('src', '');
  $('#player').hide();
});