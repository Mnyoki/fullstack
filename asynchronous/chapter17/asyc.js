let params = "url=127.0.0.1:5500";
let request = new asyncRequest();

request.open("POST", "urlpost.php", true);
request.setRequestHeader("Content-type",
    "application/x-www-form-urlencoded");
request.setRequestHeader("Content-length", params.length);
request.setRequestHeader("connection", "close");

request.onreadystatechange = function () {
    if (this.readyState == 4) {
        if (this.status == 200) {
            if (this.responseText != null) {
                document.getElementById('info').innerHTML = this.responseText;
            }
            else alert("Communication error: No data received!");
        }

        else alert("Communicationerror: " + this.statusText);
    }

}

request.send(params);

function asyncRequest() {
    try {
        var request = new XMLHttpRequest();
    }
    catch (e1) {
        try {
            requst = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e2) {
            try {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e3) {
                request = false;
            }
        }
    }

    return request;
}
