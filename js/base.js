window.onload = function(){
    var hash = (window.location.hash).replace('#', '');
    if (hash == "report") {
        loadReport();
    } else if (hash == "documentation") {
    	loadDocumentation();
    } else if (hash == "members") {
    	// loadMembers();
    } else {
    	// load home
    }
}

function loadDocumentation() {
    var client = new XMLHttpRequest();
    client.open('GET', '/documentation.tmpl.html');

    client.onload = function() {
        data = client.responseText;
        var contentdiv = document.getElementById('content');
        contentdiv.innerHTML = data;
    }

    client.send();
}

function loadReport() {
    var client = new XMLHttpRequest();
    client.open('GET', '/report.tmpl.html');

    client.onload = function() {
        data = client.responseText;
        var contentdiv = document.getElementById('content');
        contentdiv.innerHTML = data;
    }

    client.send();
}
