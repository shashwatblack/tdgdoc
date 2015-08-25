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
