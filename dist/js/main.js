
var videoArray = [
  {
    videoId: "BtLwoNJ6klE",
    title: "Arduino Basics 101",
    category: "arduino"
  },

  {
    videoId: "YT3birSKLLU",
    title: "Arduino Basics 102",
    category: "arduino"
  }
];



function makeVideoHTML(videoObject) {
  return `
    <div class="video">
      <img src="https://img.youtube.com/vi/${videoObject.videoId}/mqdefault.jpg" class="video__thumbnail" alt="${videoObject.title}">
      <h3 class="video__title">${videoObject.title}</h3>
      <p class="video__category">${videoObject.category}</p>
    </div>`

}


var html = '';

for (var i = 0; i < videoArray.length; i++) {

  html += makeVideoHTML(videoArray[i]);
}

console.log(html);


$('#video-thumbnails').append(html);