var displayIssues = function(issues) {

};

var getRepoIssues = function(repo) {
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
    fetch(apiUrl).then(function(response){
        if (response.ok) {
            response.json().then(function(data) {
                displayIssues(data);
                for (var i = 0; i < issues.length; i++) {
                    var issueEl = document.createElement("a");
                    issueEl.classList = "list-item flex-row justify-space-between align-center";
                    issueEl.setAttribute("href", issue[i].html_url)
                    issueEl.setAttribute("target", "_b;ank");
                }
            });
        }
        else {
            alert("There was a problem with your request!");
        }
    });

};

getRepoIssues("facebook/react");
