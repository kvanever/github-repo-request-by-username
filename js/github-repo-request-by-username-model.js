var apiKey = require('./../.env').apiKey;

PublicRepositories = function(){};

PublicRepositories.prototype.repoRequest = function(username, publicReposNameAndDescription) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    for(i = 0; i < response.length; i++){
      publicReposNameAndDescription(response[i]);
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.publicRepositoriesModule = PublicRepositories;
