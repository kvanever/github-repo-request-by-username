var apiKey = require('./../.env').apiKey;

PublicRepositories = function(){};

PublicRepositories.prototype.repoRequest = function(username, repoDisplayFunction) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    response.forEach(repoDisplayFunction);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.publicRepositoriesModule = PublicRepositories;
