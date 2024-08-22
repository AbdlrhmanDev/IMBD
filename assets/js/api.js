

const api_key = 'eb533122ee690cb336a4928e7471854d';

const imageBaseURL = 'https://image.tmdb.org/t/p/';

/**
 * fetch data from a server using the `url` and passes
 * the result in JSON data to a `callback` function,
 * along with an optional parameter if has `optionalParam`.
 */

const fetchDataFromServer =  function (url, callback, optionalParam) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParam))
    
.catch(error => console.error('Error:', error));
    
    
}

export { imageBaseURL, api_key, fetchDataFromServer };



