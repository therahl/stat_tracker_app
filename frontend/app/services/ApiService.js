
const BASE_URL = 'http://localhost:3000';

class ApiService {

  callApi(url, method, data, cb, options = {}) {

    $.ajax(`${BASE_URL}/api/${url}`, Object.assign({},{
      method: `${method}`,
      headers: {
        Authorization: localStorage.api_token
      },
      data: data }, options)
    ).success((response) => {
      console.log('api service: ', response);
      if(cb){
        cb(response);
      }
    }).fail( error => {
      toastr.error(error.responseJSON['errors']);
      console.log('api error', error);
    });
  }
}

export default new ApiService();
