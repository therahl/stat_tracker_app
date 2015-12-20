(() => {
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

  this.PhotosStore = alt.createStore(PhotosStore, 'PhotosStore');
})();
