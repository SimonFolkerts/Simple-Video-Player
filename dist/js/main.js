const el_videoList = $('#video-thumbnails');
var videosArray = [];

// INITIALISE ----------------------------------------------------------------
function init() {
  $.getJSON('json/videos.json', function (data) {
    videosArray = data.videos;
    displayVideos(videosArray);
  });
}

// DISPLAY VIDEOS ----------------------------------------------------------------
function displayVideos(videos) { //takes array of videos, displays in html
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

// FILTERING ----------------------------------------------------------------
function getVideosByTitle(string) {
  string = string.toLowerCase();
  var matches = [];
  for (var i = 0; i < videosArray.length; i++) {
    var videoTitle = videosArray[i].title.toLowerCase();

    if (videoTitle.includes(string)) {
      matches.push(videosArray[i]);
    }
  }
  displayVideos(matches);
}

function addSearchListeners() {
  $('#search-bar__button').on('click', function () {
    var searchString = $('#search-bar__input').val();
    getVideosByTitle(searchString);
  });
  $('#search-bar__input').on('keyup', function (event) {
    if (event.keyCode == 13) {
      var searchString = $(this).val();
      getVideosByTitle(searchString);
    }
  });

}

// RUN ----------------------------------------------------------------
init();
$('#player').hide();
$('#player').click(function () {
  $('#player__frame').attr('src', '');
  $('#player').hide();
});

addSearchListeners();