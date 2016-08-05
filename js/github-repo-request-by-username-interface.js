var PublicRepositories = require('./../js/github-repo-request-by-username-model.js').publicRepositoriesModule;

var publicReposNameAndDescription = function(repo) {
  $('#repo-request-return').append("<ul><li>" + repo.name + "</li><li>" + repo.description + "</li></ul>");
};

$(document).ready(function(){
  var publicRepositories = new PublicRepositories();
  $("#github-username").submit(function(event){
    event.preventDefault();
    var username = ($("#username").val());
    publicRepositories.repoRequest(username, publicReposNameAndDescription);
  });
});
