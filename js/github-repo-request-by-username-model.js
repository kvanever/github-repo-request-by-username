var apiKey = require('./../.env').apiKey;

var RepoRequest = function(username) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    return response;
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.repoRequestModule = RepoRequest;
