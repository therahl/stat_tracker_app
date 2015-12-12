(() => {
  class PhotoActions {
    getPhotoBox(current, direction){
      let angles = ['front', 'back', 'side', 'other'];
      let angle = '';
      let index = angles.indexOf(current)
      switch(direction){
        case 'prev':
          if(index === 0){
            index = angles.length;
          }
          angle = angles[index - 1];
          break;
        case 'next':
          if(index === angles.length - 1){
            index = -1;
          }
          angle = angles[index + 1];
          break;
        default:
          console.log('wtf how did you get here??');
      }
      $.ajax({
        url: `/photos/photo-box`,
        method: 'GET',
        dataType: 'JSON',
        data: {angle: angle}
      }).success(result => {
        this.dispatch(result);
      }).fail(error => {
        console.log('AJAX FAIL', error);
      });
    }
    uploadPhotos(id, settings){
      // $.ajax({
      //   url: `/settings/${id}`,
      //   method: 'PUT',
      //   dataType: 'JSON',
      //   data: { settings: settings }
      // }).success(result => {
      //   this.dispatch(result);
      // }).fail(error => {
      //   console.log('AJAX FAIL', error);
      // });
    }
  }
  this.PhotoActions = alt.createActions(PhotoActions);
})();
