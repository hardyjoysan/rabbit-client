import axios from 'axios';

export function fetchLists(page = 1, keyword = null) {
	return dispatch => {
    var url = 'http://localhost:8000/api/files/'+page
    if (keyword) {
      url = 'http://localhost:8000/api/files/'+page+'/'+keyword;
    }

    return axios.get(url)
    .then(function (response) {

      dispatch(fetchSuccess(response.data));
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })

	};
}

export const fetchSuccess = (data) => ({
	type: "FETCH_LIST_SUCCESS",
	payload: { data }
});
