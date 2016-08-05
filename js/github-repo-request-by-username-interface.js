var PublicRepositoriesByUsernameRequest = require('./../js/github-repo-request-by-username-model.js').publicRepositoriesByUsernameRequestModule;

var publicRepositoriesNameAndDescription = function(repository) {

  if (repository.description === null || repository.description === "") {
    var unwrappedRepositoryDescription = "No Description Provided";
  } else {
    var unwrappedRepositoryDescription = repository.description;
  }

  $('#repository-request-return table tbody').append("<tr><td>" + repository.name + "</td><td>" + unwrappedRepositoryDescription + "</td></tr>");
};

$(document).ready(function(){
  var publicRepositoriesByUsername = new PublicRepositoriesByUsernameRequest();
  $("#github-username").submit(function(event){
    event.preventDefault();
    var username = ($("#username").val());
    publicRepositoriesByUsername.apiRequest(username, publicRepositoriesNameAndDescription);
  });
});
