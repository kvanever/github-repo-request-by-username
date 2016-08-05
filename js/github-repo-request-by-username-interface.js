var RepoRequest = require('./../js/github-repo-request-by-username-model.js').repoRequestModule;

$(document).ready(function(){

  $("#github-username").submit(function(event){
    event.preventDefault();
    var username = ($("#username").val());
    var repoRequestReturn = RepoRequest(username);
    $('#repo-request-return').text(repoRequestReturn);
  });
});
