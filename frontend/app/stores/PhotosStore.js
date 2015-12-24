import alt from '../alt';
import PhotoActions from '../actions/PhotoActions';

class PhotosStore {
  constructor() {
    this.bindListeners({
      getPhotoBox: PhotoActions.getPhotoBox,
      uploadPhotos: PhotoActions.uploadPhotos,
      photoTable: PhotoActions.photoTable,
    });
  }
  getPhotoBox(resp){
    this.setState({...resp});
  }
  uploadPhotos(resp) {
    this.setState({...resp});
  }
  photoTable(resp){
    this.setState({...resp});
  }
}

export default alt.createStore(PhotosStore);
