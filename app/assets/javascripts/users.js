//= require jquery
//= require jquery.justified.min.js

$('#target').justifiedImages({
  images: $('.grid-item img'),
  getSize: (photo) => {
    return {
      width: photo.width,
      height: photo.height
    }
  },
  thumbnailPath: (photo, width, height) => {
    return photo.src
  },
  maxRowHeight: '250px'
})
