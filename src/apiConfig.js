let apiUrl
const apiUrls = {
  production: '<https://git.heroku.com/mighty-coast-86932.git>',
  development: 'http://localhost:7165/'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
