function reload_messages(sender, recipient) {
    var username = "peter";
    var password = "venkman";
    return $.ajax({
        type: "GET",
        url: "http://localhost:4110/restful/meshms/" + recipient + "/" + sender + "/messagelist.json",
        dataType: "json",
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
        }
    });
}

function send_message(sender, recipient, message) {
    var username = 'peter';
    var password = 'venkman';
    var url = "http://localhost:4110/restful/meshms/" + sender + "/" + recipient + "/sendmessage";
    var params = new FormData();
    params.append("message", new Blob([message], {type: "text/plain; charset=utf-8"}));

    return $.ajax({
        type: "POST",
        url: url,
        data: params,
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
        },
        contentType: false,
        processData: false
    });
}

