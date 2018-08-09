function showPhotos(photos) {
  $('#target-container').empty().justifiedImages({
                  images: photos ,
                  thumbnailPath: function(photo) {
                    return photo.src
                  } ,
                  getSize: function(photo) {
                    return { width: photo.width, height: photo.height };
                  }
                  /*,
                  appendBlocks: function(){
                      return [{
                          rowNum : 1,
                          width : 150,
                          html : '<a href="#">Add Photo</a>'
                      },{
                          rowNum : -1,
                          width : 150,
                          html : '<a href="#">Add Last Photo</a>'
                      }]
                  }*/
              });
}
