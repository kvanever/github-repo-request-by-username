var PublicRepositoriesByUsernameRequest = require('./../js/github-repo-request-by-username-model.js').publicRepositoriesByUsernameRequestModule;

var publicReposNameAndDescription = function(repo) {
  $('#repo-request-return').append("<ul><li>" + repo.name + "</li><li>" + repo.description + "</li></ul>");
};

$(document).ready(function(){
  var publicRepositoriesByUsername = new PublicRepositoriesByUsernameRequest();
  $("#github-username").submit(function(event){
    event.preventDefault();
    var username = ($("#username").val());
    publicRepositoriesByUsername.apiRequest(username, publicReposNameAndDescription);
  });
});
