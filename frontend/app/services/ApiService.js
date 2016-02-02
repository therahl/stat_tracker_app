
const BASE_URL = 'http://localhost:3000';

class ApiService {

  callApi(url, method, data, cb) {
    $.ajax(`${BASE_URL}/api/${url}`, {
      method: `${method}`,
      headers: {
        Authorization: localStorage.api_token
      },
      data: data
    }).success((response) => {
      console.log('api service: ', response);
      if(cb){
        cb(response);
      }
    }).fail( error => {
      console.log('api error', error);
    });
  }
}

export default new ApiService();
