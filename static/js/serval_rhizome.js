function reload_files() {
    var url = "http://" + window.location.hostname + ":4110/restful/rhizome/bundlelist.json";
    var username = 'pum';
    var password = 'pum123';
    return $.ajax({
        type: "GET",
        url: url,
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
        }
    });
}

function load_new_files(token) {
    var url = "http://" + window.location.hostname + ":4110/restful/rhizome/newsince/" + token + "/bundlelist.json";
    var username = 'pum';
    var password = 'pum123';
    return $.ajax({
        type: "GET",
        url: url,
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
        }
    });
}

function publish_file(file) {
    var url = "http://" + window.location.hostname + ":4110/restful/rhizome/insert";
    var username = 'pum';
    var password = 'pum123';
    var params = new FormData();
    params.append("manifest", (new Blob([], {type:"rhizome/manifest", format: "text+binarysig"})), file.name);
    params.append("payload", new Blob([file], {}), file.name);
    return $.ajax({
        type: "POST",
        url: url,
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
        },
        contentType: false,
        processData: false,
        cache: false,
        data: params
    });
}

function download_file(file_id, file_name) {
    var username = 'pum';
    var password = 'pum123';
    return $.ajax({
        url: 'http://' + window.location.hostname + ':4110/restful/rhizome/' + file_id + '/decrypted.bin',
        type: 'GET',
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
        }
    });
}

function delete_file(file_hash) {
    return $.ajax({
        type: "POST",
        url: "/delete",
        contentType: "application/json; charset=utf-8",
        data: {
            file_id: file_hash
        }
    });
}
