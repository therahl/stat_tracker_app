import alt from '../alt';

const BASE_URL = 'http://localhost:3000';

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
    }
    $.ajax({
      url: `${BASE_URL}/api/photos/photo-box`,
      method: 'GET',
      dataType: 'JSON',
      data: {angle: angle}
    }).success(result => {
      this.dispatch(result);
    }).fail(error => {
      console.log('AJAX FAIL', error);
    });
  }
  photoTable(page){
    $.ajax({
      url: `${BASE_URL}/api/photos/photo-table`,
      method: 'GET',
      dataType: 'JSON',
      data: {page: page}
    }).success(result => {
      this.dispatch(result);
    }).fail(error => {
      console.log('AJAX FAIL', error);
    });
  }
  uploadPhotos(data, callback){
    let self = this;
    $.ajax({
      url: '${BASE_URL}/api/photos',
      method: 'POST',
      dataType: 'JSON',
      processData: false,
      contentType: false,
      data: data
    }).success(result => {
      console.log('success');
      callback();
      PhotoActions.getPhotoBox();
    }).fail(err => {
      console.log(err);
    });
  }
}
export default alt.createActions(PhotoActions);