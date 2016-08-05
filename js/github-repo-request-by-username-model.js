var apiKey = require('./../.env').apiKey;

PublicRepositoriesByUsernameRequest = function(){};

PublicRepositoriesByUsernameRequest.prototype.apiRequest = function(username, repositoryDisplayFunction) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    response.forEach(repositoryDisplayFunction);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.publicRepositoriesByUsernameRequestModule = PublicRepositoriesByUsernameRequest;
