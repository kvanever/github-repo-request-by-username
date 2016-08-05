var apiKey = require('./../.env').apiKey;

PublicRepositories = function(){};

PublicRepositories.prototype.repoRequest = function(username, publicReposNameAndDescription) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    response.forEach(publicReposNameAndDescription);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.publicRepositoriesModule = PublicRepositories;
